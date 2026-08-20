import { spawn } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';

const root = 'C:/xampp/htdocs/asdm-new-web';
const out = path.join(root, 'docs/homepage/screenshots/hero-v1');
const base = 'http://127.0.0.1:4321/homepage-preview/';
const chromePath = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const debugPort = 9224;

await fs.mkdir(out, { recursive: true });

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const preview = spawn(
  'cmd.exe',
  ['/d', '/s', '/c', 'npm.cmd run preview -- --host 127.0.0.1 --port 4321'],
  {
    cwd: root,
    stdio: 'ignore',
    windowsHide: true,
  }
);

let chrome;
let seq = 0;

const send = (ws, method, params = {}) =>
  new Promise((resolve, reject) => {
    const id = ++seq;
    const onMessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id === id) {
        ws.removeEventListener('message', onMessage);
        if (msg.error) reject(new Error(JSON.stringify(msg.error)));
        else resolve(msg.result || {});
      }
    };
    ws.addEventListener('message', onMessage);
    ws.send(JSON.stringify({ id, method, params }));
  });

async function newTab(url = base) {
  const res = await fetch(
    `http://127.0.0.1:${debugPort}/json/new?${encodeURIComponent(url)}`,
    {
      method: 'PUT',
    }
  );
  return res.json();
}

async function connect() {
  const tab = await newTab();
  const ws = new WebSocket(tab.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    ws.addEventListener('open', resolve, { once: true });
    ws.addEventListener('error', reject, { once: true });
  });
  await send(ws, 'Page.enable');
  await send(ws, 'Runtime.enable');
  await send(ws, 'DOM.enable');
  await send(ws, 'CSS.enable');
  return ws;
}

async function setViewport(ws, width, height, mobile = false) {
  await send(ws, 'Emulation.setDeviceMetricsOverride', {
    width,
    height,
    deviceScaleFactor: 1,
    mobile,
  });
}

async function navigate(ws, url = base) {
  await send(ws, 'Page.navigate', { url });
  await wait(900);
  await send(ws, 'Runtime.evaluate', {
    expression: 'document.fonts ? document.fonts.ready.then(() => true) : true',
    awaitPromise: true,
  });
}

async function capture(ws, name) {
  const shot = await send(ws, 'Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: false,
  });
  await fs.writeFile(path.join(out, name), Buffer.from(shot.data, 'base64'));
}

async function forceHoverPrimaryCTA(ws) {
  const rootNode = await send(ws, 'DOM.getDocument');
  const button = await send(ws, 'DOM.querySelector', {
    nodeId: rootNode.root.nodeId,
    selector: '.homepage-hero .btn-primary',
  });
  if (button.nodeId) {
    await send(ws, 'CSS.forcePseudoState', {
      nodeId: button.nodeId,
      forcedPseudoClasses: ['hover'],
    });
  }
}

async function focusSecondaryCTA(ws) {
  await send(ws, 'Runtime.evaluate', {
    expression:
      'document.querySelector(".homepage-hero .hero-secondary-cta")?.focus();',
  });
  await wait(200);
}

async function overflowStatus(ws) {
  const result = await send(ws, 'Runtime.evaluate', {
    expression: `({
      width: window.innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      h1Count: document.querySelectorAll('h1').length,
      noindex: Boolean(document.querySelector('meta[name="robots"][content*="noindex"]')),
      heroImages: [...document.querySelectorAll('.homepage-hero img')].map((img) => ({
        src: img.getAttribute('src'),
        loading: img.getAttribute('loading'),
        fetchpriority: img.getAttribute('fetchpriority'),
        width: img.getAttribute('width'),
        height: img.getAttribute('height')
      }))
    })`,
    returnByValue: true,
  });
  return result.result.value;
}

try {
  await wait(4000);
  chrome = spawn(
    chromePath,
    [
      '--headless=new',
      `--remote-debugging-port=${debugPort}`,
      `--user-data-dir=${path.join(process.env.TEMP || 'C:/tmp', 'asdm-hero-v1-chrome')}`,
      '--disable-gpu',
      'about:blank',
    ],
    { stdio: 'ignore', windowsHide: true }
  );
  await wait(3000);

  const ws = await connect();
  const checks = [];

  for (const [width, height, mobile, name] of [
    [1440, 1000, false, 'hero-desktop-1440.png'],
    [1280, 900, false, 'hero-desktop-1280.png'],
    [1024, 768, false, null],
    [768, 1024, true, 'hero-tablet-768.png'],
    [390, 844, true, 'hero-mobile-390.png'],
    [375, 812, true, null],
    [320, 700, true, 'hero-mobile-320.png'],
  ]) {
    await setViewport(ws, width, height, mobile);
    await navigate(ws, `${base}?w=${width}`);
    checks.push(await overflowStatus(ws));
    if (name) await capture(ws, name);
  }

  await setViewport(ws, 1440, 1000);
  await navigate(ws, `${base}?capture=composition`);
  await capture(ws, 'hero-header-composition.png');
  await forceHoverPrimaryCTA(ws);
  await capture(ws, 'hero-cta-states.png');
  await focusSecondaryCTA(ws);
  await capture(ws, 'hero-focus-state.png');

  ws.close();

  await fs.writeFile(
    path.join(out, 'hero-v1-viewport-checks.json'),
    `${JSON.stringify(checks, null, 2)}\n`
  );
} finally {
  chrome?.kill();
  preview.kill();
}

const files = await fs.readdir(out);
for (const file of files.sort()) {
  const stat = await fs.stat(path.join(out, file));
  console.log(`${file}\t${stat.size}`);
}

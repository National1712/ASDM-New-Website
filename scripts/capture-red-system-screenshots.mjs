import { spawn } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';

const root = 'C:/xampp/htdocs/asdm-new-web';
const out = path.join(root, 'docs/design/screenshots/red-system');
const base = 'http://127.0.0.1:4321/design-system/';
const chromePath = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

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

async function newTab() {
  const res = await fetch(
    `http://127.0.0.1:9222/json/new?${encodeURIComponent(base)}`,
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

async function navigate(ws) {
  await send(ws, 'Page.navigate', { url: base });
  await wait(900);
  await send(ws, 'Runtime.evaluate', {
    expression: 'document.fonts ? document.fonts.ready.then(() => true) : true',
    awaitPromise: true,
  });
}

async function scrollTo(ws, selector) {
  await send(ws, 'Runtime.evaluate', {
    expression: `document.querySelector(${JSON.stringify(selector)})?.scrollIntoView({ block: 'center' });`,
  });
  await wait(250);
}

async function capture(ws, name, fullPage = false, selector = null) {
  const params = { format: 'png', captureBeyondViewport: fullPage };
  if (selector) {
    const result = await send(ws, 'Runtime.evaluate', {
      expression: `(() => {
        const el = document.querySelector(${JSON.stringify(selector)});
        const r = el.getBoundingClientRect();
        return {
          x: Math.max(0, r.x),
          y: Math.max(0, r.y),
          width: Math.max(1, r.width),
          height: Math.max(1, r.height),
          scale: 1
        };
      })()`,
      returnByValue: true,
    });
    params.clip = result.result.value;
  }
  const shot = await send(ws, 'Page.captureScreenshot', params);
  await fs.writeFile(path.join(out, name), Buffer.from(shot.data, 'base64'));
}

try {
  await wait(4000);
  chrome = spawn(
    chromePath,
    [
      '--headless=new',
      '--remote-debugging-port=9222',
      `--user-data-dir=${path.join(process.env.TEMP || 'C:/tmp', 'asdm-red-system-chrome')}`,
      '--disable-gpu',
      'about:blank',
    ],
    { stdio: 'ignore', windowsHide: true }
  );
  await wait(3000);

  const ws = await connect();
  await setViewport(ws, 1440, 1100);
  await navigate(ws);
  await capture(ws, 'design-system-red-desktop.png', true);
  await capture(ws, 'header-red-desktop.png');
  await scrollTo(ws, '.site-footer');
  await capture(ws, 'footer-red-desktop.png');
  await scrollTo(ws, 'h3');
  await capture(ws, 'buttons-red-system.png');
  await scrollTo(ws, '.theme-dark.showcase-surface');
  await capture(ws, 'dark-surface-red-system.png');
  await send(ws, 'Runtime.evaluate', { expression: 'window.scrollTo(0, 0)' });
  await capture(ws, 'logo-header-corrected.png');
  await scrollTo(ws, '.site-footer');
  await capture(ws, 'logo-footer-corrected.png');

  await setViewport(ws, 390, 900, true);
  await navigate(ws);
  await capture(ws, 'design-system-red-mobile.png', true);
  await send(ws, 'Runtime.evaluate', {
    expression: 'document.querySelector(".mobile-menu-trigger")?.click();',
  });
  await wait(350);
  await capture(ws, 'header-red-mobile-open.png', false);
  await scrollTo(ws, '.site-footer');
  await capture(ws, 'footer-red-mobile.png');
  ws.close();
} finally {
  chrome?.kill();
  preview.kill();
}

const files = await fs.readdir(out);
for (const file of files.sort()) {
  const stat = await fs.stat(path.join(out, file));
  console.log(`${file}\t${stat.size}`);
}

import { spawn } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';

const root = 'C:/xampp/htdocs/asdm-new-web';
const out = path.join(root, 'docs/design/screenshots/final-logo');
const base = 'http://127.0.0.1:4321/design-system/';
const chromePath = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const debugPort = 9223;

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
    `http://127.0.0.1:${debugPort}/json/new?${encodeURIComponent(base)}`,
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

try {
  await wait(4000);
  chrome = spawn(
    chromePath,
    [
      '--headless=new',
      `--remote-debugging-port=${debugPort}`,
      `--user-data-dir=${path.join(process.env.TEMP || 'C:/tmp', 'asdm-final-logo-chrome')}`,
      '--disable-gpu',
      'about:blank',
    ],
    { stdio: 'ignore', windowsHide: true }
  );
  await wait(3000);

  const ws = await connect();

  await setViewport(ws, 1440, 960);
  await navigate(ws);
  await capture(ws, 'header-final-logo-desktop.png');
  await navigate(ws, `${base}?capture=footer-desktop#site-footer`);
  await capture(ws, 'footer-final-logo-desktop.png');
  await navigate(ws, `${base}?capture=logo#logo-usage`);
  await capture(ws, 'logo-system-preview.png');

  await setViewport(ws, 390, 900, true);
  await navigate(ws);
  await capture(ws, 'header-final-logo-mobile.png');
  await navigate(ws, `${base}?capture=footer-mobile#site-footer`);
  await capture(ws, 'footer-final-logo-mobile.png');

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

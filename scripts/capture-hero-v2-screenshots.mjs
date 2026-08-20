import { spawn } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';

const root = 'C:/xampp/htdocs/asdm-new-web';
const out = path.join(root, 'docs/homepage/screenshots/hero-v2');
const base = 'http://127.0.0.1:4321/homepage-preview/';
const chromePath = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const debugPort = 9226;

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

async function capture(ws, name, clip) {
  const shot = await send(ws, 'Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: false,
    ...(clip ? { clip } : {}),
  });
  await fs.writeFile(path.join(out, name), Buffer.from(shot.data, 'base64'));
}

async function getClip(ws, selector, padding = 24) {
  const result = await send(ws, 'Runtime.evaluate', {
    expression: `(() => {
      const el = document.querySelector(${JSON.stringify(selector)});
      if (!el) return null;
      const rect = el.getBoundingClientRect();
      return {
        x: Math.max(0, rect.left - ${padding}),
        y: Math.max(0, rect.top - ${padding}),
        width: Math.min(window.innerWidth, rect.width + ${padding * 2}),
        height: Math.min(window.innerHeight, rect.height + ${padding * 2}),
        scale: 1
      };
    })()`,
    returnByValue: true,
  });
  return result.result.value;
}

async function viewportStatus(ws) {
  const result = await send(ws, 'Runtime.evaluate', {
    expression: `(() => {
      const hero = document.querySelector('.homepage-hero');
      const h1 = document.querySelector('.homepage-hero h1');
      const primary = [...document.querySelectorAll('.homepage-hero a')].find((link) =>
        link.textContent?.trim() === 'Explore the Program'
      );
      const footer = document.querySelector('footer');
      const h1Style = h1 ? getComputedStyle(h1) : null;
      const h1Lines = h1
        ? Math.round(h1.getBoundingClientRect().height / parseFloat(h1Style.lineHeight))
        : 0;
      const heroText = hero?.textContent || '';
      const html = document.documentElement.outerHTML;
      return {
        width: window.innerWidth,
        height: window.innerHeight,
        scrollWidth: document.documentElement.scrollWidth,
        h1Count: document.querySelectorAll('h1').length,
        h1Text: h1?.textContent?.trim() || '',
        h1Lines,
        h1FontSize: h1Style?.fontSize || null,
        h1LineHeight: h1Style?.lineHeight || null,
        h1LetterSpacing: h1Style?.letterSpacing || null,
        heroGridColumns: hero ? getComputedStyle(document.querySelector('.hero-grid')).gridTemplateColumns : null,
        ctaVisible: primary ? primary.getBoundingClientRect().bottom <= window.innerHeight : false,
        trustLineVisible: [...document.querySelectorAll('.homepage-hero li')].every((item) =>
          item.getBoundingClientRect().bottom <= window.innerHeight
        ),
        footerInFirstViewport: footer ? footer.getBoundingClientRect().top < window.innerHeight : false,
        noindex: Boolean(document.querySelector('meta[name="robots"][content*="noindex"]')),
        heroImages: [...document.querySelectorAll('.homepage-hero img')].map((img) => img.getAttribute('src')),
        bjpUsed: html.includes('BJP-&-ABVP-Internship-1.webp'),
        finalPhotoUsed: Boolean(document.querySelector('.homepage-hero img')),
        placeholderLabel: heroText.includes('Final ASDM Hero Artwork'),
        placeholderNote: heroText.includes('Graphic designer asset pending'),
        extraSectionsDetected: html.includes('Trust Strip') || html.includes('Course Snapshot')
      };
    })()`,
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
      `--user-data-dir=${path.join(process.env.TEMP || 'C:/tmp', 'asdm-hero-v2-chrome')}`,
      '--disable-gpu',
      'about:blank',
    ],
    { stdio: 'ignore', windowsHide: true }
  );
  await wait(3000);

  const ws = await connect();
  const checks = [];

  for (const [width, height, mobile, name] of [
    [1440, 900, false, 'hero-v2-desktop-1440.png'],
    [1280, 900, false, 'hero-v2-desktop-1280.png'],
    [1024, 768, false, 'hero-v2-tablet-1024.png'],
    [768, 1024, true, 'hero-v2-tablet-768.png'],
    [390, 844, true, 'hero-v2-mobile-390.png'],
    [375, 812, true, 'hero-v2-mobile-375.png'],
    [320, 700, true, 'hero-v2-mobile-320.png'],
  ]) {
    await setViewport(ws, width, height, mobile);
    await navigate(ws, `${base}?hero-v2=${width}`);
    checks.push(await viewportStatus(ws));
    await capture(ws, name);
  }

  await setViewport(ws, 1440, 900);
  await navigate(ws, `${base}?hero-v2=first-viewport`);
  checks.push(await viewportStatus(ws));
  await capture(ws, 'hero-v2-first-viewport.png');

  const typoClip = await getClip(ws, '.hero-copy', 32);
  await capture(ws, 'hero-v2-typography-detail.png', typoClip);

  const placeholderClip = await getClip(ws, '.hero-artwork-placeholder', 32);
  await capture(ws, 'hero-v2-placeholder-detail.png', placeholderClip);

  ws.close();

  await fs.writeFile(
    path.join(out, 'hero-v2-viewport-checks.json'),
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

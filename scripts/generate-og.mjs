// Generates the Open Graph share image (public/og-image.png) from source assets:
// the real Wordmark SVG + the brand's Fraunces display font, on the ivory
// background. Rendered at 2x via Playwright → 2400x1260 (a crisp 1200x630).
//
//   node scripts/generate-og.mjs
//
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { chromium } from '@playwright/test';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');

const NAVY = '#0b253f';
const IVORY = '#fff9ed';

const wordmarkPath = readFileSync(resolve(here, '.wordmark-path.txt'), 'utf8').trim();

// Embed the actual brand fonts so the render is identical to the live site and
// independent of any network/system fonts.
const b64 = (p) => readFileSync(resolve(root, p)).toString('base64');
const frauncesRoman = b64('dist/_astro/fraunces-latin-opsz-normal.DihXLNYH.woff2');
const frauncesItalic = b64('dist/_astro/fraunces-latin-opsz-italic.lSdLDfvT.woff2');

const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<style>
  @font-face {
    font-family: 'Fraunces';
    font-style: normal;
    font-weight: 100 900;
    font-display: block;
    src: url(data:font/woff2;base64,${frauncesRoman}) format('woff2');
  }
  @font-face {
    font-family: 'Fraunces';
    font-style: italic;
    font-weight: 100 900;
    font-display: block;
    src: url(data:font/woff2;base64,${frauncesItalic}) format('woff2');
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 1200px; height: 630px; }
  body {
    background: ${IVORY};
    color: ${NAVY};
    display: flex;
    align-items: center;
    /* Asymmetric, optically balanced frame. */
    padding: 88px 96px 96px;
  }
  .lockup { width: 100%; }
  .wordmark {
    display: block;
    width: 560px;
    height: auto;
    margin-left: -6px; /* hang the ampersand's entry stroke into the margin */
  }
  .headline {
    margin-top: 44px;
    font-family: 'Fraunces', serif;
    font-weight: 380;
    font-variation-settings: 'opsz' 144, 'SOFT' 0, 'WONK' 0;
    font-size: 62px;
    line-height: 1.04;
    letter-spacing: -0.005em;
    max-width: 940px;
    text-wrap: balance;
  }
  .headline em { font-style: italic; }
</style>
</head>
<body>
  <div class="lockup">
    <svg class="wordmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2403.3 818.3" aria-hidden="true">
      <path fill="${NAVY}" d="${wordmarkPath}"></path>
    </svg>
    <p class="headline">Software, interaction and visual design, crafted for <em>everyone</em> &mdash; not just the few.</p>
  </div>
</body>
</html>`;

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 2,
});
await page.setContent(html, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);

const targets = [resolve(root, 'public/og-image.png'), resolve(root, 'dist/og-image.png')];
const buf = await page.screenshot({
  type: 'png',
  clip: { x: 0, y: 0, width: 1200, height: 630 },
});
for (const t of targets) writeFileSync(t, buf);
await browser.close();
console.log('Wrote', targets.join(', '));

// Render card.html to print + digital assets.
// Usage: node render.js   (run from the tooling dir that has playwright + qrcode)

const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const DIR = '/Users/xnch/xnch-sites/card';
const SRC = path.join(DIR, 'card.html');
const URL = process.env.CARD_URL || 'https://www.x-nch.com';

// Card is 89x51mm trim + 3mm bleed = 95x57mm.
// At 300dpi that is 1123 x 673 px.
const AT_300 = 1123;

(async () => {
  // regenerate the QR so it always matches the URL in card-data
  const QR = require('qrcode');
  const svg = await QR.toString(URL, {
    type: 'svg', margin: 0, errorCorrectionLevel: 'M',
    color: { dark: '#172321', light: '#00000000' },
  });
  fs.writeFileSync(path.join(DIR, 'qr.svg'), svg);

  // inline the QR into card.html so the file is self-contained (fetch is
  // blocked on file://) while still regenerating on every run
  const src = fs.readFileSync(SRC, 'utf8');
  fs.writeFileSync(
    SRC,
    src.replace('<!--QR_PLACEHOLDER-->', svg.replace(/<\?xml[^>]*>\?>/, ''))
  );

  const cfg = JSON.parse(
    fs.readFileSync(SRC, 'utf8').match(/<script type="text\/plain" id="card-data">([\s\S]*?)<\/script>/)[1]
  );
  console.log(`card: ${cfg.name} · ${cfg.role} · ${cfg.email} · ${cfg.url}`);
  console.log(`QR:  ${URL}\n`);

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 449, height: 269 },
    deviceScaleFactor: AT_300 / 449,
  });

  await page.goto('file://' + SRC);
  await page.waitForTimeout(600);

  const faces = ['front', 'back'];
  const out = [];

  for (const side of faces) {
    const el = page.locator(`.card[data-side="${side}"]`);

    // --- digital PNG (with bleed, what you'd send on WhatsApp) ---
    const png = path.join(DIR, `card-${side}.png`);
    await el.screenshot({ path: png });
    out.push(png);

    // --- print PDF: this face with crop marks on a separate page ---
    const marks = `<svg width="449" height="269" style="position:absolute;inset:0"
        xmlns="http://www.w3.org/2000/svg">
      <g stroke="#000" stroke-width="0.5">
        <line x1="11.34" y1="0"     x2="11.34" y2="11.34"/>
        <line x1="0"    y1="11.34"  x2="11.34" y2="11.34"/>
        <line x1="437.7" y1="0"     x2="437.7" y2="11.34"/>
        <line x1="437.7" y1="11.34"  x2="449"   y2="11.34"/>
        <line x1="11.34" y1="269"    x2="11.34" y2="257.7"/>
        <line x1="0"    y1="257.7"   x2="11.34" y2="257.7"/>
        <line x1="437.7" y1="269"    x2="437.7" y2="257.7"/>
        <line x1="437.7" y1="257.7"  x2="449"   y2="257.7"/>
      </g></svg>`;

    const printPage = await browser.newPage({
      viewport: { width: 449, height: 269 },
      deviceScaleFactor: AT_300 / 449,
    });
    await printPage.goto('file://' + SRC);
    await printPage.waitForTimeout(400);
    await printPage.evaluate((svg) => {
      document.querySelectorAll('.card').forEach((c, i) => {
        if (i !== Number(document.body.dataset.face)) c.remove();
      });
      document.body.insertAdjacentHTML('beforeend', svg);
    }, marks);
    await printPage.evaluate((s) => { document.body.dataset.face = s === 'front' ? 0 : 1; }, side);
    await printPage.waitForTimeout(200);

    const pdf = path.join(DIR, `card-${side}-print.pdf`);
    await printPage.pdf({
      path: pdf,
      width: '95mm', height: '57mm',
      printBackground: true,
      margin: { top: 0, bottom: 0, left: 0, right: 0 },
    });
    out.push(pdf);
    await printPage.close();
  }

  await browser.close();

  for (const f of out) {
    console.log(`  ${path.basename(f).padEnd(24)} ${(fs.statSync(f).size / 1024).toFixed(0)} KB`);
  }
})();
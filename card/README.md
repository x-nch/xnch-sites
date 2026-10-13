# Visiting card

Brand-forward xnchSystems card. Editable — all content lives in one block at
the top of `card.html`.

## Edit

Open `card.html` and change the values in `<script id="card-data">`:

```json
{
  "name":     "Pavan Kalle",
  "role":     "Founder",
  "email":    "hello@x-nch.com",
  "url":      "www.x-nch.com",
  "urlHref":  "https://www.x-nch.com",
  "tagline":  "governed autonomy",
  "backline": "AI systems & orchestration"
}
```

## Render

```bash
node render.js
```

Regenerates the QR from `urlHref`, inlines it, and writes:

| File | Use |
|---|---|
| `card-front.png` / `card-back.png` | Digital — WhatsApp, email signature. 1123 × 673 px (300dpi, includes 3mm bleed) |
| `card-front-print.pdf` / `card-back-print.pdf` | Print — 95 × 57 mm with crop marks, 3mm bleed |

Change the QR destination without touching the HTML:

```bash
CARD_URL=https://tees.x-nch.com node render.js
```

## Spec

- 89 × 51 mm trim (3.5 × 2 in), 3 mm bleed
- Palette matches the site: paper `#f3f0e8`, ink `#172321`, brand `#d84e33`
- **RGB, not CMYK.** Chromium cannot output CMYK. Give the printer this PDF and
  ask them to convert — or supply a CMYK profile on request.
- QR is `#172321` on cream. At 17mm it scans reliably; below ~14mm on a matte
  stock it gets unreliable.

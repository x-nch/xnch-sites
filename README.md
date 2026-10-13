# xnch-sites

Monorepo for the three public XNCH properties.

| Directory | Domain | Vercel project | State |
|---|---|---|---|
| `xnch/` | `www.x-nch.com` | `x-nch` | Live — full site |
| `tees/` | `tees.x-nch.com` | `xnch-tees` | Live — full site |
| `teach/` | `learn.x-nch.com` | `xnch-teach` | Live — stub, syllabus pending |

## Design system

All three share one palette, sampled from the XNCH public-site comp rather than
eyeballed. The comp contains **exactly one** saturated colour.

| Token | Hex | Role |
|---|---|---|
| `paper` | `#f3f0e8` | Primary background — warm cream, never white |
| `ink` | `#172321` | Dark sections and body text — teal-black, not neutral |
| `brand` | `#d84e33` | The single accent |
| `paper-alt` / `alt2` | `#ebeae2` / `#e9e8df` | Section rhythm |
| `paper-card` | `#f8f6ee` | Card surfaces |

Tokens live in each site's `tailwind.config.js`; shared component utilities live
in each site's `src/app/globals.css` (`.eyebrow`, `.display`, `.btn-brand`,
`.grid-lines`, `.panel`). The files are duplicated per site rather than shared
through a package — deliberately, so each property can be deployed and
independently restyled without a cross-site dependency.

## Stack

Next.js 15 (App Router), static export, Tailwind 3, TypeScript. No runtime, no
API, no database.

Every site sets `"framework": null` in `vercel.json`. This is load-bearing:
`output: "export"` produces a static `out/` with no `routes-manifest.json`, and
Vercel's Next.js preset looks for that file and fails the build with
`DEPLOYMENT_FAILED`.

## Working on a site

```bash
cd xnch        # or tees / teach
npm install
npm run dev
npm run build  # static output lands in out/
```

### Deploy

```bash
cd xnch
vercel link --project x-nch --yes
vercel --prod
```

Each site is a **separate Vercel project** rather than one project with host-based
routing. Static export cannot run middleware, so a single project cannot serve
different content per hostname. Subdomains of `x-nch.com` are attached as project
domains and Vercel configures their DNS automatically.

## Conventions

- **`TBD` markers are load-bearing.** Unconfirmed business facts — Tees pricing,
  fabric weight, the Teach syllabus — are visibly marked in the UI rather than
  invented. Leave them visible until they are genuinely decided.
- Content rhythm follows the comp: cream by default, one dark `ink` section per
  page, brand-coloured CTA band, dark footer.
- `.eyebrow` opens every section: monospace, uppercase, wide tracking.

## Not here

Platform code — the control plane, decision engine, memory and policy subsystems —
lives in `x-nch/xnch`, `x-nch/nexi` and `x-nch/xnchSystems`. This repo is
presentation only.
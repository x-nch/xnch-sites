import Link from 'next/link'

const NAV = [
  { label: 'Shop', href: '#drop' },
  { label: 'Collections', href: '#values' },
  { label: 'Lookbook', href: '#lookbook' },
  { label: 'About', href: '#values' },
]

const SIZES = ['S', 'M', 'L', 'XL']

const PRODUCTS = [
  { id: '01', name: 'Heavyweight Tee', note: 'Undyed · blank' },
  { id: '02', name: 'Heavyweight Tee', note: 'Black · blank' },
  { id: '03', name: 'Heavyweight Tee', note: 'Bone · chest mark' },
]

const VALUES = [
  {
    n: '01',
    title: 'Small batch',
    body: 'Made in runs we can count.',
    flag: 'Claim to confirm before launch',
  },
  {
    n: '02',
    title: 'Heavyweight cotton',
    body: 'Fabric weight and mill to be specified.',
    flag: 'GSM unknown',
  },
  {
    n: '03',
    title: 'No logos',
    body: 'Nothing printed that is not earning its place. Blank, or one small mark.',
    flag: null,
  },
]

export default function TeesPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* ---------- UTILITY BAR ---------- */}
      <div className="border-b border-ink/10 bg-paper-alt">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-2.5 md:px-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/55">
            Free shipping over <span className="tbd">threshold TBD</span> · Ships in 48h
          </p>
          <div className="flex gap-5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/55">
            <span>Search</span>
            <span>Cart (0)</span>
          </div>
        </div>
      </div>

      {/* ---------- HEADER ---------- */}
      <header className="border-b border-ink/10">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-7 w-7 place-items-center border border-brand text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            </span>
            <span className="leading-none">
              <span className="block font-mono text-[12px] uppercase tracking-[0.2em]">xnch tees</span>
              <span className="block font-mono text-[9px] uppercase tracking-[0.14em] text-ink/45">
                small batch apparel
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((i) => (
              <a
                key={i.label}
                href={i.href}
                className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/60 transition-colors hover:text-brand"
              >
                {i.label}
              </a>
            ))}
          </nav>

          <a href="#drop" className="btn-brand">
            Shop now
          </a>
        </div>
      </header>

      <main>
        {/* ---------- HERO ---------- */}
        <section className="border-b border-ink/10">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
            <p className="eyebrow mb-8">Drop 01 — heavyweight cotton</p>
            <h1 className="display max-w-4xl text-[clamp(2.75rem,8vw,6rem)]">
              Less, but{' '}
              <span className="display-accent">better made</span>
              <span className="display-accent">.</span>
            </h1>
            <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-ink/70">
              Small-batch tees in heavyweight cotton, with nothing on the shirt that does not
              need to be there.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#drop" className="btn-brand">
                Shop the drop <span aria-hidden>→</span>
              </a>
              <a href="#values" className="btn-ghost">
                See materials
              </a>
            </div>

            <div className="mt-16 grid-lines grid h-[320px] place-items-center border border-ink/10 md:h-[440px]">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">
                Full-bleed campaign image — 21:9
              </p>
            </div>
          </div>
        </section>

        {/* ---------- FEATURED DROP ---------- */}
        <section id="drop" className="scroll-mt-20 border-b border-ink/10">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow mb-6">The drop</p>
                <h2 className="display text-[clamp(2rem,4vw,3rem)]">Drop 01</h2>
              </div>
              <p className="max-w-sm text-[14px] leading-relaxed text-ink/60">
                Hover swaps to the second image. Add to cart from the card, or open the product
                page.
              </p>
            </div>

            <div className="mt-14 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
              {PRODUCTS.map((p) => (
                <article key={p.id} className="panel group flex flex-col p-5 transition-colors hover:border-brand/50">
                  <div className="grid-lines grid h-[260px] place-items-center border border-ink/10">
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/40">
                      Product image — front
                    </p>
                  </div>

                  <div className="mt-5 flex flex-1 flex-col">
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/45">
                      {p.id}
                    </p>
                    <h3 className="mt-2 text-[15px]">{p.name}</h3>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-ink/50">
                      {p.note}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {SIZES.map((s) => (
                        <span
                          key={s}
                          className="border border-ink/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/65 transition-colors hover:border-brand hover:text-brand"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-ink/10 pt-4">
                      <span className="font-mono text-[11px] text-ink/70">
                        Price <span className="tbd">TBD</span>
                      </span>
                      <span className="btn-brand">Add to cart</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/45">
              Pricing, currency and shipping threshold are deliberately unset — confirm before launch
            </p>
          </div>
        </section>

        {/* ---------- BRAND VALUES ---------- */}
        <section id="values" className="scroll-mt-20 border-b border-ink/10 bg-paper-alt">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
            <p className="eyebrow mb-6">What we hold to</p>
            <h2 className="display max-w-2xl text-[clamp(2rem,4vw,3rem)]">
              Nothing here that
              <br />
              <span className="display-italic">isn&apos;t</span> load-bearing.
            </h2>

            <div className="mt-14 grid gap-px md:grid-cols-3">
              {VALUES.map((v) => (
                <div key={v.n} className="border-t border-ink/15 pt-6">
                  <p className="font-mono text-[11px] text-brand">{v.n}</p>
                  <h3 className="mt-3 text-[17px]">{v.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink/65">{v.body}</p>
                  {v.flag && (
                    <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.12em] text-ink/40">
                      {v.flag}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- LOOKBOOK ---------- */}
        <section id="lookbook" className="scroll-mt-20 border-b border-ink/10">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
            <p className="eyebrow mb-6">Lookbook</p>
            <h2 className="display text-[clamp(2rem,4vw,3rem)]">
              On people, in daylight.
            </h2>

            <div className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="grid h-[300px] place-items-center border border-ink/10 bg-paper-alt2"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/35">
                    Look {String(i + 1).padStart(2, '0')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- NEWSLETTER ---------- */}
        <section className="bg-ink text-paper">
          <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between md:px-10 md:py-20">
            <div>
              <h2 className="display text-[clamp(1.75rem,3.6vw,2.75rem)]">
                Get the next drop
                <br />
                <span className="display-accent">before it goes live</span>
                <span className="display-accent">.</span>
              </h2>
              <p className="mt-3 text-[14px] text-paper/55">One email per drop. Nothing else.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex min-w-[240px] items-center border border-paper/25 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-paper/45">
                Email address
              </span>
              <a href="#" className="btn-brand">
                Sign up
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ---------- FOOTER ---------- */}
      <footer className="border-t border-ink/10 bg-paper">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-14 md:grid-cols-[2fr_1fr_1fr_1fr] md:px-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-6 w-6 place-items-center border border-brand">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/70">
                xnch tees
              </span>
            </div>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-ink/55">
              Small-batch, heavyweight cotton. Nothing printed that is not earning its place.
            </p>
          </div>

          {[
            ['Shop', ['Drop 01', 'All tees', 'Sizing', 'Gift cards']],
            ['Support', ['Shipping', 'Returns', 'Care', 'Contact']],
            ['Company', ['About', 'Lookbook', 'Stockists', 'Legal']],
          ].map(([title, items]) => (
            <div key={title as string}>
              <p className="eyebrow mb-4">{title as string}</p>
              <ul className="space-y-2">
                {(items as string[]).map((it) => (
                  <li key={it}>
                    <a
                      href="#"
                      className="text-[13px] text-ink/60 transition-colors hover:text-brand"
                    >
                      {it}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 border-t border-ink/10 px-6 py-5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/45 md:px-10">
          <span>© 2026 XNCH Tees</span>
          <span>Shipping &amp; returns · Size guide · Privacy</span>
        </div>
      </footer>
    </div>
  )
}
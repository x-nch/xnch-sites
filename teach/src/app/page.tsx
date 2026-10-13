import Link from 'next/link'

export default function TeachPage() {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <header className="border-b border-ink/10">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-7 w-7 place-items-center border border-brand text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            </span>
            <span className="leading-none">
              <span className="block font-mono text-[12px] uppercase tracking-[0.2em]">
                xnch teach
              </span>
              <span className="block font-mono text-[9px] uppercase tracking-[0.14em] text-ink/45">
                learning &amp; knowledge sharing
              </span>
            </span>
          </Link>
          <Link href="/" className="btn-ghost">
            xnchSystems
          </Link>
        </div>
      </header>

      <main className="flex flex-1 items-center">
        <div className="mx-auto w-full max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <p className="eyebrow mb-8">Coming soon</p>
          <h1 className="display max-w-4xl text-[clamp(2.5rem,7vw,5rem)]">
            Learn to build AI systems
            <br />
            that <span className="display-accent">ship</span>
            <span className="display-accent">.</span>
          </h1>

          <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-ink/70">
            Hands-on tracks on agent orchestration, governed execution and production AI — taught
            by the people who built the platform.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2 border border-dashed border-ink/30 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50">
              Syllabus in progress
            </span>
            <Link href="mailto:hello@x-nch.com" className="btn-brand">
              Get notified
            </Link>
          </div>

          <div className="mt-20 grid gap-px border-t border-ink/12 pt-10 sm:grid-cols-3">
            {[
              ['Tracks', 'Levels and durations to be confirmed.'],
              ['Curriculum', 'Not yet written — the outline is structural only.'],
              ['Mentors', 'Names to be supplied.'],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand">{k}</p>
                <p className="mt-2 text-[14px] leading-relaxed text-ink/60">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-ink/10">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-6 py-6 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/45 md:px-10">
          <span>© 2026 XNCH Teach</span>
          <span className="flex gap-6">
            <Link href="/" className="transition-colors hover:text-brand">
              xnchSystems
            </Link>
            <Link href="https://tees.x-nch.com" className="transition-colors hover:text-brand">
              XNCH Tees
            </Link>
          </span>
        </div>
      </footer>
    </div>
  )
}
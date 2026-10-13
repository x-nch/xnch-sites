import Link from 'next/link'

const NAV = [
  { label: 'Models', href: '/nexi' },
  { label: 'Architecture', href: '/architecture' },
  { label: 'Artifacts', href: '/xnch' },
  { label: 'Notes', href: '/perspectives' },
]

const STATS = [
  { n: '02', label: 'Owned control planes on internal infrastructure' },
  { n: '01', label: 'Binding, non-bypassable evaluation for every action' },
  { n: '∞', label: 'Human veto — the decision ledger is append-only' },
]

const NODES = [
  { tag: 'policy', title: 'Policy', desc: 'check + recall' },
  { tag: 'memory', title: 'Memory', desc: 'read + recall' },
  { tag: 'contract', title: 'Contract', desc: 'assert type' },
  { tag: 'ledger', title: 'Ledger', desc: 'append only' },
]

const NEXI_NODES = [
  { tag: 'directive', title: 'Directive', desc: 'Step the plan' },
  { tag: 'recall', title: 'Recall', desc: 'Step past now' },
  { tag: 'act', title: 'Act', desc: 'Skip the ask' },
  { tag: 'learn', title: 'Learn', desc: 'Change the next' },
]

const LOOP = [
  ['PERCEIVE', 'Read the pull'],
  ['RECALL', 'Bring back what matters'],
  ['DECIDE', 'Choose the next act'],
  ['CONSTRAIN', 'Check model policy'],
  ['PROPOSE', 'Form an intended act'],
  ['VERIFY', 'Ask a channel model'],
  ['EXECUTE', 'Run the approved act'],
  ['OBSERVE', 'Watch the outcome'],
  ['RECORD', 'Write the execution'],
  ['LEARN', 'Shape the behaviour'],
]

const STUDIO = [
  ['workflow builder', 'Human-approval gates from intent to execution', 'OWNER · MIDDLE · SUB'],
  ['governed agents', 'Command and recall agents with different powers', 'LAST DECIDED BY ROUTER'],
  ['MCP bridge', 'A controlled bridge to tools, not a tool free-for-all', 'CONNECT · 14 SERVERS'],
  ['voice loop', 'A CLI voice loop that keeps the interface close to reasoning', 'VOICE · LOCALHOST'],
  ['training + eval', 'Training and evaluation as a living feedback surface', 'V2 ROUTER · V2 TONE'],
  ['runbooks + docs', 'Architecture docs that explain the trade-offs, not the slogans', 'ARCHIVE · V1 ARTIFACTS'],
]

const FIELD_NOTES = [
  ['ARCHITECTURE.MD', 'Why the control plane and decision engine stay separate', 'BY ISSUE'],
  ['RUNNER / HUMAN APPEAL', 'What happens when the system needs a human', 'BY ISSUE'],
  ['EVALS / LEARNING LOOP', 'How executions become evidence instead of noise', 'BY ISSUE'],
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* ================= HEADER ================= */}
      <header className="border-b border-ink/10">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-7 w-7 place-items-center border border-brand text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            </span>
            <span className="leading-none">
              <span className="block font-mono text-[12px] uppercase tracking-[0.2em]">xnchsystems</span>
              <span className="block font-mono text-[9px] uppercase tracking-[0.14em] text-ink/45">
                governed autonomy
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/60 transition-colors hover:text-brand"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href="/early-circle" className="btn-brand">
            Request access
          </Link>
        </div>
      </header>

      <main>
        {/* ================= HERO ================= */}
        <section className="border-b border-ink/10">
          <div className="mx-auto grid max-w-[1400px] gap-14 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:px-10 md:py-28">
            <div>
              <p className="eyebrow mb-8">A project in orchestration systems</p>
              <h1 className="display text-[clamp(2.75rem,7vw,5.5rem)]">
                Make room <span className="display-accent">for a verdict</span>
                <span className="display-accent">.</span>
              </h1>
              <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-ink/70">
                xnchSystems is an optional attempt at governed autonomy: an agent that can
                perceive, remember, decide, and act — without presenting that judgement is free.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/architecture" className="btn-brand">
                  See the architecture <span aria-hidden>→</span>
                </Link>
                <Link href="/nexi" className="btn-ghost">
                  Read the chains
                </Link>
              </div>
            </div>

            {/* Verdict dial */}
            <div className="flex flex-col justify-center">
              <div className="relative mx-auto aspect-square w-full max-w-[380px]">
                <div className="absolute inset-0 rounded-full border border-ink/15" />
                <div className="absolute inset-6 rounded-full border border-dashed border-ink/20" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="grid h-20 w-20 place-items-center rounded-full border border-brand bg-brand/5">
                    <div className="grid h-9 w-9 place-items-center rounded-full border border-ink/25">
                      <span className="h-2 w-2 rounded-full bg-brand" />
                    </div>
                  </div>
                </div>
                <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-paper px-2 font-mono text-[9px] uppercase tracking-[0.14em] text-ink/50">
                  allow · block · abstain
                </span>
              </div>
              <p className="mx-auto mt-8 max-w-[380px] border border-ink/15 p-4 text-right font-mono text-[10px] uppercase leading-relaxed tracking-[0.1em] text-ink/60">
                A model — or ten thousand of them — deciding whether an act is worth taking.
                If it is not, we do not have to guess.
              </p>
            </div>
          </div>

          {/* Stat row */}
          <div className="border-t border-ink/10">
            <div className="mx-auto grid max-w-[1400px] gap-px md:grid-cols-3">
              {STATS.map((s) => (
                <div key={s.n} className="px-6 py-8 md:px-10">
                  <div className="display text-4xl text-brand">{s.n}</div>
                  <p className="mt-2 font-mono text-[10px] uppercase leading-relaxed tracking-[0.1em] text-ink/55">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= THE PROBLEM ================= */}
        <section className="border-b border-ink/10 bg-paper-alt">
          <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
            <h2 className="display text-[clamp(2rem,4.2vw,3.25rem)]">
              The system
              <br />
              should know what
              <br />
              it is allowed to do.
            </h2>
            <div className="space-y-6">
              <p className="text-[17px] leading-relaxed text-ink/75">
                Most agent demos skip from prompt to outcome. xnchSystems stays with the
                uncomfortable middle: policy, memory, an approval boundary, an audit trail,
                then learning.
              </p>
              <p className="max-w-lg text-[13px] leading-relaxed text-ink/55">
                This is not a product-shaped abstraction; it is a small, working system with a
                point of view about agency. The control plane is called xnch. The decision engine
                is called nexi. They are separate because conflating them is how you end up
                rewriting an audit trail to make a feature work.
              </p>
              <Link href="/architecture" className="eyebrow inline-flex items-center gap-2 text-brand">
                Visit the architecture <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ================= ARCHITECTURE DIAGRAM ================= */}
        <section className="border-b border-ink/10">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="eyebrow mb-6">01 — architecture in brief</p>
                <h2 className="display text-[clamp(2rem,4vw,3rem)]">
                  A boundary you
                  <br />
                  can point to.
                </h2>
              </div>
              <p className="max-w-md self-start text-[15px] leading-relaxed text-ink/70">
                Two services, one deliberate seam. Decisions can be routed through the system
                without becoming inseparable from it.
              </p>
            </div>

            {/* The seam */}
            <div className="panel mt-14 overflow-hidden">
              <div className="flex items-center justify-between border-b border-ink/10 px-5 py-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/55">
                  system topology — v1
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand">
                  control / decision
                </span>
              </div>
              <div className="grid-lines p-5 md:p-8">
                <div className="grid items-stretch gap-5 md:grid-cols-[1fr_auto_1fr]">
                  <div className="panel p-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/50">
                      XNCH · control plane
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      {NODES.map((n) => (
                        <div key={n.title} className="border border-ink/12 bg-paper-card p-3">
                          <p className="font-mono text-[10px] text-ink/70">{n.tag}</p>
                          <p className="mt-1 text-[13px]">{n.title}</p>
                          <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-ink/45">
                            {n.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[9px] uppercase tracking-[0.1em] text-ink/45">
                      <span>owner · policy · session</span>
                      <span>decision ledger</span>
                      <span>output enforced</span>
                    </div>
                  </div>

                  <div className="grid place-items-center px-2">
                    <div className="h-full w-px bg-ink/20 md:h-24 md:w-px" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-brand md:mt-2">
                      seam
                    </span>
                  </div>

                  <div className="border border-brand bg-paper-card p-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand">
                      NEXI · decision engine
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      {NEXI_NODES.map((n) => (
                        <div key={n.title} className="border border-ink/12 bg-paper p-3">
                          <p className="font-mono text-[10px] text-ink/70">{n.tag}</p>
                          <p className="mt-1 text-[13px]">{n.title}</p>
                          <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-ink/45">
                            {n.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[9px] uppercase tracking-[0.1em] text-ink/45">
                      <span>perception</span>
                      <span>model policy</span>
                      <span>execution</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-px md:grid-cols-3">
              {[
                ['Policy before power', 'The permission model evaluates intent before an agent gets a shell.'],
                ['A human can say no', 'ANY planned action that wants a system action waits on a human before anything external happens.'],
                ['Every action leaves a trace', 'The first ask of any part of the architecture: can an auditor see it? Not an afterthought.'],
              ].map(([title, desc]) => (
                <div key={title} className="border-t border-ink/12 pt-5">
                  <p className="text-[15px]">{title}</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink/60">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= OPERATING LOOP (DARK) ================= */}
        <section className="bg-ink text-paper">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
              <div>
                <p className="eyebrow-dark mb-6">02 — the operating loop</p>
                <h2 className="display text-[clamp(2rem,4.2vw,3.25rem)]">
                  From signal
                  <br />
                  to <span className="display-accent">learning</span>
                  <span className="display-accent">.</span>
                </h2>
                <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-paper/60">
                  Most model throughput is treated as a character goal, and reactive systems get
                  more frantic behaviour. A single loop can make the next one smarter.
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link href="/nexi" className="btn-brand">
                    How the loop works
                  </Link>
                  <Link href="/nexi" className="btn-ghost border-paper/25 text-paper hover:border-brand hover:text-brand">
                    Nexi today
                  </Link>
                </div>
              </div>

              <ol className="divide-y divide-paper/10">
                {LOOP.map(([term, gloss], i) => (
                  <li key={term} className="flex items-baseline gap-6 py-3.5">
                    <span className="w-6 shrink-0 font-mono text-[10px] text-brand">
                      {String(i).padStart(2, '0')}
                    </span>
                    <span className="w-32 shrink-0 font-mono text-[11px] uppercase tracking-[0.14em]">
                      {term}
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.06em] text-paper/45">
                      {gloss}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ================= THE STUDIO ================= */}
        <section className="border-b border-ink/10">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="eyebrow mb-6">03 — things that exist</p>
                <h2 className="display text-[clamp(2rem,4vw,3rem)]">
                  A <span className="display-italic">studio,</span>
                  <br />
                  not a feature list.
                </h2>
              </div>
              <div className="self-start">
                <p className="max-w-md text-[15px] leading-relaxed text-ink/70">
                  Every artifact is a single idea on the same problem. The work is in the state
                  outside the code or in the work that goes into the code itself.
                </p>
              </div>
            </div>

            <div className="mt-14 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
              {STUDIO.map(([title, desc, meta]) => (
                <article key={title} className="panel flex flex-col p-5 transition-colors hover:border-brand/50">
                  <span className="grid h-8 w-8 place-items-center border border-ink/15 text-brand">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  </span>
                  <h3 className="mt-4 text-[15px] font-normal">{title}</h3>
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-ink/60">{desc}</p>
                  <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.12em] text-ink/40">
                    {meta}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= TWO MACHINES ================= */}
        <section className="border-b border-ink/10 bg-paper-alt2">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="eyebrow mb-6">04 — two machines</p>
                <h2 className="display text-[clamp(2rem,4vw,3rem)]">
                  No k3s.
                  <br />
                  <span className="display-accent">On purpose</span>
                  <span className="display-accent">.</span>
                </h2>
              </div>
              <div className="space-y-6">
                <p className="max-w-md text-[15px] leading-relaxed text-ink/75">
                  xnchSystems runs on two owned physical machines under a no-k3s system regime.
                </p>
                <p className="max-w-md text-[13px] leading-relaxed text-ink/55">
                  That choice is not a rejection of scale. It is a choice to keep the operational
                  surface small enough for one builder to reason completely. More boring. More
                  debuggable. A system whose failure modes can be audited.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="bg-ink p-5 text-paper">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand">
                      machine A · mx680
                    </p>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.1em] text-paper/45">
                      deterministic · keepalive
                    </p>
                  </div>
                  <div className="panel p-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/55">
                      machine B · SM710
                    </p>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.1em] text-ink/45">
                      decision engine · nexi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FIELD NOTES ================= */}
        <section className="border-b border-ink/10">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="eyebrow mb-6">05 — field notes</p>
                <h2 className="display text-[clamp(2rem,4vw,3rem)]">
                  Read the
                  <br />
                  receipts.
                </h2>
                <p className="mt-6 max-w-xs text-[14px] leading-relaxed text-ink/65">
                  A public repo for a private system. The docs are the work, not an appendix.
                </p>
                <Link href="/perspectives" className="eyebrow mt-6 inline-flex items-center gap-2 text-brand">
                  Read the documents <span aria-hidden>↗</span>
                </Link>
              </div>

              <ul className="divide-y divide-ink/12">
                {FIELD_NOTES.map(([title, desc, meta]) => (
                  <li key={title}>
                    <Link
                      href="/architecture"
                      className="group flex items-center gap-5 py-5 transition-colors hover:text-brand"
                    >
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-ink/20 font-mono text-[10px] text-ink/50 transition-colors group-hover:border-brand group-hover:text-brand">
                        →
                      </span>
                      <span className="flex-1">
                        <span className="block font-mono text-[11px] uppercase tracking-[0.14em]">
                          {title}
                        </span>
                        <span className="mt-1 block text-[13px] leading-relaxed text-ink/60">
                          {desc}
                        </span>
                      </span>
                      <span className="hidden shrink-0 font-mono text-[9px] uppercase tracking-[0.12em] text-ink/40 sm:block">
                        {meta}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ================= CTA BAND ================= */}
        <section className="bg-brand text-paper-card">
          <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between md:px-10 md:py-20">
            <h2 className="display max-w-2xl text-[clamp(1.75rem,3.6vw,2.75rem)] text-paper-card">
              Can an agent be powerful{' '}
              <span className="display-italic">and</span> accountable?
            </h2>
            <Link
              href="/early-circle"
              className="inline-flex shrink-0 items-center gap-2 border border-paper-card/60 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-card transition-colors hover:bg-paper-card hover:text-brand"
            >
              Open xnchSystems on GitHub <span aria-hidden>↗</span>
            </Link>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-ink text-paper">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
          <div className="flex items-center gap-3">
            <span className="grid h-6 w-6 place-items-center border border-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/70">
              xnchsystems · governed autonomy
            </span>
          </div>
          <div className="flex flex-wrap gap-6 font-mono text-[10px] uppercase tracking-[0.14em] text-paper/45">
            <Link href="/perspectives" className="transition-colors hover:text-brand">
              Notes
            </Link>
            <Link href="/architecture" className="transition-colors hover:text-brand">
              Architecture
            </Link>
            <Link href="/terms" className="transition-colors hover:text-brand">
              Terms
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-brand">
              Privacy
            </Link>
            <span>© 2026 XNCH</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
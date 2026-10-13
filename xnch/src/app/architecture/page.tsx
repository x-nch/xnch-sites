import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        <section className="section-padding">
          <div className="container-architectural">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8 text-balance fade-in">
              System Architecture
            </h1>
            <p className="text-lg md:text-xl text-premium max-w-3xl fade-in fade-in-delay-1">
              Two services, two Kubernetes nodes, no cloud dependency for inference. Every component is designed for observability, auditability, and graceful degradation.
            </p>
          </div>
        </section>

        <section className="section-padding-sm bg-gray-25">
          <div className="container-architectural overflow-x-auto">
            <div className="min-w-[768px] py-8 fade-in">
              <svg viewBox="0 0 900 580" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                {/* Node 1: Nexi */}
                <rect x="40" y="60" width="380" height="460" rx="4" stroke="#d4d4d4" fill="#fcfcfc" strokeWidth="1" />
                <text x="60" y="90" fontSize="13" fill="#1e40af" fontWeight="600" fontFamily="system-ui, sans-serif">NEXI — Product Layer</text>
                <text x="60" y="107" fontSize="11" fill="#a3a3a3" fontFamily="system-ui, sans-serif">Port 8000 · i9 Inference Node</text>

                {/* Nexi internal boxes */}
                <rect x="60" y="125" width="170" height="52" rx="3" fill="white" stroke="#e5e5e5" strokeWidth="1" />
                <text x="72" y="145" fontSize="10" fill="#737373" fontWeight="600" fontFamily="system-ui, sans-serif">INTENT INTERPRETER</text>
                <text x="72" y="163" fontSize="10" fill="#a3a3a3" fontFamily="system-ui, sans-serif">Rule pre-filter + LLM fallback</text>

                <rect x="245" y="125" width="155" height="52" rx="3" fill="white" stroke="#e5e5e5" strokeWidth="1" />
                <text x="257" y="145" fontSize="10" fill="#737373" fontWeight="600" fontFamily="system-ui, sans-serif">CONTEXT LOADER</text>
                <text x="257" y="163" fontSize="10" fill="#a3a3a3" fontFamily="system-ui, sans-serif">Memory manifest assembly</text>

                <rect x="60" y="195" width="170" height="52" rx="3" fill="white" stroke="#e5e5e5" strokeWidth="1" />
                <text x="72" y="215" fontSize="10" fill="#737373" fontWeight="600" fontFamily="system-ui, sans-serif">OPTION GENERATOR</text>
                <text x="72" y="233" fontSize="10" fill="#a3a3a3" fontFamily="system-ui, sans-serif">LiteLLM → vLLM → fallback</text>

                <rect x="245" y="195" width="155" height="52" rx="3" fill="white" stroke="#e5e5e5" strokeWidth="1" />
                <text x="257" y="215" fontSize="10" fill="#737373" fontWeight="600" fontFamily="system-ui, sans-serif">POLICY FILTER</text>
                <text x="257" y="233" fontSize="10" fill="#a3a3a3" fontFamily="system-ui, sans-serif">Parallel dry-run evaluation</text>

                <rect x="60" y="265" width="170" height="52" rx="3" fill="white" stroke="#e5e5e5" strokeWidth="1" />
                <text x="72" y="285" fontSize="10" fill="#737373" fontWeight="600" fontFamily="system-ui, sans-serif">EVALUATOR</text>
                <text x="72" y="303" fontSize="10" fill="#a3a3a3" fontFamily="system-ui, sans-serif">4-dimension weighted scoring</text>

                <rect x="245" y="265" width="155" height="52" rx="3" fill="white" stroke="#e5e5e5" strokeWidth="1" />
                <text x="257" y="285" fontSize="10" fill="#737373" fontWeight="600" fontFamily="system-ui, sans-serif">SELECTOR</text>
                <text x="257" y="303" fontSize="10" fill="#a3a3a3" fontFamily="system-ui, sans-serif">Rank + confidence check</text>

                <rect x="60" y="335" width="170" height="52" rx="3" fill="white" stroke="#e5e5e5" strokeWidth="1" />
                <text x="72" y="355" fontSize="10" fill="#737373" fontWeight="600" fontFamily="system-ui, sans-serif">PLAN COMPILER</text>
                <text x="72" y="373" fontSize="10" fill="#a3a3a3" fontFamily="system-ui, sans-serif">DAG validation + compilation</text>

                <rect x="245" y="335" width="155" height="52" rx="3" fill="white" stroke="#e5e5e5" strokeWidth="1" />
                <text x="257" y="355" fontSize="10" fill="#737373" fontWeight="600" fontFamily="system-ui, sans-serif">DISPATCHER</text>
                <text x="257" y="373" fontSize="10" fill="#a3a3a3" fontFamily="system-ui, sans-serif">Execution runner dispatch</text>

                {/* Nexi arrows */}
                <line x1="230" y1="151" x2="243" y2="151" stroke="#d4d4d4" strokeWidth="1" />
                <polygon points="243,147 251,151 243,155" fill="#d4d4d4" />
                <line x1="230" y1="221" x2="243" y2="221" stroke="#d4d4d4" strokeWidth="1" />
                <polygon points="243,217 251,221 243,225" fill="#d4d4d4" />
                <line x1="230" y1="291" x2="243" y2="291" stroke="#d4d4d4" strokeWidth="1" />
                <polygon points="243,287 251,291 243,295" fill="#d4d4d4" />
                <line x1="230" y1="361" x2="243" y2="361" stroke="#d4d4d4" strokeWidth="1" />
                <polygon points="243,357 251,361 243,365" fill="#d4d4d4" />

                <line x1="145" y1="177" x2="145" y2="193" stroke="#d4d4d4" strokeWidth="1" />
                <polygon points="141,193 145,201 149,193" fill="#d4d4d4" />
                <line x1="322" y1="177" x2="322" y2="193" stroke="#d4d4d4" strokeWidth="1" />
                <polygon points="318,193 322,201 326,193" fill="#d4d4d4" />
                <line x1="145" y1="247" x2="145" y2="263" stroke="#d4d4d4" strokeWidth="1" />
                <polygon points="141,263 145,271 149,263" fill="#d4d4d4" />
                <line x1="322" y1="247" x2="322" y2="263" stroke="#d4d4d4" strokeWidth="1" />
                <polygon points="318,263 322,271 326,263" fill="#d4d4d4" />
                <line x1="145" y1="317" x2="145" y2="333" stroke="#d4d4d4" strokeWidth="1" />
                <polygon points="141,333 145,341 149,333" fill="#d4d4d4" />
                <line x1="322" y1="317" x2="322" y2="333" stroke="#d4d4d4" strokeWidth="1" />
                <polygon points="318,333 322,341 326,333" fill="#d4d4d4" />

                {/* XNCH column */}
                <rect x="475" y="60" width="390" height="460" rx="4" stroke="#d4d4d4" fill="#fcfcfc" strokeWidth="1" />
                <text x="495" y="90" fontSize="13" fill="#171717" fontWeight="600" fontFamily="system-ui, sans-serif">XNCH — Control Plane</text>
                <text x="495" y="107" fontSize="11" fill="#a3a3a3" fontFamily="system-ui, sans-serif">Port 8001 · i7 Memory Node</text>

                {/* Auth */}
                <rect x="495" y="125" width="170" height="40" rx="3" fill="white" stroke="#e5e5e5" strokeWidth="1" />
                <text x="507" y="141" fontSize="10" fill="#737373" fontWeight="600" fontFamily="system-ui, sans-serif">AUTH</text>
                <text x="507" y="155" fontSize="9" fill="#a3a3a3" fontFamily="system-ui, sans-serif">JWT + public-key crypto</text>

                {/* Session */}
                <rect x="680" y="125" width="170" height="40" rx="3" fill="white" stroke="#e5e5e5" strokeWidth="1" />
                <text x="692" y="141" fontSize="10" fill="#737373" fontWeight="600" fontFamily="system-ui, sans-serif">SESSION</text>
                <text x="692" y="155" fontSize="9" fill="#a3a3a3" fontFamily="system-ui, sans-serif">Init + rate-limit + dedup</text>

                {/* Memory 4 layers */}
                <rect x="495" y="180" width="355" height="40" rx="3" fill="white" stroke="#e5e5e5" strokeWidth="1" />
                <text x="507" y="196" fontSize="10" fill="#737373" fontWeight="600" fontFamily="system-ui, sans-serif">MEMORY — 4 LAYERS</text>
                <text x="507" y="210" fontSize="9" fill="#a3a3a3" fontFamily="system-ui, sans-serif">Sensory · Working · Episodic (pgvector) · Pattern / Graph</text>

                {/* Policy */}
                <rect x="495" y="235" width="170" height="40" rx="3" fill="white" stroke="#e5e5e5" strokeWidth="1" />
                <text x="507" y="251" fontSize="10" fill="#737373" fontWeight="600" fontFamily="system-ui, sans-serif">POLICY ENGINE</text>
                <text x="507" y="265" fontSize="9" fill="#a3a3a3" fontFamily="system-ui, sans-serif">YAML rules · versioned</text>

                {/* Governance */}
                <rect x="680" y="235" width="170" height="40" rx="3" fill="white" stroke="#e5e5e5" strokeWidth="1" />
                <text x="692" y="251" fontSize="10" fill="#737373" fontWeight="600" fontFamily="system-ui, sans-serif">GOVERNANCE</text>
                <text x="692" y="265" fontSize="9" fill="#a3a3a3" fontFamily="system-ui, sans-serif">Actors · weights · audit</text>

                {/* Verdict */}
                <rect x="495" y="290" width="170" height="40" rx="3" fill="white" stroke="#e5e5e5" strokeWidth="1" />
                <text x="507" y="306" fontSize="10" fill="#737373" fontWeight="600" fontFamily="system-ui, sans-serif">VERDICT</text>
                <text x="507" y="320" fontSize="9" fill="#a3a3a3" fontFamily="system-ui, sans-serif">JWT signing · decision ledger</text>

                {/* Execution */}
                <rect x="680" y="290" width="170" height="40" rx="3" fill="white" stroke="#e5e5e5" strokeWidth="1" />
                <text x="692" y="306" fontSize="10" fill="#737373" fontWeight="600" fontFamily="system-ui, sans-serif">EXECUTION</text>
                <text x="692" y="320" fontSize="9" fill="#a3a3a3" fontFamily="system-ui, sans-serif">Outcome callback · delta</text>

                {/* Learning */}
                <rect x="495" y="345" width="355" height="40" rx="3" fill="white" stroke="#e5e5e5" strokeWidth="1" />
                <text x="507" y="361" fontSize="10" fill="#737373" fontWeight="600" fontFamily="system-ui, sans-serif">AUTONOMOUS LEARNING</text>
                <text x="507" y="375" fontSize="9" fill="#a3a3a3" fontFamily="system-ui, sans-serif">Pattern extraction · score adaptation · policy candidates (6h loop)</text>

                {/* Nexi to XNCH arrows */}
                <line x1="420" y1="360" x2="493" y2="310" stroke="#1e40af" strokeWidth="1" strokeDasharray="4 3" />
                <text x="430" y="340" fontSize="8" fill="#1e40af" fontFamily="system-ui, sans-serif">verdict request</text>
                <polygon points="493,306 501,310 493,314" fill="#1e40af" />

                <line x1="420" y1="290" x2="493" y2="255" stroke="#1e40af" strokeWidth="1" strokeDasharray="4 3" />
                <text x="430" y="270" fontSize="8" fill="#1e40af" fontFamily="system-ui, sans-serif">policy check</text>
                <polygon points="493,251 501,255 493,259" fill="#1e40af" />

                <line x1="420" y1="220" x2="493" y2="200" stroke="#1e40af" strokeWidth="1" strokeDasharray="4 3" />
                <text x="430" y="208" fontSize="8" fill="#1e40af" fontFamily="system-ui, sans-serif">context read</text>
                <polygon points="493,196 501,200 493,204" fill="#1e40af" />

                {/* Infrastructure row */}
                <rect x="40" y="540" width="825" height="1" rx="0" fill="#e5e5e5" />

                <text x="40" y="555" fontSize="11" fill="#a3a3a3" fontWeight="600" fontFamily="system-ui, sans-serif">INFRASTRUCTURE</text>
                <text x="40" y="570" fontSize="10" fill="#d4d4d4" fontFamily="system-ui, sans-serif">Redis · PostgreSQL + pgvector · Kuzu Graph · SQLite · agentmemory · Langfuse</text>
              </svg>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-architectural">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-16 fade-in">Data Flow</h2>
            <div className="space-y-12">
              {[
                { title: '1. Session Initiation', desc: 'A request arrives at Nexi (port 8000). Nexi calls XNCH to validate the auth token, resolve the actor, and create a session context with rate-limit enforcement and KV-cache dedup.' },
                { title: '2. Context Assembly', desc: 'Nexi queries XNCH memory for relevant episodes, learned patterns, and policy references. The 4-layer memory system retrieves sensory signals, working memory, episodic history, and graph relationships.' },
                { title: '3. Option Generation & Filtering', desc: 'Nexi generates candidate actions via LiteLLM (with fallback chain). Each option is sent to XNCH for parallel dry-run policy evaluation. BLOCKed options are dropped; MODIFY verdicts alter the action spec.' },
                { title: '4. Scoring & Selection', desc: 'Surviving options receive a weighted composite score — policy alignment, expected outcome, risk, and context fit. The highest-scoring option is selected unless confidence is too low (triggers escalation).' },
                { title: '5. Authoritative Verdict', desc: 'The selected action is submitted to XNCH for binding re-evaluation. If allowed, XNCH issues a signed JWT execution token. BLOCK verdicts are written to the immutable decision ledger.' },
                { title: '6. Execution & Outcome', desc: 'The signed payload is dispatched to the execution runner. On completion, the outcome is sent back through XNCH, which computes a prediction delta and triggers the next learning cycle if needed.' },
              ].map((item, i) => (
                <div key={i} className={`flex items-start space-x-6 fade-in fade-in-delay-${Math.min(i, 4)}`}>
                  <span className="text-xs font-medium text-accent tracking-wider flex-shrink-0 w-6">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="text-lg font-light tracking-tight mb-2">{item.title}</h3>
                    <p className="text-premium text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-25">
          <div className="container-architectural">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-16 fade-in">Design Principles</h2>
            <div className="grid md:grid-cols-3 gap-10 fade-in fade-in-delay-1">
              {[
                { title: 'Graceful Degradation', desc: 'Every component has a fallback. If vLLM is down, LiteLLM routes to a secondary model, then llama.cpp, then rule-based templates. No single point of failure stops the system.' },
                { title: 'Observability by Default', desc: 'Every LLM call, policy evaluation, and verdict is traced via Langfuse. System events are written to a JSONL audit file. The decision ledger is append-only and immutable.' },
                { title: 'State Versioning', desc: 'Every state change increments a version counter. XNCH and Nexi verify state version alignment before proceeding. Stale state is detected and rejected.' },
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="text-lg font-light tracking-tight mb-4">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-architectural text-center">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-12 fade-in">Deployment</h2>
            <p className="text-lg md:text-xl text-premium max-w-3xl mx-auto mb-16 fade-in fade-in-delay-1">
              Two physical nodes, Kubernetes, no cloud dependency for inference. Full deployment in under 30 commands.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left fade-in fade-in-delay-2">
              <div className="border-subtle p-8">
                <h3 className="text-base font-medium tracking-tight mb-1">Memory Node (i7)</h3>
                <p className="text-xs text-gray-500 mb-6">kubectl label node i7-node role=memory</p>
                <div className="space-y-1">
                  {[
                    'XNCH Server (port 8001)',
                    'PostgreSQL + pgvector',
                    'Redis (sensory + working memory)',
                    'Kuzu graph database',
                    'agentmemory',
                  ].map((item) => (
                    <div key={item} className="flex items-center space-x-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-subtle p-8">
                <h3 className="text-base font-medium tracking-tight mb-1">Inference Node (i9)</h3>
                <p className="text-xs text-gray-500 mb-6">kubectl label node i9-node role=inference</p>
                <div className="space-y-1">
                  {[
                    'Nexi Server (port 8000)',
                    'vLLM with NVIDIA GPU ≥20Gi VRAM',
                    'LiteLLM proxy (port 4000)',
                    'llama.cpp (CPU fallback)',
                    'Langfuse observability',
                  ].map((item) => (
                    <div key={item} className="flex items-center space-x-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-12 fade-in fade-in-delay-3">
              <Link href="/xnch" className="inline-flex items-center text-gray-800 hover:text-accent font-light tracking-wide text-sm transition-colors duration-200">
                Explore the control plane in depth →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

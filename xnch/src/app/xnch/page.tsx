import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Button from '@/components/ds/Button'
import FeatureCard from '@/components/ds/FeatureCard'
import BorderCard from '@/components/ds/BorderCard'
import SectionHeader from '@/components/ds/SectionHeader'

const memoryLayers = [
  {
    layer: 'Layer 0',
    title: 'Sensory Buffer',
    description: 'Redis-backed perception signals — voice, vision, file events. High-throughput, ephemeral, auto-evicted. The system\'s immediate awareness of its environment.',
    detail: 'Silence detection, screen diff monitoring, idle timeout.',
  },
  {
    layer: 'Layer 1',
    title: 'Working Memory',
    description: 'Redis session context for active conversations. Preserves recent turns, current intent, and ephemeral state. TTL-bound, auto-expires after session timeout.',
    detail: 'Session TTL: 120s. Supports concurrent contexts per actor.',
  },
  {
    layer: 'Layer 2',
    title: 'Episodic Store',
    description: 'PostgreSQL with pgvector for persistent decision history. Each episode records an intent, action, outcome, and prediction delta. Supports semantic similarity search across past episodes.',
    detail: 'Vector embeddings enable recall of relevant past decisions, not just exact matches.',
  },
  {
    layer: 'Layer 3',
    title: 'Pattern Store & Graph',
    description: 'Extracted behavioral patterns stored in SQLite, with a Kuzu graph database for entity relationships. Patterns are mined every 6 hours — clusters of successful (or failed) decision sequences that inform future policy.',
    detail: 'Pattern extraction requires ≥10 observations. Success rates, confidence scores, and context signatures drive continuous improvement.',
  },
]

const beliefs = [
  'Intelligence must be guided, not just scaled.',
  'Technology should deepen human capability, not erode it.',
  'Calm, thoughtful systems will outlast reactive ones.',
  'Serious infrastructure is built quietly before it is recognized loudly.',
]

export default function XNCHPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        <section className="section-padding">
          <div className="container-narrow">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-16 text-balance fade-in">
              XNCH is the control plane for responsible intelligence.
            </h1>
            <div className="space-y-12 fade-in fade-in-delay-1">
              <p className="text-lg md:text-xl text-premium">
                A FastAPI service managing every layer of AI governance — authentication, 4-tier memory, policy enforcement, audit, and autonomous learning. Deployed on a dedicated memory node, it is the source of truth for every decision an AI system makes.
              </p>
              <p className="text-lg md:text-xl text-premium">
                XNCH does not generate responses. It provides the structure within which intelligent systems operate safely.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-25">
          <div className="container-narrow">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-12 fade-in">Core Beliefs</h2>
            <div className="space-y-8">
              {beliefs.map((belief, i) => (
                <div key={i} className={`flex items-start space-x-6 fade-in fade-in-delay-${i + 1}`}>
                  <div className="w-1 h-1 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg md:text-xl text-premium">{belief}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-narrow">
            <SectionHeader
              title="Memory System"
              intro="XNCH implements a 4-tier memory architecture. Each layer serves a distinct purpose, balancing speed, persistence, and abstraction."
            />
            <div className="space-y-12">
              {memoryLayers.map((mem, i) => (
                <BorderCard
                  key={i}
                  label={mem.layer}
                  title={mem.title}
                  detail={mem.detail}
                  className={`fade-in fade-in-delay-${i + 1}`}
                >
                  {mem.description}
                </BorderCard>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-25">
          <div className="container-narrow">
            <SectionHeader
              title="Policy Engine"
              intro="Every action proposed by an AI system passes through XNCH's policy engine before execution. Policies are defined as YAML rule sets, loaded from versioned directories, and evaluated against the current system state."
            />
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard title="Dry-Run Check">
                Policy alignment is evaluated before a final decision is made. Warnings, modifications, or blocks are returned without side effects.
              </FeatureCard>
              <FeatureCard title="Authoritative Verdict">
                A second, binding evaluation issues a signed JWT execution token. BLOCK verdicts are written to the immutable decision ledger.
              </FeatureCard>
              <FeatureCard title="Autonomous Candidates">
                The system analyzes past outcomes and generates new policy candidates. Each candidate can be reviewed and approved through governance.
              </FeatureCard>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-narrow">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-16 fade-in">Governance</h2>
            <div className="space-y-12">
              {[
                {
                  title: 'Actor Model',
                  desc: 'Every entity that interacts with the system has a role (ADMIN, OPERATOR, VIEWER, AGENT) and a capability set. Capabilities define what actions an actor is permitted to execute.',
                },
                {
                  title: 'Weight Configuration',
                  desc: 'Decision-making weights (policy score, outcome score, risk score, context fit) are configurable per intent class. Changes go through a propose-approve flow with versioning.',
                },
                {
                  title: 'Decision Ledger',
                  desc: 'All verdicts and policy decisions are written to an append-only audit trail. Every BLOCK is recorded with its full context for later review.',
                },
              ].map((item, i) => (
                <div key={i} className={`fade-in fade-in-delay-${i + 1}`}>
                  <h3 className="text-xl font-light tracking-tight mb-4">{item.title}</h3>
                  <p className="text-premium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-25">
          <div className="container-narrow">
            <SectionHeader
              title="Autonomous Learning"
              intro="XNCH runs a continuous learning loop at 6-hour intervals. Three subsystems operate autonomously:"
            />
            <div className="space-y-8">
              <FeatureCard title="Pattern Extractor">
                Mines episodic data for recurring decision patterns — clusters of successful or failed sequences — and stores them with confidence scores.
              </FeatureCard>
              <FeatureCard title="Score Adapter">
                Evaluates the accuracy of past scoring decisions. If accuracy falls below a configurable threshold (default 0.6), flags the weight configuration for review.
              </FeatureCard>
              <FeatureCard title="Policy Candidate Generator">
                Synthesizes new policy rules from observed patterns. Generated candidates remain in a PENDING state until approved through governance.
              </FeatureCard>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-narrow">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-16 fade-in">Security &amp; Observability</h2>
            <div className="grid md:grid-cols-2 gap-8 fade-in fade-in-delay-1">
              <FeatureCard title="5-Level Trust Model">
                Inputs are classified by trust level. Higher-risk inputs face stricter policy evaluation and may require human-in-the-loop escalation.
              </FeatureCard>
              <FeatureCard title="Injection Guard">
                All inputs are scanned for prompt injection attempts before reaching any LLM. Detected violations are logged and blocked.
              </FeatureCard>
              <FeatureCard title="Langfuse Tracing">
                Every LLM call, policy evaluation, and verdict is traced for observability. Full audit trail for debugging and compliance.
              </FeatureCard>
              <FeatureCard title="Event Log">
                System events are written to a JSONL audit file. Startup, shutdown, state changes, and anomalies are all recorded.
              </FeatureCard>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-25">
          <div className="container-narrow">
            <SectionHeader
              title="The Stack"
              intro="XNCH runs on two dedicated Kubernetes nodes — no cloud dependency for inference."
            />
            <div className="grid md:grid-cols-2 gap-8">
              <FeatureCard title="Memory Node (i7)">
                <p className="text-xs text-gray-500 mb-3">Port 8001</p>
                <div className="space-y-2">
                  {['PostgreSQL + pgvector', 'Redis', 'Kuzu Graph DB', 'SQLite', 'agentmemory'].map((item) => (
                    <div key={item} className="flex items-center space-x-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </FeatureCard>
              <FeatureCard title="Inference Node (i9)">
                <p className="text-xs text-gray-500 mb-3">NVIDIA GPU, ≥20Gi VRAM</p>
                <div className="space-y-2">
                  {['vLLM (primary inference)', 'LiteLLM Proxy (routing)', 'Gemma4 (default model)', 'llama.cpp (fallback)', 'Langfuse (observability)'].map((item) => (
                    <div key={item} className="flex items-center space-x-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </FeatureCard>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-narrow">
            <div className="border-l border-gray-300 pl-12 fade-in">
              <p className="text-lg md:text-xl text-gray-600 italic">
                We avoid startup clichés like &apos;revolutionary&apos;, &apos;disrupting&apos;, &apos;cutting-edge&apos;. Instead, we focus on building infrastructure that matters.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-25">
          <div className="container-narrow text-center">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-12 fade-in">Nexi</h2>
            <div className="space-y-12 fade-in fade-in-delay-1">
              <p className="text-lg md:text-xl text-premium">
                XNCH&apos;s first product — the adaptive AI that runs on top of this infrastructure. Nexi implements a 15-step decision pipeline with a YAML-defined character, policy alignment, and execution dispatch.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button href="/nexi">Learn about Nexi →</Button>
                <Button href="/architecture" variant="text">System Architecture →</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

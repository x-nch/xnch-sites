import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Button from '@/components/ds/Button'
import FeatureCard from '@/components/ds/FeatureCard'
import SectionHeader from '@/components/ds/SectionHeader'

const pipelineSteps = [
  { step: '01', title: 'Input Validation', desc: 'Request is parsed into a typed SessionContext — actor identity, raw input, priority, idempotency key, system state version.' },
  { step: '02', title: 'Intent Interpretation', desc: 'Two-stage classifier: rule-based pre-filter (regex patterns, confidence 1.0) with LLM fallback. Detects injection attacks. Flags ambiguous inputs for clarification.' },
  { step: '03', title: 'Context Manifest Loading', desc: 'XNCH memory is queried for relevant episodes, learned patterns, and scoped policy references matching the intent class and entity type.' },
  { step: '04', title: 'Weight Config Retrieval', desc: 'Active decision weights for the intent class are loaded from XNCH governance. Each weight (policy, outcome, risk, context fit) tunes how options are scored.' },
  { step: '05', title: 'Option Generation', desc: 'LiteLLM proxy generates N candidate action options via structured JSON output. Falls back through vLLM, llama.cpp, then rule-based templates if inference is unavailable.' },
  { step: '06', title: 'Policy Alignment Filter', desc: 'All options are sent to XNCH for parallel dry-run policy evaluation. BLOCKed options are dropped. MODIFY verdicts replace the action spec.' },
  { step: '07', title: 'Scoring', desc: 'Each surviving option receives a weighted composite score across four dimensions: policy alignment, expected outcome (from pattern history), risk (reversibility, sensitivity, side effects), and context fit.' },
  { step: '08', title: 'Outcome Simulation', desc: 'The top-2 riskiest options receive forward state projection. A risk penalty is applied if pattern history indicates violation risk.' },
  { step: '09', title: 'Selection', desc: 'The highest-scoring option is selected. Confidence is measured as the spread between best and second-best. Low confidence triggers escalation.' },
  { step: '10', title: 'Plan Compilation', desc: 'The selected action spec is validated and compiled into a DAG node. Currently single-node; designed for multi-step plan expansion.' },
  { step: '11', title: 'Authoritative Verdict', desc: 'XNCH re-evaluates the selected action and issues a signed JWT execution token. BLOCK verdicts are written to the immutable decision ledger.' },
  { step: '12', title: 'Execution Dispatch', desc: 'The signed payload — execution token, action spec, trace context — is dispatched to the execution runner.' },
]

const proactivityTriggers = [
  { trigger: 'Stale Patterns', condition: 'Failure rate > 60% in any pattern cluster', action: 'Surfaces underperforming patterns for review' },
  { trigger: 'Consolidation Stale', condition: '> 25 hours since last learning loop run', action: 'Alerts that the learning pipeline may need attention' },
  { trigger: 'Inference Down', condition: 'vLLM health check fails', action: 'Triggers fallback chain notification' },
  { trigger: 'Learning Loop Silence', condition: 'Pattern extractor silent > 7 hours', action: 'Raises an observation for investigation' },
]

const modelFallbacks = [
  { priority: 'Primary', model: 'Gemma4 via vLLM', timeout: '30s', note: 'Full GPU-accelerated inference on the i9 node', accent: true },
  { priority: 'Fallback 1', model: 'LiteLLM Proxy', timeout: '60s', note: 'Routes through configured model endpoints', accent: false },
  { priority: 'Fallback 2', model: 'vLLM Secondary', timeout: '45s', note: 'Alternative model or endpoint', accent: false },
  { priority: 'Fallback 3', model: 'llama.cpp', timeout: '120s', note: 'CPU-based inference for degraded mode', accent: false },
  { priority: 'Emergency', model: 'Rule-Based Templates', timeout: 'instant', note: 'Structured option generation without LLM. No intelligence, but no outage.', accent: false },
]

export default function NexiPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        <section className="section-padding">
          <div className="container-narrow">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-16 text-balance fade-in">
              Nexi is an adaptive AI with a decision pipeline, not a chat endpoint.
            </h1>
            <div className="space-y-12 fade-in fade-in-delay-1">
              <p className="text-lg md:text-xl text-premium">
                Most AI systems accept input and generate output. Nexi runs every request through a 15-step pipeline — from intent classification through policy alignment, scoring, and execution dispatch. Each step is observable, auditable, and subject to governance.
              </p>
              <p className="text-lg md:text-xl text-premium">
                XNCH&apos;s first system. Deployed on a dedicated inference node with GPU-accelerated inference, a YAML-defined character, and continuous learning.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-25">
          <div className="container-narrow">
            <SectionHeader
              title="Decision Pipeline"
              intro="Every session passes through 12 sequential stages before an action is dispatched. Two additional stages handle outcome processing and learning."
            />
            <div className="space-y-0">
              {pipelineSteps.map((step, i) => (
                <div key={i} className={`flex items-start space-x-6 md:space-x-10 pb-10 relative fade-in fade-in-delay-${Math.min(i, 4)}`}>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 flex items-center justify-center bg-white flex-shrink-0">
                      <span className="text-xs font-medium text-gray-500">{step.step}</span>
                    </div>
                    {i < pipelineSteps.length - 1 && (
                      <div className="w-px h-full bg-gray-200 mt-2"></div>
                    )}
                  </div>
                  <div className="pt-2 pb-6">
                    <h3 className="text-lg md:text-xl font-light tracking-tight mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-narrow">
            <SectionHeader title="Character System" />
            <div className="space-y-12 fade-in fade-in-delay-1">
              <p className="text-lg md:text-xl text-premium">
                Nexi is not a generic language model wrapper. It has a defined persona, loaded from a YAML character file at runtime and compiled into every system prompt.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <FeatureCard title="Persona Definition">
                  A complete character archetype — tone, communication style, core traits, and behavioral rules defined in structured YAML.
                </FeatureCard>
                <FeatureCard title="Non-Negotiables">
                  Hard-coded behavioral boundaries — privacy first, local first, never suggests cloud when local works, never forgets context.
                </FeatureCard>
                <FeatureCard title="Hard Rules">
                  Late-night work detection, repeated context recognition, achievement recognition, and crisis response protocols.
                </FeatureCard>
                <FeatureCard title="Disagreement Protocol">
                  The character is designed to push back when appropriate — emotional awareness, room reading, and dry observational humor are part of the communication model.
                </FeatureCard>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-25">
          <div className="container-narrow">
            <SectionHeader
              title="Proactivity Engine"
              intro="Nexi does not wait for input. A background engine monitors system health and behavior patterns, surfacing observations without being asked."
            />
            <div className="space-y-6">
              {proactivityTriggers.map((item, i) => (
                <div key={i} className="bg-white border-subtle p-6 md:p-8">
                  <div className="grid md:grid-cols-3 gap-4 md:gap-8">
                    <div>
                      <span className="text-xs font-medium tracking-wider text-accent uppercase">Trigger</span>
                      <p className="text-sm font-medium mt-1">{item.trigger}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium tracking-wider text-gray-500 uppercase">Condition</span>
                      <p className="text-sm text-gray-600 mt-1">{item.condition}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium tracking-wider text-gray-500 uppercase">Action</span>
                      <p className="text-sm text-gray-600 mt-1">{item.action}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-8">Maximum 5 proactive messages per day. Never during deep work. Never nags the same thing twice.</p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-narrow">
            <SectionHeader
              title="Model Architecture"
              intro="Nexi routes every request through a configurable inference chain with automatic fallback. No single point of failure for intelligence generation."
            />
            <div className="border-subtle">
              {modelFallbacks.map((item, i) => (
                <div key={i} className={`flex items-center justify-between px-6 py-4 ${i < modelFallbacks.length - 1 ? 'border-b border-gray-200' : ''} ${item.accent ? 'bg-gray-25' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <span className={`text-xs font-medium tracking-wider uppercase ${item.accent ? 'text-accent' : 'text-gray-500'}`}>{item.priority}</span>
                    <span className="text-sm text-gray-900">{item.model}</span>
                  </div>
                  <div className="flex items-center space-x-6">
                    <span className="text-xs text-gray-400">{item.timeout}</span>
                    <span className="text-xs text-gray-500 max-w-xs text-right hidden md:block">{item.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-25">
          <div className="container-narrow text-center">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-12 fade-in">Development Status</h2>
            <div className="space-y-12 fade-in fade-in-delay-1">
              <p className="text-lg md:text-xl text-premium">
                Nexi is in active development. Core behavioral frameworks, the decision pipeline, and character system are operational. Public access is not yet available.
              </p>
              <div className="bg-white border-subtle p-8 lg:p-12">
                <p className="text-lg md:text-xl text-premium">
                  We are working with a small group of partners to refine the system before broader release.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button href="/early-circle">Join Early Circle</Button>
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

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Button from '@/components/ds/Button'
import FeatureCard from '@/components/ds/FeatureCard'

export default function PerspectivesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        <section className="section-padding">
          <div className="container-narrow">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-16 text-balance fade-in">Perspectives</h1>
            <div className="space-y-24">
              <p className="text-lg md:text-xl text-premium text-center max-w-4xl mx-auto fade-in fade-in-delay-1">
                Thought pieces and research on the future of intelligent systems, behavioral alignment, and the architectural decisions that shape responsible AI.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-25">
          <div className="container-narrow">
            <div className="space-y-20">
              <article className="space-y-12 fade-in">
                <h2 className="text-2xl md:text-3xl font-light tracking-tight">
                  Why We Built a 4-Layer Memory System
                </h2>
                <div className="space-y-8">
                  <p className="text-lg md:text-xl text-premium leading-relaxed">
                    Most AI systems have one kind of memory. A context window. A vector store. A chat history file. Each works for narrow use cases, but none is sufficient for an AI that needs to learn, adapt, and remain aligned over time.
                  </p>
                  <p className="text-lg md:text-xl text-premium leading-relaxed">
                    We built a 4-layer memory architecture because different timescales require different substrates. Sensory data (voice, vision, file events) is ephemeral and high-throughput — Redis handles this. Working memory needs fast access and TTL-bound expiry — also Redis, but with session isolation. Episodic memory needs persistence, semantic search, and vector similarity — PostgreSQL with pgvector. And pattern memory needs graph relationships and cross-session abstraction — Kuzu for the graph, SQLite for extracted patterns.
                  </p>
                  <p className="text-lg md:text-xl text-premium leading-relaxed">
                    The key insight is not technical — it is architectural. By separating layers, each can be tuned independently. Sensory buffer can be flushed aggressively without losing episodic history. Patterns can be re-extracted from raw episodes without corruption. Each layer has its own performance characteristics, backup strategy, and security model.
                  </p>
                  <div className="border-l border-gray-300 pl-8">
                    <p className="text-premium">
                      The result is a memory system that does not require choosing between speed and persistence. It has both — because the layers are distinct, not merged.
                    </p>
                  </div>
                </div>
              </article>

              <article className="space-y-12 fade-in fade-in-delay-1">
                <h2 className="text-2xl md:text-3xl font-light tracking-tight">
                  Policy-First AI Architecture
                </h2>
                <div className="space-y-8">
                  <p className="text-lg md:text-xl text-premium leading-relaxed">
                    The standard approach to AI safety is reactive: train a model, observe failures, patch them. Fine-tuning, RLHF, system prompts — all applied after the model is built. This works for today&apos;s capabilities, but it does not scale to more powerful systems.
                  </p>
                  <p className="text-lg md:text-xl text-premium leading-relaxed">
                    Policy-first architecture inverts this. The policy engine is not a layer on top of the AI — it is the foundation. Every action the AI proposes must pass through policy evaluation before it can be executed. Not as a suggestion. As a gate.
                  </p>
                  <div className="space-y-6">
                    <FeatureCard title="Two-Stage Evaluation">
                      <p className="text-premium">
                        The first stage is a dry-run — policy alignment check without side effects. The second is the authoritative verdict, which issues a signed execution token. This separation means the AI can explore options freely in stage one, but only one approved option reaches stage two. BLOCKs are immutable — written to a decision ledger that cannot be altered.
                      </p>
                    </FeatureCard>
                    <FeatureCard title="Self-Improving Governance">
                      <p className="text-premium">
                        Policies are not static. Every 6 hours, the system analyzes decision outcomes, identifies patterns of success and failure, and generates new policy candidates. These candidates remain in a PENDING state — they do not take effect until approved through governance. The system learns, but it cannot change its own rules without oversight.
                      </p>
                    </FeatureCard>
                  </div>
                  <p className="text-lg md:text-xl text-premium leading-relaxed">
                    This is not slower. It is safer. And because policy evaluation is cheap compared to LLM inference, the overhead is negligible.
                  </p>
                </div>
              </article>

              <article className="space-y-12 fade-in fade-in-delay-2">
                <h2 className="text-2xl md:text-3xl font-light tracking-tight">
                  Why Behavioral Awareness Matters More Than Capability Scaling
                </h2>
                <div className="space-y-8">
                  <p className="text-lg md:text-xl text-premium leading-relaxed">
                    The AI conversation today is dominated by capability metrics — parameters, benchmarks, performance scores. We are asking a different question: not just &quot;what can AI do?&quot; but &quot;how should AI behave?&quot;
                  </p>
                  <p className="text-lg md:text-xl text-premium leading-relaxed">
                    This shift from capability to behavior is crucial. An AI that can write brilliant code but does not consider the economic implications of automation is incomplete. An AI that can reason flawlessly but does not recognize when to defer to human judgment is dangerous. Behavioral intelligence is not about limiting capability — it is about channeling it toward genuinely beneficial outcomes.
                  </p>
                  <div className="border-l border-gray-300 pl-8">
                    <p className="text-premium">
                      We are moving from &quot;AI as tool&quot; to &quot;AI as evolving entity&quot; — one that needs moral frameworks, contextual awareness, and the wisdom to know when not to use its power.
                    </p>
                  </div>
                </div>
              </article>

              <article className="space-y-12 fade-in fade-in-delay-3">
                <h2 className="text-2xl md:text-3xl font-light tracking-tight">
                  A Critique of Current Alignment Approaches
                </h2>
                <div className="space-y-8">
                  <p className="text-lg md:text-xl text-premium leading-relaxed">
                    Most alignment research focuses on either controlling AI outputs through constitutional constraints or training systems to follow human preferences. Both approaches miss something fundamental: they treat AI as static optimization problems rather than dynamic systems that co-evolve with human society.
                  </p>
                  <div className="space-y-6">
                    <FeatureCard title="The Missing Layer: Temporal Awareness">
                      <p className="text-premium">
                        Current alignment frameworks are largely atemporal. They do not sufficiently account for how values shift, how contexts change, how what constitutes &quot;good behavior&quot; evolves. A well-aligned AI system needs to understand not just current human values, but the trajectory of how those values change over time.
                      </p>
                    </FeatureCard>
                    <FeatureCard title="The Privacy Paradox">
                      <p className="text-premium">
                        Most alignment methods require vast amounts of human data and feedback, creating a fundamental tension: to build aligned AI, we must violate the very privacy we hope AI systems will protect. True behavioral intelligence requires learning principles without requiring exposure to private behaviors.
                      </p>
                    </FeatureCard>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-narrow text-center">
            <div className="space-y-16 fade-in">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight">Stay Informed</h2>
              <div className="space-y-8">
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                  Join our Early Circle to be notified when new perspectives are published.
                </p>
                <Button href="/early-circle">Join Early Circle →</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

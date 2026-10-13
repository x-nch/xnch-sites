import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function AIWithoutIllusionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container-architectural text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-12 text-balance">
              AI Without Illusions
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto text-premium">
              A small-group strategy session for leaders who need to navigate artificial intelligence with clarity, not hype.
            </p>
          </div>
        </section>

        {/* What This Is */}
        <section className="section-padding bg-gray-25">
          <div className="container-architectural">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-16 text-center">
              What this is
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-premium mb-8">
                This is not a webinar. It is not an online course. It is a carefully facilitated strategy session for maximum eight participants, designed to cut through the noise and develop a grounded approach to artificial intelligence.
              </p>
              <p className="text-lg md:text-xl text-premium">
                Over three hours, we will examine your organization's relationship to AI through the lens of behavioral intelligence, long-term thinking, and human alignment. The goal is not to sell you AI solutions, but to help you build the mental models needed to make thoughtful decisions in a rapidly changing landscape.
              </p>
            </div>
          </div>
        </section>

        {/* What We Will Explore */}
        <section className="section-padding">
          <div className="container-architectural">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-16 text-center">
              What we will explore
            </h2>
            <div className="max-w-3xl mx-auto space-y-12">
              <div>
                <h3 className="text-xl md:text-2xl font-light tracking-tight mb-4">The intelligence timeline</h3>
                <p className="text-lg text-premium">
                  Understanding where we are, what comes next, and how to position your organization for different scenarios without overreacting to current capabilities.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl md:text-2xl font-light tracking-tight mb-4">Behavioral alignment</h3>
                <p className="text-lg text-premium">
                  Moving beyond capability questions to ask: How should intelligent systems behave? What does responsible integration look like in your context?
                </p>
              </div>
              
              <div>
                <h3 className="text-xl md:text-2xl font-light tracking-tight mb-4">Strategic patience</h3>
                <p className="text-lg text-premium">
                  Identifying where to move quickly, where to wait, and how to build systems that remain valuable as artificial intelligence evolves.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl md:text-2xl font-light tracking-tight mb-4">Human capability enhancement</h3>
                <p className="text-lg text-premium">
                  Designing approaches that deepen human judgment rather than replace it, ensuring your teams become more valuable as AI advances.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="section-padding bg-gray-25">
          <div className="container-architectural">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-16 text-center">
              Who this is for
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-premium mb-12">
                This session is designed for senior leaders who make strategic decisions about technology adoption and organizational direction. Participants typically include:
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-px h-6 bg-gray-400 mt-2"></div>
                  <div>
                    <h3 className="text-lg font-light tracking-tight mb-2">CEOs and founders</h3>
                    <p className="text-premium">Who need to understand AI's strategic implications without getting lost in technical details</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-px h-6 bg-gray-400 mt-2"></div>
                  <div>
                    <h3 className="text-lg font-light tracking-tight mb-2">CTOs and technology leaders</h3>
                    <p className="text-premium">Who are responsible for building long-term technical strategies in an uncertain environment</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-px h-6 bg-gray-400 mt-2"></div>
                  <div>
                    <h3 className="text-lg font-light tracking-tight mb-2">Executives in strategy, operations, or innovation</h3>
                    <p className="text-premium">Who must guide their organizations through fundamental shifts in how work gets done</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Format */}
        <section className="section-padding">
          <div className="container-architectural">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-16 text-center">
              Format
            </h2>
            <div className="max-w-3xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <div className="text-4xl font-light tracking-tight text-gray-400">3 hours</div>
                <p className="text-lg text-premium">Focused, intensive discussion</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="text-4xl font-light tracking-tight text-gray-400">Maximum 8 participants</div>
                <p className="text-lg text-premium">Ensuring meaningful engagement</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="text-4xl font-light tracking-tight text-gray-400">Live session</div>
                <p className="text-lg text-premium">No recordings — this creates a space for open conversation</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="text-4xl font-light tracking-tight text-gray-400">Strategic framework</div>
                <p className="text-lg text-premium">You leave with a mental model, not a checklist</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section-padding bg-gray-25">
          <div className="container-architectural">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-16 text-center">
              Investment
            </h2>
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <div className="text-5xl md:text-6xl font-light tracking-tight">$12,000</div>
                <p className="text-lg text-premium">per participant</p>
              </div>
              
              <p className="text-premium">
                This includes the three-hour session, preparatory materials, and post-session strategic summary. 
                Participants also receive priority access to XNCH's research and perspectives on behavioral intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gray-900 text-white">
          <div className="container-architectural text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-12">
              Apply for the next session
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-16 max-w-3xl mx-auto opacity-90">
              Spaces are limited to ensure quality of discussion. We carefully select participants to create a diverse, high-caliber group.
            </p>
            
            <div className="space-y-6">
              <Link 
                href="https://calendly.com/xnch/ai-without-illusions"
                className="inline-flex items-center bg-white text-gray-900 px-8 py-4 text-sm font-light tracking-wide hover:bg-gray-100 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule a conversation →
              </Link>
              
              <p className="text-sm opacity-75">
                Or email <a href="mailto:sessions@xnch.ai" className="underline">sessions@xnch.ai</a> for more information
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
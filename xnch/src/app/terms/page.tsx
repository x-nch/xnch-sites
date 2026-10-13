import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="section-padding">
        <div className="container-narrow">
          <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-16 text-balance">
            Terms of Use
          </h1>
          
          <div className="space-y-12">
            <p className="text-premium">
              These terms govern your use of XNCH's services and communications. By engaging with us, you agree to this approach of thoughtful, long-term thinking.
            </p>
            
            <div className="space-y-8">
              <h2 className="text-2xl font-light tracking-tight">Our Commitment</h2>
              <p className="text-premium">
                We're committed to building responsible intelligence systems. This means prioritizing safety, transparency, and human values over rapid growth or capability scaling.
              </p>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-2xl font-light tracking-tight">Community Standards</h2>
              <p className="text-premium">
                Early Circle and our platforms are spaces for thoughtful dialogue. We expect participants to engage constructively, respect diverse perspectives, and contribute to the conversation about how intelligent systems should behave.
              </p>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-2xl font-light tracking-tight">Intellectual Property</h2>
              <p className="text-premium">
                Our research, perspectives, and technical approaches are shared to advance the field. We believe open dialogue about AI alignment benefits everyone, while protecting the core innovations that make our approach unique.
              </p>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-2xl font-light tracking-tight">Contact</h2>
              <p className="text-premium">
                Questions about these terms or our approach?
              </p>
              <p className="text-premium">
                Email: <a href="mailto:legal@xnch.ai" className="text-accent hover:underline">legal@xnch.ai</a>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
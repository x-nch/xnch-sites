import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="section-padding">
        <div className="container-narrow">
          <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-16 text-balance">
            Privacy Policy
          </h1>
          
          <div className="space-y-12">
            <p className="text-premium">
              At XNCH, privacy isn't an afterthought — it's foundational to how we build intelligent systems.
            </p>
            
            <div className="space-y-8">
              <h2 className="text-2xl font-light tracking-tight">Data We Don't Collect</h2>
              <p className="text-premium">
                Our systems are designed with privacy-by-default. We don't collect personal data for training, we don't profile users, and we don't build surveillance capabilities into our products.
              </p>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-2xl font-light tracking-tight">How We Work</h2>
              <p className="text-premium">
                Nexi learns principles and patterns, not personal behaviors. When you interact with our systems, your data remains under your control. We believe true AI alignment requires respecting human autonomy from day one.
              </p>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-2xl font-light tracking-tight">Contact</h2>
              <p className="text-premium">
                Questions about privacy at XNCH? We're transparent about our practices and happy to discuss.
              </p>
              <p className="text-premium">
                Email: <a href="mailto:privacy@xnch.ai" className="text-accent hover:underline">privacy@xnch.ai</a>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
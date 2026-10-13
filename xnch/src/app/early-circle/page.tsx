'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function EarlyCirclePage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // UI only - no backend integration yet
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail('')
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        <section className="section-padding">
          <div className="container-narrow text-center mb-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-12 text-balance">
              Early Circle
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Join a small group of thoughtful individuals building the future of responsible intelligence.
            </p>
          </div>
          
          <div className="container-narrow">
            <div className="bg-gray-25 p-12 lg:p-16 mb-16">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-12 text-center">
                What Early Circle Members Receive
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-xl font-light tracking-tight">Early Access</h3>
                  <p className="text-premium">
                    Be among the first to experience Nexi and provide feedback that shapes its development.
                  </p>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-light tracking-tight">Direct Insight</h3>
                  <p className="text-premium">
                    Regular updates on our research, architecture decisions, and philosophical approach.
                  </p>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-light tracking-tight">Community</h3>
                  <p className="text-premium">
                    Connect with others who are deeply thinking about the future of intelligent systems.
                  </p>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-light tracking-tight">Influence</h3>
                  <p className="text-premium">
                    Your perspectives and feedback directly influence how we build and deploy our technology.
                  </p>
                </div>
              </div>
            </div>
            
            {!isSubmitted ? (
              <div className="bg-gray-900 text-white p-12 lg:p-16">
                <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-12 text-center">
                  Apply to Join
                </h2>
                <div className="space-y-12 mb-16">
                  <p className="text-lg opacity-90 text-center max-w-4xl mx-auto">
                    Early Circle is limited to ensure meaningful engagement. We're building a carefully curated community of people who understand that the shape of intelligence matters as much as its capabilities.
                  </p>
                  
                  <div className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl p-8 space-y-8">
                    <h3 className="text-xl font-light tracking-tight text-center">Who We're Seeking</h3>
                    <div className="space-y-6 text-left">
                      <p className="text-sm opacity-90">
                        <strong>Researchers & Philosophers:</strong> Those thinking deeply about alignment, ethics, and the nature of intelligence beyond technical metrics
                      </p>
                      <p className="text-sm opacity-90">
                        <strong>Engineers & Builders:</strong> Technical founders who prioritize responsibility over growth, and want to build differently
                      </p>
                      <p className="text-sm opacity-90">
                        <strong>Policy & Governance Experts:</strong> People working on the regulatory and societal frameworks that will shape AI's role
                      </p>
                      <p className="text-sm opacity-90">
                        <strong>Investors & Founders:</strong> Long-term thinkers who understand that the biggest opportunities lie in responsible approaches
                      </p>
                    </div>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-12 max-w-2xl mx-auto">
                  <div>
                    <label htmlFor="name" className="block text-sm font-light tracking-wide mb-4 opacity-90">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-6 py-4 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-light tracking-wide mb-4 opacity-90">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-6 py-4 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="interest" className="block text-sm font-light tracking-wide mb-4 opacity-90">
                      Why are you interested in XNCH's mission?
                    </label>
                    <textarea
                      id="interest"
                      name="interest"
                      required
                      rows={5}
                      className="w-full px-6 py-4 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your background and what draws you to our approach..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm font-light tracking-wide"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-white border-subtle p-12 lg:p-16 text-center">
                <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-8 text-gray-900">
                  Thank You
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Your application has been received. We'll review it carefully and be in touch soon.
                </p>
              </div>
            )}
            
            <div className="text-center mt-20">
              <p className="text-gray-500 text-sm mb-6">
                Questions about Early Circle?
              </p>
              <Link 
                href="/xnch"
                className="inline-flex items-center text-gray-800 hover:text-accent font-light tracking-wide text-sm transition-colors duration-200"
              >
                Learn more about XNCH →
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
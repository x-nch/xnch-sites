import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-subtle mt-32">
      <div className="container-architectural py-20">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-12 lg:space-y-0">
          <div className="space-y-4">
            <h3 className="text-2xl font-light tracking-tight">XNCH</h3>
            <p className="text-gray-600 text-lg leading-relaxed">Shaping how intelligent systems behave.</p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center space-y-8 sm:space-y-0 sm:space-x-10">
            <Link href="/xnch" className="text-gray-600 hover:text-gray-900 text-sm font-light tracking-wide transition-colors duration-200">XNCH</Link>
            <Link href="/nexi" className="text-gray-600 hover:text-gray-900 text-sm font-light tracking-wide transition-colors duration-200">Nexi</Link>
            <Link href="/architecture" className="text-gray-600 hover:text-gray-900 text-sm font-light tracking-wide transition-colors duration-200">Architecture</Link>
            <Link href="/perspectives" className="text-gray-600 hover:text-gray-900 text-sm font-light tracking-wide transition-colors duration-200">Perspectives</Link>
            <Link href="/early-circle" className="text-gray-600 hover:text-gray-900 text-sm font-light tracking-wide transition-colors duration-200">Early Circle</Link>
          </div>
        </div>
      </div>
      <div className="border-subtle">
        <div className="container-architectural py-8">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-12">
            <a href="mailto:founders@xnch.ai" className="text-gray-500 hover:text-gray-900 text-sm font-light tracking-wide transition-colors duration-200">Contact</a>
            <Link href="/privacy" className="text-gray-500 hover:text-gray-900 text-sm font-light tracking-wide transition-colors duration-200">Privacy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-900 text-sm font-light tracking-wide transition-colors duration-200">Terms</Link>
            <a href="https://x.com/xnch" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 text-sm font-light tracking-wide transition-colors duration-200">X</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

import Link from 'next/link'

interface NavigationProps {
  className?: string
}

export default function Navigation({ className = '' }: NavigationProps) {
  return (
    <nav className={`border-subtle bg-white ${className}`}>
      <div className="container-architectural py-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-3xl font-light tracking-tight text-gray-900 hover:text-gray-700 transition-colors duration-200">
            XNCH
          </Link>
          <div className="flex items-center space-x-10">
            <Link href="/xnch" className="text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm font-light tracking-wide">XNCH</Link>
            <Link href="/nexi" className="text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm font-light tracking-wide">Nexi</Link>
            <Link href="/architecture" className="text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm font-light tracking-wide">Architecture</Link>
            <Link href="/perspectives" className="text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm font-light tracking-wide">Perspectives</Link>
            <Link href="/ai-without-illusions" className="text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm font-light tracking-wide">AI Strategy</Link>
            <Link href="/early-circle" className="bg-gray-900 text-white px-6 py-3 text-sm font-light tracking-wide hover:bg-gray-800 transition-colors duration-200">Early Circle</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

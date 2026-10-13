import Link from 'next/link'

type ButtonVariant = 'primary' | 'white' | 'text'

interface ButtonProps {
  href: string
  children: React.ReactNode
  variant?: ButtonVariant
  external?: boolean
  className?: string
}

export default function Button({ href, children, variant = 'primary', external, className = '' }: ButtonProps) {
  const variants: Record<ButtonVariant, string> = {
    primary: 'inline-flex items-center bg-gray-900 text-white px-8 py-4 text-sm font-light tracking-wide hover:bg-gray-800 transition-colors duration-200',
    white: 'inline-flex items-center bg-white text-gray-900 px-8 py-4 text-sm font-light tracking-wide hover:bg-gray-100 transition-colors duration-200',
    text: 'inline-flex items-center text-gray-800 hover:text-accent font-light tracking-wide text-sm transition-colors duration-200',
  }

  const cls = `${variants[variant]} ${className}`
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <Link href={href} className={cls} {...externalProps}>
      {children}
    </Link>
  )
}

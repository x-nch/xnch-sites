type PillVariant = 'default' | 'accent'

interface PillProps {
  children: React.ReactNode
  variant?: PillVariant
  className?: string
}

export default function Pill({ children, variant = 'default', className = '' }: PillProps) {
  const variants: Record<PillVariant, string> = {
    default: 'pill',
    accent: 'pill-accent',
  }
  return <span className={`${variants[variant]} ${className}`}>{children}</span>
}

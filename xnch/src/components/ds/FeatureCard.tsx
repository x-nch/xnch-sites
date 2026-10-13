interface FeatureCardProps {
  title: string
  children: React.ReactNode
  className?: string
}

export default function FeatureCard({ title, children, className = '' }: FeatureCardProps) {
  return (
    <div className={`border-subtle p-8 ${className}`}>
      <h3 className="text-base font-medium tracking-tight mb-3">{title}</h3>
      <div className="text-sm text-gray-600 leading-relaxed">{children}</div>
    </div>
  )
}

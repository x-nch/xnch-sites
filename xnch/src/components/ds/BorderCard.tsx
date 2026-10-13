interface BorderCardProps {
  label?: string
  title: string
  children: React.ReactNode
  detail?: string
  className?: string
}

export default function BorderCard({ label, title, children, detail, className = '' }: BorderCardProps) {
  return (
    <div className={`border-l border-gray-300 pl-8 md:pl-12 ${className}`}>
      {label && <span className="text-xs font-medium tracking-wider text-accent uppercase">{label}</span>}
      <h3 className="text-xl md:text-2xl font-light tracking-tight mt-2 mb-4">{title}</h3>
      <div className="text-premium mb-3">{children}</div>
      {detail && <p className="text-sm text-gray-500">{detail}</p>}
    </div>
  )
}

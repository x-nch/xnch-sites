interface SectionHeaderProps {
  title: string
  intro?: React.ReactNode
  centered?: boolean
  className?: string
}

export default function SectionHeader({ title, intro, centered = false, className = '' }: SectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-16 fade-in">{title}</h2>
      {intro && (
        <p className="text-lg md:text-xl text-premium mb-16 fade-in fade-in-delay-1">{intro}</p>
      )}
    </div>
  )
}

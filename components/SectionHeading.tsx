interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeading({ label, title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      {label && (
        <p className="font-dm text-xs tracking-[0.25em] uppercase text-gold mb-4">{label}</p>
      )}
      <h2 className="font-cormorant font-light text-3xl md:text-5xl text-[#1A1A1A] leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="font-dm text-base text-[#6B6B6B] leading-relaxed max-w-2xl">{subtitle}</p>
      )}
    </div>
  )
}

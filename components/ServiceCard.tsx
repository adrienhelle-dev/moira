interface ServiceCardProps {
  title: string
  description: string
  index?: number
}

export default function ServiceCard({ title, description, index = 0 }: ServiceCardProps) {
  return (
    <div
      className="border-t border-[#E8E4DC] pt-6 group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <p className="font-dm text-[10px] tracking-[0.2em] uppercase text-gold mb-3">
        0{index + 1}
      </p>
      <h3 className="font-cormorant text-xl md:text-2xl font-light text-[#1A1A1A] mb-3 group-hover:text-gold transition-colors duration-300">
        {title}
      </h3>
      <p className="font-dm text-sm text-[#6B6B6B] leading-relaxed">{description}</p>
    </div>
  )
}

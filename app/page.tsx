import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import { SERVICES } from '@/lib/constants'

export const metadata = {
  title: 'Moïra Advisory — Boutique Real Estate & Investment Advisory, Paris',
  description: 'Redefining how you buy, manage, and experience urban property.',
}

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Value proposition */}
      <section className="py-20 md:py-32 bg-ivory">
        <div className="max-w-content mx-auto px-6 md:px-8">
          <p className="font-dm text-xs tracking-[0.25em] uppercase text-gold mb-12">What we do</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 md:py-32 bg-[#F5F3EE]">
        <div className="max-w-content mx-auto px-6 md:px-8">
          <div className="max-w-2xl">
            <p className="font-dm text-xs tracking-[0.25em] uppercase text-gold mb-8">Our philosophy</p>
            <p className="font-cormorant text-2xl md:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Our approach is selective, relationship-driven, and deeply rooted in lifestyle value as much as
              financial performance. We believe that the best real estate decisions sit at the intersection of
              rigorous analysis and refined taste.
            </p>
          </div>
        </div>
      </section>

      {/* Key figures */}
      <section className="py-20 md:py-32 bg-ivory border-t border-[#E8E4DC]">
        <div className="max-w-content mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {[
              { figure: '50M€+', label: 'Transaction volume advised' },
              { figure: 'Paris & beyond', label: 'Geographic focus' },
              { figure: 'Since 2023', label: 'Founded' },
            ].map(({ figure, label }) => (
              <div key={label} className="border-t border-[#E8E4DC] pt-8">
                <p className="font-cormorant font-light text-5xl md:text-6xl text-[#1A1A1A] mb-3">{figure}</p>
                <p className="font-dm text-sm text-[#6B6B6B] tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

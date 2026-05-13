import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import { getDictionary, langs, type Lang } from '@/lib/getDictionary'

export async function generateStaticParams() {
  return langs.map((lang) => ({ lang }))
}

export default async function HomePage({ params }: { params: { lang: string } }) {
  const lang = params.lang as Lang
  const dict = getDictionary(lang)
  const d = dict.home

  return (
    <>
      <Hero
        tagline={d.tagline}
        subtitle={d.subtitle}
        cta={{ label: d.cta, href: `/${lang}/contact` }}
        eyebrow={d.eyebrow}
      />

      <section className="py-20 md:py-32 bg-ivory">
        <div className="max-w-content mx-auto px-6 md:px-8">
          <p className="font-dm text-xs tracking-[0.25em] uppercase text-gold mb-12">{d.whatWeDoLabel}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {d.services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#F5F3EE]">
        <div className="max-w-content mx-auto px-6 md:px-8">
          <div className="max-w-2xl">
            <p className="font-dm text-xs tracking-[0.25em] uppercase text-gold mb-8">{d.philosophyLabel}</p>
            <p className="font-cormorant text-2xl md:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              {d.philosophyText}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-ivory border-t border-[#E8E4DC]">
        <div className="max-w-content mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {d.figures.map(({ figure, label }) => (
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

import SectionHeading from '@/components/SectionHeading'
import { SERVICE_PILLARS } from '@/lib/constants'
import { getDictionary, langs, type Lang } from '@/lib/getDictionary'

export async function generateStaticParams() {
  return langs.map((lang) => ({ lang }))
}

export default async function ApproachPage({ params }: { params: { lang: string } }) {
  const lang = params.lang as Lang
  const dict = await getDictionary(lang)
  const d = dict.approach

  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-32 bg-ivory">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <SectionHeading label={d.eyebrow} title={d.title} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          {d.steps.map((step, i) => (
            <div key={i}>
              <p className="font-dm text-xs tracking-[0.2em] uppercase text-gold mb-3">{step.label}</p>
              <p className="font-dm text-base text-[#6B6B6B] leading-[1.8]">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-b border-[#E8E4DC] py-16 mb-24 text-center">
          <blockquote className="font-cormorant font-light text-3xl md:text-4xl text-[#1A1A1A] leading-relaxed max-w-2xl mx-auto">
            &ldquo;{d.quote}&rdquo;
          </blockquote>
        </div>

        <div>
          <p className="font-dm text-xs tracking-[0.25em] uppercase text-gold mb-10">{d.pillarsLabel}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E8E4DC]">
            {SERVICE_PILLARS.map((pillar, i) => (
              <div
                key={pillar}
                className="bg-ivory p-8 group hover:bg-[#F5F3EE] transition-colors duration-300"
              >
                <p className="font-dm text-[10px] tracking-[0.2em] uppercase text-gold mb-3">0{i + 1}</p>
                <p className="font-cormorant text-xl font-light text-[#1A1A1A] group-hover:text-gold transition-colors duration-300">
                  {pillar}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

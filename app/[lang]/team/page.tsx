import SectionHeading from '@/components/SectionHeading'
import TeamCard from '@/components/TeamCard'
import { TEAM } from '@/lib/constants'
import { getDictionary, langs, type Lang } from '@/lib/getDictionary'

export async function generateStaticParams() {
  return langs.map((lang) => ({ lang }))
}

export default async function TeamPage({ params }: { params: { lang: string } }) {
  const lang = params.lang as Lang
  const dict = await getDictionary(lang)
  const d = dict.team

  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-32 bg-ivory">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <SectionHeading label={d.eyebrow} title={d.title} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-16 mb-24">
          {TEAM.map((member) => (
            <TeamCard key={member.name} {...member} lang={lang} />
          ))}
        </div>

        <div className="border-t border-[#E8E4DC] pt-16">
          <div className="max-w-xl">
            <p className="font-dm text-xs tracking-[0.25em] uppercase text-gold mb-6">{d.networkLabel}</p>
            <p className="font-cormorant text-2xl md:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              {d.networkText}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

import SectionHeading from '@/components/SectionHeading'
import DealCard from '@/components/DealCard'
import { DEALS } from '@/lib/constants'
import { getDictionary, langs, type Lang } from '@/lib/getDictionary'

export async function generateStaticParams() {
  return langs.map((lang) => ({ lang }))
}

export default async function TrackRecordPage({ params }: { params: { lang: string } }) {
  const lang = params.lang as Lang
  const dict = await getDictionary(lang)
  const d = dict.trackRecord

  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-32 bg-ivory">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <SectionHeading label={d.eyebrow} title={d.title} />

        <div className="mb-20 md:mb-28">
          <p className="font-cormorant font-light text-7xl md:text-9xl text-[#1A1A1A] leading-none">
            50M€<span className="text-gold">+</span>
          </p>
          <p className="font-dm text-sm text-[#6B6B6B] mt-4 tracking-wide">{d.volumeLabel}</p>
        </div>

        <div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pb-4 mb-2">
            {d.columns.map((col, i) => (
              <p
                key={col}
                className={`font-dm text-[10px] tracking-[0.2em] uppercase text-[#6B6B6B] ${
                  i === 4 ? 'col-span-2 md:col-span-1' : ''
                }`}
              >
                {col}
              </p>
            ))}
          </div>
          {DEALS.map((deal, i) => (
            <DealCard key={i} {...deal} index={i} />
          ))}
        </div>

        <p className="font-dm text-xs text-[#6B6B6B] mt-12 italic">{d.disclaimer}</p>
      </div>
    </div>
  )
}

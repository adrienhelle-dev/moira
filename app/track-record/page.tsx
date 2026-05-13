import SectionHeading from '@/components/SectionHeading'
import DealCard from '@/components/DealCard'
import { DEALS } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Track Record — Moïra Advisory',
  description: 'Selected transactions advised by Moïra Advisory across Paris.',
}

export default function TrackRecordPage() {
  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-32 bg-ivory">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <SectionHeading label="Selected transactions" title="Track record" />

        {/* Hero stat */}
        <div className="mb-20 md:mb-28">
          <p className="font-cormorant font-light text-7xl md:text-9xl text-[#1A1A1A] leading-none">
            50M€
            <span className="text-gold">+</span>
          </p>
          <p className="font-dm text-sm text-[#6B6B6B] mt-4 tracking-wide">
            Total transaction volume advised
          </p>
        </div>

        {/* Deals */}
        <div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pb-4 mb-2">
            {['Type', 'Location', 'Year', 'Value', 'Notes'].map((col) => (
              <p
                key={col}
                className={`font-dm text-[10px] tracking-[0.2em] uppercase text-[#6B6B6B] ${col === 'Notes' ? 'col-span-2 md:col-span-1' : ''}`}
              >
                {col}
              </p>
            ))}
          </div>
          {DEALS.map((deal, i) => (
            <DealCard key={i} {...deal} index={i} />
          ))}
        </div>

        {/* Disclaimer */}
        <p className="font-dm text-xs text-[#6B6B6B] mt-12 italic">
          All transactions are anonymized. Deal details are indicative. Past performance does not guarantee
          future results.
        </p>
      </div>
    </div>
  )
}

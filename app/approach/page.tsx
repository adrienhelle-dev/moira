import SectionHeading from '@/components/SectionHeading'
import { SERVICE_PILLARS } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Approach — Moïra Advisory',
  description:
    'Curated deal sourcing, end-to-end advisory, and strategic investment thinking from Moïra Advisory.',
}

export default function ApproachPage() {
  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-32 bg-ivory">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <SectionHeading label="How we work" title="Our approach" />

        {/* Editorial narrative */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8">
            <div>
              <p className="font-dm text-xs tracking-[0.2em] uppercase text-gold mb-3">01 — Deal Sourcing</p>
              <p className="font-dm text-base text-[#6B6B6B] leading-[1.8]">
                We access assets before they reach the open market. Through a tight network of notaires, family
                offices, institutional investors, and property professionals, Moïra surfaces opportunities that
                most buyers never see. Our pipeline is selective by design — we only pursue assets where we can
                add meaningful value.
              </p>
            </div>
            <div>
              <p className="font-dm text-xs tracking-[0.2em] uppercase text-gold mb-3">
                02 — End-to-end Advisory
              </p>
              <p className="font-dm text-base text-[#6B6B6B] leading-[1.8]">
                From first analysis to final signature and beyond, we accompany clients through every stage.
                Acquisition structuring, negotiation, due diligence, renovation oversight, and operational
                management — Moïra handles the complexity so our clients can focus on the outcome.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <p className="font-dm text-xs tracking-[0.2em] uppercase text-gold mb-3">
                03 — Design & Hospitality Lens
              </p>
              <p className="font-dm text-base text-[#6B6B6B] leading-[1.8]">
                Every asset we evaluate is assessed for both its financial performance and its potential as a
                living experience. We believe the two are inseparable. Properties that are beautiful, considered,
                and well-designed perform better — and hold value longer.
              </p>
            </div>
            <div>
              <p className="font-dm text-xs tracking-[0.2em] uppercase text-gold mb-3">
                04 — Strategic Investment Thinking
              </p>
              <p className="font-dm text-base text-[#6B6B6B] leading-[1.8]">
                We think in portfolios and structures, not isolated transactions. Fiscal optimization,
                co-investment vehicles, leverage structures, and exit strategy are part of every mandate. Our
                advisory is calibrated to the client&apos;s full financial picture, not just the deal in front of us.
              </p>
            </div>
          </div>
        </div>

        {/* Pull quote */}
        <div className="border-t border-b border-[#E8E4DC] py-16 mb-24 text-center">
          <blockquote className="font-cormorant font-light text-3xl md:text-4xl text-[#1A1A1A] leading-relaxed max-w-2xl mx-auto">
            &ldquo;We don&apos;t sell properties. We curate opportunities.&rdquo;
          </blockquote>
        </div>

        {/* Service pillars */}
        <div>
          <p className="font-dm text-xs tracking-[0.25em] uppercase text-gold mb-10">Service pillars</p>
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

import SectionHeading from '@/components/SectionHeading'
import TeamCard from '@/components/TeamCard'
import { TEAM } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team — Moïra Advisory',
  description: 'Meet the people behind Moïra Advisory.',
}

export default function TeamPage() {
  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-32 bg-ivory">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <SectionHeading label="The people" title="Our team" />

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-24">
          {TEAM.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>

        {/* Network section */}
        <div className="border-t border-[#E8E4DC] pt-16">
          <div className="max-w-xl">
            <p className="font-dm text-xs tracking-[0.25em] uppercase text-gold mb-6">Our network</p>
            <p className="font-cormorant text-2xl md:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              We work with a curated network of architects, notaires, designers, and operators across Paris and
              internationally.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

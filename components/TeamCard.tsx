import Image from 'next/image'
import type { Lang } from '@/lib/getDictionary'

interface TeamCardProps {
  name: string
  titleEn: string
  titleFr: string
  bioEn: string
  bioFr: string
  linkedin: string
  photo?: string
  lang: Lang
}

export default function TeamCard({ name, titleEn, titleFr, bioEn, bioFr, linkedin, photo, lang }: TeamCardProps) {
  const title = lang === 'fr' ? titleFr : titleEn
  const bio = lang === 'fr' ? bioFr : bioEn

  return (
    <div className="flex flex-col">
      <div className="w-full aspect-square mb-6 relative overflow-hidden bg-[#1A3828]/10">
        {photo ? (
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
            sizes="(max-width: 768px) 100vw, 480px"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(160deg, #1A3828 0%, #2C4A38 60%, #1A3828 100%)' }}
          >
            <div className="absolute inset-0 flex items-end p-6">
              <div className="w-full h-px bg-[#A08C5B]/40" />
            </div>
          </div>
        )}
      </div>

      <h3 className="font-cormorant text-2xl md:text-3xl font-light text-[#1A1A1A] mb-1">{name}</h3>
      <p className="font-dm text-xs tracking-[0.15em] uppercase text-gold mb-4">{title}</p>
      <p className="font-dm text-sm text-[#6B6B6B] leading-relaxed mb-6">{bio}</p>

      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 font-dm text-xs tracking-[0.1em] uppercase text-[#6B6B6B] hover:text-gold transition-colors duration-300"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
        LinkedIn
      </a>
    </div>
  )
}

interface TeamCardProps {
  name: string
  title: string
  bio: string
  linkedin: string
}

export default function TeamCard({ name, title, bio, linkedin }: TeamCardProps) {
  return (
    <div className="flex flex-col">
      {/* Photo placeholder */}
      <div
        className="w-full aspect-[3/4] mb-6 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #E8E4DC 0%, #D8D4CC 100%)',
        }}
      >
        <div className="absolute inset-0 flex items-end p-6">
          <div className="w-full h-px bg-[#A08C5B]/30" />
        </div>
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

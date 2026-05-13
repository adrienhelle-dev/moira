'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

interface HeroProps {
  tagline?: string
  subtitle?: string
  cta?: { label: string; href: string }
  eyebrow?: string
}

export default function Hero({
  tagline = 'Redefining how you buy, manage, and experience urban property.',
  subtitle = 'Boutique real estate & investment advisory. Based in Paris. Built for a global clientele.',
  cta = { label: 'Get in touch', href: '/contact' },
  eyebrow,
}: HeroProps) {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.3}px)`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div ref={parallaxRef} className="absolute inset-0 will-change-transform">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(160deg, #0F2318 0%, #1A3828 45%, #132D20 100%)',
          }}
        />
        {/* Organic texture overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 20% 60%, rgba(160,140,91,0.12) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.04) 0%, transparent 45%), radial-gradient(ellipse at 60% 80%, rgba(26,56,40,0.6) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Depth overlay */}
      <div className="absolute inset-0 bg-[#0F2318]/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-8 max-w-content mx-auto">
        <p
          className="font-dm text-xs tracking-[0.3em] uppercase text-gold mb-8 fade-in"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          {eyebrow ?? 'Paris · Since 2023'}
        </p>
        <h1
          className="font-cormorant font-light text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-8 fade-in-up"
          style={{ animationDelay: '0.4s', opacity: 0 }}
        >
          {tagline}
        </h1>
        <p
          className="font-dm text-base md:text-lg text-white/70 leading-relaxed mb-12 max-w-xl mx-auto fade-in"
          style={{ animationDelay: '0.8s', opacity: 0 }}
        >
          {subtitle}
        </p>
        <div className="fade-in" style={{ animationDelay: '1s', opacity: 0 }}>
          <Link
            href={cta.href}
            className="inline-block font-dm text-sm tracking-[0.15em] uppercase border border-gold text-gold px-8 py-4 hover:bg-gold hover:text-[#1A3828] transition-all duration-500"
          >
            {cta.label}
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 fade-in"
        style={{ animationDelay: '1.4s', opacity: 0 }}
      >
        <span className="font-dm text-[10px] tracking-[0.2em] uppercase text-white/40">Scroll</span>
        <div className="w-px h-8 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gold animate-bounce" />
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Dictionary, Lang } from '@/lib/getDictionary'

interface NavigationProps {
  lang: Lang
  dict: Dictionary
}

export default function Navigation({ lang, dict }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const isHome = pathname === `/${lang}` || pathname === `/${lang}/`

  const navLinks = [
    { label: dict.nav.approach, href: `/${lang}/approach` },
    { label: dict.nav.trackRecord, href: `/${lang}/track-record` },
    { label: dict.nav.team, href: `/${lang}/team` },
    { label: dict.nav.contact, href: `/${lang}/contact` },
  ]

  const otherLang: Lang = lang === 'en' ? 'fr' : 'en'
  const otherLangPath = pathname.replace(`/${lang}`, `/${otherLang}`)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const navBg = isHome
    ? scrolled ? 'bg-ivory shadow-sm' : 'bg-transparent'
    : 'bg-ivory shadow-sm'

  const textColor = isHome && !scrolled ? 'text-white' : 'text-[#1A1A1A]'

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
        <div className="max-w-content mx-auto px-6 md:px-8 flex items-center justify-between h-16 md:h-20">
          <Link href={`/${lang}`} className="flex flex-col leading-none select-none">
            <span
              className={`font-cormorant font-light tracking-widest2 text-xl md:text-2xl uppercase transition-colors duration-500 ${textColor}`}
            >
              MOÏRA
            </span>
            <span
              className={`font-dm text-[10px] tracking-[0.15em] uppercase transition-colors duration-500 ${isHome && !scrolled ? 'text-white/70' : 'text-[#6B6B6B]'}`}
            >
              Advisory
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-dm text-sm tracking-wide transition-colors duration-300 hover:text-gold ${
                  pathname === link.href ? 'text-gold' : textColor
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={otherLangPath}
              className={`font-dm text-xs tracking-widest transition-colors duration-300 hover:text-gold ${
                isHome && !scrolled ? 'text-white/60' : 'text-[#6B6B6B]'
              }`}
            >
              {otherLang.toUpperCase()}
            </Link>
          </div>

          <button
            className={`md:hidden flex flex-col gap-1.5 p-2 ${textColor}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-ivory flex flex-col items-center justify-center transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-cormorant text-3xl font-light text-[#1A1A1A] hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={otherLangPath}
            className="font-dm text-xs tracking-widest text-[#6B6B6B] hover:text-gold transition-colors duration-300 mt-4"
          >
            {otherLang.toUpperCase()}
          </Link>
        </nav>
      </div>
    </>
  )
}

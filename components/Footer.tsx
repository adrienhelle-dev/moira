import Link from 'next/link'
import type { Dictionary, Lang } from '@/lib/getDictionary'

interface FooterProps {
  lang: Lang
  dict: Dictionary
}

export default function Footer({ lang, dict }: FooterProps) {
  return (
    <footer className="bg-ivory border-t border-[#E8E4DC] py-12 md:py-16">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <div className="flex flex-col leading-none mb-4">
              <span className="font-cormorant font-light tracking-widest2 text-xl uppercase text-[#1A1A1A]">
                MOÏRA
              </span>
              <span className="font-dm text-[10px] tracking-[0.15em] uppercase text-[#6B6B6B]">
                Advisory
              </span>
            </div>
            <p className="font-dm text-sm text-[#6B6B6B]">229 rue Saint-Honoré, 75001 Paris</p>
            <a
              href="mailto:contact@moira-advisory.com"
              className="font-dm text-sm text-[#6B6B6B] hover:text-gold transition-colors duration-300"
            >
              contact@moira-advisory.com
            </a>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2">
            <p className="font-dm text-xs text-[#6B6B6B]">{dict.footer.rights}</p>
            <Link
              href={`/${lang}/legal`}
              className="font-dm text-xs text-[#6B6B6B] hover:text-gold transition-colors duration-300"
            >
              {dict.footer.legal}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

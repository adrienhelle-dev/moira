import ContactForm from '@/components/ContactForm'
import { getDictionary, langs, type Lang } from '@/lib/getDictionary'

export async function generateStaticParams() {
  return langs.map((lang) => ({ lang }))
}

export default async function ContactPage({ params }: { params: { lang: string } }) {
  const lang = params.lang as Lang
  const dict = getDictionary(lang)
  const d = dict.contact

  const directContactLabel = lang === 'fr' ? 'Contact direct' : 'Direct contact'
  const phoneLabel = lang === 'fr' ? 'Téléphone' : 'Phone'

  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-32 bg-ivory">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Left column */}
          <div>
            <p className="font-dm text-xs tracking-[0.25em] uppercase text-gold mb-6">{d.eyebrow}</p>
            <h1 className="font-cormorant font-light text-5xl md:text-6xl text-[#1A1A1A] mb-12 leading-tight">
              {d.title}
            </h1>

            <div className="space-y-6 mb-8">
              <div>
                <p className="font-dm text-[10px] tracking-[0.2em] uppercase text-[#6B6B6B] mb-1">
                  {d.addressLabel}
                </p>
                <p className="font-dm text-sm text-[#1A1A1A]">229 rue Saint-Honoré</p>
                <p className="font-dm text-sm text-[#1A1A1A]">75001 Paris, France</p>
              </div>
              <div>
                <p className="font-dm text-[10px] tracking-[0.2em] uppercase text-[#6B6B6B] mb-1">
                  {d.emailLabel}
                </p>
                <a
                  href="mailto:contact@moira-advisory.com"
                  className="font-dm text-sm text-[#1A1A1A] hover:text-gold transition-colors duration-300"
                >
                  contact@moira-advisory.com
                </a>
              </div>
            </div>

            {/* Edouard direct contact */}
            <div className="border-t border-[#E8E4DC] pt-6 mb-10">
              <p className="font-dm text-[10px] tracking-[0.2em] uppercase text-[#6B6B6B] mb-4">
                {directContactLabel}
              </p>
              <p className="font-cormorant text-lg font-light text-[#1A1A1A] mb-1">Edouard Dujon</p>
              <p className="font-dm text-xs tracking-[0.1em] uppercase text-gold mb-3">
                Partner & Agent
              </p>
              <div className="flex flex-col gap-1">
                <a
                  href="tel:+33674942857"
                  className="font-dm text-sm text-[#6B6B6B] hover:text-gold transition-colors duration-300"
                >
                  +33 6 74 94 28 57
                </a>
                <a
                  href="mailto:edouard@moiradvisory.com"
                  className="font-dm text-sm text-[#6B6B6B] hover:text-gold transition-colors duration-300"
                >
                  edouard@moiradvisory.com
                </a>
              </div>
            </div>

            {/* Map */}
            <div
              className="w-full aspect-[4/3] relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #E8E4DC 0%, #D8D4CC 100%)' }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.7!2d2.3297!3d48.8647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2c7a5f3e3b%3A0x0!2s229+Rue+Saint-Honor%C3%A9%2C+75001+Paris!5e0!3m2!1sen!2sfr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </div>

          {/* Right column — form */}
          <div className="pt-0 md:pt-16">
            <ContactForm dict={d} />
          </div>
        </div>
      </div>
    </div>
  )
}

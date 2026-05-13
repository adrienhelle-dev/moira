import ContactForm from '@/components/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Moïra Advisory',
  description: 'Get in touch with Moïra Advisory.',
}

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-32 bg-ivory">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Left column */}
          <div>
            <p className="font-dm text-xs tracking-[0.25em] uppercase text-gold mb-6">Get in touch</p>
            <h1 className="font-cormorant font-light text-5xl md:text-6xl text-[#1A1A1A] mb-12 leading-tight">
              Let&apos;s talk.
            </h1>

            <div className="space-y-6 mb-12">
              <div>
                <p className="font-dm text-[10px] tracking-[0.2em] uppercase text-[#6B6B6B] mb-1">Address</p>
                <p className="font-dm text-sm text-[#1A1A1A]">229 rue Saint-Honoré</p>
                <p className="font-dm text-sm text-[#1A1A1A]">75001 Paris, France</p>
              </div>
              <div>
                <p className="font-dm text-[10px] tracking-[0.2em] uppercase text-[#6B6B6B] mb-1">Email</p>
                <a
                  href="mailto:contact@moira-advisory.com"
                  className="font-dm text-sm text-[#1A1A1A] hover:text-gold transition-colors duration-300"
                >
                  contact@moira-advisory.com
                </a>
              </div>
            </div>

            {/* Map placeholder */}
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
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

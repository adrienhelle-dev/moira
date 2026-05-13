import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Moïra Advisory — Boutique Real Estate & Investment Advisory, Paris',
  description:
    'Moïra is a boutique real estate and investment advisory firm. We specialize in curated real estate opportunities, off-market assets, and high-touch advisory for discerning local and international clients.',
  openGraph: {
    title: 'Moïra Advisory — Boutique Real Estate & Investment Advisory, Paris',
    description:
      'Moïra is a boutique real estate and investment advisory firm. We specialize in curated real estate opportunities, off-market assets, and high-touch advisory.',
    url: 'https://moiradvisory.com',
    siteName: 'Moïra Advisory',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        {/* Google Analytics 4 placeholder */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body className="bg-ivory font-dm">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

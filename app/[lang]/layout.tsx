import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getDictionary, langs, type Lang } from '@/lib/getDictionary'

export async function generateStaticParams() {
  return langs.map((lang) => ({ lang }))
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const lang = params.lang as Lang
  const dict = getDictionary(lang)

  return (
    <>
      <Navigation lang={lang} dict={dict} />
      <main>{children}</main>
      <Footer lang={lang} dict={dict} />
    </>
  )
}

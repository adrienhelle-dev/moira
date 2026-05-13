import type en from '@/dictionaries/en.json'

export type Dictionary = typeof en

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import('@/dictionaries/en.json').then((m) => m.default),
  fr: () => import('@/dictionaries/fr.json').then((m) => m.default),
}

export async function getDictionary(lang: string): Promise<Dictionary> {
  return (dictionaries[lang] ?? dictionaries['en'])()
}

export type Lang = 'en' | 'fr'
export const langs: Lang[] = ['en', 'fr']

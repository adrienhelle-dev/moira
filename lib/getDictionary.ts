import en from '@/dictionaries/en.json'
import fr from '@/dictionaries/fr.json'

export type Dictionary = typeof en
export type Lang = 'en' | 'fr'
export const langs: Lang[] = ['en', 'fr']

const dictionaries = { en, fr }

export function getDictionary(lang: string): Dictionary {
  return dictionaries[lang as Lang] ?? dictionaries.en
}

export type Lang = 'en' | 'zh'
export const isLang = (value: unknown): value is Lang => value === 'en' || value === 'zh'

export function resolveLanguage(
  search: string,
  stored: string | null,
  browserLanguages: readonly string[],
): Lang {
  const explicit = new URLSearchParams(search).get('lang')
  if (isLang(explicit)) return explicit
  if (isLang(stored)) return stored
  for (const language of browserLanguages) {
    const primary = language.toLowerCase().split(/[-_]/)[0]
    if (isLang(primary)) return primary
  }
  return 'en'
}

export function withLanguage(path: string, lang: Lang): string {
  const [route, hash] = path.split('#', 2)
  const [pathname, query] = route.split('?', 2)
  const params = new URLSearchParams(query)
  params.set('lang', lang)
  return `${pathname}?${params.toString()}${hash === undefined ? '' : `#${hash}`}`
}

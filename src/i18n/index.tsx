import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export type Lang = 'en' | 'zh'

const STORAGE_KEY = 'portfolio-language'

const isLang = (v: unknown): v is Lang => v === 'en' || v === 'zh'

/**
 * 语言解析优先级（需求 §2）：
 *   1. URL ?lang 参数
 *   2. localStorage 上一次选择
 *   3. navigator.language 以 zh 开头
 *   4. fallback English
 */
function resolveInitialLang(search: string): Lang {
  const fromUrl = new URLSearchParams(search).get('lang')
  if (isLang(fromUrl)) return fromUrl

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (isLang(stored)) return stored
  } catch {
    // localStorage 不可用（隐私模式等）时静默降级到下一优先级
  }

  if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('zh')) {
    return 'zh'
  }
  return 'en'
}

type Ctx = { lang: Lang; setLang: (l: Lang) => void }

const LanguageContext = createContext<Ctx>({ lang: 'en', setLang: () => {} })

export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation()
  const navigate = useNavigate()
  const [lang, setLangState] = useState<Lang>(() => resolveInitialLang(location.search))

  /** URL 里的 ?lang 是权威来源：直接分享带参数的链接必须生效 */
  useEffect(() => {
    const fromUrl = new URLSearchParams(location.search).get('lang')
    if (isLang(fromUrl) && fromUrl !== lang) setLangState(fromUrl)
  }, [location.search, lang])

  /** <html lang> 要跟着变——屏幕阅读器与搜索引擎都依赖它 */
  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // 忽略：写不进去不影响本次会话
    }
  }, [lang])

  /**
   * 切换语言时保留当前 route —— 只改 ?lang，不跳首页（需求 §3）。
   * 用 replace 避免在浏览器历史里堆一串只有语言不同的记录。
   */
  const setLang = useCallback(
    (next: Lang) => {
      setLangState(next)
      const params = new URLSearchParams(location.search)
      params.set('lang', next)
      navigate(
        { pathname: location.pathname, search: `?${params.toString()}`, hash: location.hash },
        { replace: true },
      )
    },
    [location.pathname, location.search, location.hash, navigate],
  )

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLang = () => useContext(LanguageContext)

/** 站内链接统一带上当前语言，避免点一下就跳回默认语言 */
export function useLangHref() {
  const { lang } = useLang()
  return useCallback((path: string) => `${path}${path.includes('?') ? '&' : '?'}lang=${lang}`, [lang])
}

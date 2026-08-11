import { useLang } from '../i18n'

/**
 * Language Switcher —— 需求 §5
 * 克制：只有「中文 / EN」两个文字，无国旗、无下拉、无大按钮。
 * 当前语言高亮。切换只改 React state 与 ?lang，不 reload SPA。
 */
export function LanguageSwitcher({ size = 'sm' }: { size?: 'sm' | 'lg' }) {
  const { lang, setLang } = useLang()

  const base =
    size === 'lg'
      ? 'text-body font-medium transition-colors duration-[180ms]'
      : 'text-body-s font-medium transition-colors duration-[180ms]'

  const cls = (active: boolean) =>
    `${base} ${active ? 'text-ink' : 'text-ink-3 hover:text-ink-2'}`

  return (
    <div className="flex items-center gap-2" role="group" aria-label={lang === 'zh' ? '语言' : 'Language'}>
      <button
        type="button"
        onClick={() => setLang('zh')}
        aria-pressed={lang === 'zh'}
        lang="zh-CN"
        className={cls(lang === 'zh')}
      >
        中文
      </button>
      <span aria-hidden="true" className="text-ink-3/50">/</span>
      <button type="button" onClick={() => setLang('en')} aria-pressed={lang === 'en'} className={cls(lang === 'en')}>
        EN
      </button>
    </div>
  )
}

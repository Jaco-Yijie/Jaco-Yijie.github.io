import { useEffect, useRef } from 'react'
import { useContent } from '../hooks'
import { useTheme, type ThemeMode } from '../theme'

const icons: Record<ThemeMode, string> = { light: '☀', dark: '☾', system: '◐' }

export function ThemeSwitcher() {
  const { portfolio: c } = useContent()
  const { mode, setMode } = useTheme()
  const details = useRef<HTMLDetailsElement>(null)

  useEffect(() => {
    const close = (event: PointerEvent) => {
      if (details.current && !details.current.contains(event.target as Node))
        details.current.open = false
    }
    document.addEventListener('pointerdown', close)
    return () => document.removeEventListener('pointerdown', close)
  }, [])

  return (
    <details
      className="theme-switcher"
      ref={details}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && details.current?.open) {
          event.stopPropagation()
          details.current.open = false
          details.current.querySelector('summary')?.focus()
        }
      }}
    >
      <summary aria-label={`${c.themeLabel}：${c.themes[mode]}`} title={c.themeLabel}>
        <span aria-hidden="true">{icons[mode]}</span>
        <span className="theme-current">{c.themes[mode]}</span>
      </summary>
      <div className="theme-options" role="group" aria-label={c.themeLabel}>
        {(['light', 'dark', 'system'] as const).map((value) => (
          <button
            key={value}
            type="button"
            aria-pressed={mode === value}
            onClick={() => {
              setMode(value)
              if (details.current) {
                details.current.open = false
                details.current.querySelector('summary')?.focus()
              }
            }}
          >
            <span aria-hidden="true">{icons[value]}</span>
            {c.themes[value]}
            <span aria-hidden="true">{mode === value ? '✓' : ''}</span>
          </button>
        ))}
      </div>
    </details>
  )
}

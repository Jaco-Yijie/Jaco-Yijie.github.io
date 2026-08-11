import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { links } from '../data/links'
import { useContent } from '../hooks'
import { useLangHref } from '../i18n'
import { LanguageSwitcher } from './LanguageSwitcher'

/**
 * Navigation —— DESIGN_SYSTEM.md §14
 * 桌面：透明 → 滚动后 blur + hairline。
 * 移动：汉堡 + 全屏覆盖层，含焦点陷阱与 Esc 关闭（§14.3 / §17.2）。
 */
export function Nav() {
  const c = useContent()
  const withLang = useLangHref()

  const items = [
    { label: c.nav.work, href: '/#work', hash: true },
    { label: c.nav.capabilities, href: '/#capabilities', hash: true },
    { label: c.nav.aiEvals, href: '/ai-evals', hash: false },
    { label: c.nav.learning, href: '/learning', hash: false },
    { label: c.nav.about, href: '/#about', hash: true },
  ]

  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const burgerRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // 路由变化时关闭抽屉
  useEffect(() => setOpen(false), [pathname])

  // 打开时锁滚动 + Esc 关闭 + 焦点陷阱
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        burgerRef.current?.focus()
        return
      }
      if (e.key !== 'Tab') return
      const focusables = panelRef.current?.querySelectorAll<HTMLElement>('a[href], button')
      if (!focusables?.length) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    panelRef.current?.querySelector<HTMLElement>('a[href]')?.focus()

    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const linkCls =
    'text-body-s font-medium text-ink-2 transition-colors duration-[180ms] hover:text-ink'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-100 h-[60px] transition-colors duration-[240ms] lg:h-[72px] ${
        scrolled ? 'border-b border-line bg-bg/85 backdrop-blur-[12px]' : ''
      }`}
    >
      <nav aria-label="Main" className="shell flex h-full items-center justify-between">
        <Link to={withLang('/')} className="text-[15px] font-semibold text-ink">
          {c.hero.name}
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {items.map((it) =>
            it.hash ? (
              <a key={it.label} href={it.href} className={linkCls}>
                {it.label}
              </a>
            ) : (
              <Link key={it.label} to={withLang(it.href)} className={linkCls}>
                {it.label}
              </Link>
            ),
          )}
          <a
            href={links.resume}
            target="_blank"
            rel="noreferrer"
            aria-label={`${c.nav.resume} (opens in new tab)`}
            className="inline-flex h-9 items-center gap-2 rounded-md border border-line-strong px-4 text-body-s font-medium text-ink transition-colors duration-[180ms] hover:border-accent/30 hover:bg-accent/10"
          >
            {c.nav.resume} <span aria-hidden="true">↗</span>
          </a>
          <span aria-hidden="true" className="h-4 w-px bg-line-strong" />
          <LanguageSwitcher />
        </div>

        <button
          ref={burgerRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-label={c.nav.openMenu}
          aria-expanded={open}
          className="flex size-11 items-center justify-center text-ink lg:hidden"
        >
          <span aria-hidden="true" className="text-xl">
            ☰
          </span>
        </button>
      </nav>

      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-200 bg-bg lg:hidden"
        >
          <div className="shell flex h-[60px] items-center justify-between">
            <span className="text-[15px] font-semibold text-ink">{c.hero.name}</span>
            <button
              type="button"
              onClick={() => {
                setOpen(false)
                burgerRef.current?.focus()
              }}
              aria-label={c.nav.closeMenu}
              className="flex size-11 items-center justify-center text-ink"
            >
              <span aria-hidden="true" className="text-xl">
                ✕
              </span>
            </button>
          </div>

          <div className="shell mt-6">
            <LanguageSwitcher size="lg" />
          </div>

          <div className="shell mt-8 flex flex-col gap-6">
            {items.map((it) =>
              it.hash ? (
                <a
                  key={it.label}
                  href={it.href}
                  onClick={() => setOpen(false)}
                  className="text-display-m text-ink"
                >
                  {it.label}
                </a>
              ) : (
                <Link key={it.label} to={withLang(it.href)} className="text-display-m text-ink">
                  {it.label}
                </Link>
              ),
            )}
            <a
              href={links.resume}
              target="_blank"
              rel="noreferrer"
              className="text-display-m text-accent"
            >
              {c.nav.resume} ↗
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

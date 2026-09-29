import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { links } from '../data/links'
import { useContent } from '../hooks'
import { useLangHref } from '../i18n'
import { LanguageSwitcher } from './LanguageSwitcher'
import { ThemeSwitcher } from './ThemeSwitcher'

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
    { label: c.nav.about, href: '/#about', hash: true },
    { label: c.nav.contact, href: '/#contact', hash: true },
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

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)')
    const onChange = () => {
      if (desktop.matches) setOpen(false)
    }
    desktop.addEventListener('change', onChange)
    return () => desktop.removeEventListener('change', onChange)
  }, [])

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
      const focusables = Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>('a[href], button, summary') ?? [],
      ).filter((el) => el.getClientRects().length > 0)
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
    <header className={`floating-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <nav
        aria-label={c.portfolio.navLabel}
        className="nav-inner flex h-full items-center justify-between"
      >
        <Link to={withLang('/')} className="text-[15px] font-semibold text-ink">
          {c.hero.name}
        </Link>

        <div className="desktop-nav hidden items-center gap-6 lg:flex">
          {items.map((it) =>
            it.hash ? (
              <a
                key={it.label}
                href={`${withLang('/')}#${it.href.split('#')[1]}`}
                className={linkCls}
              >
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

            className="inline-flex h-9 items-center gap-2 rounded-md border border-line-strong px-4 text-body-s font-medium text-ink transition-colors duration-[180ms] hover:border-accent/30 hover:bg-accent/10"
          >
            {c.nav.resume} <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="nav-preferences">
          <LanguageSwitcher />
          <ThemeSwitcher />
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
          aria-label={c.portfolio.menuLabel}
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

          <div className="shell modal-preferences mt-6">
            <LanguageSwitcher size="lg" />
            <ThemeSwitcher />
          </div>

          <div className="shell mt-8 flex flex-col gap-6">
            {items.map((it) =>
              it.hash ? (
                <a
                  key={it.label}
                  href={`${withLang('/')}#${it.href.split('#')[1]}`}
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

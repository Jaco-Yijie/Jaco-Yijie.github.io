import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { isLive, type MaybeLink } from '../data/links'

/* ── Eyebrow ─────────────────────────────────────────────── */
export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-eyebrow uppercase text-ink-3">{children}</p>
}

/* ── Tag ── DESIGN_SYSTEM §13 ────────────────────────────── */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="text-label rounded-full border border-line-strong px-3 py-1.5 text-ink-2">
      {children}
    </span>
  )
}

/* ── Button ── DESIGN_SYSTEM §12 ───────────────────────────
   未提供的链接【不渲染】，而不是渲染成禁用态。            */
type ButtonProps = {
  href: MaybeLink
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'lg' | 'md' | 'sm'
  external?: boolean
  children: string
}

const sizeCls = {
  lg: 'h-[52px] px-7 text-body',
  md: 'h-11 px-[22px] text-[15px]',
  sm: 'h-11 px-4 text-body-s md:h-9',
}

export function Button({ href, variant = 'secondary', size = 'md', external = false, children }: ButtonProps) {
  if (!isLive(href)) return null

  const base =
    'inline-flex items-center gap-2 rounded-md font-medium transition-colors duration-[180ms] active:translate-y-px'
  const cls =
    variant === 'primary'
      ? `${base} ${sizeCls[size]} bg-accent text-accent-on hover:bg-accent-hover`
      : variant === 'secondary'
        ? `${base} ${sizeCls[size]} border border-line-strong text-ink hover:border-accent/30 hover:bg-accent/10`
        : 'group inline-flex min-h-11 items-center gap-2 text-[15px] font-medium text-accent transition-colors duration-[180ms] hover:text-accent-hover'

  const arrow = (
    <span
      aria-hidden="true"
      className="transition-transform duration-[240ms] group-hover:translate-x-1"
    >
      {external ? '↗' : '→'}
    </span>
  )

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={`${children} (opens in new tab)`}
        className={`${cls} group`}
      >
        {children}
        {arrow}
      </a>
    )
  }

  // 站内锚点仍走 <a>，路由跳转走 <Link>
  if (href.startsWith('#')) {
    return (
      <a href={href} className={`${cls} group`}>
        {children}
        {arrow}
      </a>
    )
  }

  return (
    <Link to={href} className={`${cls} group`}>
      {children}
      {arrow}
    </Link>
  )
}

/* ── Section ── §5.2 垂直节奏 ──────────────────────────────
   分隔线用 border-t，与「hairline 优先于卡片」的设计语言一致。 */
export function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  bordered = true,
}: {
  id: string
  eyebrow?: string
  title?: string
  lead?: string
  children: ReactNode
  bordered?: boolean
}) {
  const headingId = `${id}-heading`
  return (
    <section
      id={id}
      aria-labelledby={title ? headingId : undefined}
      className={bordered ? 'border-t border-line' : undefined}
    >
      <div className="shell section-y">
        {(eyebrow || title) && (
          <header className="mb-8 md:mb-10 lg:mb-12">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            {title && (
              <h2 id={headingId} className="mt-4 text-display-m text-ink">
                {title}
              </h2>
            )}
            {lead && <p className="mt-5 max-w-[58ch] text-body-l text-ink-2">{lead}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}

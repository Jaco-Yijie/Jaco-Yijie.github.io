import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useLang } from '../i18n'

export type ReadingItem = { id: string; num: string; title: string; level?: 2 }

/** One contents model for desktop navigation and the mobile reader dialog. */
export function ReadingContents({ items, label, contentLang }: {
  items: ReadingItem[]
  label: string
  contentLang?: string
}) {
  const { lang } = useLang()
  const { pathname, search } = useLocation()
  const navigate = useNavigate()
  const [active, setActive] = useState(items[0]?.id)
  const dialog = useRef<HTMLDialogElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)
  const [open, setOpen] = useState(false)
  const current = items.find((item) => item.id === active) ?? items[0]

  useEffect(() => {
    let frame = 0
    const update = () => {
      const currentItem = [...items].reverse().find(({ id }) => {
        const element = document.getElementById(id)
        return element && element.getBoundingClientRect().top <= 170
      })
      setActive(currentItem?.id ?? items[0]?.id)
    }
    const schedule = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    schedule()
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [items, pathname])

  useEffect(() => {
    if (!open) return
    const el = dialog.current
    const previous = document.body.style.overflow
    el?.showModal()
    document.body.style.overflow = 'hidden'
    const wide = window.matchMedia('(min-width: 1280px)')
    const closeOnDesktop = () => { if (wide.matches) el?.close() }
    wide.addEventListener('change', closeOnDesktop)
    return () => {
      document.body.style.overflow = previous
      wide.removeEventListener('change', closeOnDesktop)
      el?.close()
    }
  }, [open])

  const choose = (item: ReadingItem) => {
    dialog.current?.close()
    setOpen(false)
    navigate({ pathname, search, hash: `#${item.id}` })
    requestAnimationFrame(() => {
      const el = document.getElementById(item.id)
      el?.scrollIntoView({ block: 'start', behavior: 'instant' })
      const heading = el?.querySelector<HTMLElement>('h2') ?? el
      heading?.focus({ preventScroll: true })
      setActive(item.id)
    })
  }

  const list = (
    <ol lang={contentLang} className="space-y-1">
      {items.map((item) => (
        <li key={item.id}>
          <a href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined}
            onClick={(event) => { event.preventDefault(); choose(item) }}
            className={`flex min-h-11 items-start gap-3 border-l-2 py-2.5 pr-2 text-body-s hover:text-ink ${item.level === 2 ? 'ml-4 pl-3' : 'pl-3'} ${active === item.id ? 'border-accent text-ink' : 'border-transparent text-ink-3'}`}>
            <span className="shrink-0 font-mono text-caption">{item.num}</span><span>{item.title}</span>
          </a>
        </li>
      ))}
    </ol>
  )

  return (
    <>
      <nav aria-label={label} className="sticky top-[104px] hidden max-h-[calc(100dvh-128px)] overflow-y-auto xl:block">
        <p className="mb-4 text-label text-ink-2">{label}</p>{list}
      </nav>
      <button ref={trigger} type="button" onClick={() => setOpen(true)} aria-haspopup="dialog" aria-expanded={open}
        className="fixed right-5 bottom-[max(20px,env(safe-area-inset-bottom))] z-90 flex min-h-12 max-w-[calc(100vw-40px)] items-center gap-3 rounded-md border border-line-strong bg-surface-2 px-4 text-body-s text-ink shadow-lg xl:hidden">
        <span>{lang === 'zh' ? '目录' : 'Contents'}</span>
        <span className="max-w-44 truncate text-ink-2" lang={contentLang}>{current?.num} {current?.title}</span>
        <span aria-hidden="true">↑</span>
      </button>
      <dialog ref={dialog} aria-label={label} onClose={() => setOpen(false)}
        className="m-auto max-h-[80dvh] w-[calc(100%-40px)] max-w-lg overflow-y-auto rounded-lg border border-line-strong bg-bg p-5 text-ink backdrop:bg-black/70">
        <div className="sticky -top-5 z-10 -mx-5 -mt-5 mb-3 flex items-center justify-between gap-4 border-b border-line bg-bg px-5 py-4">
          <p className="text-heading-m">{label}</p>
          <button type="button" onClick={() => dialog.current?.close()} className="min-h-11 min-w-11 rounded-md border border-line-strong px-3 text-body-s">
            {lang === 'zh' ? '关闭' : 'Close'}
          </button>
        </div>
        <nav aria-label={label}>{list}</nav>
      </dialog>
    </>
  )
}

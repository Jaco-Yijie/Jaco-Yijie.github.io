import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n'
import type { ProjectSlug } from '../content/types'

const previews: Partial<Record<ProjectSlug, { src: string; zh: string; en: string }>> = {
  'stock-news': {
    src: '/images/projects/stock-news.webp',
    zh: 'Stock News：板块筛选、今日新闻与影响判断',
    en: 'Stock News: sector filters, daily news and impact indicators',
  },
  arcana: {
    src: '/images/projects/arcana.webp',
    zh: 'Arcana：实际洗牌交互界面',
    en: 'Arcana: the interactive card-shuffling screen',
  },
}

export function ProjectPreview({ slug }: { slug: ProjectSlug }) {
  const { lang } = useLang()
  const preview = previews[slug]
  const dialog = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    const el = dialog.current
    el?.showModal()
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previous; el?.close() }
  }, [open])

  if (!preview) return null
  const caption = lang === 'zh' ? '真实界面 · 点击放大' : 'Product screenshot · Enlarge'
  return (
    <figure className="relative z-10 mb-7">
      <button type="button" aria-label={`${caption}: ${preview[lang]}`} aria-haspopup="dialog"
        onClick={() => setOpen(true)} className="block w-full overflow-hidden rounded-md border border-line-strong bg-surface-1 text-left transition-colors hover:border-accent">
        <img src={preview.src} alt={preview[lang]} width="1280" height="850" loading="lazy" decoding="async" className="aspect-[1280/850] w-full object-cover" />
        <span className="flex min-h-11 items-center justify-between gap-3 px-3 text-caption text-ink-2">{caption}<span aria-hidden="true">↗</span></span>
      </button>
      <dialog ref={dialog} aria-label={preview[lang]} onClose={() => setOpen(false)}
        className="m-auto max-h-[90dvh] w-[calc(100%-32px)] max-w-6xl overflow-auto rounded-lg border border-line-strong bg-bg p-3 text-ink backdrop:bg-black/80">
        <div className="mb-3 flex items-center justify-between gap-3">
          <p className="text-body-s">{preview[lang]}</p>
          <button type="button" onClick={() => dialog.current?.close()} className="min-h-11 shrink-0 rounded-md border border-line-strong px-4 text-body-s">{lang === 'zh' ? '关闭' : 'Close'}</button>
        </div>
        {open && <img src={preview.src} alt={preview[lang]} width="1280" height="850" className="h-auto w-full" />}
      </dialog>
    </figure>
  )
}

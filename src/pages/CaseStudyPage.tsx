import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { caseStudies, getCaseStudy, type Block } from '../data/caseStudies'
import { projects } from '../data/projects'
import { isLive } from '../data/links'
import { Metric } from '../components/Metric'
import { Button, Eyebrow, Tag } from '../components/ui'
import { Reveal } from '../components/motion'

/* ── 单个内容块渲染 —— DESIGN_SYSTEM §9.3 ────────────────── */
function BlockView({ b }: { b: Block }) {
  switch (b.kind) {
    case 'p':
      return <p className="font-prose text-prose text-ink-2">{b.text}</p>

    case 'statement':
      return (
        <p className="my-10 max-w-[28ch] text-display-m text-ink lg:my-14">{b.text}</p>
      )

    case 'quote':
      return (
        <figure className="my-10 border-l-2 border-accent pl-6">
          <blockquote className="font-prose text-[1.5rem] leading-[1.5] text-ink">
            {b.text}
          </blockquote>
          {b.cite && <figcaption className="text-caption mt-3 text-ink-3">{b.cite}</figcaption>}
        </figure>
      )

    case 'list':
      return (
        <ul className="my-6 space-y-3">
          {b.items.map((it) => (
            <li key={it} className="flex gap-3 font-prose text-prose text-ink-2">
              <span aria-hidden="true" className="mt-[0.7em] size-1 shrink-0 rounded-full bg-ink-3" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      )

    case 'steps':
      return (
        <ol className="my-6 space-y-4">
          {b.items.map((it, i) => (
            <li key={it.label} className="flex gap-4">
              <span className="font-mono text-[12.5px] text-ink-3">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>
                <span className="block text-body font-medium text-ink">{it.label}</span>
                <span className="mt-1 block text-body-s text-ink-2">{it.text}</span>
              </span>
            </li>
          ))}
        </ol>
      )

    case 'table':
      return (
        <div className="my-8 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left">
            <thead>
              <tr className="border-b border-line-strong">
                {b.head.map((h, i) => (
                  <th key={i} className="text-label pb-3 pr-6 uppercase text-ink-3">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((r, i) => (
                <tr key={i} className="border-b border-line align-top">
                  {r.map((cell, j) => (
                    <td
                      key={j}
                      className={`py-4 pr-6 text-body-s ${j === 0 ? 'text-ink' : 'text-ink-2'}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    case 'beforeAfter':
      return (
        <div className="my-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-surface-1 p-6">
            <p className="text-label uppercase text-ink-3">Before</p>
            <ol className="mt-4 space-y-2">
              {b.before.map((s, i) => (
                <li key={s} className="font-mono text-[12.5px] text-ink-3">
                  {i > 0 && <span className="mr-2 opacity-50">↓</span>}
                  {s}
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-lg border-l-2 border-accent bg-surface-1 p-6">
            <p className="text-label uppercase text-ink-2">After</p>
            <ol className="mt-4 space-y-2">
              {b.after.map((s, i) => (
                <li key={s} className="font-mono text-[12.5px] text-ink">
                  {i > 0 && <span className="mr-2 text-accent">↓</span>}
                  {s}
                </li>
              ))}
            </ol>
          </div>
        </div>
      )

    case 'diagram':
      return (
        <figure className="my-8">
          <div
            role="img"
            aria-label={b.caption ?? 'System diagram'}
            className="overflow-x-auto rounded-lg bg-surface-2 p-6"
          >
            <pre className="font-mono text-[12.5px] leading-[1.7] text-ink-2">
              {b.lines.join('\n')}
            </pre>
          </div>
          {b.caption && <figcaption className="text-caption mt-3 text-ink-3">{b.caption}</figcaption>}
        </figure>
      )

    case 'code':
      return (
        <figure className="my-8">
          <div className="overflow-x-auto rounded-lg border-l-2 border-line-strong bg-surface-2 p-6">
            <pre className="font-mono text-mono leading-[1.7] text-ink-2">{b.lines.join('\n')}</pre>
          </div>
          {b.caption && <figcaption className="text-caption mt-3 text-ink-3">{b.caption}</figcaption>}
        </figure>
      )

    case 'limits':
      return (
        <aside className="my-8 rounded-lg border border-line bg-surface-1 p-6">
          <p className="text-label uppercase text-ink-3">Limitations</p>
          <ul className="mt-4 space-y-2">
            {b.items.map((it) => (
              <li key={it} className="text-body-s text-ink-2">
                {it}
              </li>
            ))}
          </ul>
        </aside>
      )
  }
}

/* ── 页面 ─────────────────────────────────────────────────── */
export function CaseStudyPage() {
  const { slug = '' } = useParams()
  const study = getCaseStudy(slug)
  const project = projects.find((p) => p.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!study) return <Navigate to="/" replace />

  const idx = caseStudies.findIndex((c) => c.slug === slug)
  const next = caseStudies[(idx + 1) % caseStudies.length]

  return (
    <>
      {/* Header */}
      <header className="border-b border-line">
        <div className="shell pt-[104px] pb-14 lg:pt-[140px] lg:pb-20">
          <Link
            to="/#work"
            className="text-body-s text-ink-3 transition-colors hover:text-ink"
          >
            ← Back to work
          </Link>

          <div className="mt-8">
            <Eyebrow>Case Study</Eyebrow>
            <h1 className="mt-4 max-w-[18ch] text-display-l text-ink">{study.title}</h1>
            {study.titleZh && (
              <p lang="zh-CN" className="mt-2 text-[1.25rem] font-medium text-ink-2">
                {study.titleZh}
              </p>
            )}
            <p className="mt-6 max-w-[52ch] text-body-l text-ink">{study.tagline}</p>

            {project && (
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            )}

            <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-3 lg:max-w-[820px]">
              {[
                ['Role', study.meta.role],
                ['Timeline', study.meta.timeline],
                ['Context', study.meta.context],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-label uppercase text-ink-3">{k}</dt>
                  <dd className="mt-1 text-body-s text-ink-2">{v}</dd>
                </div>
              ))}
            </dl>

            {project && (
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                {project.ctas
                  .filter((c) => isLive(c.href) && c.variant !== 'tertiary')
                  .map((c) => (
                    <Button
                      key={c.label}
                      href={c.href}
                      variant={c.variant}
                      size="md"
                      external={c.external}
                    >
                      {c.label}
                    </Button>
                  ))}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Proof strip */}
      {project && (
        <section aria-label="Project proof" className="border-b border-line">
          <div className="shell">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 py-8 lg:grid-cols-4 lg:py-10">
              {project.proofs.map((m) => (
                <Metric key={m.label} data={m} variant="card" />
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* Body */}
      <div className="shell py-16 lg:py-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-6">
          {/* Sticky 章节导航 —— ≥1200px */}
          <nav aria-label="Chapters" className="hidden lg:col-span-2 lg:block">
            <ol className="sticky top-[120px] space-y-2">
              {study.chapters.map((c) => (
                <li key={c.num}>
                  <a
                    href={`#ch-${c.num}`}
                    className="group flex gap-2 text-body-s text-ink-3 transition-colors hover:text-ink"
                  >
                    <span className="font-mono text-[12px]">{c.num}</span>
                    <span>{c.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="lg:col-span-8 lg:col-start-4">
            {study.chapters.map((c) => (
              <Reveal as="section" key={c.num} className="mb-14 scroll-mt-[100px] lg:mb-24">
                <div id={`ch-${c.num}`}>
                  <p className="text-eyebrow uppercase text-accent">{c.num}</p>
                  <h2 className="mt-3 text-display-m text-ink">{c.title}</h2>
                  <div className="mt-4 h-px w-10 bg-line-strong" aria-hidden="true" />
                  <div className="mt-6 max-w-[68ch] space-y-6">
                    {c.blocks.map((b, i) => (
                      <BlockView key={i} b={b} />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Footer nav */}
      <div className="border-t border-line">
        <div className="shell flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/#work" className="text-body-s text-ink-3 transition-colors hover:text-ink">
            ← Back to work
          </Link>
          <Link
            to={`/work/${next.slug}`}
            className="group text-body-l text-ink transition-colors hover:text-accent"
          >
            Next: {next.title}{' '}
            <span
              aria-hidden="true"
              className="inline-block text-accent transition-transform duration-[240ms] group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </>
  )
}

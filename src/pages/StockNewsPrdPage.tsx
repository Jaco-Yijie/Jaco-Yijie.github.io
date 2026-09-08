import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { stockNewsPrd as document, type PrdBlock } from '../data/stockNewsPrd.zh'
import { useLang, useLangHref } from '../i18n'
import { Eyebrow } from '../components/ui'

function DocumentBlock({ block }: { block: PrdBlock }) {
  switch (block.kind) {
    case 'heading':
      return <h3 className="pt-6 text-heading-l text-ink">{block.text}</h3>
    case 'p':
      return <p className="text-body-l text-ink-2">{block.text}</p>
    case 'list':
      return <ul className="list-disc space-y-3 pl-5 text-body-l text-ink-2">{block.items.map((item) => <li key={item}>{item}</li>)}</ul>
    case 'flow':
      return <div role="region" aria-label="系统链路，可横向滚动" tabIndex={0} className="overflow-x-auto rounded-lg bg-surface-2 p-6"><pre className="font-mono text-mono text-ink-2">{block.lines.join('\n')}</pre></div>
    case 'table':
      return (
        <div role="region" aria-label={`${block.head.join('、')}表，可横向滚动`} tabIndex={0} className="overflow-x-auto">
          <p className="mb-3 text-caption text-ink-3 sm:hidden">表格可左右滑动，查看全部列 →</p>
          <table className="w-full min-w-[640px] border-collapse text-left text-body">
            <thead><tr className="border-b border-line-strong">{block.head.map((title) => <th scope="col" key={title} className="py-4 pr-6 text-body-s font-medium text-ink-2">{title}</th>)}</tr></thead>
            <tbody>{block.rows.map((row) => (
              <tr key={row[0]} data-requirement={/^F\d-\d$/.test(row[0]) ? row[0] : undefined} className="border-b border-line align-top">
                {row.map((cell, index) => index === 0
                  ? <th scope="row" key={index} className="min-w-20 py-5 pr-6 font-medium text-ink">{cell}</th>
                  : <td key={index} className="py-5 pr-6 text-ink-2">{cell}</td>)}
              </tr>
            ))}</tbody>
          </table>
        </div>
      )
  }
}

export function StockNewsPrdPage() {
  const { lang } = useLang()
  const withLang = useLangHref()
  const { hash, pathname, search } = useLocation()
  const navigate = useNavigate()
  const [active, setActive] = useState('01')
  const zh = lang === 'zh'
  const back = zh ? '返回 Case Study' : 'Back to case study'

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [hash])

  useEffect(() => {
    let frame = 0
    const update = () => {
      const current = [...document.sections].reverse().find(({ num }) => {
        const element = window.document.getElementById(`prd-${num}`)
        return element && element.getBoundingClientRect().top <= 160
      })
      setActive(current?.num ?? '01')
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
  }, [])

  const toc = (
    <ol className="space-y-1" lang="zh-CN">
      {document.sections.map(({ num, title }) => (
        <li key={num}>
          <a href={`#prd-${num}`} aria-current={active === num ? 'location' : undefined}
            onClick={(event) => {
              event.preventDefault()
              navigate({ pathname, search, hash: `#prd-${num}` })
              setActive(num)
              window.document.getElementById(`prd-title-${num}`)?.focus({ preventScroll: true })
            }}
            className={`flex min-h-11 items-center gap-3 border-l-2 py-2 pl-3 text-body-s transition-colors hover:text-ink ${active === num ? 'border-accent text-ink' : 'border-transparent text-ink-3'}`}>
            <span className="font-mono text-caption">{num}</span><span>{title}</span>
          </a>
        </li>
      ))}
      <li><a href="#prd-source-note" className="flex min-h-11 items-center gap-3 py-2 pl-3 text-body-s text-ink-3"><span className="font-mono text-caption">10</span>变更记录 · 原目录项</a></li>
    </ol>
  )

  return (
    <>
      <header className="border-b border-line">
        <div className="shell pt-[104px] pb-14 lg:pt-[140px] lg:pb-20">
          <Link to={withLang('/work/stock-news')} className="inline-flex min-h-11 items-center text-body-s text-ink-2 hover:text-accent">← {back}</Link>
          <div className="mt-8"><Eyebrow>Product Requirement Document</Eyebrow></div>
          <p lang="zh-CN" className="mt-4 text-body-s text-ink-2">00 / 产品需求文档 · PRD</p>
          <h1 lang="zh-CN" className="mt-4 max-w-[20ch] text-display-l leading-tight text-ink">{document.title}</h1>
          <p className="mt-3 text-heading-m text-ink-2">{document.subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-body-s text-ink-2"><span className="font-mono">{document.version}</span><time dateTime={document.date}>{document.date}</time><span>{zh ? '已上线 · 持续迭代' : 'Live · Iterating'}</span></div>
          <p className="mt-6 max-w-[68ch] text-body-s text-ink-3">{zh ? '原始中文 PRD · 2026-07-17 版本，保留原文需求、验收标准与规划状态。' : 'Original Chinese PRD · July 17, 2026. The complete source text is preserved below; an English translation is not yet provided.'}</p>
        </div>
      </header>

      <div className="shell py-12 lg:py-20">
        <div className="grid min-w-0 grid-cols-1 gap-10 xl:grid-cols-[220px_minmax(0,1fr)] xl:gap-16">
          <aside className="min-w-0">
            <nav aria-label={zh ? 'PRD 目录' : 'PRD contents'} className="sticky top-[104px] hidden max-h-[calc(100dvh-128px)] overflow-y-auto xl:block">
              <p className="mb-4 text-label uppercase text-ink-2">{zh ? '文档目录' : 'Contents'}</p>{toc}
            </nav>
            <details className="border-y border-line py-3 xl:hidden">
              <summary className="flex min-h-11 cursor-pointer items-center text-body text-ink">{zh ? '文档目录 · 展开 / 收起' : 'Contents · expand / collapse'}</summary>
              <nav aria-label={zh ? 'PRD 目录' : 'PRD contents'}>{toc}</nav>
            </details>
          </aside>

          <article lang="zh-CN" className="min-w-0 break-words">
            <section aria-labelledby="prd-overview" className="mb-16 border-b border-line pb-12">
              <p className="text-eyebrow uppercase text-ink-2">Overview / 文档概览</p>
              <h2 id="prd-overview" className="mt-4 text-heading-l text-ink">产品简介</h2>
              <p className="mt-6 text-body-l text-ink-2">{document.intro}</p>
              <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">{document.metadata.map(([label, value]) => <div key={label}><dt className="text-body-s text-ink-3">{label}</dt><dd className="mt-2 text-body text-ink">{value}</dd></div>)}</dl>
            </section>
            {document.sections.map((section) => (
              <section key={section.num} aria-labelledby={`prd-title-${section.num}`} id={`prd-${section.num}`} className="mb-16 scroll-mt-[104px] lg:mb-24">
                <p className="font-mono text-caption text-accent">{section.num}</p>
                <h2 id={`prd-title-${section.num}`} tabIndex={-1} className="mt-3 text-display-m text-ink">{section.title}</h2>
                <div className="mt-6 space-y-6">{section.blocks.map((block, index) => <DocumentBlock key={index} block={block} />)}</div>
              </section>
            ))}
            <aside id="prd-source-note" className="scroll-mt-[104px] border-t border-line pt-8 text-body-s text-ink-3">
              <p>原文说明：原始 PDF 的目录含「10. 变更记录」，但所附 8 页未包含该章正文。此处保留目录记录，不补写变更内容。F2-1 中「七大类」及其列举按原文保留。</p>
            </aside>
          </article>
        </div>
      </div>
      <div className="border-t border-line"><div className="shell py-10"><Link to={withLang('/work/stock-news')} className="inline-flex min-h-11 items-center text-body text-accent">← {back}</Link></div></div>
    </>
  )
}

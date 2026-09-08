import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { stockNewsPrd as document, type PrdBlock } from '../data/stockNewsPrd.zh'
import { useLang, useLangHref } from '../i18n'
import { ReadingContents, type ReadingItem } from '../components/ReadingContents'
import { Eyebrow } from '../components/ui'

const featureId = (text: string) => `prd-feature-${text.slice(0, 3).replace('.', '-')}`

const contents: ReadingItem[] = document.sections.flatMap((section) => [
  { id: `prd-${section.num}`, num: section.num, title: section.title },
  ...(section.num === '05' ? section.blocks.filter((block) => block.kind === 'heading').map((block) => ({
    id: featureId(block.text), num: block.text.slice(0, 3), title: block.text.slice(4), level: 2 as const,
  })) : []),
])
contents.push({ id: 'prd-source-note', num: '10', title: '变更记录 · 原目录项' })

function DocumentBlock({ block }: { block: PrdBlock }) {
  switch (block.kind) {
    case 'heading':
      return <h3 id={/^5\.[1-8]/.test(block.text) ? featureId(block.text) : undefined} tabIndex={-1} className="reading-anchor pt-6 text-heading-l text-ink">{block.text}</h3>
    case 'p':
      return <p className="text-body-l text-ink-2">{block.text}</p>
    case 'list':
      return <ul className="list-disc space-y-3 pl-5 text-body-l text-ink-2">{block.items.map((item) => <li key={item}>{item}</li>)}</ul>
    case 'flow':
      return <div role="region" aria-label="系统链路，可横向滚动" tabIndex={0} className="overflow-x-auto rounded-lg bg-surface-2 p-6"><pre className="font-mono text-mono text-ink-2">{block.lines.join('\n')}</pre></div>
    case 'table': {
      const requirements = block.head[0] === '编号'
      return (
        <div role="region" aria-label={`${block.head.join('、')}表${requirements ? '' : '，可横向滚动'}`} tabIndex={0} className="overflow-x-auto">
          {!requirements && <p className="mb-3 text-caption text-ink-3 sm:hidden">表格可左右滑动，查看全部列 →</p>}
          <table className={`w-full border-collapse text-left text-body ${requirements ? 'requirements-table md:min-w-[640px]' : 'min-w-[640px]'}`}>
            <thead><tr className="border-b border-line-strong">{block.head.map((title) => <th scope="col" key={title} className="py-4 pr-6 text-body-s font-medium text-ink-2">{title}</th>)}</tr></thead>
            <tbody>{block.rows.map((row) => (
              <tr key={row[0]} data-requirement={/^F\d-\d$/.test(row[0]) ? row[0] : undefined} className="border-b border-line align-top">
                {row.map((cell, index) => index === 0
                  ? <th scope="row" key={index} className="min-w-20 py-5 pr-6 font-medium text-ink">{cell}</th>
                  : <td key={index} className="py-5 pr-6 text-ink-2">{requirements && <span aria-hidden="true" className="mb-1 block text-caption text-ink-3 md:hidden">{block.head[index]}</span>}{cell}</td>)}
              </tr>
            ))}</tbody>
          </table>
        </div>
      )
    }
  }
}

export function StockNewsPrdPage() {
  const { lang } = useLang()
  const withLang = useLangHref()
  const { hash } = useLocation()
  const zh = lang === 'zh'
  const back = zh ? '返回 Case Study' : 'Back to case study'

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [hash])
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

      <div className="shell pt-12 pb-24 lg:py-20">
        <div className="grid min-w-0 grid-cols-1 gap-10 xl:grid-cols-[220px_minmax(0,1fr)] xl:gap-16">
          <aside className="contents xl:block">
            <ReadingContents label={zh ? 'PRD 目录' : 'PRD contents'} items={contents} contentLang="zh-CN" />
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
            <aside tabIndex={-1} id="prd-source-note" className="scroll-mt-[104px] border-t border-line pt-8 text-body-s text-ink-3">
              <p>原文说明：原始 PDF 的目录含「10. 变更记录」，但所附 8 页未包含该章正文。此处保留目录记录，不补写变更内容。F2-1 中「七大类」及其列举按原文保留。</p>
            </aside>
          </article>
        </div>
      </div>
      <div className="border-t border-line"><div className="shell py-10"><Link to={withLang('/work/stock-news')} className="inline-flex min-h-11 items-center text-body text-accent">← {back}</Link></div></div>
    </>
  )
}

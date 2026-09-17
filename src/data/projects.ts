/**
 * Selected Work 的【结构】层：顺序、slug、状态、链接、Proof 引用。
 *
 * 顺序由这个数组决定 —— 组件不做任何手工重排，中英文自然一致。
 * 所有文案在 content/{en,zh}.ts；所有 Proof 数字在 data/metrics.ts。
 */
import { links, type MaybeLink } from './links'
import { projectMetricIds } from './metrics'
import type { ProjectSlug } from '../content/types'

export type CtaKind = 'caseStudy' | 'tryDemo' | 'liveDemo' | 'github' | 'fullPrd'

export type ProjectStatus = 'development' | 'mvp'

export type ProjectShell = {
  index: string
  slug: ProjectSlug
  /** 不设则为常规状态，不渲染任何徽章 */
  status?: ProjectStatus
  metricIds: typeof projectMetricIds[string]
  ctas: { kind: CtaKind; href: MaybeLink; variant: 'primary' | 'secondary' | 'tertiary'; external?: boolean }[]
}

export const projects: ProjectShell[] = [
  {
    index: '01',
    slug: 'seller-profit',
    metricIds: projectMetricIds['seller-profit'],
    ctas: [
      { kind: 'caseStudy', href: '/work/seller-profit', variant: 'tertiary' },
      { kind: 'tryDemo', href: links.demos.sellerProfit, variant: 'primary', external: true },
    ],
  },
  {
    index: '02',
    slug: 'stock-news',
    metricIds: projectMetricIds['stock-news'],
    ctas: [
      { kind: 'caseStudy', href: '/work/stock-news', variant: 'tertiary' },
      { kind: 'liveDemo', href: links.demos.stockNews, variant: 'primary', external: true },
      { kind: 'github', href: links.repos.stockNews, variant: 'secondary', external: true },
      { kind: 'fullPrd', href: links.prds.stockNews, variant: 'secondary' },
    ],
  },
  {
    index: '03',
    slug: 'taobao-analysis',
    metricIds: projectMetricIds['taobao-analysis'],
    ctas: [{ kind: 'caseStudy', href: '/work/taobao-analysis', variant: 'tertiary' }],
  },
  {
    index: '04',
    slug: 'arcana',
    status: 'development',
    metricIds: projectMetricIds.arcana,
    ctas: [
      { kind: 'caseStudy', href: '/work/arcana', variant: 'tertiary' },
      { kind: 'liveDemo', href: links.demos.arcana, variant: 'primary', external: true },
      { kind: 'github', href: links.repos.arcana, variant: 'secondary', external: true },
    ],
  },
]

/** More Work 的链接与文案分离，按顺序对应 content.moreWork */
export const moreWorkLinks: MaybeLink[] = [links.repos.teslaFyp, null, null]

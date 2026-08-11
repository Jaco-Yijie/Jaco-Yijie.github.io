/**
 * Selected Work 的【结构】层：顺序、slug、链接、Proof 引用。
 * 所有文案（标题、副标题、problem、outcome、tags）在 content/{en,zh}.ts。
 * 所有 Proof 数字在 data/metrics.ts。这里一个字符串都不该出现。
 */
import { links, type MaybeLink } from './links'
import { projectMetricIds } from './metrics'
import type { ProjectSlug } from '../content/types'

export type CtaKind = 'caseStudy' | 'tryDemo' | 'liveDemo' | 'github'

export type ProjectShell = {
  index: string
  slug: ProjectSlug
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
    slug: 'arcana',
    metricIds: projectMetricIds.arcana,
    ctas: [
      { kind: 'caseStudy', href: '/work/arcana', variant: 'tertiary' },
      { kind: 'github', href: links.repos.arcana, variant: 'secondary', external: true },
      { kind: 'liveDemo', href: links.demos.arcana, variant: 'secondary', external: true },
    ],
  },
  {
    index: '03',
    slug: 'stock-news',
    metricIds: projectMetricIds['stock-news'],
    ctas: [
      { kind: 'caseStudy', href: '/work/stock-news', variant: 'tertiary' },
      { kind: 'github', href: links.repos.stockNews, variant: 'secondary', external: true },
      { kind: 'liveDemo', href: links.demos.stockNews, variant: 'secondary', external: true },
    ],
  },
  {
    index: '04',
    slug: 'taobao-analysis',
    metricIds: projectMetricIds['taobao-analysis'],
    ctas: [{ kind: 'caseStudy', href: '/work/taobao-analysis', variant: 'tertiary' }],
  },
]

/** More Work 的链接与项目文案分离，按顺序对应 content.moreWork */
export const moreWorkLinks: MaybeLink[] = [links.repos.teslaFyp, null, null]

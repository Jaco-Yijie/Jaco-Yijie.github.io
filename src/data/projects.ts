/**
 * Selected Work 数据层 —— PORTFOLIO_PRD.md §6.1 / DESIGN_SYSTEM.md §8
 * 顺序固定：PDD → Arcana → Stock News → Taobao
 *
 * 每张卡的信息层级不同（highlight 决定卡片强调什么），
 * 避免四张卡长得一模一样。
 */
import type { Metric } from './metrics'
import { links, type MaybeLink } from './links'

export type ProjectCta = {
  label: string
  href: MaybeLink
  variant: 'primary' | 'secondary' | 'tertiary'
  external?: boolean
}

export type Project = {
  index: string
  slug: string
  title: string
  titleZh?: string
  subtitle: string
  problem: string
  outcome: string
  /** 这张卡独有的强调点，决定它与其他卡的差异 */
  highlight: { label: string; text: string }
  tags: string[]
  proofs: Metric[]
  ctas: ProjectCta[]
}

export const projects: Project[] = [
  {
    index: '01',
    slug: 'seller-profit',
    title: 'Seller Profit Calculator',
    titleZh: '拼多多新手卖家利润试算助手',
    subtitle: 'Turning an unreliable LLM calculator into a deterministic AI product.',
    problem:
      'First-time sellers cannot see their real take-home profit — not because the arithmetic is hard, but because they do not know which platform fees exist.',
    outcome:
      'Evaluation showed the model re-deriving numbers instead of using the deterministic result. I moved calculation into code and cut the model’s context to two qualitative variables.',
    highlight: {
      label: 'Try it',
      text: 'The only project here you can use directly — no repository required.',
    },
    tags: ['AI Product', 'LLM Evaluation', 'Prompt Engineering'],
    proofs: [
      { value: '10', label: 'AI Evaluation Cases', source: 'PRD-v5.md §7.1', verified: true },
      {
        value: '16',
        infix: '→',
        value2: '2',
        label: 'LLM Context Variables',
        source: 'PRD-v5.md §6.3',
        verified: true,
      },
      { value: 'V1–V5', label: 'PRD Iterations', source: 'PRD v1–v5 files', verified: true },
    ],
    ctas: [
      { label: 'Read Case Study', href: '/work/seller-profit', variant: 'tertiary' },
      { label: 'Try Live Demo', href: links.demos.sellerProfit, variant: 'primary', external: true },
    ],
  },
  {
    index: '02',
    slug: 'arcana',
    title: 'Arcana',
    titleZh: '沉浸式塔罗抽牌 Web MVP',
    subtitle: 'The LLM never draws the cards — it only interprets a frozen result.',
    problem:
      'The obvious build lets the model draw and interpret in one step. That is cheaper, faster, and it destroys the reason people do a tarot draw at all.',
    outcome:
      'Shuffle, cut, draw and orientation belong to a deterministic engine. The model receives a frozen result — and 160 runnable assertions keep it there.',
    highlight: {
      label: 'Reproducible',
      text: 'Clone the repo and run the evaluation yourself: 64 + 96 assertions, 0 failed.',
    },
    tags: ['AI Product', 'Interaction Design', 'LLM Evaluation'],
    proofs: [
      {
        value: '64',
        infix: '+',
        value2: '96',
        label: 'Reproducible Assertions',
        source: 'npm run engine:check / reading:check (2026-08-11)',
        verified: true,
      },
      { value: '24', label: 'Product Red Lines', source: 'docs/01-product-spec.md', verified: true },
      {
        value: '1.1',
        suffix: 's',
        label: 'First Content, from 51.6s',
        source: 'docs/v2/14-perf-investigation.md',
        verified: true,
      },
    ],
    ctas: [
      { label: 'Read Case Study', href: '/work/arcana', variant: 'tertiary' },
      { label: 'View on GitHub', href: links.repos.arcana, variant: 'secondary', external: true },
      { label: 'Live Demo', href: links.demos.arcana, variant: 'secondary', external: true },
    ],
  },
  {
    index: '03',
    slug: 'stock-news',
    title: 'Stock News Intelligence',
    titleZh: 'A股板块新闻监控系统',
    subtitle: 'A rule engine decides; the LLM only reviews what the rules are unsure about.',
    problem:
      'Sector news is scattered, heavily duplicated, and hard to connect to the sectors it actually moves — and it all has to be pulled manually.',
    outcome:
      'Keyword rules classify cheaply and explainably; the model is invoked only on low-confidence matches. Prompt and rule versions are part of the cache key.',
    highlight: {
      label: 'Running now',
      text: 'Collection every 30 minutes, a daily brief, and 70 tests running in CI.',
    },
    tags: ['AI Product', 'Prompt Engineering', 'Automation'],
    proofs: [
      { value: '38', label: 'Industry Sectors', source: 'data/sectors_config.json', verified: true },
      { value: 'V1.4', label: 'Product Version', source: 'External PRD', verified: true },
    ],
    ctas: [
      { label: 'Read Case Study', href: '/work/stock-news', variant: 'tertiary' },
      { label: 'View on GitHub', href: links.repos.stockNews, variant: 'secondary', external: true },
      { label: 'Live Demo', href: links.demos.stockNews, variant: 'secondary', external: true },
    ],
  },
  {
    index: '04',
    slug: 'taobao-analysis',
    title: 'Taobao User Behavior Analysis',
    titleZh: '淘宝用户行为分析',
    subtitle: 'Turning 100M behavior logs into one segment an operations team can act on.',
    problem:
      'A platform converts a small fraction of enormous browsing volume. Which step in the journey is worth spending operational budget on?',
    outcome:
      'The largest actionable gap sits at cart-to-purchase. Traffic peak and conversion-rate peak are offset, so spend allocated against traffic targets the wrong hour.',
    highlight: {
      label: 'Data → decision',
      text: 'The deliverable is a sized, reachable segment — not a funnel chart.',
    },
    tags: ['Data Analysis', 'Product Analytics', 'User Behavior'],
    proofs: [
      { value: '100', suffix: 'M+', label: 'Behavior Logs', source: 'Resume', verified: true },
      { value: '207.9', suffix: 'K', label: 'High-intent Users', source: 'Resume', verified: true },
      { prefix: '~', value: '50', suffix: '%', label: 'Memory Reduction', source: 'Resume', verified: true },
    ],
    ctas: [{ label: 'Read Case Study', href: '/work/taobao-analysis', variant: 'tertiary' }],
  },
]

/**
 * Proof 数字的唯一来源。
 *
 * 数字与语言无关，所以只在这里定义一次；中英文各自只提供 label。
 * 这样「数字永远不变」是结构上保证的，不靠人工同步两份文案。
 *
 * `source` / `verified` 不渲染，仅供维护时自查（PORTFOLIO_PRD.md §14.2）。
 * 禁止出现的数字见 CONTENT_AUDIT.md §6。
 */
export type MetricValue = {
  /** 数字前的修饰符，0.6× · ink-3（如 ~） */
  prefix?: string
  value: string
  /** 中缀符号，0.5× · accent（如 → +） */
  infix?: string
  value2?: string
  /** 单位或后缀，0.62× · ink-2（如 M+ / % / s） */
  suffix?: string
  source: string
  verified: boolean
}

export type MetricId =
  | 'evalCases'
  | 'ctxVars'
  | 'sectors'
  | 'logs'
  | 'assertions'
  | 'redLines'
  | 'firstContent'
  | 'prdIterations'
  | 'prdVersion'
  | 'highIntent'
  | 'memory'

export const metricValues: Record<MetricId, MetricValue> = {
  evalCases: { value: '10', source: 'PRD-v5.md §7.1', verified: true },
  ctxVars: { value: '16', infix: '→', value2: '2', source: 'PRD-v5.md §6.3', verified: true },
  sectors: { value: '38', source: 'stock_news/data/sectors_config.json', verified: true },
  logs: { value: '100', suffix: 'M+', source: 'Resume (简历—V5.pdf)', verified: true },
  assertions: {
    value: '64',
    infix: '+',
    value2: '96',
    source: 'npm run engine:check / reading:check (2026-08-11)',
    verified: true,
  },
  redLines: { value: '24', source: 'arcana docs/01-product-spec.md G-01~G-24', verified: true },
  firstContent: {
    value: '1.1',
    suffix: 's',
    source: 'arcana docs/v2/14-perf-investigation.md §5',
    verified: true,
  },
  prdIterations: { value: 'V1–V5', source: 'PRD v1–v5 files', verified: true },
  prdVersion: { value: 'V1.4', source: 'External PRD (Resume)', verified: true },
  highIntent: { value: '207.9', suffix: 'K', source: 'Resume', verified: true },
  memory: { prefix: '~', value: '50', suffix: '%', source: 'Resume', verified: true },
}

/** 各项目卡的 Proof 组合 */
export const projectMetricIds: Record<string, MetricId[]> = {
  'seller-profit': ['evalCases', 'ctxVars', 'prdIterations'],
  arcana: ['assertions', 'redLines', 'firstContent'],
  'stock-news': ['sectors', 'prdVersion'],
  'taobao-analysis': ['logs', 'highIntent', 'memory'],
}

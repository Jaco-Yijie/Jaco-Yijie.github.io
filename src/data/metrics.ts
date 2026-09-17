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
  | 'deckWorlds'
  | 'assertions'
  | 'silentWindow'
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
    value: '785',
    source: 'Arcana working tree 789f2b5 + local changes, 2026-09-17: engine 64 + deck 367 + layout 147 + artwork 89 + reading 118. node --import tsx scripts/<check>.ts; Mock provider. Excludes release failures and skipped DB tests; CONTENT_AUDIT.md §2.2.',
    verified: true,
  },
  deckWorlds: {
    value: '10', infix: '/', value2: '5',
    source: 'Arcana src/atmosphere/signatures.ts, decks/registry.ts, artwork/resolver.ts, DeckLibraryPage.tsx; deck:check / artwork:check, 2026-09-17. Defined / selectable; not ten published decks.',
    verified: true,
  },
  silentWindow: {
    value: '2.57', suffix: 's',
    source: 'Arcana docs/v2/35-e3-reading-experience-v2.md §2: one documented investigation, longest silent gap 9.6s → 2.57s. Source and progressive rendering code checked 2026-09-17; latency not remeasured.',
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
  arcana: ['assertions', 'deckWorlds', 'silentWindow'],
  'stock-news': ['sectors', 'prdVersion'],
  'taobao-analysis': ['logs', 'highIntent', 'memory'],
}

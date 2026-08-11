/**
 * Proof Metrics 数据层。
 *
 * `source` / `verified` 不渲染到页面，仅供维护时自查（PORTFOLIO_PRD.md §14.2）。
 * 禁止出现的数字见 CONTENT_AUDIT.md §6：
 *   40% · 100% · 4/10 · 6/6 · Pending · Recall · F1 · ROC-AUC · 54% accuracy
 */

export type Metric = {
  /** 数字本体，符号与单位交给 unit / prefix 降级处理 */
  value: string
  /** 跟在数字后的单位或后缀，字号与颜色降级（如 M+ / %） */
  suffix?: string
  /** 数字前的修饰符，字号与颜色降级（如 ~） */
  prefix?: string
  /** 中缀符号，用 accent 色、0.5× 字号（如 → / +） */
  infix?: string
  /** infix 之后的第二个数字 */
  value2?: string
  label: string
  source: string
  verified: boolean
}

/** Homepage Hero 下方四个 —— CONTENT_AUDIT.md §3 */
export const heroMetrics: Metric[] = [
  {
    value: '10',
    label: 'AI Evaluation Cases',
    source: 'PRD-v5.md §7.1',
    verified: true,
  },
  {
    value: '16',
    infix: '→',
    value2: '2',
    label: 'LLM Context Variables',
    source: 'PRD-v5.md §6.3',
    verified: true,
  },
  {
    value: '38',
    label: 'Industry Sectors',
    source: 'stock_news/data/sectors_config.json',
    verified: true,
  },
  {
    value: '100',
    suffix: 'M+',
    label: 'Behavior Logs',
    source: 'Resume (简历—V5.pdf)',
    verified: true,
  },
]

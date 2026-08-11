/**
 * Capabilities 数据层 —— DESIGN_SYSTEM.md §10.3
 * 硬性规则：Evidence-based。禁止百分比 / 进度条 / 熟练度标签。
 * 每组必须至少指向 2 个项目作为证据（PORTFOLIO_PRD.md §15.2 C4）。
 */

export type Capability = {
  index: string
  title: string
  skills: string[]
  /** Used in —— 指向 Selected Work 的 slug */
  usedIn: { label: string; slug: string }[]
}

export const capabilities: Capability[] = [
  {
    index: '01',
    title: 'AI Product',
    skills: [
      'User Research',
      'Problem Framing',
      'Requirement Analysis',
      'PRD',
      'MVP Scope',
      'Product Iteration',
    ],
    usedIn: [
      { label: 'Seller Profit Calculator', slug: 'seller-profit-calculator' },
      { label: 'Stock News Intelligence', slug: 'stock-news' },
    ],
  },
  {
    index: '02',
    title: 'LLM Product Systems',
    skills: [
      'Prompt Engineering',
      'LLM Evaluation',
      'RAG',
      'Agent',
      'Function Calling',
      'MCP',
      'Context Management',
      'Cost Control',
    ],
    usedIn: [
      { label: 'Seller Profit Calculator', slug: 'seller-profit-calculator' },
      { label: 'Arcana', slug: 'arcana' },
      { label: 'Stock News Intelligence', slug: 'stock-news' },
    ],
  },
  {
    index: '03',
    title: 'Data & Evaluation',
    skills: [
      'Python',
      'Pandas',
      'SQL (MySQL / DuckDB)',
      'Funnel Analysis',
      'Retention',
      'Evaluation Design',
    ],
    usedIn: [
      { label: 'Taobao User Behavior', slug: 'taobao-user-behavior' },
      { label: 'Tesla Stock Prediction', slug: 'tesla-stock-prediction' },
      { label: 'Seller Profit Calculator', slug: 'seller-profit-calculator' },
    ],
  },
  {
    index: '04',
    title: 'Prototype & Delivery',
    skills: [
      'Figma',
      'Streamlit',
      'Dify',
      'GitHub Actions',
      'Supabase',
      'Codex / Claude Code',
    ],
    usedIn: [
      { label: 'Arcana', slug: 'arcana' },
      { label: 'Stock News Intelligence', slug: 'stock-news' },
    ],
  },
]

export const capabilitiesClosing = 'I can turn product hypotheses into working prototypes.'

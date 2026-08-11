/**
 * 所有外部链接的唯一出口。
 * 规则（CONTENT_AUDIT.md §0.3 / §5）：
 *  - 不猜 URL，只使用事实源中已出现的链接
 *  - null 或 'TODO_LINK' 的链接【不渲染按钮】，不渲染灰色死链
 */

export const TODO_LINK = 'TODO_LINK' as const

export type MaybeLink = string | null

export const isLive = (href: MaybeLink | undefined): href is string =>
  typeof href === 'string' && href.length > 0 && href !== TODO_LINK

export const links = {
  github: 'https://github.com/Jaco-Yijie',
  email: 'wangyijie072022@gmail.com',
  resume: '/resume/Jaco-Wang-Resume-CN.pdf',
  portfolio: 'https://jaco-yijie.github.io',

  repos: {
    arcana: 'https://github.com/Jaco-Yijie/arcana',
    stockNews: 'https://github.com/Jaco-Yijie/stock_news',
    teslaFyp: 'https://github.com/Jaco-Yijie/tesla-stock-prediction-fyp',
  },

  demos: {
    sellerProfit: 'https://udify.app/chat/NTlMX91jzOFzzQpo',
    stockNews: 'https://stocknews-c8bdpgjep9n7zrxkscggbh.streamlit.app/',
    arcana: null as MaybeLink, // 未提供
  },

  prds: {
    stockNews: TODO_LINK as MaybeLink, // PRD V1.4 存在于仓库之外
  },
} as const

/** Contact 仅四项 —— PORTFOLIO_PRD.md §12.3 */
export const contact = [
  { label: 'Email', value: links.email, href: `mailto:${links.email}` },
  { label: 'GitHub', value: 'github.com/Jaco-Yijie', href: links.github },
  { label: 'Resume', value: 'Download (CN)', href: links.resume },
  { label: 'Portfolio', value: 'jaco-yijie.github.io', href: links.portfolio },
] as const

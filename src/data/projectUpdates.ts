import type { ProjectSlug } from '../content/types'

export type Lang = 'zh' | 'en'

type ProjectOverride = {
  subtitle?: string
  outcome?: string
  highlightLabel?: string
  highlight?: string
}

export const projectOverrides: Partial<Record<ProjectSlug, Record<Lang, ProjectOverride>>> = {
  'stock-news': {
    zh: {
      subtitle: '从 PRD V1.4 到上线系统：按板块聚合新闻，用规则完成确定性判断，LLM 只复核低置信度样本。',
      outcome:
        '已经形成完整 PRD：覆盖目标用户、核心场景、系统链路、P0/P1 功能、非功能需求、验收指标与版本路线，并与当前 V1.4 实现保持对应。',
      highlightLabel: 'PRD 可查看',
      highlight: 'HR 可直接查看完整 PRD，同时对照 GitHub 与在线 Demo 验证实现。',
    },
    en: {
      subtitle:
        'From PRD V1.4 to a running product: sector-first aggregation, deterministic rules for clear cases, and LLM review only for low-confidence samples.',
      outcome:
        'The project now exposes a full PRD covering target users, core scenarios, system flow, P0/P1 requirements, non-functional requirements, acceptance metrics, and roadmap, mapped to the current V1.4 implementation.',
      highlightLabel: 'PRD available',
      highlight: 'Recruiters can read the full PRD and cross-check the implementation in GitHub and the live demo.',
    },
  },
  arcana: {
    zh: {
      subtitle:
        'MVP 已成型：用户亲手完成洗牌、切牌、摊牌、选牌、摆牌与翻牌，LLM 只在结果冻结后负责解读。',
      outcome:
        '当前仓库已经包含完整交互流程、DeepSeek 服务端解读、5 套完整牌面资产（390 张）、多牌组视觉架构、发布与部署校验，以及本地隐私优先的数据策略。',
      highlightLabel: 'MVP 已成型',
      highlight: '抽牌结果由确定性引擎生成；牌组视觉可替换，但牌义、随机逻辑与 Prompt 不随 Deck 改变。',
    },
    en: {
      subtitle:
        'The MVP is now formed: users physically drive shuffle, cut, spread, select, place, and reveal; the LLM appears only after the result is frozen.',
      outcome:
        'The repository now includes the full interaction flow, server-side DeepSeek readings, five complete 78-card visual decks (390 assets), multi-deck architecture, release/deployment checks, and a privacy-first local data model.',
      highlightLabel: 'MVP formed',
      highlight:
        'Card identity is owned by a deterministic engine; deck visuals can change while meanings, randomness, and the reading prompt remain invariant.',
    },
  },
}

export const stockPrdQuickRead = {
  zh: {
    eyebrow: 'PRD · V1.4',
    title: '从「每天刷新闻」收敛成一条可验收的产品链路',
    lead:
      'PRD 把问题定义为：用户按板块组织投资逻辑，但资讯按个股和时间流组织。产品因此定位为投资决策前的信息预处理层，而不是投资建议工具。',
    items: [
      ['目标用户', '有 1–3 年经验、按行业板块组织持仓与自选、每天信息收集时间有限的 A 股个人投资者。'],
      ['北极星指标', '用户每天用 ≤ 3 分钟即可掌握关注板块的当日关键动态。'],
      ['核心场景', '早间速览、盘中高影响消息提醒、晚间个股复盘。'],
      ['核心链路', '采集 → 去重 → 规则分类 → 低置信度 LLM 复核 → 存储 → 推送 / Web 展示。'],
      ['关键验收', '抓取成功率 ≥95%；交易时段入库延迟 ≤30 分钟；重复事件占比 ≤5%；抽样分类正确率目标 ≥90%。'],
      ['版本状态', 'V1.0–V1.4 已上线；V2.0 规划组合订阅、正式标注集、移动端与板块情绪趋势。'],
    ],
  },
  en: {
    eyebrow: 'PRD · V1.4',
    title: 'Turning “refresh news all day” into an explicit, testable product flow',
    lead:
      'The PRD frames the mismatch clearly: users think in sectors, while most feeds are organized by ticker or chronology. The product is therefore an information pre-processing layer before investment decisions—not an investment-advice engine.',
    items: [
      ['Target user', 'A-share retail investors with 1–3 years of experience who organize watchlists by sector and have limited daily time for information collection.'],
      ['North-star metric', '≤ 3 minutes per day to understand the key developments in the sectors a user follows.'],
      ['Core scenarios', 'Morning brief, intraday high-impact alerts, and evening single-stock review.'],
      ['Core flow', 'Collect → deduplicate → rule classification → low-confidence LLM review → store → push / web display.'],
      ['Acceptance targets', 'Fetch success ≥95%; market-hours ingestion delay ≤30 min; duplicate-event ratio ≤5%; sampled classification target ≥90%.'],
      ['Version status', 'V1.0–V1.4 shipped; V2.0 plans portfolio subscriptions, a labeled evaluation set, mobile adaptation, and sector sentiment trends.'],
    ],
  },
} as const

export const arcanaMvpQuickRead = {
  zh: {
    eyebrow: 'MVP · 当前状态',
    title: '已经不再是概念稿，而是一条完整可运行的体验链路',
    lead:
      '当前 MVP 的核心不是“AI 会算塔罗”，而是用户自主完成抽牌，模型只解读冻结后的结果。这个边界同时体现在交互、数据结构、服务端接口和自动化校验里。',
    items: [
      ['完整流程', '洗牌 → 切牌 → 摊牌 → 选牌 → 摆牌 → 翻牌 → 完整解读。'],
      ['AI 边界', 'LLM 不参与抽牌、正逆位或牌数决定；它只接收已翻开的牌、问题与牌阵。'],
      ['多牌组', '当前本地资产检查覆盖 390 张牌面，即 5 套 × 78 张；视觉层与牌义层、随机引擎分离。'],
      ['解读服务', '前端只请求本站 /api/tarot/reading；DeepSeek Key 仅存在服务端，浏览器不直接访问模型供应商。'],
      ['可复现校验', '仓库提供 engine / deck / layout / artwork / reading / release / deployment 多组检查脚本。'],
      ['隐私策略', '抽牌记录保存在浏览器 localStorage；只有开始完整解读时才发送必要的牌面、问题与牌阵。'],
    ],
  },
  en: {
    eyebrow: 'MVP · Current state',
    title: 'No longer a concept: the full experience loop now runs end to end',
    lead:
      'The MVP is built around user agency, not “AI drawing tarot cards.” Users own the draw; the model interprets only after the result is frozen. That boundary exists in interaction design, data structures, server APIs, and automated checks.',
    items: [
      ['Full flow', 'Shuffle → cut → spread → select → place → reveal → full reading.'],
      ['AI boundary', 'The LLM cannot choose card identity, orientation, or card count; it only receives revealed cards, the question, and the spread.'],
      ['Multi-deck system', 'Asset validation covers 390 local card faces: 5 decks × 78 cards, with visual assets separated from semantics and randomness.'],
      ['Reading service', 'The client calls only /api/tarot/reading; the DeepSeek key stays server-side and the browser never calls the provider directly.'],
      ['Reproducible checks', 'The repository exposes engine, deck, layout, artwork, reading, release, and deployment verification scripts.'],
      ['Privacy model', 'Reading history stays in localStorage; only the minimum reading payload is sent when the user explicitly starts a full interpretation.'],
    ],
  },
} as const

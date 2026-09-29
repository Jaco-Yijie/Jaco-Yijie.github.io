type WorkSummary = {
  title: string
  summary: string
  tags: string[]
  imageAlt: string
  result: { value: string; label: string }
}
type Evidence = { value: string; label: string }

export type PortfolioCopy = {
  identity: string
  heroLines: string[]
  heroSummary: string
  focus: string
  evidence: Evidence[]
  heroMeta: string[]
  viewWork: string
  downloadResume: string
  featured: string
  motionTitle: string
  motionSummary: string
  role: string
  roles: string
  techLabel: string
  tech: string[]
  stageLabel: string
  motionCredit: string
  play: string
  pause: string
  videoError: string
  openVideo: string
  workEyebrow: string
  workTitle: string
  viewProject: string
  caseStudy: string
  demo: string
  pddVisual: {
    label: string
    before: string
    beforeNote: string
    change: string
    after: string
    afterNote: string
  }
  projects: Record<'arcana' | 'stock-news' | 'seller-profit', WorkSummary>
  aboutEyebrow: string
  aboutTitle: string
  aboutBody: string
  aboutFacts: { label: string; value: string }[]
  practiceLabel: string
  practiceLinks: { evals: string; learning: string }
  xhsEyebrow: string
  xhsTitle: string
  xhsBody: string
  xhsIdLabel: string
  xhsCopy: string
  xhsCopied: string
  xhsCopyFailed: string
  contactTitle: string
  contactBody: string
  contactLabels: { email: string; phone: string; wechat: string; availability: string }
  copy: string
  copied: string
  caseSummary: { title: string; problem: string; decision: string; result: string; contents: string }
  more: string
  footer: string
  navLabel: string
  menuLabel: string
  navItems: { work: string; practice: string; about: string; xhs: string; resume: string }
  themeLabel: string
  themes: { light: string; dark: string; system: string }
}

export const portfolioZh: PortfolioCopy = {
  identity: '王一杰 · AI 产品构建者',
  heroLines: ['把 AI 想法，', '做成真正能体验的产品。'],
  heroSummary:
    '从真实问题出发，把想法做成能运行、能评测、能被体验的 AI 产品。',
  focus: 'AI Product Builder · Agent · AI Coding · Creative AI',
  evidence: [
    { value: '40% → 100%', label: 'LLM 数值一致性优化' },
    { value: '70+', label: '自动化回归断言' },
    { value: '38', label: 'A 股板块自动分类' },
  ],
  heroMeta: ['UKM 计算机科学 · 数据科学', '最快三天到岗'],
  viewWork: '查看作品',
  downloadResume: '下载简历',
  featured: '创作实验 · AI × Motion',
  motionTitle: 'AI × Motion 创作实验',
  motionSummary: '让角色走进剪辑界面，用 AI 辅助编程把一次视频编辑变成动画。',
  role: '我的角色',
  roles: '创意方向 · 场景拆解 · 动画设计 · 视觉审查',
  techLabel: '协作工具',
  tech: ['React', 'Remotion', 'AI 辅助编程'],
  stageLabel: '创作实验 / 001',
  motionCredit: 'AI 动画创作实验',
  play: '播放视频',
  pause: '暂停视频',
  videoError: '当前浏览器暂时无法播放，可单独打开视频。',
  openVideo: '单独观看视频',
  workEyebrow: '精选作品',
  workTitle: '三个问题，三次实践。',
  viewProject: '查看项目',
  caseStudy: '案例详情',
  demo: '在线体验',
  pddVisual: {
    label: '案例结果 · 非产品截图',
    before: '40%',
    beforeNote: '改造前：LLM 直接计算',
    change: '架构调整：Python 确定性计算 + LLM 解释',
    after: '100%',
    afterNote: '同一 Eval Set 数值一致率',
  },
  projects: {
    arcana: {
      title: 'Arcana AI 塔罗',
      summary: '把抽牌交互、视觉牌组与 AI 解读，做成一次连贯的体验。',
      tags: ['AI 产品', '交互设计', '视觉系统'],
      imageAlt: 'Arcana 的选择牌组界面：月光与古典两套牌组',
      result: { value: '0 → 1', label: '从概念到真实可运行的 AI Web 产品' },
    },
    'stock-news': {
      title: 'A 股新闻监控',
      summary: '让规则与大模型协作，把分散新闻整理成可追踪的行业线索。',
      tags: ['自动化', 'Prompt', 'Regression'],
      imageAlt: 'A 股新闻监控界面：板块筛选、今日新闻与利好利空判断',
      result: { value: '38 · 70+', label: '个板块 · 自动化回归断言' },
    },
    'seller-profit': {
      title: '拼多多利润试算',
      summary: '用确定性代码负责计算，让 AI 帮助新手卖家理解利润。',
      tags: ['用户研究', 'Eval', 'Python'],
      imageAlt: '',
      result: { value: '40% → 100%', label: '同一 Eval Set 数值一致性' },
    },
  },
  aboutEyebrow: '关于我',
  aboutTitle: '先做出来，再认真打磨。',
  aboutBody:
    '我是王一杰，在马来西亚国立大学（UKM）学习计算机科学与数据科学。我用 AI 辅助开发探索产品与创作，负责问题定义、体验判断和持续迭代。',
  aboutFacts: [
    { label: '教育', value: 'UKM · 计算机科学 / 数据科学' },
    { label: '关注', value: 'AI 产品 · Agent · AI Coding · Creative AI' },
    { label: '到岗', value: '最快三天到岗' },
  ],
  practiceLabel: 'AI 实践',
  practiceLinks: { evals: '大模型评测与 Prompt', learning: '学习沉淀：Agent / Harness / Context' },
  xhsEyebrow: '内容',
  xhsTitle: '小红书',
  xhsBody: '我会持续记录 AI 产品、Agent、AI Coding、Creative AI 与学习实验。',
  xhsIdLabel: '小红书号',
  xhsCopy: '复制小红书号',
  xhsCopied: '已复制',
  xhsCopyFailed: '复制失败，请手动复制',
  contactTitle: '一起，把想法做出来。',
  contactBody: '欢迎交流 AI 产品岗位、创作实验与合作机会。',
  contactLabels: { email: '邮箱', phone: '电话', wechat: '微信', availability: '到岗' },
  copy: '复制',
  copied: '已复制',
  caseSummary: { title: '30 秒看懂', problem: '问题', decision: '决策', result: '结果', contents: '目录' },
  more: '更多项目与笔记',
  footer: '在实践中，持续构建。',
  navLabel: '主导航',
  menuLabel: '导航菜单',
  navItems: { work: '作品', practice: 'AI 实践', about: '关于', xhs: '小红书', resume: '简历' },
  themeLabel: '主题',
  themes: { light: '浅色', dark: '深色', system: '跟随系统' },
}

export const portfolioEn: PortfolioCopy = {
  identity: 'Jaco Wang · AI Product Builder',
  heroLines: ['AI ideas,', 'made into experiences.'],
  heroSummary:
    'I start from real problems and turn ideas into AI products people can run, evaluate and experience.',
  focus: 'AI Product Builder · Agent · AI Coding · Creative AI',
  evidence: [
    { value: '40% → 100%', label: 'LLM numeric consistency' },
    { value: '70+', label: 'Automated regression assertions' },
    { value: '38', label: 'A-share sectors auto-classified' },
  ],
  heroMeta: ['UKM Computer Science · Data Science', 'Available to start in 3 days'],
  viewWork: 'View work',
  downloadResume: 'Download résumé',
  featured: 'Creative experiment · AI × Motion',
  motionTitle: 'AI × Motion',
  motionSummary:
    'A character steps inside a video editor. Built into an animation through AI-assisted creative coding.',
  role: 'My role',
  roles: 'Creative direction · Scene breakdown · Motion design · Visual review',
  techLabel: 'Built with',
  tech: ['React', 'Remotion', 'AI-assisted coding'],
  stageLabel: 'Experiment / 001',
  motionCredit: 'Creative Coding Experiment',
  play: 'Play video',
  pause: 'Pause video',
  videoError: 'Your browser cannot play this preview. Open the video instead.',
  openVideo: 'Open video',
  workEyebrow: 'Selected work',
  workTitle: 'Three problems. Three explorations.',
  viewProject: 'View project',
  caseStudy: 'Case study',
  demo: 'Demo',
  pddVisual: {
    label: 'Case result · not a product screenshot',
    before: '40%',
    beforeNote: 'Before: LLM calculates directly',
    change: 'Architecture change: Python deterministic calculation + LLM explanation',
    after: '100%',
    afterNote: 'Numeric consistency on the same eval set',
  },
  projects: {
    arcana: {
      title: 'Arcana AI Tarot',
      summary:
        'Card interactions, visual decks and AI readings, brought together in one experience.',
      tags: ['AI Product', 'Interaction', 'Visual System'],
      imageAlt: 'Arcana’s deck selection screen showing the Moonlight and Classic decks',
      result: { value: '0 → 1', label: 'From concept to a working AI web product' },
    },
    'stock-news': {
      title: 'A-Share News Monitor',
      summary: 'Rules and language models turn scattered news into traceable industry signals.',
      tags: ['Automation', 'Prompt', 'Regression'],
      imageAlt: 'A-Share News Monitor: sector filters, daily news and bullish / bearish judgements',
      result: { value: '38 · 70+', label: 'sectors · automated regression assertions' },
    },
    'seller-profit': {
      title: 'PDD Profit Calculator',
      summary: 'Code handles the calculation. AI helps first-time sellers understand their profit.',
      tags: ['User Research', 'Eval', 'Python'],
      imageAlt: '',
      result: { value: '40% → 100%', label: 'Numeric consistency on the same eval set' },
    },
  },
  aboutEyebrow: 'About',
  aboutTitle: 'Build it. Test it. Make it better.',
  aboutBody:
    'I’m Jaco Wang, studying Computer Science / Data Science at Universiti Kebangsaan Malaysia. I explore products and creative work with AI-assisted development, taking responsibility for the problem, experience and iteration.',
  aboutFacts: [
    { label: 'Education', value: 'UKM · Computer Science / Data Science' },
    { label: 'Focus', value: 'AI Product · Agent · AI Coding · Creative AI' },
    { label: 'Availability', value: 'Can start within 3 days' },
  ],
  practiceLabel: 'AI practice',
  practiceLinks: { evals: 'LLM evals & prompts', learning: 'Notes: Agent / Harness / Context' },
  xhsEyebrow: 'Writing',
  xhsTitle: 'Xiaohongshu',
  xhsBody: 'I keep notes on AI products, agents, AI coding, creative AI and learning experiments.',
  xhsIdLabel: 'Xiaohongshu ID',
  xhsCopy: 'Copy Xiaohongshu ID',
  xhsCopied: 'Copied',
  xhsCopyFailed: 'Copy failed — please copy it manually',
  contactTitle: 'Let’s make something real.',
  contactBody: 'Open to AI product roles, creative work and collaboration.',
  contactLabels: { email: 'Email', phone: 'Phone', wechat: 'WeChat', availability: 'Availability' },
  copy: 'Copy',
  copied: 'Copied',
  caseSummary: { title: 'The 30-second version', problem: 'Problem', decision: 'Decision', result: 'Result', contents: 'Contents' },
  more: 'More projects & notes',
  footer: 'Always building, always learning.',
  navLabel: 'Main navigation',
  menuLabel: 'Navigation menu',
  navItems: { work: 'Work', practice: 'AI practice', about: 'About', xhs: 'Xiaohongshu', resume: 'Résumé' },
  themeLabel: 'Theme',
  themes: { light: 'Light', dark: 'Dark', system: 'System' },
}

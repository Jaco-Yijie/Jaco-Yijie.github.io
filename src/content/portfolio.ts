type WorkSummary = { title: string; summary: string; tags: string[]; imageAlt: string }

export type PortfolioCopy = {
  identity: string
  heroLines: string[]
  heroSummary: string
  viewWork: string
  watch: string
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
  projects: Record<'arcana' | 'stock-news' | 'seller-profit', WorkSummary>
  aboutEyebrow: string
  aboutTitle: string
  aboutBody: string
  processTitle: string
  process: string[]
  contactTitle: string
  contactBody: string
  more: string
  footer: string
  navLabel: string
  menuLabel: string
  themeLabel: string
  themes: { light: string; dark: string; system: string }
}

export const portfolioZh: PortfolioCopy = {
  identity: '王一杰 · AI 产品构建者',
  heroLines: ['把 AI 想法，', '做成真正能体验的产品。'],
  heroSummary:
    '我关注 AI 产品、智能体、AI 编程与创作实验，从真实问题出发，把想法做成能运行、能测试、能被体验的东西。',
  viewWork: '查看作品',
  watch: '查看最新实验',
  featured: '01 / 最新实验',
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
  videoError: '暂时无法播放，可打开视频文件重试。',
  openVideo: '观看实验',
  workEyebrow: '02 / 精选作品',
  workTitle: '三个问题，三次实践。',
  viewProject: '查看项目',
  projects: {
    arcana: {
      title: 'Arcana AI 塔罗',
      summary: '把抽牌交互、视觉牌组与 AI 解读，做成一次连贯的体验。',
      tags: ['AI 产品', '交互设计', '视觉系统'],
      imageAlt: 'Arcana 的交互抽牌界面',
    },
    'stock-news': {
      title: 'A 股新闻监控',
      summary: '让规则与大模型协作，把分散新闻整理成可追踪的行业线索。',
      tags: ['自动化', '提示词', '回归评测'],
      imageAlt: 'A 股新闻监控的新闻筛选界面',
    },
    'seller-profit': {
      title: '拼多多利润试算',
      summary: '用确定性代码负责计算，让 AI 帮助新手卖家理解利润。',
      tags: ['用户研究', 'AI 评测', 'Python'],
      imageAlt: '',
    },
  },
  aboutEyebrow: '03 / 关于我',
  aboutTitle: '先做出来，再认真打磨。',
  aboutBody:
    '我是王一杰，在马来西亚国立大学学习计算机科学与数据科学。我用 AI 辅助开发探索产品与创作，负责问题定义、体验判断和持续迭代。',
  processTitle: '我的构建方式',
  process: ['问题', '原型', '构建', '测试', '迭代'],
  contactTitle: '一起，把想法做出来。',
  contactBody: '欢迎交流 AI 产品、创作实验与合作机会。',
  more: '更多项目与笔记',
  footer: '在实践中，持续构建。',
  navLabel: '主导航',
  menuLabel: '导航菜单',
  themeLabel: '主题',
  themes: { light: '浅色', dark: '深色', system: '跟随系统' },
}

export const portfolioEn: PortfolioCopy = {
  identity: 'Jaco Wang · AI Product Builder',
  heroLines: ['AI ideas,', 'made into experiences.'],
  heroSummary:
    'I explore AI products, agents, AI-assisted coding and creative experiments — turning real problems into things people can use, test and experience.',
  viewWork: 'Explore my work',
  watch: 'Latest experiment',
  featured: '01 / Latest experiment',
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
  videoError: 'Playback is unavailable. Open the video file to try again.',
  openVideo: 'Watch experiment',
  workEyebrow: '02 / Selected work',
  workTitle: 'Three problems. Three explorations.',
  viewProject: 'View project',
  projects: {
    arcana: {
      title: 'Arcana AI Tarot',
      summary:
        'Card interactions, visual decks and AI readings, brought together in one experience.',
      tags: ['AI Product', 'Interaction', 'Visual System'],
      imageAlt: 'Arcana’s interactive card-shuffling screen',
    },
    'stock-news': {
      title: 'A-Share News Monitor',
      summary: 'Rules and language models turn scattered news into traceable industry signals.',
      tags: ['Automation', 'Prompts', 'Regression Evals'],
      imageAlt: 'The news filtering interface of A-Share News Monitor',
    },
    'seller-profit': {
      title: 'PDD Profit Calculator',
      summary: 'Code handles the calculation. AI helps first-time sellers understand their profit.',
      tags: ['User Research', 'AI Evaluation', 'Python'],
      imageAlt: '',
    },
  },
  aboutEyebrow: '03 / About',
  aboutTitle: 'Build it. Test it. Make it better.',
  aboutBody:
    'I’m Jaco Wang, studying Computer Science / Data Science at Universiti Kebangsaan Malaysia. I explore products and creative work with AI-assisted development, taking responsibility for the problem, experience and iteration.',
  processTitle: 'My way of building',
  process: ['Problem', 'Prototype', 'Build', 'Test', 'Iterate'],
  contactTitle: 'Let’s make something real.',
  contactBody: 'Open to conversations about AI products, creative work and collaboration.',
  more: 'More projects & notes',
  footer: 'Always building, always learning.',
  navLabel: 'Main navigation',
  menuLabel: 'Navigation menu',
  themeLabel: 'Theme',
  themes: { light: 'Light', dark: 'Dark', system: 'System' },
}

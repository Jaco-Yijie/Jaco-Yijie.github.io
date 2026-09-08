import type { MetricId } from '../data/metrics'

/**
 * 中英文两份内容必须满足同一个 Bundle 形状。
 * 这样漏译会在 typecheck 阶段就报错，而不是等到线上出现一段英文夹在中文页里。
 *
 * 只有「语言相关」的东西进这里。links、Proof 数字、slug、
 * ASCII 架构图这些与语言无关的内容留在 data/ 层，不重复两份。
 */
export type ProjectSlug = 'seller-profit' | 'arcana' | 'stock-news' | 'taobao-analysis'

export type ProjectCopy = {
  title: string
  /** 另一种语言的项目名，作为副标题出现一次 */
  subtitleAlt?: string
  subtitle: string
  problem: string
  outcome: string
  highlightLabel: string
  highlight: string
  tags: string[]
}

export type CapabilityCopy = {
  index: string
  title: string
  skills: string[]
  usedIn: ProjectSlug[]
}

export type MoreItemCopy = {
  title: string
  context: string
  points: string[]
}

/**
 * Learning Note —— 不写成教科书条目，写成「我学到了什么 / 怎么用的」。
 * keyIdea / failure / tradeoff / applied 都是可选：只填真实材料支持的部分。
 * `source` 仅供内部核查，永远不渲染（网站不出现本地路径）。
 */
export type NoteCopy = {
  slug: string
  category: string
  title: string
  summary: string
  keyIdea?: string
  failure?: string
  tradeoff?: string
  applied?: string
  body?: string[]
  relatedProjects?: ProjectSlug[]
  from?: string
  readingTime: string
  source: string
}

export type Bundle = {
  seo: {
    home: { title: string; description: string }
    routeTitles: Record<string, string>
  }
  nav: {
    work: string
    aiEvals: string
    capabilities: string
    learning: string
    about: string
    resume: string
    contact: string
    openMenu: string
    closeMenu: string
    skipToContent: string
    languageLabel: string
  }
  cta: {
    fullPrd: string
    caseStudy: string
    liveDemo: string
    tryDemo: string
    github: string
    resume: string
    readMore: string
    exploreLearning: string
    exploreEvals: string
    getInTouch: string
    viewWork: string
    readCaseStudies: string
    backToWork: string
    backHome: string
    next: string
    allNotes: string
  }
  hero: {
    eyebrow: string
    name: string
    nameAlt: string
    statement: string
    supporting: string
    meta: string
  }
  metricLabels: Record<MetricId, string>
  sections: {
    workEyebrow: string
    workTitle: string
    workLead: string
    evalsEyebrow: string
    evalsTitle: string
    evalsLead: string
    capabilitiesEyebrow: string
    capabilitiesTitle: string
    capabilitiesLead: string
    capabilitiesClosing: string
    usedIn: string
    moreEyebrow: string
    moreTitle: string
    learningEyebrow: string
    learningTitle: string
    learningLead: string
    aboutEyebrow: string
    aboutTitle: string
    contactEyebrow: string
    contactTitle: string
    contactLead: string
    problem: string
    outcome: string
    role: string
    timeline: string
    context: string
    caseStudyEyebrow: string
    chapters: string
    limitations: string
    before: string
    after: string
    projectProof: string
    from: string
    all: string
    filterNotes: string
  }
  about: {
    lead: string[]
    questions: string[]
    body: string[]
    facts: {
      educationLabel: string
      education: string
      educationSub: string
      availabilityLabel: string
      availability: string
      availabilitySub: string
      focusLabel: string
      focus: string
    }
  }
  contact: {
    email: string
    github: string
    resume: string
    resumeValue: string
    portfolio: string
  }
  footer: { tagline: string }
  /** 项目状态徽章与 Case Study 中的状态说明 */
  status: Record<'development' | 'mvp', { label: string; note: string }>
  projects: Record<ProjectSlug, ProjectCopy>
  capabilities: CapabilityCopy[]
  moreWork: MoreItemCopy[]
  evals: {
    heroTitle: string
    heroLead: string
    methodEyebrow: string
    methodTitle: string
    methodNote: string
    evidenceEyebrow: string
    evidenceTitle: string
    coverageEyebrow: string
    coverageTitle: string
    failureEyebrow: string
    failureTitle: string
    failureLead: string
    pipeline: { step: string; text: string }[]
    evidence: { slug: ProjectSlug; headline: string; points: string[] }[]
    topics: [string, string][]
    failures: { mode: string; detail: string; from: string }[]
  }
  learning: {
    heroTitle: string
    heroLead: string
    categories: Record<string, string>
    /** Learning Path 的展示顺序；只列实际有材料支撑的分类 */
    path: string[]
    labels: {
      keyIdea: string
      failure: string
      tradeoff: string
      applied: string
      relatedWork: string
      learningNote: string
    }
    notes: NoteCopy[]
  }
  /** About 里的「正在学什么」入口 —— 用内容本身证明持续学习 */
  learningTrail: { label: string; items: string[] }
}

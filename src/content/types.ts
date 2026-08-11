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

export type NoteCopy = {
  slug: string
  category: string
  title: string
  summary: string
  from?: string
  readingTime: string
  body: string[]
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
    keyProof: string
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
    notes: NoteCopy[]
  }
}

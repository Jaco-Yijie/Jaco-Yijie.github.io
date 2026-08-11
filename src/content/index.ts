import type { Lang } from '../i18n'
import type { Bundle } from './types'
import { en } from './en'
import { zh } from './zh'
import { caseStudiesEn } from '../data/caseStudies'
import { caseStudiesZh } from '../data/caseStudies.zh'
import type { CaseStudy } from '../data/caseStudies'

const bundles: Record<Lang, Bundle> = { en, zh }

export const getContent = (lang: Lang): Bundle => bundles[lang]

const studies: Record<Lang, CaseStudy[]> = { en: caseStudiesEn, zh: caseStudiesZh }

export const getCaseStudies = (lang: Lang): CaseStudy[] => studies[lang]

export const getCaseStudy = (lang: Lang, slug: string) =>
  studies[lang].find((c) => c.slug === slug)

export type { Bundle } from './types'

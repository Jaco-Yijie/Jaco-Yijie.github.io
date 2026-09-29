/**
 * Case Study 的「30 秒看懂」摘要：Problem / Decision / Result。
 * 数字只使用用户确认或 metrics.ts 已核实的口径；不在这里新增未经确认的数字。
 */
import type { Lang } from '../i18n'

export type CaseSummary = {
  problem: string
  decision: string
  result: { value: string; text: string }
}

export const caseSummaries: Record<Lang, Record<string, CaseSummary>> = {
  zh: {
    'seller-profit': {
      problem: '新手卖家真正的问题不是选品，而是无法快速判断商品是否赚钱。',
      decision: 'LLM 直接进行数值计算的一致率只有 40%。因此把确定性计算交给 Python，LLM 只负责解释。',
      result: { value: '40% → 100%', text: '同一 Eval Set 下的数值一致性。' },
    },
    'stock-news': {
      problem: '每天人工筛选大量财经新闻、并判断其关联板块，效率很低。',
      decision: '确定性判断优先使用规则；模糊新闻再交给 LLM 二次复核；真实 bad case 持续沉淀为 Regression Test。',
      result: { value: '38 · 70+', text: '38 个板块自动分类，70+ 条自动化回归断言。' },
    },
    arcana: {
      problem: '让 AI 直接“抽牌”，会把确定的牌面事实与概率性的解读混在一起。',
      decision: '由确定性引擎完成并冻结抽牌结果，LLM 只在结果冻结后负责解读。',
      result: { value: '0 → 1', text: '从概念到真实可运行的 AI Web 产品。' },
    },
  },
  en: {
    'seller-profit': {
      problem: 'First-time sellers don’t struggle to pick products — they can’t quickly tell whether a product makes money.',
      decision: 'Direct LLM calculation was numerically consistent only 40% of the time. Deterministic calculation moved to Python; the LLM only explains.',
      result: { value: '40% → 100%', text: 'Numeric consistency on the same eval set.' },
    },
    'stock-news': {
      problem: 'Manually screening a daily flood of financial news and mapping it to sectors was slow.',
      decision: 'Rules handle clear-cut judgements first; ambiguous news goes to an LLM for a second review; real bad cases become regression tests.',
      result: { value: '38 · 70+', text: '38 sectors classified automatically, 70+ automated regression assertions.' },
    },
    arcana: {
      problem: 'Letting AI “draw” the cards mixes fixed card facts with probabilistic interpretation.',
      decision: 'A deterministic engine performs and freezes the draw; the LLM only interprets once the result is fixed.',
      result: { value: '0 → 1', text: 'From concept to a working AI web product.' },
    },
  },
}

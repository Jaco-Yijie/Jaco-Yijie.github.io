import type { ProjectCopy } from '../content/types'
import type { Block } from './caseStudies'

// Verified against the Arcana working tree on 2026-09-17; see CONTENT_AUDIT.md §2.2.
export const projectOverrides: Record<'zh' | 'en', { arcana: ProjectCopy }> = {
  zh: {
    arcana: {
      title: 'Arcana',
      subtitleAlt: '沉浸式 AI 塔罗产品',
      subtitle: '把确定性抽牌、LLM 流式解读、多牌组视觉世界与沉浸式交互组合成完整的数字塔罗体验。',
      problem: '当线上塔罗只剩「点击按钮 → AI 给答案」，用户参与感、随机性的可信度和仪式过程都会被削弱。',
      outcome: '引擎控制牌、正逆位与牌阵，LLM 只解释冻结结果；在此边界上扩展多 Deck、渐进式解读、3D 仪式交互与首次使用引导。',
      highlightLabel: '产品化演进',
      highlight: '从 AI 功能 Demo 走向完整体验；账号、数据库与运营后台已在本地实现，尚未部署。',
      tags: [
        'AI 产品',
        '交互设计',
        'LLM Evaluation'
      ]
    }
  },
  en: {
    arcana: {
      title: 'Arcana',
      subtitleAlt: 'Immersive AI Tarot',
      subtitle: 'A complete digital tarot experience combining deterministic drawing, streamed AI readings, distinct deck worlds and hands-on ritual.',
      problem: 'Reducing online tarot to a button and an AI answer weakens participation, trust in the draw and the ritual itself.',
      outcome: 'The engine owns cards, orientations and spreads; the LLM interprets frozen results. That boundary now supports multiple decks, progressive readings, immersive interaction and first-use guidance.',
      highlightLabel: 'Product evolution',
      highlight: 'Beyond an AI feature demo: accounts, database persistence and an operations dashboard are implemented locally, with deployment still pending.',
      tags: [
        'AI Product',
        'Interaction Design',
        'LLM Evaluation'
      ]
    }
  }
}

export const arcanaQuickRead: Record<'zh' | 'en', Block> = {
  zh: {
    kind: 'steps',
    items: [
      {
        label: '产品边界',
        text: '用户参与抽牌；引擎冻结事实，LLM 只负责解读。'
      },
      {
        label: '完整仪式流程',
        text: '洗牌 → 切牌 → 摊牌 → 选牌 → 摆牌 → 翻牌 → 解读。'
      },
      {
        label: '多 Deck 系统',
        text: '语义与随机逻辑不变；10 套视觉签名已定义，5 个 legacy Deck 可选。'
      },
      {
        label: '渐进式 AI 解读',
        text: '完成的字段立即显示，流式与完成态共用 ReadingBody，减少页面长时间没有变化的等待。'
      },
      {
        label: '沉浸式与新手体验',
        text: 'Intro Cover、3D Hero、仪式桌面和操作引导，帮助用户理解并参与抽牌。'
      },
      {
        label: '产品化演进',
        text: '注册登录、PostgreSQL 与 Admin Analytics 已有本地实现；尚未部署，未发现微信登录实现。'
      }
    ]
  },
  en: {
    kind: 'steps',
    items: [
      {
        label: 'Product boundary',
        text: 'Users participate in the draw. The engine freezes facts; the LLM interprets them.'
      },
      {
        label: 'Complete ritual',
        text: 'Shuffle → Cut → Spread → Select → Place → Reveal → Reading.'
      },
      {
        label: 'Multi-deck system',
        text: 'Shared semantics and randomness, with 10 defined visual signatures and 5 selectable legacy decks.'
      },
      {
        label: 'Progressive AI reading',
        text: 'Completed fields appear as they arrive. Streaming and completed states share ReadingBody to reduce silent waiting.'
      },
      {
        label: 'Immersion and onboarding',
        text: 'An Intro Cover, 3D hero, ritual table and first-use guidance make the draw understandable and participatory.'
      },
      {
        label: 'Productisation',
        text: 'Accounts, PostgreSQL persistence and Admin Analytics are implemented locally, not deployed. No WeChat login implementation was found.'
      }
    ]
  }
}

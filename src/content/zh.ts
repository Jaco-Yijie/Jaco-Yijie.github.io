import type { Bundle } from './types'

/**
 * 中文文案。
 *
 * 原则：
 *  - 技术名词保留英文（LLM / Prompt Engineering / RAG / Agent / MCP / PRD /
 *    Python / GitHub / Streamlit / Dify / Coze / Supabase / Evaluation）
 *  - 不是英文的机械直译，按中文 AI 产品语境重写
 *  - 不出现学生口吻、不出现「热爱人工智能」这类表述
 *  - 数字与事实与英文版完全一致（数字来自 data/metrics.ts，此处不重复定义）
 */
export const zh: Bundle = {
  seo: {
    home: {
      title: '王一杰 — AI 产品作品集',
      description:
        '聚焦 AI 产品、大模型评测、Prompt Engineering 与数据分析的个人作品集。',
    },
    routeTitles: {
      '/work/stock-news/prd': 'A股板块新闻监控系统 — 完整 PRD V1.4 — 王一杰',
      '/work/seller-profit': '拼多多新手卖家利润试算助手 — 案例 — 王一杰',
      '/work/arcana': 'Arcana 沉浸式数字塔罗 — 案例 — 王一杰',
      '/work/stock-news': 'A股板块新闻监控系统 — 案例 — 王一杰',
      '/work/taobao-analysis': '淘宝用户行为数据分析 — 案例 — 王一杰',
      '/ai-evals': '大模型评测与 Prompt 系统 — 王一杰',
      '/learning': '学习沉淀 — 王一杰',
    },
  },

  nav: {
    work: '项目',
    aiEvals: '大模型评测',
    capabilities: '能力',
    learning: '学习沉淀',
    about: '关于我',
    resume: '简历',
    contact: '联系',
    openMenu: '打开菜单',
    closeMenu: '关闭菜单',
    skipToContent: '跳到正文',
    languageLabel: '语言',
  },

  cta: {
    fullPrd: '查看完整 PRD',
    caseStudy: '查看案例',
    liveDemo: '体验 Demo',
    tryDemo: '体验 Demo',
    github: '查看 GitHub',
    resume: '查看简历',
    readMore: '了解更多',
    exploreLearning: '查看学习沉淀',
    exploreEvals: '查看大模型评测',
    getInTouch: '联系我',
    viewWork: '查看项目',
    readCaseStudies: '阅读案例',
    backToWork: '← 返回项目',
    backHome: '← 返回首页',
    next: '下一个',
    allNotes: '查看全部',
  },

  hero: {
    eyebrow: 'AI 产品 · LLM Evaluation · 数据',
    name: '王一杰',
    nameAlt: 'Jaco Wang',
    statement: '我关注如何把 AI 能力转化为真正可用的产品。',
    statementLines: ['我关注如何把 AI 能力', '转化为真正可用的产品。'],
    supporting:
      '数据科学背景，专注 AI 产品设计、大模型评测、Prompt Engineering 与数据驱动的产品决策。',
    meta: '马来西亚国立大学 · 一周内可到岗 · 可实习半年以上',
  },

  metricLabels: {
    evalCases: '组 AI Evaluation 用例',
    ctxVars: 'LLM 上下文变量',
    sectors: '个行业板块',
    logs: '用户行为日志',
    cardFaces: '完整牌面 · 5 套牌组',
    assertions: '条可复现断言',
    redLines: '条产品红线',
    firstContent: 'V2 性能实验首字（历史）',
    prdIterations: 'PRD 迭代版本',
    prdVersion: '产品版本',
    highIntent: '高意向用户',
    memory: '内存占用下降',
  },

  sections: {
    workEyebrow: '精选项目',
    workTitle: '四个项目，四类不同的问题。',
    workLead:
      '它们各自解决的问题不一样：一个是我不得不重新划分的 AI 边界，一个是我拒绝越过的边界，一个是不需要我盯着也能跑的系统，还有一个是把数据变成决策。',
    evalsEyebrow: '大模型评测与 Prompt 系统',
    evalsTitle: 'Prompt Engineering 是系统设计的一部分。',
    evalsLead:
      '不是把话写得更漂亮，而是界定任务边界、约束输出、处理失败，并建立一组能够证明自己判断错误的评测用例。',
    capabilitiesEyebrow: '能力',
    capabilitiesTitle: '每一项能力都指向一个具体项目。',
    capabilitiesLead: '不用熟练度百分比。这里列出的每一项，都有可以点开核对的项目。',
    capabilitiesClosing: '我能把产品假设变成真正跑得起来的原型。',
    usedIn: '应用于',
    moreEyebrow: '其他项目',
    moreTitle: '技术基础。',
    learningEyebrow: '学习沉淀',
    learningTitle: '来自项目本身的记录，不是课程笔记。',
    learningLead: '一些改变了我做事方式的结论。每一条都来自某个项目里的具体决策。',
    aboutEyebrow: '关于我',
    aboutTitle: '模型能跑通之后的问题。',
    contactEyebrow: '联系',
    contactTitle: '一周内可到岗。',
    contactLead:
      '寻找 AI 产品实习机会 —— AI 产品、大模型应用、AI Agent 与工具方向均可。可实习半年以上。',
    problem: '问题',
    outcome: '结果',
    role: '角色',
    timeline: '时间',
    context: '技术环境',
    caseStudyEyebrow: '案例',
    chapters: '目录',
    limitations: '局限说明',
    before: '改造前',
    after: '改造后',
    projectProof: '项目关键数据',
    from: '来自',
    all: '全部',
    filterNotes: '按分类筛选',
  },

  about: {
    lead: ['我的专业是数据科学，但我更关注模型能够工作之后的问题。'],
    questions: [
      '这个能力是否真的解决了用户的问题？',
      '哪些任务应该交给 LLM，哪些应该留给确定性系统？',
      '模型的行为应该如何被评测？',
      '如何把模型能力变成稳定、可理解、可使用的产品行为？',
    ],
    body: [
      '我的项目大多是这样开始的：模型给出了一个看起来正确、实际并不正确的结果。「看起来对」和「真的对」之间的这段距离，就是我工作的地方。',
      '所以我会自己去做用户访谈、写 PRD、定义什么算失败、把原型搭出来，然后想办法把它弄坏。我的项目通常处在四个领域的交叉位置：产品思维 × 数据 × 对 LLM 的理解 × 快速原型。',
    ],
    facts: {
      educationLabel: '教育背景',
      education: '马来西亚国立大学',
      educationSub: '计算机科学 — 数据科学',
      availabilityLabel: '到岗时间',
      availability: '一周内',
      availabilitySub: '可实习半年以上',
      focusLabel: '方向',
      focus: 'AI 产品 · 大模型评测 · Prompt 系统 · 数据分析',
    },
  },

  contact: {
    email: '邮箱',
    github: 'GitHub',
    resume: '简历',
    resumeValue: '下载简历（中文）',
    portfolio: '作品集',
  },

  footer: {
    tagline: '王一杰 · Jaco Wang — AI 产品方向',
  },

  status: {
    mvp: {
      label: 'MVP 已成型',
      note: '六步抽牌流程与服务端解读已实现，持续迭代。',
    },
    development: {
      label: '开发中',
      note: '当前状态：持续开发与迭代中。',
    },
  },

  projects: {
    'seller-profit': {
      title: '拼多多新手卖家利润试算助手',
      subtitleAlt: 'Seller Profit Calculator',
      subtitle: '把一个不可靠的 LLM 计算器，改造成确定性的 AI 产品。',
      problem:
        '新手卖家看不见真实到手利润。问题不是「不会算」，而是「不知道有哪些成本需要算」。',
      outcome:
        '评测发现 LLM 会自行重新计算，而不是引用确定性结果。我把计算移进代码，并把模型的上下文压缩到两个定性变量。',
      highlightLabel: '可直接体验',
      highlight: '打开 Demo，直接输入成本并查看利润试算。',
      tags: ['AI 产品', 'LLM Evaluation', 'Prompt Engineering'],
    },
    arcana: {
      title: 'Arcana',
      subtitleAlt: '沉浸式数字塔罗产品',
      subtitle:
        '沉浸式数字塔罗 Web MVP：亲手洗牌、切牌、摊牌、选牌、摆牌、翻牌，AI 只解读冻结后的结果。',
      problem:
        '最省事的做法是让模型一次性完成抽牌和解读。那样更快也更便宜，但会毁掉用户来抽牌的理由。',
      outcome:
        '六步交互、5 套完整牌组与 DeepSeek 服务端解读已打通；抽牌结果与牌组画面解耦，记录保存在本地。',
      highlightLabel: '可复现',
      highlight: 'clone 仓库就能自己跑评测：64 + 118 条断言，0 失败。',
      tags: ['AI 产品', '交互设计', 'LLM Evaluation'],
    },
    'stock-news': {
      title: 'A股板块新闻监控系统',
      subtitleAlt: 'Stock News Intelligence',
      subtitle: '规则引擎负责判断，LLM 只复核规则拿不准的部分。',
      problem:
        '板块新闻分散在多个来源、重复率高，而且很难判断一条新闻究竟影响哪些板块 —— 还得自己一个个去刷。',
      outcome:
        '关键词规则以低成本、可解释的方式完成分类，只有低置信度的新闻才交给 LLM。Prompt 与规则版本都参与缓存判断。',
      highlightLabel: '已在运行',
      highlight: '每 30 分钟抓取一次，每日早报推送，70 个测试在 CI 中运行。',
      tags: ['AI 产品', 'Prompt Engineering', '自动化'],
    },
    'taobao-analysis': {
      title: '淘宝用户行为数据分析',
      subtitleAlt: 'Taobao User Behavior Analysis',
      subtitle: '把 1 亿条行为日志，变成运营真正能触达的一个人群。',
      problem:
        '平台有巨大的浏览量，但只有很小一部分转化为订单。流失发生在哪一步，哪一步最值得投入运营预算？',
      outcome:
        '最大的可运营缺口在「加购到购买」这一步。而且购买量峰值与转化率峰值并不在同一时段，按流量分配预算等于投错了时间。',
      highlightLabel: '数据 → 决策',
      highlight: '交付物是一个有规模、可触达的人群，不是一张漏斗图。',
      tags: ['数据分析', '产品分析', '用户行为'],
    },
  },

  capabilities: [
    {
      index: '01',
      title: 'AI 产品',
      skills: ['用户访谈', '需求分析', '问题定义', 'PRD', 'MVP 范围', '产品迭代'],
      usedIn: ['seller-profit', 'stock-news'],
    },
    {
      index: '02',
      title: 'LLM 应用系统',
      skills: [
        'Prompt Engineering',
        'LLM Evaluation',
        'RAG',
        'Agent',
        'Function Calling',
        'MCP',
        'Context Management',
        '成本控制',
      ],
      usedIn: ['seller-profit', 'arcana', 'stock-news'],
    },
    {
      index: '03',
      title: '数据与评测',
      skills: ['Python', 'Pandas', 'SQL（MySQL / DuckDB）', '漏斗分析', '留存分析', '评测设计'],
      usedIn: ['taobao-analysis', 'seller-profit'],
    },
    {
      index: '04',
      title: '原型与落地',
      skills: ['Figma', 'Streamlit', 'Dify', 'GitHub Actions', 'Supabase', 'Codex / Claude Code'],
      usedIn: ['arcana', 'stock-news'],
    },
  ],

  moreWork: [
    {
      title: '特斯拉股价方向预测',
      context: '毕业设计 · Python',
      points: [
        '时间感知的机器学习流程，采用 walk-forward 评测',
        '六条明确的数据泄漏控制，包括断言验证集与最终 holdout 日期不重叠',
        '情绪特征与市场特征融合，共 67 个特征列',
        '与四条 baseline 对照，并明确标注为研究产物而非交易信号',
      ],
    },
    {
      title: 'IDSC 2026 生物医学数据挑战赛',
      context: '团队项目',
      points: [
        'Brugada 心电信号分类',
        '对比 Logistic Regression、Random Forest 与 1D-CNN',
        '以 Recall 为导向做模型选择 —— 在筛查场景中，漏诊的代价高于误报',
      ],
    },
    {
      title: '大模型评测实践',
      context: '自主学习 · 28 天',
      points: [
        '一套结构化的练习：构建评测集、执行评测、分析失败原因',
        '直接支撑了精选项目中的评测工作',
      ],
    },
  ],

  evals: {
    heroTitle: 'Prompt Engineering 是系统设计的一部分。',
    heroLead:
      '任务边界、输出约束、失败处理、上下文控制与回归验证。真正要做的判断是：模型可以为哪些事情负责 —— 以及用什么用例去检验它有没有越界。',
    methodEyebrow: '方法',
    methodTitle: '评测循环',
    methodNote:
      '最关键的是第六步。约束失效时，本能反应是回去改 Prompt。但很多时候正确的做法是换一个真正能承载这条约束的层 —— 并承认 Prompt 从一开始就承载不了它。',
    evidenceEyebrow: '真实证据',
    evidenceTitle: '三个项目，三类不同的问题。',
    coverageEyebrow: '覆盖范围',
    coverageTitle: '这些在项目里具体是怎么做的。',
    failureEyebrow: '失败记录',
    failureTitle: '失败的部分才是有价值的。',
    failureLead:
      '大多数作品集只展示成功。这些是我真正遇到过的 AI 失败模式，以及每一条让我明白约束应该放在哪一层。',
    pipeline: [
      { step: '任务定义', text: '把被检验的行为收敛到足够窄，窄到一个用例可以明确判定通过或失败。' },
      { step: '上下文设计', text: '决定哪些信息进入模型 —— 更重要的是，哪些不进入。' },
      { step: '输出约束', text: '固定输出结构、允许的取值，以及「拒绝」应该长什么样。' },
      { step: '评测集', text: '用例要覆盖边界情况，而不只是顺利路径。' },
      { step: '失败分析', text: '认真读通过的用例，和读失败的用例一样认真。' },
      { step: '迭代', text: '改真正能承载这条约束的那一层 —— 有时是架构，而不是 Prompt。' },
      { step: '回归验证', text: '重跑评测集，并用一个能证伪的用例去验证。' },
    ],
    evidence: [
      {
        slug: 'seller-profit',
        headline: '一次改变了架构的评测',
        points: [
          '构建 10 组评测用例，验证模型是否稳定引用确定性计算结果',
          '结果是它在自行重新计算 —— 而且通过的用例只是碰巧通过',
          '因此把计算移进代码，而不是再一次加强 Prompt',
          '经过一次配置审计，把模型上下文从 16 个变量压缩到 2 个',
        ],
      },
      {
        slug: 'arcana',
        headline: '把 AI 边界写成可执行的断言',
        points: [
          '64 条引擎断言与 118 条解读断言，clone 下来即可复现',
          '10 组解读用例，覆盖单张、三张、五张牌阵与高风险话题',
          '语气校验是双向的 —— 既要抓到违规，也不能误杀克制的表达',
          '两版 Prompt 并存，通过专门的 A/B 脚本对比',
        ],
      },
      {
        slug: 'stock-news',
        headline: '把 Prompt 当作可版本化的系统组件',
        points: [
          'Prompt 版本与规则版本一起参与缓存 key 的哈希计算',
          '结构化 Prompt：任务、输出结构、规则、负例、规则层证据',
          '只有低置信度或命中泛词的新闻才会调用模型',
          '分类校验与文本生成使用不同超时 —— 任务不同，预算也不同',
        ],
      },
    ],
    topics: [
      ['Prompt 结构', '结构化载荷：任务、输出结构、规则、示例、证据'],
      ['上下文设计', '决定哪些信息进入模型 —— 16 个变量压缩到 2 个'],
      ['负例设计', '把四条真实的误分类案例直接写进 Prompt'],
      ['输出结构', '约束 JSON 输出，并在服务端做结构校验'],
      ['约束设计', '六条任务边界规则，每一条都来自一次实际观察到的失败'],
      ['证据校验', '把规则层的得分与命中关键词一并交给复核环节'],
      ['失败分析', '认真读通过的用例，和读失败的用例一样认真'],
      ['Prompt 版本化', '版本参与缓存 key；两版并存用于 A/B 对比'],
      ['回归验证', '引擎与解读合计 182 条可执行断言'],
      ['成本与延迟', '基于实测数据；不同任务分别设置超时'],
      ['探针设计', '用六个探针测一个产品：数值、是否检索、来源透明度、工具触发、决策边界、记忆'],
      ['分层评测', '把数值输出与定性输出当作两种不同的可靠性来分别检验'],
      ['证据分级', '标明哪些结论单次观察即可成立，哪些必须重复采样'],
    ],
    failures: [
      {
        mode: '数字在变，结论不变',
        detail:
          '同一道成本题在两个全新会话里，数字相差 9.7%，定性结论完全一致。数值输出与定性输出的失败方式并不相同。',
        from: '边界探测',
      },
      {
        mode: '声明了限制，又在同一段回答里违背它',
        detail:
          '顶部声明了一条假设，下面的计算却违背了它；另一处写着「没有官方统一对标跑分」，紧接着给出一张精确的对比表。两个不相干的任务，同一个动作。',
        from: '边界探测',
      },
      {
        mode: '有源必准，无源照编',
        detail:
          '四个基准数字里，官方公布过的两个一字不差，官方从未公布的两个照样给到小数点后一位。而且两个查不到出处的都是让对手赢 —— 是精度伪造，不是立场偏袒。',
        from: '边界探测',
      },
      {
        mode: '它自己的模型推不出的衍生数字',
        detail:
          '用它刚刚给出的模型反推那张敏感度表，只有第一行对得上。其余数字方向正确，但根本不是算出来的。',
        from: '边界探测',
      },
      {
        mode: '不属于自己的语义解释权',
        detail:
          '外部工具返回字段名 cost、值为 "68.00"，模型把它呈现为「人均约 68 元」。数据是真的，单位、约数和含义都是模型加的。',
        from: 'MCP 接入',
      },
      {
        mode: '一条从未真正生效的 Prompt 约束',
        detail:
          'Prompt 里写着不要重新计算，评测显示模型全程都在自行推算。这条约束从来没有生效过，只是看起来生效了。',
        from: '拼多多利润试算助手',
      },
      {
        mode: '通过只是碰巧',
        detail:
          '一部分用例通过，是因为它们的数值恰好经得起取整，模型自行计算的结果与代码输出正好相同。原始值多一位小数，同一个用例就会失败。',
        from: '拼多多利润试算助手',
      },
      {
        mode: '能被组合的数值，一定会被组合',
        detail:
          '一组同量纲的占比进入了模型上下文。它把其中两个相加，并把结果当作一个新数字输出。这是运算，不是复述。',
        from: '拼多多利润试算助手',
      },
      {
        mode: '静默错误',
        detail:
          '一次修复之后，系统用过期参数生成了一份完整、自洽、格式正确的报告。表面上看不出任何问题 —— 这比它替代掉的那个 bug 更危险。',
        from: '拼多多利润试算助手',
      },
      {
        mode: '无人察觉的配置回滚',
        detail:
          '一次画布级撤销把重写过的 system prompt 回滚了。所有已修复的行为全部复现，而配置界面看起来一切正常。最后是靠故意填入非默认值才发现。',
        from: '拼多多利润试算助手',
      },
      {
        mode: '听起来很权威的编造',
        detail:
          '模型输出了一组平台费率的「常见区间」，这些数字在 Prompt 里根本不存在，却被放在一个看起来像系统校验的标题下面。',
        from: '拼多多利润试算助手',
      },
      {
        mode: '规则过重的 Prompt 产出的是合规的空话',
        detail:
          '把措辞约束得过紧，输出会变得非常稳定也非常空洞 —— 矛盾被抹平，困难的结果被拗成让人安心的说法。',
        from: 'Arcana',
      },
      {
        mode: '最直觉的优化方向是错的',
        detail:
          'Prompt 很长，所以压缩它看起来就是解决延迟的办法。实测发现超过 99% 的输入 token 命中缓存，输入阶段只占总耗时约 1%。',
        from: 'Arcana',
      },
      {
        mode: '一个效果相反的参数',
        detail:
          '名义上用来降低推理强度的参数，实测让总耗时翻了一倍以上。该参数被弃用。',
        from: 'Arcana',
      },
      {
        mode: '泛词导致的误分类',
        detail:
          '一条关于外交会晤的新闻命中了货币相关关键词，被归入利率类目。这正是「只对低置信度调用模型」要拦截的那类失败。',
        from: 'A股板块新闻监控系统',
      },
    ],
  },

  learningTrail: {
    label: '正在学的方向',
    items: ['Prompt Engineering', 'Context Engineering', 'RAG', 'LLM Evaluation', 'Agent', 'MCP'],
  },

  learning: {
    heroTitle: '来自项目本身的记录，不是课程笔记。',
    heroLead:
      '学到了什么、在哪里失败、最后落到了哪个项目里。有些已经用在上线的产品中，有些明确标注为学习记录。',
    categories: {
      'Prompt Engineering': 'Prompt Engineering',
      'Context Engineering': 'Context Engineering',
      RAG: 'RAG',
      'LLM Evaluation': '大模型评测',
      Agent: 'Agent',
      MCP: 'MCP 与工具调用',
      'AI Product': 'AI 产品系统',
    },
    path: [
      'Prompt Engineering',
      'Context Engineering',
      'RAG',
      'LLM Evaluation',
      'Agent',
      'MCP',
      'AI Product',
    ],
    labels: {
      keyIdea: '核心认知',
      failure: '常见问题',
      tradeoff: '取舍',
      applied: '项目实践',
      relatedWork: '相关项目',
      learningNote: '学习记录 —— 尚未用于已上线项目',
    },
    notes: [
      /* ── Prompt Engineering ─────────────────────────── */
      {
        slug: 'prompt-is-a-soft-constraint',
        category: 'Prompt Engineering',
        title: 'Prompt 是软约束，不是硬开关',
        summary: '告诉模型「不要做某件事」是一个请求，不是一种机制。如果正确性依赖它，就该把它从 Prompt 里挪出去。',
        keyIdea: 'Prompt 可以塑造行为，但不能保证行为。一个行为如果必须成立，它需要的是结构上的保证。',
        failure:
          '为了阻止模型做算术改了四轮措辞：禁止重新计算完全无效；把算好的数值显式传入部分有效；禁止一切算术之后，输出里仍然会冒出小的加减。',
        applied:
          '把计算移进代码节点。当数字不再进入模型上下文，这一整类失败消失了 —— 不是因为指令写得更好，而是因为已经没有东西可算。',
        relatedProjects: ['seller-profit'],
        from: '拼多多利润试算助手',
        readingTime: '2 分钟',
        source: 'PRD-v5.md §7.2',
      },
      {
        slug: 'guardrails-live-in-the-failure-branch',
        category: 'Prompt Engineering',
        title: '护栏调优的主战场在失败分支',
        summary: '我设计了 10 道检索题，故意加入数据回答不了的问题。两个失败都出在护栏边界，不在模型。',
        keyIdea: '真正需要被规定的，是「没有答案时会发生什么」。大部分调优实际发生在这条分支上。',
        failure:
          '问到数据集范围之外的品类，助手照样去推断 —— 边界写得太宽。问到手上没有的指标，它先承认没有数据，然后仍旧给了一个标着「推断」的数字。',
        tradeoff: '把范围收窄会让助手更频繁地拒答。对一个要据此决定花不花钱的用户来说，一次拒答比一个看着可信的数字便宜得多。',
        applied:
          '打两个补丁：显式收窄品类范围；没有数据支撑的具体数字一律不给，标「推断」也不行。定性判断仍然允许。',
        readingTime: '2 分钟',
        source: '第一个月完整学习档案_建认知.md · Week 3',
      },

      /* ── Context Engineering ────────────────────────── */
      {
        slug: 'what-to-put-in-context',
        category: 'Context Engineering',
        title: '判断哪些数据该进入上下文',
        summary: '标准不是这个数重不重要，而是它能不能和别的数组合。',
        keyIdea: '同量纲、可相加的一组数，模型必然会去组合它们。一组能凑成有意义总数的占比，本身就是一种邀请。',
        failure:
          '一次审计发现模型接收了 16 个变量，其中 12 个是纯数值，通过变量渲染写进了 system prompt。某次输出把两个占比相加，得到了第三个数。',
        tradeoff: '上下文越少，模型能说的越少 —— 这正是目的：它说不出来的东西，也就不会说错。',
        applied:
          '留下的判断标准是：这个数从模型嘴里说出来，比它已经在表格里，多给了用户什么？16 个变量变成 2 个，且都是定性的。',
        relatedProjects: ['seller-profit'],
        from: '拼多多利润试算助手',
        readingTime: '2 分钟',
        source: 'PRD-v5.md §6.3 / §7.5',
      },
      {
        slug: 'four-layers-of-control',
        category: 'Context Engineering',
        title: 'LLM → Prompt → RAG → Agent 是一条控制权递减的阶梯',
        summary: '每一层都是为了补上一层的短板，同时也把更多控制权交给模型。',
        keyIdea:
          '基座模型会补全，但不知道你要什么。Prompt 给了指令，却塞不下大量数据，塞进去的还是死的。RAG 挂上可随时更新的知识库，但它是被动仓库，从不做决策。Agent 交出的是流程本身的决策权。',
        tradeoff:
          '能力和可控性朝相反方向移动。每上一层，失败都更难被兜住：工作流错的是一个点，Agent 错的是一条线。',
        applied:
          '这是我在加一层之前会问的问题：当前这一层到底卡在哪？有两次答案是「没卡住」—— 利润试算助手因此既没有引入检索，也没有引入工具调用。',
        readingTime: '2 分钟',
        source: '第一个月总收官_建认知.md',
      },

      /* ── RAG ────────────────────────────────────────── */
      {
        slug: 'retrieval-quality-is-chunk-quality',
        category: 'RAG',
        title: '检索质量，八成是切块质量',
        summary: '相似度分数只说明两段文本有多像，不说明检索到的内容有没有用。',
        keyIdea:
          'Score 判断「像不像」，不判断「对不对」。Top K 管数量，Score 阈值管质量。不设阈值，K 就会被填满，不管有没有真正相关的内容。',
        failure:
          '一个关于微调的提问，召回了一个只有 26 个字符、内容仅为章节标题的 Chunk。切块时标题被单独切成了语义稀薄的小块，而 Top K = 3 为了凑数把它塞了进来。',
        tradeoff: 'Rerank 在向量检索之后加一道精排，代价是成本和延迟。库大噪声多时值得，库小时不必加。',
        applied: '打开 Score 阈值，而不是调高 K。很多 RAG 效果差不是模型不行，是文档切得烂。',
        readingTime: '3 分钟',
        source: '第一个月完整学习档案_建认知.md · Week 3',
      },
      {
        slug: 'rag-output-is-capped-by-the-knowledge-base',
        category: 'RAG',
        title: 'RAG 的输出上限，等于它背后知识库的质量',
        summary: '我把每一处连接都调通，检索真正喂进了模型 —— 输出依然只是「测试级」，因为库里放的是测试数据。',
        keyIdea:
          '管道修对之后，质量就是内容问题，不再是工程问题。企业落地 RAG 的真实瓶颈是知识库维护，不是模型能力。',
        failure:
          '一个晚上断了四次，从外面看长得一模一样：检索跑了但结果没喂给模型；挂上了却没在提示词里引用；引用写成了文字而不是插成变量，于是完全不生效；最后是库里根本没有对应内容。',
        tradeoff:
          '编一份「看起来像真的」数据能让 Demo 显得完整，但那等于把幻觉洗成了数据源，比模型当场编更糟。',
        applied:
          '两个骗不了人的检查：看输入 token —— 检索内容真进了上下文，它会明显上涨；以及逐节点看追踪面板，断在哪一步一目了然。',
        readingTime: '3 分钟',
        source: 'Week4_周三周四复盘_RAG工作流搭建与调试.md',
      },
      {
        slug: 'when-not-to-add-rag',
        category: 'RAG',
        title: '什么时候不该上 RAG',
        summary: '两个差异很大的输入产出了几乎一样的结论。瓶颈在上游，检索够不到那里。',
        keyIdea: '面对单薄的输出，检索是最容易想到的答案。但它只在「确实缺知识」时才有用。',
        failure: '当时给模型的档位判断只有三档，本质不同的情况被贴上同一个标签送进模型 —— 信息在到达模型之前就被压平了。',
        tradeoff:
          '存放事实性内容的知识库会把产品从「分析工具」变成「数据源」，并制造出两个可能互相矛盾的权威。情境判断规则可以放，会过期的平台参数不行。',
        applied: '在代码里加上第四档，问题就解决了，没有引入检索。',
        relatedProjects: ['seller-profit'],
        from: '拼多多利润试算助手',
        readingTime: '2 分钟',
        source: 'PRD-v5.md §11.3',
      },

      /* ── LLM Evaluation ─────────────────────────────── */
      {
        slug: 'numeric-and-qualitative-reliability-differ',
        category: 'LLM Evaluation',
        title: '模型的数值层和定性层，失败方式根本不同',
        summary: '我在两个全新会话里问了同一道成本题。数字相差 9.7%，定性结论完全一致。',
        keyIdea:
          '不是 LLM 不能用，而是它的数值输出和定性输出可靠性根本不同 —— 产品可以正好切在这条缝上。',
        failure:
          '两次回答各有一处内部矛盾，而且是不同的矛盾：一次在顶部声明了假设，计算里却违背了它；另一次把同一笔运费加了两遍。两个数字都站不住。用它自己给出的模型反推敏感度数字，只有第一行对得上，其余全部对不上 —— 那些数字是生成的，不是算的。',
        applied:
          '这把「架构隔离」从一个技术选择，升级成一个有对照观察支撑的产品判断：数值交给代码、定性交给模型，不是权宜之计，而是切在一条真实的断层上。',
        relatedProjects: ['seller-profit'],
        readingTime: '3 分钟',
        source: '豆包竞品拆解_完整记录_20260801.md · 探针 1 / 5',
      },
      {
        slug: 'probe-based-boundary-testing',
        category: 'LLM Evaluation',
        title: '探测产品的边界，而不是它最好的那次回答',
        summary: '对一个 C 端 AI 助手做了六探针测试：数值可靠性、编还是查、来源透明度、工具触发边界、决策边界、记忆边界。',
        keyIdea: '一个产品答对时有多漂亮，说明不了什么。真正要看的是它答不上来的时候会做什么。',
        failure:
          '它引用的四个基准数字里，官方公布过的两个一字不差，官方从未公布的两个照样给到小数点后一位。而且两个查不到出处的数字都是让竞争对手赢的 —— 所以问题不是立场偏袒，是精度伪造。这两件事必须分开。',
        tradeoff: '它不追问，换来「一次回答即给出完整结论」的流畅体验，代价是用户拿到一个建立在自己从未看见的假设上的数字。',
        applied: '我因此把两个经常被混为一谈的判断分开：能力强，和边界清晰。一个产品可以做到前者而没做到后者。',
        readingTime: '3 分钟',
        source: '豆包竞品拆解_完整记录_20260801.md',
      },
      {
        slug: 'evaluation-passing-by-coincidence',
        category: 'LLM Evaluation',
        title: '用例通过，不等于行为正确',
        summary: '有一部分用例是因为错误的原因通过的。读懂它们为什么通过，改变了整个架构。',
        keyIdea: '读通过的用例，要和读失败的用例一样认真，并且总要问一句：要让它出错，需要改变什么？',
        failure:
          '那些用例的原始数值恰好经得起取整，模型自行计算的结果与代码输出完全一致。只要原始值多出一位小数，同一个用例就会失败。',
        applied:
          '结论不是「有一部分是好的」，而是这条约束从来没有生效过 —— 正是这个重新表述，让下一步变成架构改造，而不是再改一轮 Prompt。',
        relatedProjects: ['seller-profit'],
        from: '拼多多利润试算助手',
        readingTime: '2 分钟',
        source: 'PRD-v5.md §7.1',
      },
      {
        slug: 'assertion-based-llm-evaluation',
        category: 'LLM Evaluation',
        title: '评测「模型不应该做什么」',
        summary: '边界属性是可以被测试的，而输出质量很难 —— 而且这类测试必须是双向的。',
        keyIdea: '判断一段解读写得好不好很难，判断它有没有改动牌面则非常简单。把断言对准边界。',
        failure: '只检查违规的语气校验会过度触发，悄悄拉低每一次输出的质量。测试同时必须断言克制的表达不会被误判。',
        applied:
          '牌数一致、没有凭空出现的牌、正逆位未被改动、关系只引用真实存在的牌 —— 一套任何人 clone 下来就能复现的测试，而且不需要先就「什么算好的解读」达成一致。',
        relatedProjects: ['arcana'],
        from: 'Arcana',
        readingTime: '2 分钟',
        source: 'arcana · scripts/reading-eval.ts',
      },
      {
        slug: 'measure-before-optimising-llm-latency',
        category: 'LLM Evaluation',
        title: '最直觉的 LLM 优化，往往是错的那个',
        summary: 'Prompt 很长，所以压缩它看起来就是答案。实测显示输入阶段只占总耗时约 1%。',
        keyIdea: '先测量再优化。人对模型延迟的直觉格外不准，因为真正贵的那部分是看不见的。',
        failure:
          '超过 99% 的输入 token 命中缓存。把 Prompt 砍掉一半，省下的时间不到一秒，代价却是解读质量。而名义上降低推理强度的参数，实测让总耗时翻了一倍以上。',
        applied:
          '真正的杠杆在推理阶段的 token 生成。关闭之后，首个正文出现的时间从约 51 秒降到约 1 秒，总耗时减半，盲读几乎看不出质量差异。',
        relatedProjects: ['arcana'],
        from: 'Arcana',
        readingTime: '3 分钟',
        source: 'arcana · docs/v2/14-perf-investigation.md',
      },

      /* ── Agent ──────────────────────────────────────── */
      {
        slug: 'who-holds-the-decision',
        category: 'Agent',
        title: '区分工作流与 Agent 的，是决策权在谁手上',
        summary: '不是能力，是控制权。工作流里步骤由我写死，Agent 里步骤由模型自己决定。',
        keyIdea: '能调用工具不等于 Agent。要问的是：它能不能自己决定做几步，并根据上一步的结果改下一步？',
        failure:
          '同一个东西会因为谁掌握控制权而改变身份：知识库接在工作流里不算工具，因为每轮都被强制检索；同一个知识库放进 Agent 就算工具，因为模型可以决定不用它。',
        tradeoff: '交出控制权换来的是处理模糊、多步任务的能力，代价是错误会沿着一条路径传播，而不是停在某个节点。',
        applied:
          '对应四道防线：先澄清再执行；关键步设检查点并标来源；不可逆操作留人工确认；设步数上限，让错误路径能够终止。',
        readingTime: '3 分钟',
        source: '第一个月完整学习档案_建认知.md · Week 4',
      },
      {
        slug: 'better-planning-more-convincing-hallucination',
        category: 'Agent',
        title: 'Agent 的规划越漂亮，它的幻觉越有迷惑性',
        summary: '我追踪了一次多跳搜索：三轮、后一轮的关键词来自前一轮结果、中途还主动改了策略。真规划 —— 结论却是编的。',
        keyIdea:
          '查不到真正需要的数字时，它拿一个相关的全国口径数据替代，称两者「大致相符」，把这次替换藏在过程里，结论却说得像事实。',
        failure: '一条可见且连贯的推理链，读起来像是正确性的证据。它其实只是投入程度的证据。过程呈现得多好，和结果可不可靠，是两件独立的事。',
        tradeoff: '展示过程建立信任，也把自己交给检验；隐藏过程输出更干净，同时也拿走了读者发现这种替换的机会。',
        applied: '它改变了我找失败的位置。单轮回答里错误在输出，规划式运行里错误可能在一个没人会读的中间步骤。',
        readingTime: '2 分钟',
        source: '第一个月完整学习档案_建认知.md · Week 4 周二',
      },

      /* ── MCP 与工具调用 ─────────────────────────────── */
      {
        slug: 'mcp-does-not-replace-function-calling',
        category: 'MCP',
        title: 'MCP 并没有取代 Function Calling',
        summary: '两者不在同一层。把它们混为一谈，是我听到最多的一个误解。',
        keyIdea:
          'Function Calling 在模型层：模型决定调哪个工具、吐出什么参数。MCP 在应用层与工具层之间：工具如何被描述、发现、连接。前者没有变。',
        failure: '最直接的证据来自我自己的日志：运行元数据写着 Agent 模式为 Function Calling，而那次运行里所有工具都来自 MCP Server。',
        tradeoff:
          '更深的差别不是「谁定义工具」，而是「什么时候确定」。我最早用 Function Calling 时，工具清单写死在应用里，加一个工具就要改代码；MCP 在运行时向 Server 问，于是一个 Agent 可以在跑起来之后长出新能力。',
        applied:
          '另外值得记的是：Server 提供的不是一类东西而是三类 —— 模型可调用的 Tools、由应用注入的 Resources、由用户选择的 Prompts。它们的风险等级并不相同，而大多数讨论只覆盖了第一类。',
        readingTime: '3 分钟',
        source: 'MCP学习记录_Week9周二.md · §1',
      },
      {
        slug: 'enabling-a-tool-is-not-free',
        category: 'MCP',
        title: '工具只要开着就在花钱，不管有没有被调用',
        summary: '我把一个地图 Server 接进工作流，把 15 个工具全部启用，然后实测了这件事的成本。',
        keyIdea:
          '每个启用的工具，其名称、说明和参数结构都必须随每次请求发给模型 —— 模型不先看见清单就没法选择。一次一个工具都没调用的对话，仍然烧掉了约 2,600 token。',
        failure:
          '成本 = 迭代次数 × 工具描述总量。Agent 是多轮迭代的，整本菜单每轮都要重新端上桌：一次三轮迭代的提问约 17,600 token，而 15 个工具里只用到 3 个。',
        tradeoff: '工具应按需启用，不是全开。而且工具数量由 Server 方决定 —— 对方明天加十个工具，你的成本自动上涨，还收不到通知。',
        applied: '在做判断之前先把数测出来，而不是之后。仍待补的是：15 个全开与全关的对照测试，用来分离工具描述的常驻成本。',
        readingTime: '3 分钟',
        source: 'MCP学习记录_Week9周二.md · §2.3',
      },
      {
        slug: 'field-semantics-you-do-not-own',
        category: 'MCP',
        title: '接入外部 Server，等于交出字段的语义解释权',
        summary: 'Server 返回的字段名是 cost，值是字符串 "68.00"。模型呈现给用户的是「人均约 68 元」。',
        keyIdea:
          '数据是真的，解释是模型加的。「人均」「约」和单位全部由模型补上，而这个字段是否真的表示人均消费，由数据提供方定义，不由我定义。',
        failure: '这类错误不报错：输出格式完全正常，没有任何异常信号，而且从外部无法证伪。猜对了没人发现，猜错了也没人发现。',
        tradeoff: 'Prompt 治不了它 —— 字段定义在边界另一侧，而且可能在不通知的情况下改变。',
        applied:
          '这成了利润试算助手不接入外部 Server 的决定性论据。对一个卖家要依据数字做决策的产品来说，一个无法核对的语义推断是不可接受的风险。',
        relatedProjects: ['seller-profit'],
        readingTime: '2 分钟',
        source: 'MCP学习记录_Week9周二.md · §2.4 / §3',
      },

      /* ── AI 产品系统 ────────────────────────────────── */
      {
        slug: 'capability-is-not-boundary-clarity',
        category: 'AI Product',
        title: '能力强和边界清晰，是两件不同的事',
        summary: '我测的那个助手确实很强：会主动检索而不是凭记忆、能辨析媒体对同一发布日期的口径冲突、谈竞品时不护短。',
        keyIdea: '它的短板不是不透明，也不是能力不足。它会先声明一条限制，然后违背自己的声明 —— 写着「没有官方统一对标跑分」，紧接着给出一张精确的对比表。',
        failure:
          '同一个动作在四种不同场景重复出现：外部字段的含义、缺失的业务假设、敏感度数字、未公开的基准分。每一次模型都静默补全，方向合理，细节不可核对。',
        applied:
          '我会做的改进成本很低：这些假设在会话内本来就被明确追踪 —— 追问时它能完整复述 —— 所以把它们变成用户可见、可修改的开关，是暴露已有状态，不是新建能力。',
        readingTime: '3 分钟',
        source: '豆包竞品分析_500字_20260801.md',
      },
      {
        slug: 'rule-engine-plus-llm-review',
        category: 'AI Product',
        title: '规则在前，模型在后',
        summary: '把所有内容都丢给模型是最省事的设计。有选择地调用更便宜、更稳定，也更能解释。',
        keyIdea: '模型只能确认或否决，不能新增类目。分类体系归规则所有，判断归模型所有 —— 正是这个分工让输出可解释。',
        failure: '用 LLM 判断每一条新闻，在这个量级上成本很高，相同输入结果不稳定，而且判断看起来不对时无法解释原因。',
        applied:
          '带权重的关键词规则输出得分、置信度和命中关键词作为证据。只有低置信度、命中泛词、或得分贴近阈值时才调用模型。',
        relatedProjects: ['stock-news'],
        from: 'A股板块新闻监控系统',
        readingTime: '2 分钟',
        source: 'stock_news · classifier.py',
      },
      {
        slug: 'prompt-versioning-and-caching',
        category: 'AI Product',
        title: 'Prompt 应该进入缓存 key',
        summary: '如果模型响应被缓存，而 Prompt 改了，缓存返回的就是一个已经不存在的系统给出的答案。',
        keyIdea: 'Prompt 本身也是响应的输入之一，改动它会让所有依赖它的缓存结果失效。',
        applied:
          'Prompt 版本与规则版本会和 provider、模型、内容一起哈希进缓存 key。改动任一版本号，受影响的条目自动失效。',
        relatedProjects: ['stock-news'],
        from: 'A股板块新闻监控系统',
        readingTime: '2 分钟',
        source: 'stock_news · classifier.py',
      },
      {
        slug: 'silent-errors-in-decision-support',
        category: 'AI Product',
        title: '让错误变得看不见的修复，不是修复',
        summary: '一次修复之后输出变得完全自洽 —— 用户也因此失去了唯一能发现它出错的线索。',
        keyIdea: '每次修复之后都要问：用户还有没有可能自己发现这个错误？如果答案从「能」变成了「不能」，这次修复就是负收益。',
        failure: '一次追问用旧参数重跑，输出了一份完整、自洽、格式正确的报告。表面上没有任何问题。',
        relatedProjects: ['seller-profit'],
        from: '拼多多利润试算助手',
        readingTime: '2 分钟',
        source: 'PRD-v5.md §7.5',
      },
    ],
  },
}

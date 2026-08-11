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
    supporting:
      '数据科学背景，专注 AI 产品设计、大模型评测、Prompt Engineering 与数据驱动的产品决策。',
    meta: '马来西亚国立大学 · 一周内可到岗 · 可实习半年以上',
  },

  metricLabels: {
    evalCases: '组 AI Evaluation 用例',
    ctxVars: 'LLM 上下文变量',
    sectors: '个行业板块',
    logs: '用户行为日志',
    assertions: '条可复现断言',
    redLines: '条产品红线',
    firstContent: '首屏解读，原 51.6 秒',
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
      highlight: '本站唯一一个不用看代码、打开就能用的项目。',
      tags: ['AI 产品', 'LLM Evaluation', 'Prompt Engineering'],
    },
    arcana: {
      title: 'Arcana',
      subtitleAlt: '沉浸式数字塔罗产品',
      subtitle:
        '探索线上塔罗体验中的用户自主性、随机性，以及确定性交互与 LLM 解读之间的产品边界。',
      problem:
        '最省事的做法是让模型一次性完成抽牌和解读。那样更快也更便宜，但会毁掉用户来抽牌的理由。',
      outcome:
        '洗牌、切牌、抽牌、正逆位全部交给确定性引擎，模型只拿到冻结后的结果 —— 160 条可复现断言保证它待在边界内。',
      highlightLabel: '可复现',
      highlight: 'clone 仓库就能自己跑评测：64 + 96 条断言，0 失败。',
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
          '64 条引擎断言与 96 条解读断言，clone 下来即可复现',
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
      ['回归验证', '引擎与解读合计 160 条可执行断言'],
      ['成本与延迟', '基于实测数据；不同任务分别设置超时'],
    ],
    failures: [
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

  learning: {
    heroTitle: '来自项目本身的记录，不是课程笔记。',
    heroLead:
      '一些改变了我做事方式的结论。每一条都来自某个项目里的具体决策，并且标注了来源。',
    categories: {
      'Prompt Engineering': 'Prompt Engineering',
      'LLM Evaluation': '大模型评测',
      RAG: 'RAG',
      'AI Product': 'AI 产品',
      MCP: 'MCP',
    },
    notes: [
      {
        slug: 'prompt-is-a-soft-constraint',
        category: 'Prompt Engineering',
        title: 'Prompt 是软约束，不是硬开关',
        summary:
          '告诉模型「不要做某件事」是一个请求，不是一种机制。如果正确性依赖它，就该把它从 Prompt 里挪出去。',
        from: '拼多多利润试算助手',
        readingTime: '2 分钟',
        body: [
          '为了阻止模型做算术，我改了四轮 Prompt。禁止重新计算，完全无效；把算好的数值显式传进去，部分有效；禁止一切算术，输出里仍然会冒出小的加减。',
          'Prompt 从来就不是正确的那一层。当计算移进代码、数字根本不再进入模型上下文之后，这一整类失败消失了 —— 不是因为指令写得更好，而是因为已经没有东西可算。',
          '我现在用的判断是：一个行为如果必须成立，它需要的是结构上的保证。Prompt 可以塑造行为，但不能保证行为。',
        ],
      },
      {
        slug: 'what-to-put-in-context',
        category: 'Prompt Engineering',
        title: '判断哪些数据该进入上下文',
        summary: '标准不是这个数重不重要，而是它能不能和别的数组合。',
        from: '拼多多利润试算助手',
        readingTime: '2 分钟',
        body: [
          '一次工作流审计发现模型接收了 16 个变量，其中 12 个是纯数值。它们不是从对话历史里绕进来的，而是通过变量渲染直接写进了 system prompt。',
          '真正危险的地方不在于它们各自有多重要，而在于它们同量纲、可以相加。一组能凑成有意义总数的占比就是一种邀请，而模型接受了它：某次输出把其中两个加起来，得到了第三个数。',
          '最后留下的判断标准是：这个数从模型嘴里说出来，比它已经在表格里，多给了用户什么？答不出来的全部砍掉。16 个变成 2 个，留下的两个都是表格无法表达的定性判断。',
        ],
      },
      {
        slug: 'evaluation-passing-by-coincidence',
        category: 'LLM Evaluation',
        title: '用例通过，不等于行为正确',
        summary: '有一部分用例是因为错误的原因通过的。读懂它们为什么通过，改变了整个架构。',
        from: '拼多多利润试算助手',
        readingTime: '2 分钟',
        body: [
          '在一组验证模型是否引用确定性结果的评测用例里，有一部分是通过的。很容易把它们当作可用的基线，然后只盯着失败的那些看。',
          '但它们是碰巧通过的：这些用例的原始数值恰好经得起取整，模型自行计算的结果与代码输出完全一致。只要输入让原始值多出一位小数，同一个用例就会失败。',
          '所以结论不是「有一部分是好的」，而是这条约束从来没有生效过。正是这个重新表述，让接下来的动作变成了架构改造，而不是再改一轮 Prompt。',
          '从那以后，我读通过的用例和读失败的用例一样认真，并且总会问一句：要让它出错，需要改变什么？',
        ],
      },
      {
        slug: 'assertion-based-llm-evaluation',
        category: 'LLM Evaluation',
        title: '评测「模型不应该做什么」',
        summary: '边界属性是可以被测试的，而输出质量很难 —— 而且这类测试必须是双向的。',
        from: 'Arcana',
        readingTime: '2 分钟',
        body: [
          '判断一段解读写得好不好很难，判断它有没有改动牌面则非常简单。所以断言全部对准边界：牌数一致、没有凭空出现的牌、正逆位未被改动、关系只引用真实存在的牌。',
          '这样得到的是一套任何人都能跑、都能复现的测试，而且不需要先就「什么算好的解读」达成一致。',
          '语气校验还教了我另一件事。只断言「违规能被抓到」是不够的，测试同时要断言克制、谨慎的表达不会被误判。一个过度触发的校验会悄悄拉低每一次输出的质量，只有双向测试才能发现它。',
        ],
      },
      {
        slug: 'measure-before-optimising-llm-latency',
        category: 'LLM Evaluation',
        title: '最直觉的 LLM 优化，往往是错的那个',
        summary: 'Prompt 很长，所以压缩它看起来就是答案。实测显示输入阶段只占总耗时约 1%。',
        from: 'Arcana',
        readingTime: '3 分钟',
        body: [
          '一次解读大约需要 90 秒，而 Prompt 体积不小，压缩它看起来理所当然。动手之前我先对真实 API 做了基准测试。',
          '结果是超过 99% 的输入 token 命中缓存，整个输入阶段只占约 1% 的实际耗时。把 Prompt 砍掉一半，省下的时间不到一秒，代价却是解读质量。',
          '真正的杠杆在推理阶段的 token 生成。关闭之后，首个正文出现的时间从约 51 秒降到约 1 秒，总耗时减半，而盲读输出几乎看不出质量差异。',
          '过程中还有两件事出乎我的预料：我此前推荐为「更快」的那个模型其实并不更快；名义上降低推理强度的参数反而让耗时翻倍。这两个判断当初都只基于一两个有噪声的样本。',
        ],
      },
      {
        slug: 'when-not-to-add-rag',
        category: 'RAG',
        title: '什么时候不该上 RAG',
        summary: '两个差异很大的输入产出了几乎一样的结论。瓶颈在上游，检索够不到那里。',
        from: '拼多多利润试算助手',
        readingTime: '2 分钟',
        body: [
          '考虑接入知识库的起因是输出显得单薄：两个差异很大的利润率，得到了几乎一字不差的结论。面对单薄的输出，检索是最容易想到的答案。',
          '但原因在上游。当时给模型的档位判断只有三档，于是本质不同的情况被贴上了同一个标签送进模型。在代码里加上第四档，问题就解决了。任何检索系统都做不到这一点，因为信息在到达模型之前就已经被压平了。',
          '还有第二个理由。一个存放事实性内容的知识库 —— 费率是多少、常见值是多少 —— 会把产品从「分析工具」变成「数据源」，并且制造出两个可能互相矛盾的权威。情境判断规则可以放，会过期的平台参数不行。',
          '当瓶颈真的是知识检索时，再上 RAG。',
        ],
      },
      {
        slug: 'rule-engine-plus-llm-review',
        category: 'AI Product',
        title: '规则在前，模型在后',
        summary: '把所有内容都丢给模型是最省事的设计。有选择地调用更便宜、更稳定，也更能解释。',
        from: 'A股板块新闻监控系统',
        readingTime: '2 分钟',
        body: [
          '用 LLM 判断每一条新闻，在这个量级上成本很高，相同输入的结果不稳定，而且当某个判断看起来不对时无法解释原因。',
          '带权重的关键词规则负责分类，并输出得分、置信度和命中关键词作为证据。只有规则明显不可靠的情况才调用模型 —— 高风险类目下置信度偏低、命中的是泛词、或者得分贴近最低阈值。',
          '模型只能确认或否决，不能新增类目。分类体系归规则所有，判断归模型所有 —— 正是这个分工让输出变得可解释。',
        ],
      },
      {
        slug: 'prompt-versioning-and-caching',
        category: 'AI Product',
        title: 'Prompt 应该进入缓存 key',
        summary: '如果模型响应被缓存，而 Prompt 改了，缓存返回的就是一个已经不存在的系统给出的答案。',
        from: 'A股板块新闻监控系统',
        readingTime: '2 分钟',
        body: [
          '缓存模型调用是常规做法。容易被忽略的是：Prompt 本身也是响应的输入之一，改动它会让所有依赖它的缓存结果失效。',
          '在这个项目里，Prompt 版本与规则版本会和 provider、模型、新闻内容一起被哈希进缓存 key。改动任一版本号，受影响的条目自动失效，不需要手动清理，也不会有过期结果在改写之后继续存活。',
          '把 Prompt 当作可版本化的组件，落到实处大致就是这个样子。',
        ],
      },
      {
        slug: 'silent-errors-in-decision-support',
        category: 'AI Product',
        title: '让错误变得看不见的修复，不是修复',
        summary: '一次修复之后输出变得完全自洽 —— 用户也因此失去了唯一能发现它出错的线索。',
        from: '拼多多利润试算助手',
        readingTime: '2 分钟',
        body: [
          '修复之前，表格和文字对不上。它看起来就是坏的，这意味着用户能看出它坏了。',
          '修复之后，一次追问用旧参数重跑，输出了一份完整、自洽、格式正确的报告。表面上没有任何问题。在一个用来决定要不要花钱的产品里，这更糟糕。',
          '现在每次修复之后我都会问一句：用户还有没有可能自己发现这个错误？如果答案从「能」变成了「不能」，这次修复就是负收益。',
        ],
      },
      {
        slug: 'mcp-and-function-calling',
        category: 'MCP',
        title: '关于 MCP 与 Function Calling 的笔记',
        summary: '两者各自的位置。这条刻意写得很短，因为我在这个方向上的实际经验还有限。',
        readingTime: '1 分钟',
        body: [
          'Function Calling 是在一个应用内部给模型一组工具签名。工具、schema 和执行都由这个应用自己拥有。',
          'MCP 把这层契约挪到了应用之外，于是一个工具服务可以只写一次，再连接到不同的客户端，而不必为每次集成重新实现。',
          '这条我刻意写得很短。我读过规范，也基于 tool-calling 接口做过东西，但没有在生产环境里交付过 MCP 服务。与其写得超出实际经验，不如把边界标清楚。',
        ],
      },
    ],
  },
}

import { projectOverrides } from '../data/projectUpdates'
import type { Bundle } from './types'

export const en: Bundle = {
  seo: {
    home: {
      title: 'Jaco Wang — AI Product Portfolio',
      description:
        'AI product portfolio focused on LLM evaluation, prompt systems, product thinking and data.',
    },
    routeTitles: {
      '/work/stock-news/prd': 'Stock News Intelligence — Full PRD V1.4 — Jaco Wang',
      '/work/seller-profit': 'Seller Profit Calculator — Case Study — Jaco Wang',
      '/work/arcana': 'Arcana — Case Study — Jaco Wang',
      '/work/stock-news': 'Stock News Intelligence — Case Study — Jaco Wang',
      '/work/taobao-analysis': 'Taobao User Behavior Analysis — Case Study — Jaco Wang',
      '/ai-evals': 'AI Evaluation & Prompt Engineering — Jaco Wang',
      '/learning': 'Learning — Jaco Wang',
    },
  },

  nav: {
    work: 'Work',
    aiEvals: 'AI Evals',
    capabilities: 'Capabilities',
    learning: 'Learning',
    about: 'About',
    resume: 'Resume',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    skipToContent: 'Skip to content',
    languageLabel: 'Language',
  },

  cta: {
    fullPrd: 'View full PRD',
    caseStudy: 'Read Case Study',
    liveDemo: 'Live Demo',
    tryDemo: 'Try Live Demo',
    github: 'View on GitHub',
    resume: 'View Resume',
    readMore: 'Read more',
    exploreLearning: 'All notes',
    exploreEvals: 'Explore AI Evals',
    getInTouch: 'Get in touch',
    viewWork: 'View Selected Work',
    readCaseStudies: 'Read Case Studies',
    backToWork: '← Back to work',
    backHome: '← Back home',
    next: 'Next',
    allNotes: 'All notes',
  },

  hero: {
    eyebrow: 'AI Product Candidate · Data Science',
    name: 'Jaco Wang',
    nameAlt: '王一杰',
    statement: 'I build and evaluate practical AI products.',
    supporting:
      'Data Science student working on AI product design, LLM evaluation, prompt systems, and data-driven product decisions.',
    meta: 'Universiti Kebangsaan Malaysia · Available within 1 week · 6+ month internship',
  },

  metricLabels: {
    evalCases: 'AI Evaluation Cases',
    ctxVars: 'LLM Context Variables',
    sectors: 'Industry Sectors',
    logs: 'Behavior Logs',
    deckWorlds: "Deck Worlds: Defined / Selectable",
    assertions: "Core Assertions · Five Suites",
    silentWindow: "Longest Silent Gap · One Investigation, Previously 9.6s",
    prdIterations: 'PRD Iterations',
    prdVersion: 'Product Version',
    highIntent: 'High-intent Users',
    memory: 'Memory Reduction',
  },

  sections: {
    workEyebrow: 'Selected Work',
    workTitle: 'Four projects, four different problems.',
    workLead:
      'Each one is here for a different reason: a boundary I had to redesign, a boundary I refused to cross, a system that runs without me, and a dataset that produced a decision.',
    evalsEyebrow: 'AI Evaluation & Prompt Engineering',
    evalsTitle: 'Prompt engineering is part of system design.',
    evalsLead:
      'Not writing a better sentence. Defining the boundary of a task, constraining the output, handling the failure, and building a set of cases that can prove you wrong.',
    capabilitiesEyebrow: 'Capabilities',
    capabilitiesTitle: 'Every capability points to a project.',
    capabilitiesLead:
      'No proficiency percentages. If a skill is listed here, there is work you can open and check.',
    capabilitiesClosing: 'I can turn product hypotheses into working prototypes.',
    usedIn: 'Used in',
    moreEyebrow: 'More Work',
    moreTitle: 'Foundations.',
    learningEyebrow: 'Learning',
    learningTitle: 'Notes from the work, not from a syllabus.',
    learningLead:
      'Short write-ups of things that changed how I build. Each one comes out of a specific project decision.',
    aboutEyebrow: 'About',
    aboutTitle: 'What happens after the model works.',
    contactEyebrow: 'Contact',
    contactTitle: 'Available within a week.',
    contactLead:
      'Looking for an AI product internship — AI product, LLM applications, or AI agent and tooling teams. Six months or longer.',
    problem: 'Problem',
    outcome: 'Outcome',
    role: 'Role',
    timeline: 'Timeline',
    context: 'Context',
    caseStudyEyebrow: 'Case Study',
    chapters: 'Chapters',
    limitations: 'Limitations',
    before: 'Before',
    after: 'After',
    projectProof: 'Project proof',
    from: 'From',
    all: 'All',
    filterNotes: 'Filter notes by category',
  },

  about: {
    lead: [
      'I study Data Science, but the part I keep returning to is what happens **after** the model works.',
    ],
    questions: [
      'What problem should AI actually solve?',
      'Where should deterministic systems replace an LLM?',
      'How should AI behaviour be evaluated?',
      'How does model capability become usable product behaviour?',
    ],
    body: [
      'Most of my projects started because a model produced something that looked right and was not. That gap — between plausible output and correct behaviour — is where the work is.',
      'So I run the interviews, write the PRD, define what counts as a failure, build the prototype, and then try to break it. Product thinking, data, an understanding of what LLMs are unreliable at, and enough engineering to ship something real.',
    ],
    facts: {
      educationLabel: 'Education',
      education: 'Universiti Kebangsaan Malaysia',
      educationSub: 'Computer Science — Data Science',
      availabilityLabel: 'Availability',
      availability: 'Within 1 week',
      availabilitySub: '6+ month internship',
      focusLabel: 'Focus',
      focus: 'AI product · LLM evaluation · prompt systems · product analytics',
    },
  },

  contact: {
    email: 'Email',
    github: 'GitHub',
    resume: 'Resume',
    resumeValue: 'Download (Chinese)',
    portfolio: 'Portfolio',
  },

  footer: {
    tagline: 'Jaco Wang · 王一杰 — AI Product Candidate',
  },

  status: {
    mvp: {
      label: 'MVP · Iterating',
      note: 'The six-step draw and server-side readings are implemented; iteration continues.',
    },
    development: {
      label: 'In Development',
      note: 'Current status: active development and iteration.',
    },
  },

  projects: {
    'seller-profit': {
      title: 'Seller Profit Calculator',
      subtitleAlt: '拼多多新手卖家利润试算助手',
      subtitle: 'Turning an unreliable LLM calculator into a deterministic AI product.',
      problem:
        'First-time sellers cannot see their real take-home profit — not because the arithmetic is hard, but because they do not know which platform fees exist.',
      outcome:
        'Evaluation showed the model re-deriving numbers instead of using the deterministic result. I moved calculation into code and cut the model’s context to two qualitative variables.',
      highlightLabel: 'Try it',
      highlight: 'Open the demo, enter costs, and inspect the profit calculation.',
      tags: ['AI Product', 'LLM Evaluation', 'Prompt Engineering'],
    },
    arcana: projectOverrides.en.arcana,
    'stock-news': {
      title: 'Stock News Intelligence',
      subtitleAlt: 'A股板块新闻监控系统',
      subtitle: 'A rule engine decides; the LLM only reviews what the rules are unsure about.',
      problem:
        'Sector news is scattered, heavily duplicated, and hard to connect to the sectors it actually moves — and it all has to be pulled manually.',
      outcome:
        'Keyword rules classify cheaply and explainably; the model is invoked only on low-confidence matches. Prompt and rule versions are part of the cache key.',
      highlightLabel: 'Running now',
      highlight: 'Collection every 30 minutes, a daily brief, and 70 tests running in CI.',
      tags: ['AI Product', 'Prompt Engineering', 'Automation'],
    },
    'taobao-analysis': {
      title: 'Taobao User Behavior Analysis',
      subtitleAlt: '淘宝用户行为数据分析',
      subtitle: 'Turning 100M behavior logs into one segment an operations team can act on.',
      problem:
        'A platform converts a small fraction of enormous browsing volume. Which step in the journey is worth spending operational budget on?',
      outcome:
        'The largest actionable gap sits at cart-to-purchase. Traffic peak and conversion-rate peak are offset, so spend allocated against traffic targets the wrong hour.',
      highlightLabel: 'Data → decision',
      highlight: 'The deliverable is a sized, reachable segment — not a funnel chart.',
      tags: ['Data Analysis', 'Product Analytics', 'User Behavior'],
    },
  },

  capabilities: [
    {
      index: '01',
      title: 'AI Product',
      skills: [
        'User Research',
        'Problem Framing',
        'Requirement Analysis',
        'PRD',
        'MVP Scope',
        'Product Iteration',
      ],
      usedIn: ['seller-profit', 'stock-news'],
    },
    {
      index: '02',
      title: 'LLM Product Systems',
      skills: [
        'Prompt Engineering',
        'LLM Evaluation',
        'RAG',
        'Agent',
        'Function Calling',
        'MCP',
        'Context Management',
        'Cost Control',
      ],
      usedIn: ['seller-profit', 'arcana', 'stock-news'],
    },
    {
      index: '03',
      title: 'Data & Evaluation',
      skills: [
        'Python',
        'Pandas',
        'SQL (MySQL / DuckDB)',
        'Funnel Analysis',
        'Retention',
        'Evaluation Design',
      ],
      usedIn: ['taobao-analysis', 'seller-profit'],
    },
    {
      index: '04',
      title: 'Prototype & Delivery',
      skills: ['Figma', 'Streamlit', 'Dify', 'GitHub Actions', 'Supabase', 'Codex / Claude Code'],
      usedIn: ['arcana', 'stock-news'],
    },
  ],

  moreWork: [
    {
      title: 'Tesla Stock Prediction',
      context: 'Final Year Project · Python',
      points: [
        'Time-aware machine learning with walk-forward evaluation',
        'Six explicit leakage controls, including an assertion that validation and holdout dates never overlap',
        'Sentiment features fused with market features across 67 columns',
        'Reported against four baselines, and documented as a research artifact rather than a trading signal',
      ],
    },
    {
      title: 'IDSC 2026 Biomedical Data Challenge',
      context: 'Team project',
      points: [
        'Brugada ECG classification',
        'Model comparison across logistic regression, random forest and a 1D-CNN',
        'Recall-oriented model selection — a screening context makes a missed case more costly than a false alarm',
      ],
    },
    {
      title: 'LLM Evaluation Practice',
      context: 'Self-directed · 28 days',
      points: [
        'A structured programme building evaluation sets, running them, and analysing failures',
        'Feeds directly into the evaluation work in the featured projects',
      ],
    },
  ],

  evals: {
    heroTitle: 'Prompt engineering is part of system design.',
    heroLead:
      'Task boundary, output constraints, failure handling, context control and regression testing. The work is deciding what a model is allowed to be responsible for — and building the cases that check whether it stayed there.',
    methodEyebrow: 'Method',
    methodTitle: 'The loop',
    methodNote:
      'The step that matters most is the sixth. When a constraint fails, the instinct is to rewrite the prompt. Sometimes the right move is to change the layer that can actually hold it — and to accept that the prompt was never able to.',
    evidenceEyebrow: 'Evidence',
    evidenceTitle: 'Three projects, three different problems.',
    coverageEyebrow: 'Coverage',
    coverageTitle: 'What that has meant in practice.',
    failureEyebrow: 'Failure Library',
    failureTitle: 'The failures are the useful part.',
    failureLead:
      'Most portfolios show what worked. These are the AI failure modes I have actually hit, and what each one taught me about where the constraint belonged.',
    pipeline: [
      { step: 'Task Definition', text: 'State the single behaviour under test, narrowly enough that a case can pass or fail it.' },
      { step: 'Context Design', text: 'Decide what reaches the model — and, more importantly, what does not.' },
      { step: 'Output Constraints', text: 'Fix the schema, the permitted values, and the shape of a refusal.' },
      { step: 'Evaluation Set', text: 'Build cases that cover the boundary, not just the happy path.' },
      { step: 'Failure Analysis', text: 'Read why a case passed as carefully as why one failed.' },
      { step: 'Iteration', text: 'Change the layer that can actually hold the constraint — sometimes the architecture, not the prompt.' },
      { step: 'Regression Validation', text: 'Re-run the set. Verify with a case that could prove you wrong.' },
    ],
    evidence: [
      {
        slug: 'seller-profit',
        headline: 'Evaluation that changed an architecture',
        points: [
          'Built 10 evaluation cases testing whether the model used deterministic results',
          'Found it re-deriving values instead — and that passing cases passed by coincidence',
          'Moved calculation into code rather than strengthening the prompt again',
          'Cut model context from 16 variables to 2 after a configuration audit',
        ],
      },
      {
        slug: 'arcana',
        headline: 'Boundary properties as runnable assertions',
        points: [
          '785 assertions passed across five core suites; readings use a mock provider, not a live-model quality benchmark',
          '10 reading cases across one-, three- and five-card spreads and a high-risk topic',
          'Tone checks run in both directions — catch violations, and do not flag restraint',
          'Two prompt versions kept side by side and compared through a dedicated A/B script',
        ],
      },
      {
        slug: 'stock-news',
        headline: 'A prompt as a versioned system component',
        points: [
          'Prompt version and rule version hashed into the response cache key',
          'Structured prompt: task, output schema, rules, negative examples, rule-layer evidence',
          'Model invoked only on low-confidence or generic-term matches',
          'Separate timeouts for classification and generation — different tasks, different budgets',
        ],
      },
    ],
    topics: [
      ['Prompt structure', 'Structured payload: task, schema, rules, examples, evidence'],
      ['Context design', 'Deciding what reaches the model — 16 variables cut to 2'],
      ['Negative examples', 'Four real misclassifications shipped inside the prompt'],
      ['Output schema', 'Constrained JSON plus server-side schema validation'],
      ['Constraints', 'Six task-boundary rules, each written from an observed failure'],
      ['Evidence validation', 'Rule-layer score and matched keywords passed to the reviewer'],
      ['Failure analysis', 'Reading why a case passed as carefully as why one failed'],
      ['Prompt versioning', 'Version hashed into the cache key; two versions kept for A/B'],
      ['Regression validation', '182 runnable assertions across engine and reading'],
      ['Cost & latency', 'Measured benchmarks; separate timeouts per task type'],
      ['Probe design', 'Six probes against a product: numbers, sourcing, transparency, tools, decisions, memory'],
      ['Layer separation', 'Testing numeric and qualitative output as two different reliability profiles'],
      ['Evidence grading', 'Marking which conclusions survive one observation and which need repeated sampling'],
    ],
    failures: [
      {
        mode: 'Numbers move, conclusions hold',
        detail:
          'The same cost question in two fresh sessions produced figures 9.7% apart while the qualitative conclusions were identical. Numeric and qualitative output do not fail the same way.',
        from: 'Boundary probing',
      },
      {
        mode: 'Declared limits, ignored in the same answer',
        detail:
          'It stated an assumption at the top and contradicted it in the calculation below; elsewhere it noted that no official comparison existed, then printed a precise comparison table. Two unrelated tasks, one behaviour.',
        from: 'Boundary probing',
      },
      {
        mode: 'Accurate where sourced, invented where not',
        detail:
          'Of four benchmark figures, the two published officially were exact; the two never published were still given to one decimal place. Both unverifiable ones favoured a competitor — fabricated precision, not bias.',
        from: 'Boundary probing',
      },
      {
        mode: 'Derived figures that its own model cannot produce',
        detail:
          'Reconstructing its sensitivity table from the model it had just stated, only the first row reproduced. The rest were generated in the right direction and were not computed at all.',
        from: 'Boundary probing',
      },
      {
        mode: 'Semantic control that belongs to someone else',
        detail:
          'An external tool returned a field named cost with value "68.00". The model presented it as an average spend per person. The data was real; the unit, the qualifier and the meaning were added.',
        from: 'MCP integration',
      },
      {
        mode: 'A prompt constraint that never took effect',
        detail:
          'The instruction said not to recalculate. Evaluation showed the model re-deriving values throughout. The instruction was never in force — it only looked like it was.',
        from: 'Seller Profit Calculator',
      },
      {
        mode: 'Passing by coincidence',
        detail:
          'Cases passed because their values happened to survive rounding, so independent arithmetic matched the code output. One more decimal place and the same case fails.',
        from: 'Seller Profit Calculator',
      },
      {
        mode: 'Values that can be combined will be combined',
        detail:
          'A set of ratios sharing a unit reached the model. It added two of them together and reported the sum as a new figure. That is arithmetic, not repetition.',
        from: 'Seller Profit Calculator',
      },
      {
        mode: 'A silent error',
        detail:
          'After a repair, a stale-parameter run produced a complete, self-consistent, correctly formatted report. Nothing looked wrong — which made it worse than the bug it replaced.',
        from: 'Seller Profit Calculator',
      },
      {
        mode: 'A configuration rollback nobody noticed',
        detail:
          'A canvas-level undo reverted a rewritten system prompt. Every previously fixed behaviour returned, and the editor looked normal. Found by deliberately entering a non-default value.',
        from: 'Seller Profit Calculator',
      },
      {
        mode: 'Authoritative-sounding invention',
        detail:
          'The model produced typical-range figures for platform fees that appeared nowhere in the prompt, presented under a heading that read like system validation.',
        from: 'Seller Profit Calculator',
      },
      {
        mode: 'Rule-heavy prompts produce compliant emptiness',
        detail:
          'Constraining phrasing tightly made output extremely stable and extremely hollow — contradictions smoothed over, difficult results bent into something reassuring.',
        from: 'Arcana',
      },
      {
        mode: 'The obvious optimisation was the wrong one',
        detail:
          'Shortening a long prompt looked like the fix for latency. Over 99% of input tokens were cache hits; the input phase was about 1% of total time.',
        from: 'Arcana',
      },
      {
        mode: 'A parameter that did the opposite',
        detail:
          'The setting that nominally reduces reasoning effort more than doubled total response time in measurement. It was dropped.',
        from: 'Arcana',
      },
      {
        mode: 'Generic-term misclassification',
        detail:
          'An article about a diplomatic meeting matched a currency keyword and landed in the interest-rate category. This class of failure is exactly what selective model review exists to catch.',
        from: 'Stock News Intelligence',
      },
    ],
  },

  learningTrail: {
    label: "What I'm learning",
    items: ['Prompt Engineering', 'Context Engineering', 'RAG', 'LLM Evaluation', 'Agent', 'MCP'],
  },

  learning: {
    heroTitle: 'Notes from the work, not from a syllabus.',
    heroLead:
      'What I learned, where it failed, and where it ended up in a project. Some of these are applied in shipped work; others are marked as study notes.',
    categories: {
      'Prompt Engineering': 'Prompt Engineering',
      'Context Engineering': 'Context Engineering',
      RAG: 'RAG',
      'LLM Evaluation': 'LLM Evaluation',
      Agent: 'Agent',
      MCP: 'MCP & Tool Use',
      'AI Product': 'AI Product Systems',
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
      keyIdea: 'Key idea',
      failure: 'Common failure',
      tradeoff: 'Trade-off',
      applied: 'How I used it',
      relatedWork: 'Related work',
      learningNote: 'Study note — not yet used in a shipped project',
    },
    notes: [
      /* ── Prompt Engineering ─────────────────────────── */
      {
        slug: 'prompt-is-a-soft-constraint',
        category: 'Prompt Engineering',
        title: 'A prompt is a soft constraint, not a hard switch',
        summary:
          'Telling a model not to do something is a request, not a mechanism. If correctness depends on it, move it out of the prompt.',
        keyIdea:
          'A prompt can shape behaviour. It cannot guarantee it. If a behaviour must hold, it needs a structural guarantee.',
        failure:
          'Four rounds of stronger wording to stop a model doing arithmetic. Forbidding it did nothing; passing computed values in helped partially; banning all arithmetic still left small sums in the output.',
        applied:
          'Calculation moved into a code node. Once the numbers stopped reaching the model, the entire class of failure disappeared — not because the instruction improved, but because there was nothing left to compute.',
        relatedProjects: ['seller-profit'],
        from: 'Seller Profit Calculator',
        readingTime: '2 min',
        source: 'PRD-v5.md §7.2',
      },
      {
        slug: 'guardrails-live-in-the-failure-branch',
        category: 'Prompt Engineering',
        title: 'Guardrails are tuned on the failure branch, not the happy path',
        summary:
          'I wrote ten retrieval questions and deliberately included ones the data could not answer. Both failures came from guardrail scope, not from the model.',
        keyIdea:
          'The behaviour worth specifying is what happens when there is no answer. That branch is where most tuning actually happens.',
        failure:
          'Asked about a product category outside the dataset, the assistant reasoned about it anyway — the boundary was written too wide. Asked for a figure it did not have, it admitted the gap and then produced a number labelled "inferred".',
        tradeoff:
          'Narrowing scope makes the assistant refuse more often. For a user deciding whether to spend money, a refusal is cheaper than a plausible number.',
        applied:
          'Two patches: restrict the category explicitly, and forbid any unsupported figure — including one labelled as an inference. Qualitative judgment stays allowed.',
        readingTime: '2 min',
        source: '第一个月完整学习档案_建认知.md · Week 3',
      },

      /* ── Context Engineering ────────────────────────── */
      {
        slug: 'what-to-put-in-context',
        category: 'Context Engineering',
        title: 'Deciding what belongs in context',
        summary:
          'The question is not whether a value is important. It is whether the model can combine it with something else.',
        keyIdea:
          'Values that share a unit and can be added together will be combined. A set of ratios summing to a meaningful total is an invitation.',
        failure:
          'An audit found the model receiving 16 variables, 12 of them plain numbers written into the system prompt through variable rendering. One output added two ratios together and reported the sum as a new figure.',
        tradeoff:
          'Less context means the model can say less. That is the point: anything it cannot say, it also cannot get wrong.',
        applied:
          'The test that survived: what does this number give the user coming out of the model that it does not already give them in the table? Sixteen variables became two, both qualitative.',
        relatedProjects: ['seller-profit'],
        from: 'Seller Profit Calculator',
        readingTime: '2 min',
        source: 'PRD-v5.md §6.3 / §7.5',
      },
      {
        slug: 'four-layers-of-control',
        category: 'Context Engineering',
        title: 'LLM → Prompt → RAG → Agent is a ladder of control',
        summary:
          'Each layer exists to cover the previous one\u2019s gap, and each one hands more control to the model.',
        keyIdea:
          'A base model completes text but does not know what you want. A prompt gives instructions but cannot hold much data, and what it holds is frozen. RAG attaches a knowledge base that can be updated, but it is a passive store — it never decides anything. An Agent hands over control of the process itself.',
        tradeoff:
          'Capability and controllability move in opposite directions. Every step up the ladder makes failures harder to contain: a workflow gets one step wrong, an Agent gets a whole path wrong.',
        applied:
          'It is the question I ask before adding a layer: what is the current layer failing at? Twice the answer was "nothing" — which is why the profit calculator uses neither retrieval nor tool calling.',
        readingTime: '2 min',
        source: '第一个月总收官_建认知.md',
      },

      /* ── RAG ────────────────────────────────────────── */
      {
        slug: 'retrieval-quality-is-chunk-quality',
        category: 'RAG',
        title: 'Retrieval quality is mostly chunking quality',
        summary:
          'A similarity score tells you how alike two things look. It does not tell you whether the retrieved chunk is useful.',
        keyIdea:
          'Score measures resemblance, not correctness. Top-K controls quantity; a score threshold controls quality. Without the threshold, K will be filled regardless of whether anything relevant exists.',
        failure:
          'A question about fine-tuning returned a 26-character chunk containing nothing but a section heading. The document had been split so that a heading became its own semantically thin chunk, and Top-K = 3 padded it in to make up the count.',
        tradeoff:
          'Re-ranking adds a precision pass after vector search, at extra cost and latency. Worth it on a large noisy corpus; unnecessary on a small one.',
        applied:
          'Turn on the score threshold rather than raising K. Most disappointing RAG results are a document-splitting problem, not a model problem.',
        readingTime: '3 min',
        source: '第一个月完整学习档案_建认知.md · Week 3',
      },
      {
        slug: 'rag-output-is-capped-by-the-knowledge-base',
        category: 'RAG',
        title: 'A RAG pipeline cannot be better than the knowledge base behind it',
        summary:
          'I debugged every connection until retrieval genuinely reached the model — and the output was still only as good as the test data in the store.',
        keyIdea:
          'Once the plumbing is correct, quality is a content problem, not an engineering one. The real bottleneck in deploying RAG is maintaining the knowledge base, not model capability.',
        failure:
          'Four separate breakages in one evening, each looking identical from the outside: retrieval ran but the result was never attached to the model; it was attached but never referenced in the prompt; the reference was typed as text instead of inserted as a variable, so it stayed inert; and finally the store simply did not contain the requested material.',
        tradeoff:
          'Fabricating realistic-looking data would have made the demo look finished. It would also have laundered a hallucination into a data source, which is worse than the model inventing it live.',
        applied:
          'Two checks that cannot be fooled: watch input token count — if retrieved content genuinely entered the context, it rises sharply — and read the trace panel node by node to see exactly which step dropped the data.',
        readingTime: '3 min',
        source: 'Week4_周三周四复盘_RAG工作流搭建与调试.md',
      },
      {
        slug: 'when-not-to-add-rag',
        category: 'RAG',
        title: 'When not to add RAG',
        summary:
          'Two very different inputs produced nearly identical conclusions. The bottleneck was upstream, and retrieval could not have reached it.',
        keyIdea:
          'Retrieval is the reflexive answer to thin output. It only helps when the thinness is caused by missing knowledge.',
        failure:
          'The tier judgment feeding the model had only three levels, so genuinely different situations arrived labelled the same. The information was being flattened before the model ever saw it.',
        tradeoff:
          'A knowledge base holding factual claims turns an analysis tool into a data source, and creates two authorities that can contradict each other. Situational rules are safe to store; changing platform parameters are not.',
        applied:
          'Added a fourth tier in code. Problem solved without retrieval.',
        relatedProjects: ['seller-profit'],
        from: 'Seller Profit Calculator',
        readingTime: '2 min',
        source: 'PRD-v5.md §11.3',
      },

      /* ── LLM Evaluation ─────────────────────────────── */
      {
        slug: 'numeric-and-qualitative-reliability-differ',
        category: 'LLM Evaluation',
        title: 'A model\u2019s numeric layer and qualitative layer fail differently',
        summary:
          'I asked a consumer assistant the same cost question in two fresh sessions. The numbers differed by 9.7%. The qualitative conclusions were identical.',
        keyIdea:
          'It is not that an LLM is unreliable. It is that its numeric output and its qualitative output have different reliability — and a product can be cut along that seam.',
        failure:
          'Both answers were internally inconsistent in different ways: one declared an assumption at the top and then contradicted it in the calculation; the other counted the same shipping cost twice. Neither figure survived checking. And when I reconstructed its sensitivity figures from its own stated model, only the first line reproduced — the rest were generated, not computed.',
        applied:
          'This turned an engineering choice into a product judgment with a controlled observation behind it. Deterministic calculation in code, qualitative interpretation in the model, is not a workaround — it is a split along a real fault line.',
        relatedProjects: ['seller-profit'],
        readingTime: '3 min',
        source: '豆包竞品拆解_完整记录_20260801.md · 探针 1 / 5',
      },
      {
        slug: 'probe-based-boundary-testing',
        category: 'LLM Evaluation',
        title: 'Probing a product for its boundary, not its best answer',
        summary:
          'Six probes against a consumer AI assistant: numeric reliability, retrieve-or-invent, source transparency, tool triggering, decision boundary, memory.',
        keyIdea:
          'How good a product looks when it answers well tells you very little. What matters is what it does when it cannot answer.',
        failure:
          'Of four benchmark figures it quoted, the two published officially were exact and the two never published were still given to one decimal place. Both unverifiable figures favoured a competitor — so this was not bias, it was fabricated precision. Those are different problems and should not be conflated.',
        tradeoff:
          'It declines to ask clarifying questions, which buys a smooth "one answer, done" experience and costs the user a number built on assumptions they never saw.',
        applied:
          'I now separate two claims that get merged constantly: capability and boundary clarity. A product can be strong at one and weak at the other.',
        readingTime: '3 min',
        source: '豆包竞品拆解_完整记录_20260801.md',
      },
      {
        slug: 'evaluation-passing-by-coincidence',
        category: 'LLM Evaluation',
        title: 'A passing test case is not evidence of correct behaviour',
        summary:
          'Some of my cases passed for the wrong reason. Reading why they passed changed the architecture.',
        keyIdea:
          'Read passing cases as carefully as failing ones, and ask what would have to change for this to break.',
        failure:
          'Cases passed because their values happened to survive rounding, so the model\u2019s independent arithmetic matched the code output exactly. One more decimal place and the same case fails.',
        applied:
          'The conclusion was not "some cases work" but "the constraint had never been in effect" — which is what justified an architectural change rather than another round of prompt edits.',
        relatedProjects: ['seller-profit'],
        from: 'Seller Profit Calculator',
        readingTime: '2 min',
        source: 'PRD-v5.md §7.1',
      },
      {
        slug: 'assertion-based-llm-evaluation',
        category: 'LLM Evaluation',
        title: 'Evaluating what a model must not do',
        summary:
          'Boundary properties are testable in a way that output quality is not — and they should be tested in both directions.',
        keyIdea:
          'Judging whether a generated reading is good is hard. Judging whether it changed a card is trivial. Point the assertions at the boundary.',
        failure:
          'A tone guard that only checks for violations will over-trigger and quietly degrade every output. The suite also has to assert that restrained phrasing is not flagged.',
        applied:
          'Card count preserved, nothing invented, orientations untouched, relationships referencing only cards actually present — a suite anyone can clone and reproduce without agreeing on what a good reading is.',
        relatedProjects: ['arcana'],
        from: 'Arcana',
        readingTime: '2 min',
        source: 'arcana · scripts/reading-eval.ts',
      },
      {
        slug: 'measure-before-optimising-llm-latency',
        category: 'LLM Evaluation',
        title: 'The obvious LLM optimisation is often the wrong one',
        summary:
          'The prompt was long, so shortening it looked like the fix. Measurement said the input phase was about 1% of the time.',
        keyIdea:
          'Benchmark before optimising. Intuitions about model latency are unusually bad, because the expensive part is invisible.',
        failure:
          'Over 99% of input tokens were served from cache. Halving the prompt would have saved a fraction of a second and cost reading quality. Meanwhile the parameter that nominally lowers reasoning effort more than doubled total time.',
        applied:
          'The real lever was reasoning-token generation. Disabling it took time-to-first-content from about 51 seconds to about 1 and halved total time, at close to no cost in a blind read.',
        relatedProjects: ['arcana'],
        from: 'Arcana',
        readingTime: '3 min',
        source: 'arcana · docs/v2/14-perf-investigation.md',
      },

      /* ── Agent ──────────────────────────────────────── */
      {
        slug: 'who-holds-the-decision',
        category: 'Agent',
        title: 'What separates a workflow from an agent is who decides',
        summary:
          'Not capability. Control. In a workflow I fix the steps; in an agent the model chooses them.',
        keyIdea:
          'Calling a tool does not make something an agent. The question is whether it can decide how many steps to take and change the next step based on the last one.',
        failure:
          'The same object changes category depending on who controls it: a knowledge base wired into a workflow is not a tool, because retrieval is forced every turn. The same knowledge base inside an agent is a tool, because the model may decide not to use it.',
        tradeoff:
          'Handing over control buys the ability to handle vague, multi-step tasks. It also means errors propagate along a path instead of stopping at a node.',
        applied:
          'Four defences for that trade: clarify before executing, checkpoint and attribute at key steps, keep a human in the loop for anything irreversible, and cap steps so a wrong path terminates.',
        readingTime: '3 min',
        source: '第一个月完整学习档案_建认知.md · Week 4',
      },
      {
        slug: 'better-planning-more-convincing-hallucination',
        category: 'Agent',
        title: 'The better an agent plans, the more convincing its hallucinations are',
        summary:
          'I traced a multi-hop search: three rounds, later queries built from earlier results, strategy revised mid-run. Genuine planning — and a fabricated conclusion.',
        keyIdea:
          'Unable to find the figure it needed, it substituted a related national statistic, called the two "broadly consistent", and buried that substitution in the process while stating the conclusion as fact.',
        failure:
          'A visible, coherent chain of reasoning reads as evidence of correctness. It is evidence of effort. The presentation quality of the process and the reliability of the result are independent.',
        tradeoff:
          'Showing the process builds trust and invites scrutiny; hiding it produces a cleaner answer and removes the reader\u2019s ability to catch a substitution like this one.',
        applied:
          'It reset where I look for failure. In a single-shot answer the error is in the output; in a planned run it can be in a step nobody reads.',
        readingTime: '2 min',
        source: '第一个月完整学习档案_建认知.md · Week 4 周二',
      },

      /* ── MCP & Tool Use ─────────────────────────────── */
      {
        slug: 'mcp-does-not-replace-function-calling',
        category: 'MCP',
        title: 'MCP did not replace function calling',
        summary:
          'They sit at different layers, and conflating them is the most common mistake I hear.',
        keyIdea:
          'Function calling is the model layer: the model decides which tool to call and emits the arguments. MCP is the layer between an application and a tool provider: how tools are described, discovered and connected. The first did not change.',
        failure:
          'The clearest evidence came from my own logs. The run metadata said the agent mode was function calling, while every tool in that run came from an MCP server.',
        tradeoff:
          'The deeper difference is not who defines the tools but when they are fixed. Function calling as I first used it means the tool list is written into the application at design time — adding one means changing code. MCP asks the server at runtime, so an agent can gain capabilities after it is already running.',
        applied:
          'Also worth knowing that a server exposes three kinds of primitive, not one: tools the model may call, resources the application injects, and prompt templates the user selects. Their risk profiles are different, and most discussion only covers the first.',
        readingTime: '3 min',
        source: 'MCP学习记录_Week9周二.md · §1',
      },
      {
        slug: 'enabling-a-tool-is-not-free',
        category: 'MCP',
        title: 'Enabling a tool costs tokens whether or not it is called',
        summary:
          'I connected a maps server to a workflow, enabled all fifteen tools, and measured what that actually costs.',
        keyIdea:
          'Every enabled tool ships its name, description and parameter schema with each request — the model cannot choose from a menu it has not been shown. A conversation that called zero tools still consumed roughly 2,600 tokens.',
        failure:
          'Cost scales as iterations × total tool description size. An agent run is multi-round, and the full menu is sent again every round: one three-round question came to roughly 17,600 tokens while using three of the fifteen tools.',
        tradeoff:
          'Enable tools selectively rather than switching everything on. The tool count is also set by the server, so a provider adding ten tools raises your cost without notifying you.',
        applied:
          'Ran the numbers before deciding, rather than after. Still outstanding: a controlled all-on versus all-off comparison to isolate the standing cost of the descriptions.',
        readingTime: '3 min',
        source: 'MCP学习记录_Week9周二.md · §2.3',
      },
      {
        slug: 'field-semantics-you-do-not-own',
        category: 'MCP',
        title: 'Connecting an external server hands away semantic control',
        summary:
          'The server returned a field named cost with the value "68.00". The model presented it to the user as an average spend per person.',
        keyIdea:
          'The data was real. The interpretation was invented. "Per person", "approximately" and the currency unit were all added by the model, and whether that field actually means per-person spend is defined by the provider, not by me.',
        failure:
          'This class of error does not raise anything: the output is correctly formatted, no exception is thrown, and it is unfalsifiable from the outside. Guess right and nobody notices; guess wrong and nobody notices either.',
        tradeoff:
          'A prompt cannot fix it, because the field definition lives on the other side of the boundary and can change without warning.',
        applied:
          'This became the deciding argument against connecting the profit calculator to an external server. For a product where a seller acts on the number, an unverifiable semantic inference is not an acceptable risk.',
        relatedProjects: ['seller-profit'],
        readingTime: '2 min',
        source: 'MCP学习记录_Week9周二.md · §2.4 / §3',
      },

      /* ── AI Product Systems ─────────────────────────── */
      {
        slug: 'capability-is-not-boundary-clarity',
        category: 'AI Product',
        title: 'Being capable and having clear boundaries are separate achievements',
        summary:
          'The assistant I tested was genuinely strong: it retrieved rather than recalled, corrected conflicting reports on a release date, and refused to flatter its own vendor.',
        keyIdea:
          'Its weakness was not opacity or capability. It declares a limitation and then acts against it — stating that no official comparison exists, then producing a precise comparison table.',
        failure:
          'A recurring pattern across four different situations: an external field\u2019s meaning, a missing business assumption, a sensitivity figure, an unpublished benchmark score. In each case the model filled the gap silently, in the right direction, with detail that cannot be checked.',
        applied:
          'The improvement I would ship is cheap: the assumptions are already tracked inside the session — it can recite them accurately when asked — so exposing them as visible, editable switches is surfacing existing state, not building a new capability.',
        readingTime: '3 min',
        source: '豆包竞品分析_500字_20260801.md',
      },
      {
        slug: 'rule-engine-plus-llm-review',
        category: 'AI Product',
        title: 'Rules first, model second',
        summary:
          'Sending everything to a model is the straightforward design. Selective invocation is cheaper, more stable, and explainable.',
        keyIdea:
          'The model can only confirm or veto — it cannot introduce a category. The taxonomy stays with the rules and the judgment stays with the model, which is what makes the output explainable.',
        failure:
          'Classifying every article with an LLM is expensive at volume, non-deterministic across identical inputs, and impossible to explain when a result looks wrong.',
        applied:
          'Weighted keyword rules emit a score, a confidence value and matched keywords as evidence. The model is invoked only on low confidence, a generic-term match, or a score near the threshold.',
        relatedProjects: ['stock-news'],
        from: 'Stock News Intelligence',
        readingTime: '2 min',
        source: 'stock_news · classifier.py',
      },
      {
        slug: 'prompt-versioning-and-caching',
        category: 'AI Product',
        title: 'Prompts belong in the cache key',
        summary:
          'If model responses are cached and the prompt changes, the cache is serving answers from a system that no longer exists.',
        keyIdea:
          'The prompt is an input to the response. Editing it invalidates every cached answer that depended on it.',
        applied:
          'Prompt version and rule version are hashed into the cache key alongside provider, model and content. Changing either invalidates the affected entries automatically.',
        relatedProjects: ['stock-news'],
        from: 'Stock News Intelligence',
        readingTime: '2 min',
        source: 'stock_news · classifier.py',
      },
      {
        slug: 'silent-errors-in-decision-support',
        category: 'AI Product',
        title: 'A fix that makes a failure invisible is not a fix',
        summary:
          'After one repair the output became fully self-consistent — and the user lost their only way to detect it was wrong.',
        keyIdea:
          'After every repair, ask whether the user can still notice this failure. If the answer moved from yes to no, the repair was negative.',
        failure:
          'A follow-up request re-ran with stale parameters and produced a complete, internally consistent, correctly formatted report. Nothing looked wrong.',
        relatedProjects: ['seller-profit'],
        from: 'Seller Profit Calculator',
        readingTime: '2 min',
        source: 'PRD-v5.md §7.5',
      },
    ],
  },
}

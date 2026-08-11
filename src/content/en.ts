import type { Bundle } from './types'

export const en: Bundle = {
  seo: {
    home: {
      title: 'Jaco Wang — AI Product Portfolio',
      description:
        'AI product portfolio focused on LLM evaluation, prompt systems, product thinking and data.',
    },
    routeTitles: {
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
    assertions: 'Reproducible Assertions',
    redLines: 'Product Red Lines',
    firstContent: 'First Content, from 51.6s',
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
      highlight: 'The only project here you can use directly — no repository required.',
      tags: ['AI Product', 'LLM Evaluation', 'Prompt Engineering'],
    },
    arcana: {
      title: 'Arcana',
      subtitleAlt: 'Immersive Digital Tarot Experience',
      subtitle:
        'An immersive digital tarot product exploring user agency, randomness and the boundary between deterministic interaction and LLM interpretation.',
      problem:
        'The obvious build lets the model draw and interpret in one step. That is cheaper, faster, and it destroys the reason people do a tarot draw at all.',
      outcome:
        'Shuffle, cut, draw and orientation belong to a deterministic engine. The model receives a frozen result — and 160 runnable assertions keep it there.',
      highlightLabel: 'Reproducible',
      highlight: 'Clone the repo and run the evaluation yourself: 64 + 96 assertions, 0 failed.',
      tags: ['AI Product', 'Interaction Design', 'LLM Evaluation'],
    },
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
          '64 engine assertions and 96 reading assertions, reproducible from a clone',
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
      ['Regression validation', '160 runnable assertions across engine and reading'],
      ['Cost & latency', 'Measured benchmarks; separate timeouts per task type'],
    ],
    failures: [
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

  learning: {
    heroTitle: 'Notes from the work, not from a syllabus.',
    heroLead:
      'Short write-ups of things that changed how I build. Each one comes out of a specific decision in a specific project, and says which one.',
    categories: {
      'Prompt Engineering': 'Prompt Engineering',
      'LLM Evaluation': 'LLM Evaluation',
      RAG: 'RAG',
      'AI Product': 'AI Product',
      MCP: 'MCP',
    },
    notes: [
      {
        slug: 'prompt-is-a-soft-constraint',
        category: 'Prompt Engineering',
        title: 'A prompt is a soft constraint, not a hard switch',
        summary:
          'Telling a model not to do something is a request, not a mechanism. If correctness depends on it, move it out of the prompt.',
        from: 'Seller Profit Calculator',
        readingTime: '2 min',
        body: [
          'I spent four rounds strengthening prompt language to stop a model performing arithmetic. Forbidding recalculation did nothing. Passing the computed values in explicitly helped partially. Banning all arithmetic still left small sums appearing in the output.',
          'The prompt was never the right layer. Once calculation moved into code and the numbers stopped reaching the model at all, the class of failure disappeared — not because the instruction got better, but because there was nothing left to compute.',
          'The practical rule I now use: if a behaviour must hold, it needs a structural guarantee. A prompt can shape behaviour. It cannot guarantee it.',
        ],
      },
      {
        slug: 'what-to-put-in-context',
        category: 'Prompt Engineering',
        title: 'Deciding what belongs in context',
        summary:
          'The question is not whether a value is important. It is whether the model can combine it with something else.',
        from: 'Seller Profit Calculator',
        readingTime: '2 min',
        body: [
          'An audit of one workflow found the model receiving 16 variables, 12 of them plain numbers. They were not leaking in from conversation history — they had been written into the system prompt through variable rendering.',
          'What made them dangerous was not their individual importance. It was that they shared a unit and could be added together. A set of ratios that sums to a meaningful total is an invitation, and the model accepted it: one output combined two of them into a third.',
          'The test that survived: what does this number give the user coming out of the model, that it does not already give them sitting in the table? Anything without an answer was removed. Sixteen became two, and both survivors are qualitative strings the table cannot express.',
        ],
      },
      {
        slug: 'evaluation-passing-by-coincidence',
        category: 'LLM Evaluation',
        title: 'A passing test case is not evidence of correct behaviour',
        summary:
          'Some of my cases passed for the wrong reason. Reading why they passed changed the architecture.',
        from: 'Seller Profit Calculator',
        readingTime: '2 min',
        body: [
          'In a set of evaluation cases checking whether a model used deterministic results, some passed. It would have been easy to treat those as the working baseline and focus on the failures.',
          'They passed by coincidence. Their underlying values happened to survive rounding, so the model’s independent arithmetic matched the code output exactly. Change the input so the raw value carries one more decimal place, and the same case fails.',
          'The conclusion was not "some cases work". It was that the constraint had never been in effect. That reframing is what justified an architectural change rather than another round of prompt edits.',
          'Since then I read passing cases as carefully as failing ones, and ask what would have to change for this to break.',
        ],
      },
      {
        slug: 'assertion-based-llm-evaluation',
        category: 'LLM Evaluation',
        title: 'Evaluating what a model must not do',
        summary:
          'Boundary properties are testable in a way that output quality is not — and they should be tested in both directions.',
        from: 'Arcana',
        readingTime: '2 min',
        body: [
          'Judging whether a generated reading is good is hard. Judging whether it changed a card is trivial. So the assertions target the boundary: card count preserved, nothing invented, orientations untouched, relationships referencing only cards actually present.',
          'That gives a suite anyone can run and reproduce, without needing to agree on what a good reading is.',
          'The tone checks taught me something separate. It is not enough to assert that a violation is caught — the suite also asserts that restrained, careful phrasing is not flagged. A guard that over-triggers quietly degrades every output, and only a two-directional test catches it.',
        ],
      },
      {
        slug: 'measure-before-optimising-llm-latency',
        category: 'LLM Evaluation',
        title: 'The obvious LLM optimisation is often the wrong one',
        summary:
          'The prompt was long, so shortening it looked like the fix. Measurement said the input phase was about 1% of the time.',
        from: 'Arcana',
        readingTime: '3 min',
        body: [
          'A reading took around 90 seconds and the prompt was large, so compressing it seemed obviously right. Before doing that I benchmarked against the live API.',
          'Over 99% of input tokens were served from cache and the whole input phase accounted for roughly 1% of wall-clock time. Halving the prompt would have saved a fraction of a second and cost reading quality.',
          'The real lever was reasoning-token generation. Disabling it took time-to-first-content from about 51 seconds to about 1, halved total time, and cost close to nothing in a blind read of the output.',
          'Two things also came out of it that I did not expect: the model I had previously recommended as faster was not, and the parameter that nominally lowers reasoning effort made things more than twice as slow. Both had been assumptions based on a couple of noisy samples.',
        ],
      },
      {
        slug: 'when-not-to-add-rag',
        category: 'RAG',
        title: 'When not to add RAG',
        summary:
          'Two very different inputs produced nearly identical conclusions. The bottleneck was upstream, and retrieval could not have reached it.',
        from: 'Seller Profit Calculator',
        readingTime: '2 min',
        body: [
          'The trigger for considering a knowledge base was output that felt thin: two very different margins produced nearly the same conclusion. Retrieval is the reflexive answer to thin output.',
          'The cause was upstream. The tier judgment feeding the model only had three levels, so genuinely different situations arrived labelled the same. Adding a fourth tier in code fixed it. No retrieval system could have, because the information was being flattened before the model ever saw it.',
          'There is a second reason I decided against it. A knowledge base holding factual claims — fee rates, typical figures — turns the product from an analysis tool into a data source, and creates two authorities that can contradict each other. Situational judgment rules would have been safe to store; facts about a changing platform would not.',
          'Add retrieval when the bottleneck is actually knowledge retrieval.',
        ],
      },
      {
        slug: 'rule-engine-plus-llm-review',
        category: 'AI Product',
        title: 'Rules first, model second',
        summary:
          'Sending everything to a model is the straightforward design. Selective invocation is cheaper, more stable, and explainable.',
        from: 'Stock News Intelligence',
        readingTime: '2 min',
        body: [
          'Classifying every article with an LLM is expensive at volume, non-deterministic across identical inputs, and impossible to explain when a result looks wrong.',
          'Weighted keyword rules handle classification and emit a score, a confidence value and the matched keywords as evidence. The model is invoked only where the rules are demonstrably weak — low confidence in a high-risk category, a match resting on a generic term, or a score sitting near the minimum threshold.',
          'The model can only confirm or veto. It cannot introduce a category. That keeps the taxonomy owned by the rules and the judgment owned by the model, which is the split that makes the output explainable.',
        ],
      },
      {
        slug: 'prompt-versioning-and-caching',
        category: 'AI Product',
        title: 'Prompts belong in the cache key',
        summary:
          'If model responses are cached and the prompt changes, the cache is now serving answers from a system that no longer exists.',
        from: 'Stock News Intelligence',
        readingTime: '2 min',
        body: [
          'Caching model calls is standard. What is easy to miss is that the prompt is an input to the response, so editing it invalidates every cached answer that depended on it.',
          'Here the prompt version and the rule version are hashed into the cache key alongside the provider, the model and the article content. Changing either version invalidates the affected entries automatically, with no manual clearing step and no stale results surviving a rewrite.',
          'That is what treating a prompt as a versioned component actually looks like in practice.',
        ],
      },
      {
        slug: 'silent-errors-in-decision-support',
        category: 'AI Product',
        title: 'A fix that makes a failure invisible is not a fix',
        summary:
          'After one repair the output became fully self-consistent — and the user lost their only way to detect it was wrong.',
        from: 'Seller Profit Calculator',
        readingTime: '2 min',
        body: [
          'Before the fix, the table and the text disagreed. It looked broken, which meant a user could see it was broken.',
          'After the fix, a follow-up request re-ran with stale parameters and produced a complete, internally consistent, correctly formatted report. Nothing looked wrong. In a product people use to decide whether to spend money, that is worse.',
          'The question I now ask after every repair: can the user still notice this failure? If the answer moved from yes to no, the repair was negative.',
        ],
      },
      {
        slug: 'mcp-and-function-calling',
        category: 'MCP',
        title: 'Notes on MCP and function calling',
        summary:
          'Working notes on where each sits — kept short deliberately, since my hands-on depth here is still limited.',
        readingTime: '1 min',
        body: [
          'Function calling gives a model a set of tool signatures within one application. The application owns the tools, the schemas and the execution.',
          'MCP moves that contract outside the application, so a tool server can be written once and connected to different clients rather than reimplemented per integration.',
          'I am keeping this note short on purpose. I have read the specification and built against tool-calling APIs, but I have not shipped a production MCP server, and I would rather mark the edge of what I have done than write past it.',
        ],
      },
    ],
  },
}

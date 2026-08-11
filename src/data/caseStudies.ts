/**
 * Case Study 内容层。
 *
 * 所有事实来自 docs/CONTENT_AUDIT.md（v3）。禁止展示：
 *   40% · 100% · 4/10 · 6/6 · Pending · Recall/F1/ROC-AUC · 54% accuracy
 * 模块按内容动态显隐，不为结构完整硬塞不存在的信息。
 */

export type Block =
  | { kind: 'p'; text: string }
  | { kind: 'quote'; text: string; cite?: string }
  | { kind: 'statement'; text: string }
  | { kind: 'list'; items: string[] }
  | { kind: 'steps'; items: { label: string; text: string }[] }
  | { kind: 'table'; head: string[]; rows: string[][] }
  | { kind: 'beforeAfter'; before: string[]; after: string[] }
  | { kind: 'diagram'; lines: string[]; caption?: string }
  | { kind: 'code'; lines: string[]; caption?: string }
  | { kind: 'limits'; items: string[] }

export type Chapter = { num: string; title: string; blocks: Block[] }

export type CaseStudy = {
  slug: string
  title: string
  titleZh?: string
  tagline: string
  meta: { role: string; timeline: string; context: string }
  source: string
  chapters: Chapter[]
}

/* ═══════════════════════════════════════════════════════════
   01 · Seller Profit Calculator
   Source: PRD-v5.md
   ═══════════════════════════════════════════════════════════ */
const sellerProfit: CaseStudy = {
  slug: 'seller-profit',
  title: 'Seller Profit Calculator',
  titleZh: '拼多多新手卖家利润试算助手',
  tagline:
    'Prompt constraints were not enough — so I redesigned the architecture so the LLM could no longer perform the calculation.',
  meta: { role: 'Solo — product, PRD, build, evaluation', timeline: '2026.06 – 2026.07', context: 'Dify Chatflow' },
  source: 'PRD v1–v5',
  chapters: [
    {
      num: '01',
      title: 'Overview',
      blocks: [
        {
          kind: 'p',
          text: 'A profit calculator for first-time sellers on Pinduoduo. The user enters cost, price, shipping and platform fee rates; the product returns the real take-home profit per unit, a cost breakdown, and a short interpretation of the risks.',
        },
        {
          kind: 'p',
          text: 'It started as a general product-selection assistant. User interviews killed that scope. What shipped is a single deterministic calculator with a narrow, well-defended AI boundary — and five PRD versions of argument behind it.',
        },
      ],
    },
    {
      num: '02',
      title: 'Problem',
      blocks: [
        {
          kind: 'p',
          text: 'New sellers pick a product, look at cost and price, and assume the gap is profit. It is not. Shipping, multi-layer platform commission and promotion spend sit between the two — and a product that looks profitable can lose money on every order.',
        },
        {
          kind: 'statement',
          text: 'The problem is not that they cannot do the arithmetic. It is that they do not know what to include in it.',
        },
        {
          kind: 'p',
          text: '"Commission" is not one number. It is several fees stacked on top of each other, and a first-time seller has no reason to know they exist.',
        },
      ],
    },
    {
      num: '03',
      title: 'User & Context',
      blocks: [
        {
          kind: 'p',
          text: 'Student first-time sellers with roughly ¥5,000 of starting capital and no prior e-commerce experience. They have a candidate product in mind and want to know whether it is worth listing.',
        },
        {
          kind: 'p',
          text: 'I started with four assumptions about their pain. Interviews confirmed two, invalidated one, and left two with no evidence at all. I kept the unverified ones marked as unverified rather than letting the product quietly assume them.',
        },
        {
          kind: 'table',
          head: ['Assumption', 'Status', 'Evidence'],
          rows: [
            ["Doesn't know which platform fees exist", 'Verified', 'In testing, all five fee fields were left blank — only cost, price and shipping were filled'],
            ['Cannot compute real take-home profit', 'Verified', 'Three real seller cases, including one selling at ¥158 on ¥39 cost that still lost money on oversized shipping'],
            ['Cannot read marketplace data', 'No evidence', 'Speculation — not designed for'],
            ['Has nobody to ask', 'No evidence', 'Speculation — not designed for'],
            ['Afraid of dead stock', 'Invalidated', 'Beginners overwhelmingly use drop-shipping and hold no inventory'],
          ],
        },
      ],
    },
    {
      num: '04',
      title: 'Insight',
      blocks: [
        {
          kind: 'p',
          text: 'The invalidated assumption mattered more than the confirmed ones. "Afraid of dead stock" was the premise of the original product idea. Once interviews showed beginners hold no inventory, the whole selection-assistant framing lost its reason to exist.',
        },
        {
          kind: 'p',
          text: 'What replaced it came from watching what users did not fill in. Blank fee fields were not laziness — they were the actual problem, visible in the form.',
        },
      ],
    },
    {
      num: '05',
      title: 'Product Decision',
      blocks: [
        {
          kind: 'p',
          text: 'I cut the scope from a general product-selection assistant to a single profit calculator, and placed it as a gate at the front of the selection flow: if the product does not make money at the current price, analysing audience and selling points is wasted effort.',
        },
        {
          kind: 'statement',
          text: 'Data belongs to the user. Analysis belongs to the assistant. The decision stays with the user.',
        },
        {
          kind: 'p',
          text: 'This also set the competitive position. Market-data tools answer "how much did this product sell?" This one answers "at your costs, what would you actually make?" — a difference in data source, not in feature count.',
        },
        {
          kind: 'p',
          text: 'The honest cost of that decision, stated in the PRD: users must supply their own cost data, coverage is narrow, results are not real-time, and — after the final architecture change — you cannot change a number mid-conversation.',
        },
      ],
    },
    {
      num: '06',
      title: 'Evaluating LLM Reliability',
      blocks: [
        {
          kind: 'p',
          text: 'I built a set of 10 evaluation cases to test one specific behaviour: when the workflow computes a number in code and hands it to the model, does the model actually use that number?',
        },
        {
          kind: 'p',
          text: 'It did not. The model was re-deriving values on its own rather than referencing the deterministic result it had been given. The prompt said not to; that made no difference to what it did.',
        },
        {
          kind: 'p',
          text: 'The more useful finding was in the cases that passed. They passed by coincidence — their underlying values happened to survive rounding, so the model\'s own arithmetic matched the code\'s output. Change the input so the raw value carries an extra decimal place and the discrepancy appears immediately. Passing was not evidence of correct behaviour.',
        },
        {
          kind: 'statement',
          text: 'A prompt is a soft constraint, not a hard switch.',
        },
      ],
    },
    {
      num: '07',
      title: 'Architecture',
      blocks: [
        {
          kind: 'p',
          text: 'Four rounds of prompt work produced diminishing returns. Forbidding recalculation did nothing; passing computed values in explicitly helped partially; banning all arithmetic still left the model doing small sums. The fix was structural, not textual.',
        },
        {
          kind: 'beforeAfter',
          before: ['User Inputs', 'LLM', 'Calculation + Explanation'],
          after: ['User Inputs', 'Python', 'Deterministic Calculation', 'LLM', 'Explanation'],
        },
        {
          kind: 'p',
          text: 'Python now owns everything numeric: fees, total cost, profit, profit rate, cost ratios, risk detection and the margin tier. The cost table is rendered directly from code output and never passes through the model. The LLM writes the interpretation around it.',
        },
        {
          kind: 'statement',
          text: 'Deterministic tasks should be handled by deterministic systems.',
        },
        {
          kind: 'diagram',
          caption: 'Final Chatflow — the conditional branch sits before the code node, not after it',
          lines: [
            '[Start]  8 numeric inputs',
            '   |',
            '[Condition]  first turn?',
            '   |',
            '   +-- yes --> [Code]  deterministic calculation',
            '   |                     -> cost_table    (rendered directly)',
            '   |                     -> risk_flags    (qualitative)',
            '   |                     -> margin_level  (qualitative)',
            '   |              [LLM]  interpretation only, 2 variables in',
            '   |              [Reply]  cost_table + interpretation + disclaimer',
            '   |',
            '   +-- no  --> [Reply]  fixed fallback, no code node, no LLM',
          ],
        },
      ],
    },
    {
      num: '08',
      title: 'Context Control — 16 variables to 2',
      blocks: [
        {
          kind: 'p',
          text: 'Removing the amounts was not enough. In a later multi-turn session the code table showed a loss on every unit while the text underneath reported a healthy profit — repeating a figure from an earlier calculation. The model\'s own reasoning trace confirmed it was anchoring on "the most recent valid calculation".',
        },
        {
          kind: 'p',
          text: 'Memory was the trigger, not the cause. A read-only audit of the workflow found the LLM node referenced 16 variables, 12 of which were plain numbers — fee rates and cost ratios written into the system prompt through variable rendering. They were not leaking in from history. I had put them there.',
        },
        {
          kind: 'p',
          text: 'The decisive evidence was an output combining two of those ratios into a third. That is addition, not repetition.',
        },
        {
          kind: 'quote',
          text: 'What does this number give the user when it comes out of the model\'s mouth, that it does not already give them sitting in the table?',
          cite: 'The test I used to cut variables',
        },
        {
          kind: 'p',
          text: 'Anything I could not answer that question for was removed. Seven cost ratios and five fee rates were already in the table; repeating them only added a chance to be wrong. What stayed are two qualitative strings the table cannot express: the margin tier, and the risk flags.',
        },
        {
          kind: 'table',
          head: ['Kept — 2 qualitative variables', 'Removed — 14'],
          rows: [
            ['margin_level — healthy / normal / thin / loss', '7 cost ratios — same unit, addable, so the model combines them'],
            ['risk_flags — risk text, empty string when none', '5 fee rates — same unit, and convertible into the totals'],
            ['', 'is_profitable — already covered by the four-tier margin_level'],
            ['', 'top_cost_item — keeping it means asking the model to compare seven numbers'],
          ],
        },
        {
          kind: 'statement',
          text: 'Whether a number should reach the model depends on whether it can be combined with other numbers — not on whether it is important.',
        },
      ],
    },
    {
      num: '09',
      title: 'Prompt Design',
      blocks: [
        {
          kind: 'p',
          text: 'Once the model stopped owning arithmetic, the prompt\'s job became defining the edge of its authority. Six constraints, each one written in response to a specific observed failure.',
        },
        {
          kind: 'table',
          head: ['Constraint', 'The failure it came from'],
          rows: [
            ['No invented external justification', 'Claimed platform rules prevented it from showing amounts — the restriction was its own prompt'],
            ['No hypothetical projections', 'Extrapolated a return-rate scenario and overstated the resulting margin by roughly an order of magnitude'],
            ['Decline the overreach, not the service', 'After refusing a projection it also dropped the legitimate analysis for that turn'],
            ['Never decide for the user', '"This product is not worth listing" became "check whether your supplier quote has room to move"'],
            ['Fixed margin-tier conclusions', 'Descriptive instructions were treated as material to elaborate on, so the four conclusions are now passed as exact sentences'],
            ['Never assert the input is wrong', 'On unusual input it must present both readings — the figure may be real, or it may be a common mis-entry'],
          ],
        },
        {
          kind: 'statement',
          text: 'Prompt engineering here is task boundary, output constraint and failure handling — not wording.',
        },
      ],
    },
    {
      num: '10',
      title: 'Iteration — when a fix makes things worse',
      blocks: [
        {
          kind: 'p',
          text: 'After the variables were cut, a follow-up turn produced a new failure. The user asked to re-run with a different price. The system re-ran with the old one and returned a complete, internally consistent, correctly formatted report.',
        },
        {
          kind: 'table',
          head: ['', 'Before the fix', 'After the fix'],
          rows: [
            ['Symptom', 'Table correct, text contradicts it', 'Table and text fully consistent'],
            ['Can the user notice?', 'Yes — the numbers disagree', 'No — nothing looks wrong'],
          ],
        },
        {
          kind: 'statement',
          text: 'In a decision-support product, a silent error is more dangerous than a visible one.',
        },
        {
          kind: 'p',
          text: 'The cause was structural. Chatflow re-runs the entire workflow on every message, but the start node collects its inputs only once per session. Whatever the model says, the render node still prints a full table built from stale parameters. So the interception had to move ahead of the code node — a conditional branch on turn count, with the follow-up path bypassing both calculation and LLM entirely.',
        },
        {
          kind: 'p',
          text: 'A third failure showed up during that rewiring. Deleting a stray node with the canvas undo silently rolled the system prompt back to an older version, and every previously fixed behaviour returned. I found it by deliberately entering a non-default fee rate and watching whether the output repeated it.',
        },
        {
          kind: 'statement',
          text: 'A change you have not tested is a change you have not made.',
        },
      ],
    },
    {
      num: '11',
      title: 'User Testing & Trade-offs',
      blocks: [
        {
          kind: 'p',
          text: 'Two users tested the product. One changed their decision; one did not. With n=2 that is an observation, not a rate.',
        },
        {
          kind: 'p',
          text: 'The first had planned to list a product immediately. After seeing the breakdown they moved to a small test batch instead, and explained why in the product\'s own terms — cost share was too high to absorb promotion spend or returns, and they had no support experience yet.',
        },
        {
          kind: 'p',
          text: 'The second did not change their decision, and was more useful. All four of their questions were about where the input numbers should come from — none asked the product to decide anything.',
        },
        {
          kind: 'quote',
          text: 'They asked whether the default promotion rate was too low. They were using the default. They suspected it did not fit their situation and still did not change it, because they did not know what to put instead.',
        },
        {
          kind: 'p',
          text: 'That exposed an unverified assumption underneath the whole product: that telling someone which fees exist is enough for them to fill them in correctly. It is not. And the two rules that keep the product honest — never invent fee figures, never judge whether a rate is high or low — seal off exactly the place the user needs help most.',
        },
        {
          kind: 'statement',
          text: 'Completion rate is not input quality.',
        },
        {
          kind: 'p',
          text: 'This is a real dilemma rather than an oversight: any attempt to fill that gap introduces numbers with no source. Defaults lower the barrier to entry and simultaneously hide whether the result means anything.',
        },
      ],
    },
    {
      num: '12',
      title: 'Two decisions I did not make',
      blocks: [
        {
          kind: 'p',
          text: 'I evaluated adding a knowledge base and decided against it. The trigger for considering it was that two very different margins produced nearly identical conclusions — but the cause was upstream: the tier judgment only had three levels. Adding a fourth tier in code fixed it. Retrieval could not have.',
        },
        {
          kind: 'statement',
          text: 'Add RAG when the bottleneck is actually knowledge retrieval — not because it is fashionable.',
        },
        {
          kind: 'p',
          text: 'There was also a platform question. Dify was not a considered choice; it was the first tool I picked up. After a week of real failures I tested Coze against what this project had actually needed, and found three dimensions I had not known to evaluate: whether inputs can be collected mid-conversation, how strictly variables must be declared before reaching the model, and the granularity of undo.',
        },
        {
          kind: 'p',
          text: 'The second one matters most. The 12 numeric variables sat in my prompt unnoticed partly because the platform lets you insert anything without declaring it. That is a default, not a lapse in care. I stayed on Dify — migration cost outweighed the benefit — but those three are now hard checks for the next selection.',
        },
        {
          kind: 'limits',
          items: [
            'Two of the four original pain points still have no evidence and are documented as unverified.',
            'Default fee rates are estimates without an official source, and are labelled as such in the product.',
            'The margin thresholds are a product rule I defined and reasoned through — not a platform or industry standard.',
            'User testing is n=2. It confirms the value path exists; it does not measure it.',
            'Changing a number requires starting a new conversation. This is a known trade-off, not a bug.',
          ],
        },
      ],
    },
  ],
}

/* ═══════════════════════════════════════════════════════════
   02 · Arcana
   Source: GitHub Jaco-Yijie/arcana（本地实跑验证）
   ═══════════════════════════════════════════════════════════ */
const arcana: CaseStudy = {
  slug: 'arcana',
  title: 'Arcana',
  titleZh: 'Immersive Digital Tarot Experience',
  tagline: 'The LLM never draws the cards. It only interprets a result the user has already frozen.',
  meta: { role: 'Solo — product spec, engine, evaluation', timeline: '2026', context: 'React 19 · TypeScript · DeepSeek' },
  source: 'GitHub · Jaco-Yijie/arcana',
  chapters: [
    {
      num: '01',
      title: 'Overview',
      blocks: [
        {
          kind: 'p',
          text: 'An online tarot draw where the user performs the whole ritual themselves — shuffle, cut, spread, select, place, reveal — and the model appears only afterwards, to interpret cards it had no part in choosing.',
        },
        {
          kind: 'p',
          text: 'The interesting part of this project is not what the AI does. It is the list of things the AI is not allowed to touch, and the test suite that keeps it out.',
        },
      ],
    },
    {
      num: '02',
      title: 'Problem',
      blocks: [
        {
          kind: 'p',
          text: 'The obvious way to build an AI tarot product is to let the model draw and interpret in one step. It is faster to build, cheaper to run, and it destroys the thing people come for.',
        },
        {
          kind: 'p',
          text: 'What makes a physical draw meaningful is that the person did it. They shuffled, they cut, they chose which card to turn over. Replace that with a generated result and a shuffling animation, and the ritual becomes a slot machine with better typography.',
        },
      ],
    },
    {
      num: '03',
      title: 'Product Principle',
      blocks: [
        {
          kind: 'p',
          text: 'The project brief opens with a single question that every interaction decision is checked against.',
        },
        {
          kind: 'quote',
          text: 'Is this interaction helping the user draw their own cards — or is the system drawing for them again?',
        },
        {
          kind: 'p',
          text: 'It comes with an explicit priority order for resolving conflicts, and a veto rule that has actually been used to cut features.',
        },
        {
          kind: 'statement',
          text: 'Core product value > user experience > engineering convenience > visual appeal.',
        },
        {
          kind: 'quote',
          text: 'Any feature that reduces the user\'s control over the six core steps, or lets the system "helpfully" complete one of them, is rejected — even if it looks better, runs faster, or saves development time.',
        },
        {
          kind: 'p',
          text: 'These are not aspirations in a README. The spec carries 15 acceptance criteria and 24 numbered product red lines, and the ones covering AI boundary are enforced by tests rather than by review.',
        },
      ],
    },
    {
      num: '04',
      title: 'AI Boundary',
      blocks: [
        {
          kind: 'p',
          text: 'The division is absolute. The randomness engine owns identity; the model owns language.',
        },
        {
          kind: 'table',
          head: ['Deterministic engine', 'LLM'],
          rows: [
            ['Shuffle', 'Interpretation'],
            ['Cut', 'Narrative'],
            ['Draw', 'Answer to the question'],
            ['Orientation (upright / reversed)', 'Relationships between cards'],
          ],
        },
        {
          kind: 'p',
          text: 'The technical premise behind the feeling: card identity is fixed the moment the session begins. The user\'s actions discover it — they do not trigger its generation. That distinction is invisible in the UI and is the entire reason the draw feels like theirs.',
        },
        {
          kind: 'statement',
          text: 'The model is handed a frozen result. It cannot change a card, an orientation, or a count.',
        },
      ],
    },
    {
      num: '05',
      title: 'Evaluation',
      blocks: [
        {
          kind: 'p',
          text: 'Both halves of the boundary are covered by runnable assertion suites. Anyone can clone the repository and reproduce the numbers below.',
        },
        {
          kind: 'code',
          caption: 'Verified locally on 2026-08-11',
          lines: [
            'git clone https://github.com/Jaco-Yijie/arcana',
            'npm install',
            '',
            'npm run engine:check    ->  64 assertions, 0 failed',
            'npm run reading:check   ->  96 assertions, 0 failed',
          ],
        },
        {
          kind: 'p',
          text: 'The engine suite tests that the draw is real: same seed and same gesture sequence reproduce an identical deck; a cut point differing by 0.01 produces different cards; 1,000 distinct seeds produce 1,000 distinct decks; restoring a session leaves the order and the already-drawn cards untouched.',
        },
        {
          kind: 'p',
          text: 'The reading suite tests that the model stayed inside its boundary — card count preserved, no cards invented, orientations unmodified, relationships referencing only cards actually present, and a single-card spread not inventing relationships to pad the output. It runs across 10 reading cases covering one-, three- and five-card spreads, mixed and fully reversed orientations, contradictory faces, and a high-risk topic.',
        },
        {
          kind: 'p',
          text: 'The tone checks run in both directions. It is not enough to catch a violation — the suite also asserts that restrained, careful phrasing is not flagged. A guard that over-triggers quietly degrades every reading.',
        },
      ],
    },
    {
      num: '06',
      title: 'Prompt Design',
      blocks: [
        {
          kind: 'p',
          text: 'The reading prompt went through a version change worth describing, because the second version is shorter than the first on purpose.',
        },
        {
          kind: 'p',
          text: 'V2.2 was rule-heavy. It pinned the model inside a safe zone with a long list of "you must phrase it this way" clauses. Output became very stable and very hollow — every card completed the required motions without a single real judgment. Contradictory cards got smoothed over; difficult cards got bent into growth and new beginnings.',
        },
        {
          kind: 'quote',
          text: 'The user wants a reading. What they get is compliant text.',
          cite: 'From the V2.3 rewrite notes',
        },
        {
          kind: 'p',
          text: 'V2.3 went the other way: hard constraints collapsed to eight, and the fixed-phrasing lists, per-field length caps and pre-delivery checklists were deleted. The space they freed went to context — spread, position, orientation, suit, element, number, symbolism, statistics — and to explicit permission to reach a judgment, name a difficulty, and leave a contradiction standing.',
        },
        {
          kind: 'statement',
          text: 'Tell the model less about how it must speak, and more about what it may reason from.',
        },
        {
          kind: 'p',
          text: 'Both versions are still in the repository and run side by side through a dedicated A/B script. Server-side schema validation and the tone guard sit behind them as independent layers — the prompt is not the only thing holding the boundary.',
        },
      ],
    },
    {
      num: '07',
      title: 'Performance Investigation',
      blocks: [
        {
          kind: 'p',
          text: 'Readings were taking around 90 seconds. Before changing anything I measured, running the same fixed input three times per model against the live API.',
        },
        {
          kind: 'p',
          text: 'The first result reversed an earlier recommendation of my own. I had previously suggested the faster-tier model based on one or two noisy samples. Measured properly, the two differed by about 8% — and the cheaper model was slower to first content, because it generated roughly five times more reasoning tokens.',
        },
        {
          kind: 'table',
          head: ['Change', 'Time to first content', 'Total'],
          rows: [
            ['Baseline', '51.6s', '106.4s'],
            ['Reasoning disabled', '1.1s', '52.1s'],
          ],
        },
        {
          kind: 'p',
          text: 'Disabling reasoning cut time-to-first-content by a factor of about 47 and halved total time. Blind scoring across eight dimensions put the quality loss near the noise floor — the reading still cited specific cards and positions, read orientations, and produced structural observations rather than dictionary entries.',
        },
        {
          kind: 'p',
          text: 'The second finding killed the optimisation I had assumed I would do. The prompt is long, so shortening it looks like the obvious win. It is not: 99.2% of input tokens were served from cache, and the entire input phase accounted for roughly 1% of wall-clock time.',
        },
        {
          kind: 'statement',
          text: 'Prompt length was not the bottleneck. Cutting it would have cost reading quality and bought nothing.',
        },
        {
          kind: 'p',
          text: 'One parameter behaved backwards: the setting that nominally reduces reasoning effort more than doubled total time, and was dropped. The investigation shipped as a document first and as code second — the findings are traceable to the commit that implemented them.',
        },
      ],
    },
    {
      num: '08',
      title: 'What I Learned',
      blocks: [
        {
          kind: 'p',
          text: 'The most valuable decision in this project was subtractive. Deciding where the model must not go produced a clearer product than any feature I could have added to it.',
        },
        {
          kind: 'p',
          text: 'The second was methodological. I had a strong intuition about which model was faster and about which optimisation would help. Both were wrong, and only measurement showed it. The loading copy in the UI is written to reflect our own waiting state rather than implying the model is thinking — for the same reason: not pretending to know something we do not.',
        },
        {
          kind: 'limits',
          items: [
            'Quality scoring across the eight dimensions is my own judgment, not blind multi-rater evaluation.',
            'The reading suite runs against a mock provider by default; the same cases can be run live with an API key.',
            'Benchmarks are three runs per model on one fixed input — enough to overturn a wrong assumption, not enough to characterise the model.',
          ],
        },
      ],
    },
  ],
}

/* ═══════════════════════════════════════════════════════════
   03 · Stock News Intelligence
   Source: GitHub Jaco-Yijie/stock_news + External PRD V1.4
   ═══════════════════════════════════════════════════════════ */
const stockNews: CaseStudy = {
  slug: 'stock-news',
  title: 'Stock News Intelligence',
  titleZh: 'A股板块新闻监控系统',
  tagline: 'A rule engine decides. The model only reviews what the rules are unsure about.',
  meta: { role: 'Solo — product, PRD, build, deployment', timeline: '2026.05 – present', context: 'Python · Streamlit · GitHub Actions' },
  source: 'GitHub · Jaco-Yijie/stock_news · PRD V1.4',
  chapters: [
    {
      num: '01',
      title: 'Overview',
      blocks: [
        {
          kind: 'p',
          text: 'A sector-level news monitor for the A-share market. It collects news continuously, removes duplicates, assigns each item to industry sectors, judges likely impact, and pushes only the high-impact items — plus a morning brief.',
        },
        {
          kind: 'p',
          text: 'It covers 38 industry sectors and runs unattended on scheduled jobs. It reached PRD V1.4 and is deployed.',
        },
      ],
    },
    {
      num: '02',
      title: 'Problem',
      blocks: [
        {
          kind: 'p',
          text: 'An individual investor tracking sector news has three problems at once: the information is spread across sources, the same story arrives repeatedly in different wrappers, and connecting a story to the sectors it actually affects takes domain knowledge.',
        },
        {
          kind: 'p',
          text: 'The fourth problem is the shape of the interaction. Everything requires pulling — opening apps and scanning — when the useful behaviour is being told when something matters.',
        },
      ],
    },
    {
      num: '03',
      title: 'Solution',
      blocks: [
        {
          kind: 'diagram',
          caption: 'End-to-end pipeline, fully automated',
          lines: [
            'News Collection',
            '      |',
            'Deduplication          title bigram similarity grouping',
            '      |',
            'Sector Classification  keyword rules + selective LLM review',
            '      |',
            'Impact Analysis        high / medium / low',
            '      |',
            'High-impact Push       Telegram + WeChat, deduplicated by link hash',
            '      |',
            'Daily Brief            scheduled morning summary',
          ],
        },
        {
          kind: 'p',
          text: 'Collection runs every 30 minutes through the active market window and hourly overnight. The brief is generated and pushed each morning. All of it runs on scheduled CI jobs rather than on a machine I have to keep awake.',
        },
      ],
    },
    {
      num: '04',
      title: 'Architecture — why not just ask the model',
      blocks: [
        {
          kind: 'p',
          text: 'The straightforward design sends every article to an LLM and asks which sectors it belongs to. That is expensive at this volume, non-deterministic across identical inputs, and impossible to explain when a classification looks wrong.',
        },
        {
          kind: 'p',
          text: 'Instead, keyword rules with weights, required co-occurring terms and negative terms handle classification, producing a score, a confidence value and the matched keywords as evidence. The model is invoked only where the rules are demonstrably weak.',
        },
        {
          kind: 'list',
          items: [
            'A high-risk category matched with confidence below the threshold',
            'A high-impact category matched only through a generic term — the kind of word that appears everywhere',
            'A score sitting close to the minimum needed to match at all',
          ],
        },
        {
          kind: 'p',
          text: 'The failure this targets is specific: a story about a diplomatic meeting matching a currency keyword and landing in the interest-rate category. Rules catch the easy cases cheaply; the model adjudicates the ambiguous ones and can only confirm or veto — it cannot invent a new category.',
        },
        {
          kind: 'statement',
          text: 'Use the model where determinism fails, not everywhere it could technically be applied.',
        },
      ],
    },
    {
      num: '05',
      title: 'Prompt Design',
      blocks: [
        {
          kind: 'p',
          text: 'The review prompt is a structured payload rather than a sentence, and it ships the rule layer\'s reasoning along with the article so the model is judging a specific claim rather than starting from scratch.',
        },
        {
          kind: 'table',
          head: ['Component', 'Purpose'],
          rows: [
            ['task', 'Decide whether this article genuinely belongs to the given category, or was matched by a generic term'],
            ['outputSchema', 'shouldKeep · category · confidence · reason'],
            ['rules', 'Confirm or veto only; no output outside the JSON object'],
            ['negativeExamples', 'Four real misclassifications the rule layer has actually produced'],
            ['evidence', 'Score, confidence, matched keywords, and which of them are generic-risk terms'],
          ],
        },
        {
          kind: 'p',
          text: 'Temperature is zero and the response is constrained to a JSON object. Two task types run on separate timeouts — a classification check returns a short object and is held to a tight limit, while brief generation produces a paragraph of prose and is given room.',
        },
      ],
    },
    {
      num: '06',
      title: 'Prompt & Rule Versioning',
      blocks: [
        {
          kind: 'p',
          text: 'Model calls are cached, which raises a question most prompt work ignores: what happens to the cache when the prompt changes?',
        },
        {
          kind: 'p',
          text: 'Here the prompt version and the rule version are part of the cache key, hashed together with the provider, the model and the article content. Editing either one invalidates every affected entry automatically.',
        },
        {
          kind: 'code',
          caption: 'Cache key composition',
          lines: [
            'sha256(',
            '  category,',
            '  provider, model,',
            '  prompt_version,   # "news-classification-reverse-v1"',
            '  rule_version,     # "structured-rules-v1"',
            '  title, link, content[:500],',
            ')',
          ],
        },
        {
          kind: 'statement',
          text: 'A prompt is a versioned component of the system, not a string in a config file.',
        },
        {
          kind: 'p',
          text: 'The brief generator carries its own constraint against fabrication: summarise only from the supplied articles, and introduce no facts, figures or context from outside them.',
        },
      ],
    },
    {
      num: '07',
      title: 'Outcome',
      blocks: [
        {
          kind: 'table',
          head: ['', ''],
          rows: [
            ['Coverage', '38 industry sectors'],
            ['Product version', 'PRD V1.4'],
            ['Automation', 'Collection, deduplication, classification, impact analysis and push run end to end'],
            ['Delivery', 'Telegram and WeChat push, plus a scheduled daily brief'],
            ['Engineering', '70 tests / 191 assertions, running in CI on every push'],
          ],
        },
        {
          kind: 'p',
          text: 'Persistence degrades rather than breaks: with a database configured the cache lives in Postgres, and without one it falls back to local files, so a fresh clone runs without setup.',
        },
        {
          kind: 'limits',
          items: [
            'Built for my own use — there is no external user research behind the product decisions.',
            'Sector keyword rules are hand-maintained and reflect my reading of each sector.',
            'The system reports information. It does not provide investment advice.',
          ],
        },
      ],
    },
  ],
}

/* ═══════════════════════════════════════════════════════════
   04 · Taobao User Behavior Analysis
   Source: Resume only
   ═══════════════════════════════════════════════════════════ */
const taobao: CaseStudy = {
  slug: 'taobao-analysis',
  title: 'Taobao User Behavior Analysis',
  titleZh: '淘宝用户行为分析',
  tagline: 'Turning 100M behavior logs into one segment an operations team can actually act on.',
  meta: { role: 'Solo — analysis and recommendations', timeline: '2026', context: 'Python · Pandas · SQL' },
  source: 'Public e-commerce behavior dataset',
  chapters: [
    {
      num: '01',
      title: 'Overview',
      blocks: [
        {
          kind: 'p',
          text: 'An analysis of a public e-commerce behavior dataset — over 100 million logged user actions, 1.6 GB — built into a metric system covering traffic, conversion, repurchase and retention, and reduced to a small number of recommendations an operations team could act on.',
        },
        {
          kind: 'p',
          text: 'The output that matters is not the funnel chart. It is one specific, sized, reachable segment.',
        },
      ],
    },
    {
      num: '02',
      title: 'Question',
      blocks: [
        {
          kind: 'p',
          text: 'A platform gets enormous browsing volume and converts a small fraction of it. Where in the journey does that loss happen, and which step is worth spending operational budget on?',
        },
        {
          kind: 'p',
          text: 'Framed that way the analysis has a decision attached to it. Without the second half it would just be a description of the data.',
        },
      ],
    },
    {
      num: '03',
      title: 'Approach',
      blocks: [
        {
          kind: 'diagram',
          lines: [
            'Raw behavior logs   100M+ rows, 1.6 GB',
            '        |',
            'Type optimisation   ~50% lower memory during processing',
            '        |',
            'Metric system       PV / UV / conversion / repurchase / retention',
            '        |',
            'Funnel              PV -> Cart -> Buy',
            '        |',
            'Segmentation        high-intent users isolated',
            '        |',
            'Recommendations',
          ],
        },
        {
          kind: 'p',
          text: 'Working at this row count made data typing a design decision rather than a detail. Declaring column types at read time rather than converting afterwards cut memory use by roughly half, which is what made iterating on the analysis practical.',
        },
      ],
    },
    {
      num: '04',
      title: 'Findings',
      blocks: [
        {
          kind: 'p',
          text: 'The funnel from browsing to cart to purchase locates the largest actionable gap at the last step: users who added to cart and did not buy. That group has already expressed intent, which makes it the cheapest population on the platform to convert.',
        },
        {
          kind: 'statement',
          text: '207.9K high-intent users — added to cart, did not purchase.',
        },
        {
          kind: 'p',
          text: 'A second finding concerns timing. The hour with the highest purchase volume is not the hour with the highest conversion rate. Traffic peaks and efficiency peaks are offset, so spending allocated purely against traffic is spending against the wrong curve.',
        },
      ],
    },
    {
      num: '05',
      title: 'Recommendations',
      blocks: [
        {
          kind: 'list',
          items: [
            'Time-based ad allocation — weight spend toward the conversion-rate peak rather than the traffic peak',
            'High-intent targeting — treat cart-without-purchase as a distinct, sized, addressable audience',
            'Customer segmentation — separate repurchasers from one-time buyers before deciding retention spend',
          ],
        },
        {
          kind: 'limits',
          items: [
            'These are recommendations derived from historical behavior data. None of them has been run as a campaign or an experiment.',
            'No uplift, revenue or conversion improvement is claimed, because none was measured.',
            'Findings describe the dataset and its time window and should not be extrapolated to the current platform.',
          ],
        },
      ],
    },
  ],
}

export const caseStudiesEn: CaseStudy[] = [sellerProfit, arcana, stockNews, taobao]

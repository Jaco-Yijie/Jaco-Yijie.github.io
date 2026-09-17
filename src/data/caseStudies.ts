import { arcanaQuickRead } from './projectUpdates'
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
  titleZh: 'Immersive AI Tarot',
  tagline: 'Deterministic systems own the draw. AI interprets frozen results. The experience preserves user participation.',
  meta: {
    role: 'Solo — product, interaction, build and evaluation',
    timeline: '2026 · In development',
    context: 'React · TypeScript · DeepSeek'
  },
  source: 'Arcana working tree 789f2b5 + local changes · audited 2026-09-17',
  chapters: [
    {
      num: '01',
      title: 'Project Overview',
      blocks: [
        {
          kind: 'p',
          text: 'Arcana explores the boundary between deterministic interaction and probabilistic interpretation in a consumer AI product. Users perform the draw; the model enters only after the result is frozen. Still in development, it now connects multiple decks, an immersive ritual and a complete first-use journey.'
        },
        {
          kind: 'statement',
          text: 'Current Product State'
        },
        arcanaQuickRead.en
      ]
    },
    {
      num: '02',
      title: 'The Problem Behind the Product',
      blocks: [
        {
          kind: 'p',
          text: '“Enter a question → click → receive random cards → read an AI answer” is easy to build. It also invites a reasonable doubt: had the system already decided everything, and did my actions matter?'
        },
        {
          kind: 'p',
          text: 'Participation, ritual and trust in randomness became design goals. The response was to preserve meaningful choices and visible feedback throughout the draw, rather than rely on mystical language.'
        },
        {
          kind: 'limits',
          items: [
            'Agency and trust remain design goals. There is not enough user research to claim that these changes improved retention or conversion.'
          ]
        }
      ]
    },
    {
      num: '03',
      title: 'The Product Boundary',
      blocks: [
        {
          kind: 'statement',
          text: 'Engine owns facts. LLM owns interpretation.'
        },
        {
          kind: 'table',
          head: [
            'Deterministic system',
            'LLM'
          ],
          rows: [
            [
              'Card identity, count and orientation',
              'Card meanings in the context of the question'
            ],
            [
              'Spread, user selection and placement',
              'Relationships between the drawn cards'
            ],
            [
              'Frozen results and session recovery',
              'Narrative, answers and reflection prompts'
            ]
          ]
        },
        {
          kind: 'p',
          text: 'The model cannot draw cards, change their number or orientation, or override a selection. Retrying a reading must not redraw. The server rebuilds context and validates the response to keep generated text within that boundary.'
        },
        {
          kind: 'diagram',
          lines: [
            'Browser',
            '  ↓ /api/tarot/reading (stream: /api/tarot/reading/stream)',
            'Server → DeepSeek'
          ],
          caption: 'The browser calls the application API. Provider keys remain on the server.'
        }
      ]
    },
    {
      num: '04',
      title: 'The Complete Ritual',
      blocks: [
        {
          kind: 'steps',
          items: [
            {
              label: 'Shuffle',
              text: 'User actions enter the engine process; an animation does not stand in for the draw.'
            },
            {
              label: 'Cut',
              text: 'The user sets a cut point that changes the order.'
            },
            {
              label: 'Spread',
              text: 'Present cards to choose from instead of dealing automatically.'
            },
            {
              label: 'Select',
              text: 'Preserve the choice of which card to take.'
            },
            {
              label: 'Place',
              text: 'Assign the chosen cards to spread positions.'
            },
            {
              label: 'Reveal',
              text: 'Reveal the established identities and orientations.'
            },
            {
              label: 'Read',
              text: 'Request interpretation after freezing the result. Recovery and retries preserve the facts.'
            }
          ]
        },
        {
          kind: 'p',
          text: 'This takes longer than a one-click answer, deliberately. The opportunity is to simplify understanding and feedback without removing the choices that make the ritual participatory.'
        }
      ]
    },
    {
      num: '05',
      title: 'Multi-Deck Architecture',
      blocks: [
        {
          kind: 'p',
          text: 'Multiple decks should not mean multiple random engines. Separating semantics, card visuals and atmosphere lets the experience evolve while the factual boundary stays stable.'
        },
        {
          kind: 'table',
          head: [
            'Layer',
            'Responsibility'
          ],
          rows: [
            [
              'Semantic',
              'cardId, meanings, orientation, spread logic, random engine and reading prompts stay invariant.'
            ],
            [
              'Deck Visual',
              'Artwork, card backs, borders, typography and decoration.'
            ],
            [
              'Atmosphere',
              'Motifs, textures, motion, page atmosphere and reading surfaces.'
            ]
          ]
        },
        {
          kind: 'p',
          text: 'The Fool can look different across decks while retaining the same cardId. A deck is not a stronger, rarer or more accurate reading system; visual differences should not suggest a hierarchy of capability.'
        }
      ]
    },
    {
      num: '06',
      title: 'Deck Worlds and Session Identity',
      blocks: [
        {
          kind: 'p',
          text: 'Changing hue alone makes decks feel like reskins. Distinct motifs, silhouettes, textures, reading surfaces and motion now establish each world: foliage for Forest, constellation lines for Celestial, and book and engraving structures for Classic.'
        },
        {
          kind: 'table',
          head: [
            'State',
            'Verified scope'
          ],
          rows: [
            [
              'Defined',
              '10 deck definitions and distinct visual signatures.'
            ],
            [
              'Available / Selectable',
              '5 legacy decks support the complete draw and reading in the current local code.'
            ],
            [
              'Published / release readiness',
              'The other 5 artwork decks lack complete assets and remain unselectable. 10 definitions do not mean ten published decks; the deployed version is separate from local development.'
            ]
          ]
        },
        {
          kind: 'p',
          text: 'A reading keeps the background, card area, headings, accents and paper surface of its frozen session deck. Changing the global deck later cannot change that completed reading. One experience keeps its own visual identity.'
        },
        {
          kind: 'limits',
          items: [
            'Independent historical themes for Journal and shared records have not been extended as part of this work.'
          ]
        }
      ]
    },
    {
      num: '07',
      title: 'Reading Experience: Model Latency Is Not Perceived Latency',
      blocks: [
        {
          kind: 'p',
          text: 'The model was already streaming, but the UI held relationships, narrative and reflection fields until the complete JSON response reached done. Part of the silent wait was created by presentation logic.'
        },
        {
          kind: 'p',
          text: 'Partial relationship and string extraction now release completed fields as they become usable. Streaming and completed states share ReadingBody. Content follows generation order and is appended below the existing text, preserving the reader’s position.'
        },
        {
          kind: 'table',
          head: [
            'One documented investigation',
            'Before',
            'After'
          ],
          rows: [
            [
              'Longest interval without new content',
              '9.6s',
              '2.57s'
            ],
            [
              'First visible content',
              'About 1.9s',
              'About 1.56s'
            ]
          ]
        },
        {
          kind: 'p',
          text: 'Card-by-card analysis still precedes the conclusion. I kept that sequence rather than move the answer forward for a faster-looking result. Progressive presentation improves perceived waiting; actual response time still depends on the model and network.'
        },
        {
          kind: 'limits',
          items: [
            'These figures come from one documented Reading Experience V2 investigation. Live latency was not remeasured in this audit; the figures are not averages or a service guarantee.'
          ]
        }
      ]
    },
    {
      num: '08',
      title: 'Immersion and First-Use Experience',
      blocks: [
        {
          kind: 'p',
          text: 'An Intro Cover and staged entrance establish the setting. CSS 3D cards, pointer parallax, a ritual table and shuffle feedback connect actions to visible state changes. Their purpose is participation and a sense of ownership of the chosen cards.'
        },
        {
          kind: 'p',
          text: 'The first-use journey connects What is Tarot? → First Reading Guide → completed reading → Restart / New Reading. Chinese and English cover navigation, instructions, decks, the draw and results, rather than stopping at the homepage.'
        },
        {
          kind: 'p',
          text: 'Brand, ritual text, body copy and generated readings have distinct typographic roles. Cinzel, Cormorant Garamond and the Chinese WenKai subset serve display copy; unpredictable AI prose uses readable full-coverage fallbacks to avoid character-by-character font mixing.'
        }
      ]
    },
    {
      num: '09',
      title: 'Engineering and Validation',
      blocks: [
        {
          kind: 'p',
          text: 'Validation protects the product decisions first: actions affect the draw, retries preserve cards, decks preserve semantics, and partial streaming content cannot masquerade as a complete result.'
        },
        {
          kind: 'table',
          head: [
            'Core suite rerun in this audit',
            'Passing assertions'
          ],
          rows: [
            [
              'Engine',
              '64'
            ],
            [
              'Deck',
              '367'
            ],
            [
              'Layout',
              '147'
            ],
            [
              'Artwork',
              '89'
            ],
            [
              'Reading · Mock',
              '118'
            ],
            [
              'Total across these five suites',
              '785'
            ]
          ]
        },
        {
          kind: 'p',
          text: 'A further 30 performance guards, 56 deployment checks and 7 design tests passed. Deployment checks inspect existing artifacts and configuration; they do not establish that the latest working tree is deployed.'
        },
        {
          kind: 'p',
          text: 'The code retains reduced-motion handling, less continuous motion on mobile/coarse pointers, thumbnails, self-hosted fonts and asset budgets. Deck Worlds documentation records checks at 375 / 390 / 430 widths; design tests check reading-surface contrast. CSS and SVG avoid requiring an additional WebGL or video runtime.'
        },
        {
          kind: 'limits',
          items: [
            'Release checks passed 67/70. Font preloading, the shared-question default and the JS budget failed; release readiness is not established.',
            'Database integration tests were skipped without an isolated TEST_DATABASE_URL. A mock HTTP test was blocked by sandbox listener permissions. Earlier local acceptance records do not replace a fresh run.',
            'Low-end Android, physical iOS Safari devices, sustained GPU use and real production latency still need broader validation.'
          ]
        }
      ]
    },
    {
      num: '10',
      title: 'Current State and Next Steps',
      blocks: [
        {
          kind: 'table',
          head: [
            'Stage',
            'Actual state'
          ],
          rows: [
            [
              'Implemented',
              'Complete draw and server-side reading, progressive content, multiple decks, session-bound reading worlds, immersive interaction and bilingual onboarding.'
            ],
            [
              'Implemented locally; not deployed',
              'Registration and login, PostgreSQL accounts/sessions/readings/feedback, access control and Admin Analytics.'
            ],
            [
              'Dashboard capability',
              'Real SQL aggregates for registration, DAU/WAU/MAU, readings, feedback and D1/D7/D30 retention. No verified public operating results are claimed.'
            ],
            [
              'Not established / not implemented',
              'No WeChat OAuth or login implementation was found; it is not presented as supported.'
            ]
          ]
        },
        {
          kind: 'p',
          text: 'User System documentation records acceptance against isolated local PostgreSQL. Admin documentation explicitly states that it has not connected to production or been deployed. Guests retain local journals; cloud-history APIs exist, but cross-device history UI, email verification and password recovery are outside the current version.'
        },
        {
          kind: 'p',
          text: 'Next: resolve release checks, rerun database and permission validation, complete unreleased artwork, then validate deployment and physical-device experience. Mainland network performance remains unverified; domestic deployment optimisation is not described as complete.'
        }
      ]
    }
  ]
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

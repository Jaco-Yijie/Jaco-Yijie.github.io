/**
 * More Work + Learning + AI Evals 内容层。
 * More Work 的视觉权重必须低于 Featured Work（PORTFOLIO_PRD.md §6.2）。
 */
import { links, type MaybeLink } from './links'

/* ── More Work ─────────────────────────────────────────── */
export type MoreItem = {
  title: string
  context: string
  points: string[]
  href: MaybeLink
  external?: boolean
}

export const moreWork: MoreItem[] = [
  {
    title: 'Tesla Stock Prediction',
    context: 'Final Year Project · Python',
    points: [
      'Time-aware machine learning with walk-forward evaluation',
      'Six explicit leakage controls, including an assertion that validation and holdout dates never overlap',
      'Sentiment features fused with market features across 67 columns',
      'Reported against four baselines, and documented as a research artifact rather than a trading signal',
    ],
    href: links.repos.teslaFyp,
    external: true,
  },
  {
    title: 'IDSC 2026 Biomedical Data Challenge',
    context: 'Team project',
    points: [
      'Brugada ECG classification',
      'Model comparison across logistic regression, random forest and a 1D-CNN',
      'Recall-oriented model selection — a screening context makes a missed case more costly than a false alarm',
    ],
    href: null,
  },
  {
    title: 'LLM Evaluation Practice',
    context: 'Self-directed · 28 days',
    points: [
      'A structured programme building evaluation sets, running them, and analysing failures',
      'Feeds directly into the evaluation work in the featured projects',
    ],
    href: null,
  },
]

/* ── Learning ──────────────────────────────────────────── */
export type Note = {
  slug: string
  category: string
  title: string
  summary: string
  body: string[]
  from?: string
  readingTime: string
}

export const notes: Note[] = [
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
      'They passed by coincidence. Their underlying values happened to survive rounding, so the model\'s independent arithmetic matched the code output exactly. Change the input so the raw value carries one more decimal place, and the same case fails.',
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
    summary: 'Working notes on where each sits — kept short deliberately, since my hands-on depth here is still limited.',
    readingTime: '1 min',
    body: [
      'Function calling gives a model a set of tool signatures within one application. The application owns the tools, the schemas and the execution.',
      'MCP moves that contract outside the application, so a tool server can be written once and connected to different clients rather than reimplemented per integration.',
      'I am keeping this note short on purpose. I have read the specification and built against tool-calling APIs, but I have not shipped a production MCP server, and I would rather mark the edge of what I have done than write past it.',
    ],
  },
]

/* ── AI Evals 页面 ─────────────────────────────────────── */
export const evalPipeline = [
  { step: 'Task Definition', text: 'State the single behaviour under test, narrowly enough that a case can pass or fail it.' },
  { step: 'Context Design', text: 'Decide what reaches the model — and, more importantly, what does not.' },
  { step: 'Output Constraints', text: 'Fix the schema, the permitted values, and the shape of a refusal.' },
  { step: 'Evaluation Set', text: 'Build cases that cover the boundary, not just the happy path.' },
  { step: 'Failure Analysis', text: 'Read why a case passed as carefully as why one failed.' },
  { step: 'Iteration', text: 'Change the layer that can actually hold the constraint — sometimes the architecture, not the prompt.' },
  { step: 'Regression Validation', text: 'Re-run the set. Verify with a case that could prove you wrong.' },
]

export const evalEvidence = [
  {
    project: 'Seller Profit Calculator',
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
    project: 'Arcana',
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
    project: 'Stock News Intelligence',
    slug: 'stock-news',
    headline: 'A prompt as a versioned system component',
    points: [
      'Prompt version and rule version hashed into the response cache key',
      'Structured prompt: task, output schema, rules, negative examples, rule-layer evidence',
      'Model invoked only on low-confidence or generic-term matches',
      'Separate timeouts for classification and generation — different tasks, different budgets',
    ],
  },
]

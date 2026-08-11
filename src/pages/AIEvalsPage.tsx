import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { evalPipeline, evalEvidence } from '../data/more'
import { Eyebrow, Section } from '../components/ui'
import { Reveal } from '../components/motion'

/**
 * /ai-evals —— Portfolio 的差异化核心页面。
 * 展示的不是「我会 Prompt Engineering」，而是一套可复述的方法与三个真实项目映射。
 * Failure Library 是最难伪造的一节：它记录真实失败模式。
 */
const failures = [
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
]

const topics = [
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
]

export function AIEvalsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <header className="border-b border-line">
        <div className="shell pt-[104px] pb-14 lg:pt-[140px] lg:pb-20">
          <Eyebrow>AI Evaluation &amp; Prompt Engineering</Eyebrow>
          <h1 className="mt-4 max-w-[20ch] text-display-l text-ink">
            Prompt engineering is part of system design.
          </h1>
          <p className="mt-6 max-w-[58ch] text-body-l text-ink-2">
            Task boundary, output constraints, failure handling, context control and regression
            testing. The work is deciding what a model is allowed to be responsible for — and
            building the cases that check whether it stayed there.
          </p>
        </div>
      </header>

      {/* Pipeline */}
      <Section id="pipeline" eyebrow="Method" title="The loop" bordered={false}>
        <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-lg bg-line sm:grid-cols-2 lg:grid-cols-4">
          {evalPipeline.map((s, i) => (
            <Reveal as="li" key={s.step} delay={i * 40} className="bg-bg p-6">
              <span className="font-mono text-[12.5px] text-ink-3">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 text-heading-m text-ink">{s.step}</h3>
              <p className="mt-3 text-body-s text-ink-2">{s.text}</p>
            </Reveal>
          ))}
        </ol>
        <p className="mt-8 max-w-[58ch] font-prose text-prose text-ink-2">
          The step that matters most is the sixth. When a constraint fails, the instinct is to
          rewrite the prompt. Sometimes the right move is to change the layer that can actually hold
          it — and to accept that the prompt was never able to.
        </p>
      </Section>

      {/* Evidence */}
      <Section id="evidence" eyebrow="Evidence" title="Three projects, three different problems.">
        <ul className="space-y-12 lg:space-y-16">
          {evalEvidence.map((e, i) => (
            <Reveal as="li" key={e.slug} delay={i * 60}>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <h3 className="text-heading-l text-ink">{e.headline}</h3>
                  <Link
                    to={`/work/${e.slug}`}
                    className="mt-3 inline-flex items-center gap-2 text-body-s text-accent transition-colors hover:text-accent-hover"
                  >
                    {e.project} <span aria-hidden="true">→</span>
                  </Link>
                </div>
                <ul className="space-y-3 lg:col-span-7 lg:col-start-6">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-body text-ink-2">
                      <span
                        aria-hidden="true"
                        className="mt-[0.7em] size-1 shrink-0 rounded-full bg-ink-3"
                      />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Topics */}
      <Section id="topics" eyebrow="Coverage" title="What that has meant in practice.">
        <dl className="grid grid-cols-1 border-t border-line sm:grid-cols-2">
          {topics.map(([t, d]) => (
            <div key={t} className="border-b border-line py-5 pr-6">
              <dt className="text-body font-medium text-ink">{t}</dt>
              <dd className="mt-1 text-body-s text-ink-2">{d}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Failure library */}
      <Section
        id="failures"
        eyebrow="Failure Library"
        title="The failures are the useful part."
        lead="Most portfolios show what worked. These are the AI failure modes I have actually hit, and what each one taught me about where the constraint belonged."
      >
        <ul className="border-t border-line">
          {failures.map((f, i) => (
            <Reveal as="li" key={f.mode} delay={Math.min(i, 6) * 40} className="border-b border-line">
              <div className="grid grid-cols-1 gap-x-6 gap-y-2 py-6 lg:grid-cols-12">
                <h3 className="text-body font-medium text-ink lg:col-span-4">{f.mode}</h3>
                <p className="text-body-s text-ink-2 lg:col-span-6">{f.detail}</p>
                <p className="text-caption text-ink-3 lg:col-span-2 lg:text-right">{f.from}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  )
}

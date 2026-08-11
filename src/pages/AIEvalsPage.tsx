import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useContent } from '../hooks'
import { useLangHref } from '../i18n'
import { Eyebrow, Section } from '../components/ui'
import { Reveal } from '../components/motion'

/**
 * /ai-evals —— Portfolio 的差异化核心页面。
 * 展示的不是「我会 Prompt Engineering」，而是一套可复述的方法与三个真实项目映射。
 * Failure Library 是最难伪造的一节：它记录真实失败模式。
 */
export function AIEvalsPage() {
  const c = useContent()
  const withLang = useLangHref()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <header className="border-b border-line">
        <div className="shell pt-[104px] pb-14 lg:pt-[140px] lg:pb-20">
          <Eyebrow>{c.sections.evalsEyebrow}</Eyebrow>
          <h1 className="mt-4 max-w-[20ch] text-display-l text-ink">{c.evals.heroTitle}</h1>
          <p className="mt-6 max-w-[58ch] text-body-l text-ink-2">{c.evals.heroLead}</p>
        </div>
      </header>

      <Section id="pipeline" eyebrow={c.evals.methodEyebrow} title={c.evals.methodTitle} bordered={false}>
        <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-lg bg-line sm:grid-cols-2 lg:grid-cols-4">
          {c.evals.pipeline.map((s, i) => (
            <Reveal as="li" key={s.step} delay={i * 40} className="bg-bg p-6">
              <span className="font-mono text-[12.5px] text-ink-3">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 text-heading-m text-ink">{s.step}</h3>
              <p className="mt-3 text-body-s text-ink-2">{s.text}</p>
            </Reveal>
          ))}
        </ol>
        <p className="mt-8 max-w-[58ch] font-prose text-prose text-ink-2">{c.evals.methodNote}</p>
      </Section>

      <Section id="evidence" eyebrow={c.evals.evidenceEyebrow} title={c.evals.evidenceTitle}>
        <ul className="space-y-12 lg:space-y-16">
          {c.evals.evidence.map((e, i) => (
            <Reveal as="li" key={e.slug} delay={i * 60}>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <h3 className="text-heading-l text-ink">{e.headline}</h3>
                  <Link
                    to={withLang(`/work/${e.slug}`)}
                    className="mt-3 inline-flex items-center gap-2 text-body-s text-accent transition-colors hover:text-accent-hover"
                  >
                    {c.projects[e.slug].title} <span aria-hidden="true">→</span>
                  </Link>
                </div>
                <ul className="space-y-3 lg:col-span-7 lg:col-start-6">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-body text-ink-2">
                      <span aria-hidden="true" className="mt-[0.7em] size-1 shrink-0 rounded-full bg-ink-3" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section id="topics" eyebrow={c.evals.coverageEyebrow} title={c.evals.coverageTitle}>
        <dl className="grid grid-cols-1 border-t border-line sm:grid-cols-2">
          {c.evals.topics.map(([t, d]) => (
            <div key={t} className="border-b border-line py-5 pr-6">
              <dt className="text-body font-medium text-ink">{t}</dt>
              <dd className="mt-1 text-body-s text-ink-2">{d}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section
        id="failures"
        eyebrow={c.evals.failureEyebrow}
        title={c.evals.failureTitle}
        lead={c.evals.failureLead}
      >
        <ul className="border-t border-line">
          {c.evals.failures.map((f, i) => (
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

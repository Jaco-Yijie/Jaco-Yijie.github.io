import { Link } from 'react-router-dom'
import { moreWorkLinks } from '../data/projects'
import { links, contactRows } from '../data/links'
import { useContent } from '../hooks'
import { useLangHref } from '../i18n'
import { Button, Eyebrow, Section } from './ui'
import { Reveal } from './motion'

/* ══════════════════════════════════════════════════════════
   AI Evals feature —— 首页差异化模块，引流到 /ai-evals
   ══════════════════════════════════════════════════════════ */
export function EvalsFeature() {
  const c = useContent()
  const withLang = useLangHref()

  return (
    <Section
      id="ai-evals-feature"
      eyebrow={c.sections.evalsEyebrow}
      title={c.sections.evalsTitle}
      lead={c.sections.evalsLead}
    >
      <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-lg bg-line sm:grid-cols-2 lg:grid-cols-4">
        {c.evals.pipeline.map((s, i) => (
          <Reveal as="li" key={s.step} delay={i * 50} className="bg-bg p-6">
            <span className="font-mono text-[12.5px] text-ink-3">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-3 text-heading-m text-ink">{s.step}</h3>
            <p className="mt-3 text-body-s text-ink-2">{s.text}</p>
          </Reveal>
        ))}
      </ol>

      <div className="mt-10">
        <Button href={withLang('/ai-evals')} variant="tertiary">
          {c.cta.exploreEvals}
        </Button>
      </div>
    </Section>
  )
}

/* ══════════════════════════════════════════════════════════
   Capabilities —— Evidence-based，禁止百分比/进度条（§10.4）
   ══════════════════════════════════════════════════════════ */
export function Capabilities() {
  const c = useContent()
  const withLang = useLangHref()

  return (
    <Section
      id="capabilities"
      eyebrow={c.sections.capabilitiesEyebrow}
      title={c.sections.capabilitiesTitle}
      lead={c.sections.capabilitiesLead}
    >
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {c.capabilities.map((cap, i) => (
          <Reveal
            as="li"
            key={cap.index}
            delay={i * 60}
            className={[
              'flex flex-col py-8 sm:py-0',
              // 分隔线只在需要时加，不用 border-0 覆盖
              i > 0 ? 'border-t border-line sm:border-t-0' : '',
              i >= 2 ? 'sm:border-t sm:border-line sm:pt-8 lg:border-t-0 lg:pt-0' : 'sm:pb-8 lg:pb-0',
              i % 2 === 1 ? 'sm:border-l sm:border-line sm:pl-6' : '',
              i > 0 ? 'lg:border-l lg:border-line lg:pl-6' : '',
              i < 3 ? 'lg:pr-6' : '',
            ].join(' ')}
          >
            <Eyebrow>{cap.index}</Eyebrow>
            <h3 className="mt-3 text-heading-m text-ink">{cap.title}</h3>
            <div className="mt-4 h-px w-8 bg-line-strong" aria-hidden="true" />

            <ul className="mt-4">
              {cap.skills.map((s) => (
                <li key={s} className="text-body-s leading-[1.9] text-ink-2">
                  {s}
                </li>
              ))}
            </ul>

            <p className="text-label mt-auto pt-6 uppercase text-ink-3">{c.sections.usedIn}</p>
            <ul className="mt-2 space-y-1">
              {cap.usedIn.map((slug) => (
                <li key={slug}>
                  <Link
                    to={withLang(`/work/${slug}`)}
                    className="text-body-s text-accent transition-colors hover:text-accent-hover"
                  >
                    {c.projects[slug].title}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ul>

      <p className="mt-12 max-w-[42ch] text-body-l text-ink-2 lg:mt-16">
        {c.sections.capabilitiesClosing}
      </p>
    </Section>
  )
}

/* ══════════════════════════════════════════════════════════
   More Work —— 视觉权重低于 Featured Work
   ══════════════════════════════════════════════════════════ */
export function MoreWork() {
  const c = useContent()

  return (
    <Section id="more-work" eyebrow={c.sections.moreEyebrow} title={c.sections.moreTitle}>
      <ul className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-3">
        {c.moreWork.map((m, i) => (
          <Reveal as="li" key={m.title} delay={i * 60}>
            <h3 className="text-heading-m text-ink">{m.title}</h3>
            <p className="text-caption mt-1 text-ink-3">{m.context}</p>
            <ul className="mt-4 space-y-2">
              {m.points.map((pt) => (
                <li key={pt} className="text-body-s text-ink-2">
                  {pt}
                </li>
              ))}
            </ul>
            {moreWorkLinks[i] && (
              <div className="mt-5">
                <Button href={moreWorkLinks[i]} variant="tertiary" external>
                  {c.cta.github}
                </Button>
              </div>
            )}
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}

/* ══════════════════════════════════════════════════════════
   Latest Learning
   ══════════════════════════════════════════════════════════ */
export function LatestLearning() {
  const c = useContent()
  const withLang = useLangHref()
  const latest = c.learning.notes.slice(0, 3)

  return (
    <Section
      id="learning"
      eyebrow={c.sections.learningEyebrow}
      title={c.sections.learningTitle}
      lead={c.sections.learningLead}
    >
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {latest.map((n, i) => (
          <Reveal as="li" key={n.slug} delay={i * 60}>
            <Link
              to={`${withLang('/learning')}#${n.slug}`}
              className="flex h-full flex-col rounded-lg border border-line bg-surface-1 p-7 transition-all duration-[240ms] hover:-translate-y-0.5 hover:border-line-strong hover:bg-surface-2"
            >
              <span className="text-label uppercase text-ink-3">
                {c.learning.categories[n.category] ?? n.category}
              </span>
              <h3 className="mt-4 text-heading-m text-ink">{n.title}</h3>
              <p className="mt-3 text-body-s text-ink-2">{n.summary}</p>
              <span className="text-caption mt-auto pt-6 text-ink-3">
                {n.from ? `${n.from} · ` : ''}
                {n.readingTime}
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>

      <div className="mt-10">
        <Button href={withLang('/learning')} variant="tertiary">
          {c.cta.allNotes}
        </Button>
      </div>
    </Section>
  )
}

/* ══════════════════════════════════════════════════════════
   About
   ══════════════════════════════════════════════════════════ */
export function About() {
  const c = useContent()
  const f = c.about.facts

  return (
    <Section id="about" eyebrow={c.sections.aboutEyebrow} title={c.sections.aboutTitle}>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="max-w-[68ch] space-y-6 font-prose text-prose text-ink-2">
            {c.about.lead.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <ul className="space-y-2 text-ink">
              {c.about.questions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
            {c.about.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <aside className="lg:col-span-4 lg:col-start-9">
          <dl className="space-y-6">
            <div>
              <dt className="text-label uppercase text-ink-3">{f.educationLabel}</dt>
              <dd className="mt-2 text-body text-ink">
                {f.education}
                <span className="mt-1 block text-body-s text-ink-2">{f.educationSub}</span>
              </dd>
            </div>
            <div>
              <dt className="text-label uppercase text-ink-3">{f.availabilityLabel}</dt>
              <dd className="mt-2 text-body text-ink">
                {f.availability}
                <span className="mt-1 block text-body-s text-ink-2">{f.availabilitySub}</span>
              </dd>
            </div>
            <div>
              <dt className="text-label uppercase text-ink-3">{f.focusLabel}</dt>
              <dd className="mt-2 text-body-s text-ink-2">{f.focus}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </Section>
  )
}

/* ══════════════════════════════════════════════════════════
   Contact —— 仅四项：Email · GitHub · Resume · Portfolio
   ══════════════════════════════════════════════════════════ */
export function Contact() {
  const c = useContent()

  return (
    <Section id="contact" eyebrow={c.sections.contactEyebrow} title={c.sections.contactTitle}>
      <p className="max-w-[52ch] text-body-l text-ink-2">{c.sections.contactLead}</p>

      <ul className="mt-10 border-t border-line">
        {contactRows.map((row) => (
          <li key={row.key} className="border-b border-line">
            <a
              href={row.href}
              {...(row.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="group flex items-center justify-between gap-6 py-5 transition-colors duration-[240ms] hover:bg-surface-1"
            >
              <span className="text-label uppercase text-ink-3">{c.contact[row.key]}</span>
              <span className="flex items-center gap-3 text-body text-ink">
                {row.key === 'resume' ? c.contact.resumeValue : row.value}
                <span
                  aria-hidden="true"
                  className="text-accent transition-transform duration-[240ms] group-hover:translate-x-1"
                >
                  ↗
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}

/* ══════════════════════════════════════════════════════════
   Footer
   ══════════════════════════════════════════════════════════ */
export function Footer() {
  const c = useContent()

  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-caption text-ink-3">{c.footer.tagline}</p>
        <div className="flex flex-wrap items-center gap-6">
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="text-caption text-ink-3 transition-colors hover:text-ink"
          >
            GitHub ↗
          </a>
          <a
            href={`mailto:${links.email}`}
            className="text-caption text-ink-3 transition-colors hover:text-ink"
          >
            {c.contact.email}
          </a>
          <a
            href={links.resume}
            target="_blank"
            rel="noreferrer"
            className="text-caption text-ink-3 transition-colors hover:text-ink"
          >
            {c.contact.resume} ↗
          </a>
        </div>
      </div>
    </footer>
  )
}

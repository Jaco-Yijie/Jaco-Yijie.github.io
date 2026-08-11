import { Link } from 'react-router-dom'
import { capabilities, capabilitiesClosing } from '../data/capabilities'
import { moreWork, notes, evalPipeline } from '../data/more'
import { contact, links } from '../data/links'
import { Button, Eyebrow, Section } from './ui'
import { Reveal } from './motion'

/* ══════════════════════════════════════════════════════════
   AI Evals feature —— 首页的差异化模块，引流到 /ai-evals
   ══════════════════════════════════════════════════════════ */
export function EvalsFeature() {
  return (
    <Section
      id="ai-evals-feature"
      eyebrow="AI Evaluation & Prompt Engineering"
      title="Prompt engineering is part of system design."
      lead="Not writing a better sentence. Defining the boundary of a task, constraining the output, handling the failure, and building a set of cases that can prove you wrong."
    >
      <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-lg bg-line sm:grid-cols-2 lg:grid-cols-4">
        {evalPipeline.map((s, i) => (
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
        <Button href="/ai-evals" variant="tertiary">
          Explore AI Evals
        </Button>
      </div>
    </Section>
  )
}

/* ══════════════════════════════════════════════════════════
   Capabilities —— Evidence-based，禁止百分比/进度条（§10.4）
   ══════════════════════════════════════════════════════════ */
export function Capabilities() {
  return (
    <Section
      id="capabilities"
      eyebrow="Capabilities"
      title="Every capability points to a project."
      lead="No proficiency percentages. If a skill is listed here, there is work you can open and check."
    >
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((c, i) => (
          <Reveal
            as="li"
            key={c.index}
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
            <Eyebrow>{c.index}</Eyebrow>
            <h3 className="mt-3 text-heading-m text-ink">{c.title}</h3>
            <div className="mt-4 h-px w-8 bg-line-strong" aria-hidden="true" />

            <ul className="mt-4">
              {c.skills.map((s) => (
                <li key={s} className="text-body-s leading-[1.9] text-ink-2">
                  {s}
                </li>
              ))}
            </ul>

            <p className="text-label mt-auto pt-6 uppercase text-ink-3">Used in</p>
            <ul className="mt-2 space-y-1">
              {c.usedIn.map((u) => (
                <li key={u.slug}>
                  <Link
                    to={`/work/${u.slug}`}
                    className="text-body-s text-accent transition-colors hover:text-accent-hover"
                  >
                    {u.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ul>

      <p className="mt-12 max-w-[42ch] text-body-l text-ink-2 lg:mt-16">{capabilitiesClosing}</p>
    </Section>
  )
}

/* ══════════════════════════════════════════════════════════
   More Work —— 视觉权重必须低于 Featured Work
   ══════════════════════════════════════════════════════════ */
export function MoreWork() {
  return (
    <Section id="more-work" eyebrow="More Work" title="Foundations.">
      <ul className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-3">
        {moreWork.map((m, i) => (
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
            {m.href && (
              <div className="mt-5">
                <Button href={m.href} variant="tertiary" external={m.external}>
                  View on GitHub
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
  const latest = notes.slice(0, 3)
  return (
    <Section
      id="learning"
      eyebrow="Learning"
      title="Notes from the work, not from a syllabus."
      lead="Short write-ups of things that changed how I build. Each one comes out of a specific project decision."
    >
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {latest.map((n, i) => (
          <Reveal as="li" key={n.slug} delay={i * 60}>
            <Link
              to={`/learning#${n.slug}`}
              className="flex h-full flex-col rounded-lg border border-line bg-surface-1 p-7 transition-all duration-[240ms] hover:-translate-y-0.5 hover:border-line-strong hover:bg-surface-2"
            >
              <span className="text-label uppercase text-ink-3">{n.category}</span>
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
        <Button href="/learning" variant="tertiary">
          All notes
        </Button>
      </div>
    </Section>
  )
}

/* ══════════════════════════════════════════════════════════
   About
   ══════════════════════════════════════════════════════════ */
export function About() {
  return (
    <Section id="about" eyebrow="About" title="What happens after the model works.">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="max-w-[68ch] space-y-6 font-prose text-prose text-ink-2">
            <p>
              I study Data Science, but the part I keep returning to is what happens{' '}
              <em className="text-ink not-italic">after</em> the model works.
            </p>
            <ul className="space-y-2 text-ink">
              <li>What problem should AI actually solve?</li>
              <li>Where should deterministic systems replace an LLM?</li>
              <li>How should AI behaviour be evaluated?</li>
              <li>How does model capability become usable product behaviour?</li>
            </ul>
            <p>
              Most of my projects started because a model produced something that looked right and
              was not. That gap — between plausible output and correct behaviour — is where the work
              is.
            </p>
            <p>
              So I run the interviews, write the PRD, define what counts as a failure, build the
              prototype, and then try to break it. Product thinking, data, an understanding of what
              LLMs are unreliable at, and enough engineering to ship something real.
            </p>
          </div>
        </div>

        <aside className="lg:col-span-4 lg:col-start-9">
          <dl className="space-y-6">
            <div>
              <dt className="text-label uppercase text-ink-3">Education</dt>
              <dd className="mt-2 text-body text-ink">
                Universiti Kebangsaan Malaysia
                <span className="mt-1 block text-body-s text-ink-2">
                  Computer Science — Data Science
                </span>
              </dd>
            </div>
            <div>
              <dt className="text-label uppercase text-ink-3">Availability</dt>
              <dd className="mt-2 text-body text-ink">
                Within 1 week
                <span className="mt-1 block text-body-s text-ink-2">6+ month internship</span>
              </dd>
            </div>
            <div>
              <dt className="text-label uppercase text-ink-3">Focus</dt>
              <dd className="mt-2 text-body-s text-ink-2">
                AI product · LLM evaluation · prompt systems · product analytics
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </Section>
  )
}

/* ══════════════════════════════════════════════════════════
   Contact —— 仅四项（§12.3）
   ══════════════════════════════════════════════════════════ */
export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Available within a week.">
      <p className="max-w-[52ch] text-body-l text-ink-2">
        Looking for an AI product internship — AI product, LLM applications, or AI agent and tooling
        teams. Six months or longer.
      </p>

      <ul className="mt-10 border-t border-line">
        {contact.map((c) => {
          const external = c.href.startsWith('http') || c.href.endsWith('.pdf')
          return (
            <li key={c.label} className="border-b border-line">
              <a
                href={c.href}
                {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="group flex items-center justify-between gap-6 py-5 transition-colors duration-[240ms] hover:bg-surface-1"
              >
                <span className="text-label uppercase text-ink-3">{c.label}</span>
                <span className="flex items-center gap-3 text-body text-ink">
                  {c.value}
                  <span
                    aria-hidden="true"
                    className="text-accent transition-transform duration-[240ms] group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}

/* ══════════════════════════════════════════════════════════
   Footer
   ══════════════════════════════════════════════════════════ */
export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-caption text-ink-3">
          Jaco Wang · 王一杰 — AI Product Candidate
        </p>
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
            Email
          </a>
          <a
            href={links.resume}
            target="_blank"
            rel="noreferrer"
            className="text-caption text-ink-3 transition-colors hover:text-ink"
          >
            Resume ↗
          </a>
        </div>
      </div>
    </footer>
  )
}

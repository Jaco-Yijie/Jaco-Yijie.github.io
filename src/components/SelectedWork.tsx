import { Link } from 'react-router-dom'
import { useContent } from '../hooks'
import { useLangHref } from '../i18n'
import { projects } from '../data/projects'
import { isLive } from '../data/links'
import { Reveal } from './motion'
import { Eyebrow } from './ui'

const selected = ['arcana', 'stock-news', 'seller-profit'] as const

/** 只用真实产品截图；没有截图的项目展示明确标注的案例结果，而不是伪造界面 */
const screenshots: Partial<Record<(typeof selected)[number], string>> = {
  arcana: '/images/projects/arcana-decks.webp',
  'stock-news': '/images/projects/stock-news.webp',
}

function PddEvidence() {
  const { portfolio: c } = useContent()
  const v = c.pddVisual
  return (
    <figure className="pdd-evidence" aria-label={`${v.label}: ${v.before} → ${v.after}`}>
      <figcaption>{v.label}</figcaption>
      <div className="pdd-evidence-row">
        <p>
          <strong className="is-before">{v.before}</strong>
          <span>{v.beforeNote}</span>
        </p>
        <span className="pdd-evidence-arrow" aria-hidden="true">→</span>
        <p>
          <strong>{v.after}</strong>
          <span>{v.afterNote}</span>
        </p>
      </div>
      <p className="pdd-evidence-change">{v.change}</p>
    </figure>
  )
}

export function SelectedWork() {
  const { portfolio: c } = useContent()
  const withLang = useLangHref()
  return (
    <section id="work" className="selected-work" aria-labelledby="work-heading">
      <div className="shell compact-section">
        <header className="section-heading">
          <Eyebrow>{c.workEyebrow}</Eyebrow>
          <h2 id="work-heading" className="editorial-title">
            {c.workTitle}
          </h2>
        </header>
        <ul className="work-grid">
          {selected.map((slug, index) => {
            const copy = c.projects[slug]
            const shot = screenshots[slug]
            const demo = projects
              .find((p) => p.slug === slug)
              ?.ctas.find((cta) => (cta.kind === 'liveDemo' || cta.kind === 'tryDemo') && isLive(cta.href))
            return (
              <Reveal as="li" key={slug} delay={index * 60} className={`work-card work-${slug}`}>
                <article>
                  <div className="project-visual">
                    {shot ? (
                      <img
                        src={shot}
                        alt={copy.imageAlt}
                        width="1280"
                        height="850"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <PddEvidence />
                    )}
                  </div>
                  <div className="project-copy">
                    <h3>{copy.title}</h3>
                    <p>{copy.summary}</p>
                    <p className="project-result">
                      <strong>{copy.result.value}</strong>
                      <span>{copy.result.label}</span>
                    </p>
                    <ul className="project-tags">
                      {copy.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                    <div className="project-links">
                      <Link
                        className="project-link"
                        to={withLang(`/work/${slug}`)}
                        aria-label={`${c.caseStudy}：${copy.title}`}
                      >
                        {c.caseStudy}
                        <span aria-hidden="true">→</span>
                      </Link>
                      {demo && isLive(demo.href) && (
                        <a
                          className="project-link"
                          href={demo.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${c.demo}：${copy.title}`}
                        >
                          {c.demo}
                          <span aria-hidden="true">↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

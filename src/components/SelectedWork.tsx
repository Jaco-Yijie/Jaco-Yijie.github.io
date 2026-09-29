import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { isLive } from '../data/links'
import { useContent } from '../hooks'
import { useLangHref } from '../i18n'
import { Metric } from './Metric'
import { Button, Eyebrow, Tag } from './ui'
import { StatusBadge } from './StatusBadge'
import { Reveal } from './motion'
import { ProjectPreview } from './ProjectPreview'

export function SelectedWork() {
  const c = useContent()
  const withLang = useLangHref()
  return (
    <section id="work" aria-labelledby="work-heading" className="selected-work">
      <div className="shell section-y">
        <header className="work-header">
          <Eyebrow>{`02 / ${c.sections.workEyebrow}`}</Eyebrow>
          <h2 id="work-heading" className="editorial-title">
            {c.sections.workTitle}
          </h2>
          <p>{c.sections.workLead}</p>
        </header>
        <ul>
          {projects
            .filter((p) => p.slug !== 'taobao-analysis')
            .map((p) => {
              const copy = c.projects[p.slug]
              return (
                <Reveal as="li" key={p.slug} className={`work-row work-${p.slug}`}>
                  <article>
                    <div className="work-copy">
                      <span className="project-number">{p.index}</span>
                      <h3>
                        <Link to={withLang(`/work/${p.slug}`)}>
                          {copy.title}
                          <span aria-hidden="true">↗</span>
                        </Link>
                      </h3>
                      {copy.subtitleAlt && <p className="project-alt">{copy.subtitleAlt}</p>}
                      {p.status && (
                        <div className="mt-4">
                          <StatusBadge status={p.status} />
                        </div>
                      )}
                      <p className="project-intro">{copy.subtitle}</p>
                      <p className="project-outcome">{copy.outcome}</p>
                      <div className="project-tags">
                        {copy.tags.map((tag) => (
                          <Tag key={tag}>{tag}</Tag>
                        ))}
                      </div>
                      <div className="project-actions">
                        {p.ctas
                          .filter((cta) => isLive(cta.href))
                          .map((cta) => (
                            <Button
                              key={cta.kind}
                              href={cta.external ? cta.href : withLang(cta.href as string)}
                              variant={cta.variant}
                              size="sm"
                              external={cta.external}
                            >
                              {c.cta[cta.kind]}
                            </Button>
                          ))}
                      </div>
                    </div>
                    <div className="work-visual">
                      {p.slug === 'seller-profit' ? (
                        <div className="profit-visual">
                          <p>{c.portfolio.profitLabel}</p>
                          <dl>
                            <Metric id="ctxVars" variant="card" />
                          </dl>
                          <p>{c.portfolio.profitNote}</p>
                          <span aria-hidden="true">PYTHON × LLM</span>
                        </div>
                      ) : (
                        <ProjectPreview slug={p.slug} />
                      )}
                      {p.slug === 'stock-news' && (
                        <ol className="news-flow">
                          {c.portfolio.newsFlow.map((step) => (
                            <li key={step}>{step}</li>
                          ))}
                        </ol>
                      )}
                      <dl className="work-metrics">
                        {p.metricIds
                          .filter((id) => p.slug !== 'seller-profit' || id !== 'ctxVars')
                          .map((id) => (
                            <Metric key={id} id={id} variant="card" />
                          ))}
                      </dl>
                      <p className="project-highlight">
                        <span>{copy.highlightLabel}</span>
                        {copy.highlight}
                      </p>
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

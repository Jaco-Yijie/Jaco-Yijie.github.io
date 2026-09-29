import { Link } from 'react-router-dom'
import { useContent } from '../hooks'
import { useLangHref } from '../i18n'
import { Reveal } from './motion'
import { Eyebrow } from './ui'

const selected = ['arcana', 'stock-news', 'seller-profit'] as const

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
            return (
              <Reveal as="li" key={slug} delay={index * 60} className={`work-card work-${slug}`}>
                <article>
                  <div className="project-visual">
                    {slug === 'seller-profit' ? (
                      <div className="calculation-art" aria-hidden="true">
                        <span>ƒ</span>
                        <span>→</span>
                        <span>∑</span>
                      </div>
                    ) : (
                      <img
                        src={`/images/projects/${slug}.webp`}
                        alt={copy.imageAlt}
                        width="1280"
                        height="850"
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                  </div>
                  <div className="project-copy">
                    <h3>{copy.title}</h3>
                    <p>{copy.summary}</p>
                    <ul className="project-tags">
                      {copy.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                    <Link
                      className="project-link"
                      to={withLang(`/work/${slug}`)}
                      aria-label={`${c.viewProject}：${copy.title}`}
                    >
                      {c.viewProject}
                      <span aria-hidden="true">↗</span>
                    </Link>
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

import { Link } from 'react-router-dom'
import { useContent } from '../hooks'
import { useLangHref } from '../i18n'
import { moreWorkLinks } from '../data/projects'
import { Reveal } from './motion'
import { Section } from './ui'

export function ExperimentLab() {
  const c = useContent()
  const withLang = useLangHref()
  return (
    <Section
      id="experiments"
      eyebrow="03 / LAB"
      title={c.portfolio.labTitle}
      lead={c.portfolio.labLead}
    >
      <ul className="lab-grid">
        {c.portfolio.labItems.map((item, i) => (
          <Reveal as="li" key={item.name} delay={i * 40}>
            <div className={`lab-tile lab-tile-${i % 4}`}>
              <span className="lab-mark" aria-hidden="true">
                {['↗', '{ }', '◷', '±', '⌘', '⊞', '◌', '⋈'][i]}
              </span>
              <h3>{item.name}</h3>
              <p>{item.note}</p>
              <span className="lab-index" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
          </Reveal>
        ))}
      </ul>
      <details className="archive-work">
        <summary>
          {c.portfolio.archive}
          <span aria-hidden="true">＋</span>
        </summary>
        <div className="archive-links">
          <Link to={withLang('/work/taobao-analysis')}>
            {c.projects['taobao-analysis'].title} ↗
          </Link>
          <Link to={withLang('/ai-evals')}>{c.nav.aiEvals} ↗</Link>
          <Link to={withLang('/learning')}>{c.nav.learning} ↗</Link>
        </div>
        <div className="archive-grid">
          {c.moreWork.map((item, i) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.context}</p>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {moreWorkLinks[i] && (
                <a href={moreWorkLinks[i]!} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
              )}
            </article>
          ))}
        </div>
      </details>
    </Section>
  )
}

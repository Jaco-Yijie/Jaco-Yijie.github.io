import { Link } from 'react-router-dom'
import { useContent } from '../hooks'
import { useLangHref } from '../i18n'
import { Reveal } from './motion'
import { Eyebrow } from './ui'

export function BuilderAbout() {
  const { portfolio: c } = useContent()
  const withLang = useLangHref()
  return (
    <section id="about" className="about-section" aria-labelledby="about-heading">
      <div className="shell compact-section">
        <Reveal className="about-grid">
          <div>
            <Eyebrow>{c.aboutEyebrow}</Eyebrow>
            <h2 id="about-heading" className="editorial-title">
              {c.aboutTitle}
            </h2>
          </div>
          <div>
            <p className="about-copy">{c.aboutBody}</p>
            <dl className="about-facts">
              {c.aboutFacts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
        <nav id="practice" className="practice-links" aria-label={c.practiceLabel}>
          <p>{c.practiceLabel}</p>
          <Link to={withLang('/ai-evals')}>
            {c.practiceLinks.evals} <span aria-hidden="true">→</span>
          </Link>
          <Link to={withLang('/learning')}>
            {c.practiceLinks.learning} <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </div>
    </section>
  )
}

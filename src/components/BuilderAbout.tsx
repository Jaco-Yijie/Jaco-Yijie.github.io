import { useContent } from '../hooks'
import { Reveal } from './motion'
import { Section } from './ui'

export function BuilderAbout() {
  const c = useContent()
  return (
    <Section id="about" eyebrow={`04 / ${c.nav.about}`}>
      <div className="about-grid">
        <Reveal>
          <h2 className="editorial-title">{c.portfolio.aboutTitle}</h2>
          <div className="about-copy">
            {c.portfolio.aboutBody.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </Reveal>
        <Reveal className="build-process" delay={120}>
          <p className="text-eyebrow uppercase text-ink-3">{c.portfolio.processTitle}</p>
          <ol>
            {c.portfolio.process.map((step, i) => (
              <li key={step}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                {step}
                <span aria-hidden="true">{i === 6 ? '↗' : '↓'}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>
  )
}

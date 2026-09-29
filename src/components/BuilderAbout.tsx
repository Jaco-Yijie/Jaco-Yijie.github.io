import { useContent } from '../hooks'
import { Reveal } from './motion'
import { Eyebrow } from './ui'

export function BuilderAbout() {
  const { portfolio: c } = useContent()
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
          <p className="about-copy">{c.aboutBody}</p>
        </Reveal>
        <div className="build-process">
          <p>{c.processTitle}</p>
          <ol>
            {c.process.map((step, i) => (
              <li key={step}>
                <span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                {step}
                {i < c.process.length - 1 && <span aria-hidden="true">→</span>}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

import { useContent } from '../hooks'
import { Button, Eyebrow } from './ui'

export function Hero() {
  const c = useContent()
  return (
    <section id="hero" className="cinematic-hero" aria-labelledby="hero-heading">
      <div className="hero-atmosphere" aria-hidden="true">
        <div className="light-orbit" />
        <div className="light-horizon" />
      </div>
      <div className="shell hero-inner">
        <div className="hero-topline">
          <Eyebrow>{c.hero.eyebrow}</Eyebrow>
          <span aria-hidden="true">J / W — PORTFOLIO</span>
        </div>
        <h1 id="hero-heading" className="hero-title">
          {c.portfolio.heroLines.map((line, i) => (
            <span key={line} style={{ animationDelay: `${i * 140}ms` }}>
              {i === 2 ? <em>{line}</em> : line}
            </span>
          ))}
        </h1>
        <div className="hero-bottom">
          <div>
            <p className="hero-caption">{c.portfolio.heroCaption}</p>
            <p className="hero-support">{c.hero.supporting}</p>
            <div className="hero-actions">
              <Button href="#work" variant="primary" size="lg">
                {c.cta.viewWork}
              </Button>
              <Button href="#motion" variant="tertiary">
                {c.portfolio.watch}
              </Button>
            </div>
          </div>
          <div className="hero-exploring">
            <p>{c.portfolio.exploring}</p>
            <ul>
              {['AI Product', 'Agents', 'Creative Coding', 'AI × Motion'].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <a className="scroll-cue" href="#motion">
          {c.portfolio.scroll}
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  )
}

import { useContent } from '../hooks'
import { links } from '../data/links'
import { Button } from './ui'

export function Hero() {
  const { portfolio: c } = useContent()
  return (
    <section id="hero" className="cinematic-hero" aria-labelledby="hero-heading">
      <div className="hero-atmosphere" aria-hidden="true">
        <div className="ambient-mesh" />
        <div className="light-orbit" />
        <div className="light-horizon" />
        <div className="atmosphere-grain" />
      </div>
      <div className="shell hero-inner">
        <p className="hero-identity">
          <span aria-hidden="true" />
          {c.identity}
        </p>
        <h1 id="hero-heading" className="hero-title">
          {c.heroLines.map((line, i) => (
            <span key={line} style={{ animationDelay: `${i * 120}ms` }}>
              {line}
            </span>
          ))}
        </h1>
        <p className="hero-focus">
          {c.focus.split(' · ').map((part, i, all) => (
            <span key={part}>{i < all.length - 1 ? `${part} · ` : part}</span>
          ))}
        </p>
        <p className="hero-support">{c.heroSummary}</p>
        <dl className="hero-evidence">
          {c.evidence.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
        <div className="hero-actions">
          <Button href="#work" variant="primary" size="lg">
            {c.viewWork}
          </Button>
          <Button href={links.resume} variant="tertiary" external>
            {c.downloadResume}
          </Button>
        </div>
        <ul className="hero-meta">
          {c.heroMeta.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

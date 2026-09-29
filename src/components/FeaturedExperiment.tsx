import { useContent } from '../hooks'
import { Reveal } from './motion'
import { Eyebrow } from './ui'
import { VideoStage } from './VideoStage'

export function FeaturedExperiment() {
  const { portfolio: c } = useContent()
  return (
    <section id="motion" className="featured-section" aria-labelledby="motion-heading">
      <div className="shell featured-grid">
        <Reveal className="featured-copy">
          <Eyebrow>{c.featured}</Eyebrow>
          <h2 id="motion-heading" className="editorial-title">
            {c.motionTitle}
            <em>{c.motionSubtitle}</em>
          </h2>
          <div className="motion-description">
            {c.motionBody.map((text, i) => (
              <p key={text} className={i === 0 ? 'motion-lead' : undefined}>
                {text}
              </p>
            ))}
          </div>
          <dl className="motion-details">
            <dt>{c.role}</dt>
            <dd>
              <ul>
                {c.roles.map((role) => (
                  <li key={role}>{role}</li>
                ))}
              </ul>
            </dd>
            <dt>TECH</dt>
            <dd>{c.tech}</dd>
          </dl>
        </Reveal>
        <VideoStage />
      </div>
    </section>
  )
}

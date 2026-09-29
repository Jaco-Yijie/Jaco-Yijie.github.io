import { useContent } from '../hooks'
import { links } from '../data/links'
import { Reveal } from './motion'
import { Eyebrow, Button } from './ui'
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
          </h2>
          <p className="motion-summary">{c.motionSummary}</p>
          <dl className="motion-details">
            <dt>{c.role}</dt>
            <dd>{c.roles}</dd>
            <dt>{c.techLabel}</dt>
            <dd>
              <ul>
                {c.tech.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </dl>
          <Button href={links.video} variant="tertiary" external>
            {c.openVideo}
          </Button>
        </Reveal>
        <VideoStage />
      </div>
    </section>
  )
}

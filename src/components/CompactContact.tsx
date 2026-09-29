import { useContent } from '../hooks'
import { links } from '../data/links'

export function CompactContact() {
  const c = useContent()
  return (
    <section id="contact" className="compact-contact" aria-labelledby="contact-heading">
      <div className="shell">
        <div>
          <h2 id="contact-heading" className="editorial-title">
            {c.portfolio.contactTitle}
          </h2>
          <p>{c.portfolio.contactBody}</p>
        </div>
        <div className="contact-links">
          <a className="contact-email" href={`mailto:${links.email}`}>
            {c.contact.email}
            <span aria-hidden="true">↗</span>
          </a>
          <a href={links.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href={links.resume} target="_blank" rel="noreferrer">
            {c.contact.resume} ↗
          </a>
        </div>
      </div>
    </section>
  )
}

import { useContent } from '../hooks'
import { links } from '../data/links'
import { CopyButton } from './CopyButton'

export function CompactContact() {
  const c = useContent()
  const p = c.portfolio
  return (
    <section id="contact" className="compact-contact" aria-labelledby="contact-heading">
      <div className="shell">
        <div>
          <h2 id="contact-heading" className="editorial-title">
            {p.contactTitle}
          </h2>
          <p>{p.contactBody}</p>
        </div>
        <div className="contact-block">
          <dl className="contact-list">
            <div>
              <dt>{p.contactLabels.email}</dt>
              <dd><a href={`mailto:${links.email}`}>{links.email}</a></dd>
            </div>
            <div>
              <dt>{p.contactLabels.phone}</dt>
              <dd><a href={`tel:+86${links.phone}`}>{links.phone}</a></dd>
            </div>
            <div>
              <dt>{p.contactLabels.wechat}</dt>
              <dd>
                {links.wechat}
                <CopyButton className="contact-copy" value={links.wechat} label={p.copy} done={p.copied} failed={p.xhsCopyFailed} />
              </dd>
            </div>
            <div>
              <dt>{p.contactLabels.availability}</dt>
              <dd>{p.aboutFacts[2].value}</dd>
            </div>
          </dl>
          <div className="contact-links">
            <a href={links.resume} target="_blank" rel="noreferrer">
              {c.contact.resume} ↗
            </a>
            <a href={links.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

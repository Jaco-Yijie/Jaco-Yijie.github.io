import { Link } from 'react-router-dom'
import { useContent } from '../hooks'
import { useLangHref } from '../i18n'
import { links } from '../data/links'
import { CopyButton } from './CopyButton'
import { Eyebrow } from './ui'

/** About + 小红书 + Contact 合并为一个收尾区块，避免首页逐段堆叠 */
export function Closing() {
  const c = useContent()
  const p = c.portfolio
  const withLang = useLangHref()
  return (
    <section id="about" className="closing" aria-labelledby="about-heading">
      <div className="shell closing-grid">
        <div className="closing-about">
          <Eyebrow>{p.aboutEyebrow}</Eyebrow>
          <h2 id="about-heading" className="closing-title">{p.aboutTitle}</h2>
          <dl className="about-facts">
            {p.aboutFacts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
          <nav id="practice" className="closing-practice" aria-label={p.practiceLabel}>
            <Link to={withLang('/ai-evals')}>{p.practiceLinks.evals} →</Link>
            <Link to={withLang('/learning')}>{p.practiceLinks.learning} →</Link>
          </nav>
        </div>

        <div id="contact" className="closing-contact">
          <h2 className="closing-label">{p.contactTitle}</h2>
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
          </dl>
          <div className="contact-links">
            <a href={links.resume} target="_blank" rel="noreferrer">{c.contact.resume} ↗</a>
            <a href={links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>

        <div id="xiaohongshu" className="closing-xhs">
          <h2 className="closing-label">{p.xhsTitle}</h2>
          <p>{p.xhsBody}</p>
          <p className="closing-xhs-id">
            <span>{p.xhsIdLabel}</span>
            <strong>{links.xiaohongshuId}</strong>
          </p>
          <CopyButton className="xhs-copy" value={links.xiaohongshuId} label={p.xhsCopy} done={p.xhsCopied} failed={p.xhsCopyFailed} />
        </div>
      </div>
    </section>
  )
}

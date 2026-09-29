import { useContent } from '../hooks'
import { links } from '../data/links'
import { CopyButton } from './CopyButton'
import { Eyebrow } from './ui'

/** 小红书是内容入口而非联系方式；主页 URL 未确认，只提供复制小红书号 */
export function Xiaohongshu() {
  const { portfolio: c } = useContent()
  return (
    <section id="xiaohongshu" className="xhs-section" aria-labelledby="xhs-heading">
      <div className="shell xhs-inner">
        <div>
          <Eyebrow>{c.xhsEyebrow}</Eyebrow>
          <h2 id="xhs-heading" className="xhs-title">{c.xhsTitle}</h2>
          <p className="xhs-body">{c.xhsBody}</p>
        </div>
        <div className="xhs-id">
          <p>
            <span>{c.xhsIdLabel}</span>
            <strong>{links.xiaohongshuId}</strong>
          </p>
          <CopyButton
            className="xhs-copy"
            value={links.xiaohongshuId}
            label={c.xhsCopy}
            done={c.xhsCopied}
            failed={c.xhsCopyFailed}
          />
        </div>
      </div>
    </section>
  )
}

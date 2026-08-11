import { links } from '../data/links'
import { Button, Eyebrow } from './ui'

/**
 * Hero —— DESIGN_SYSTEM.md §6 / PORTFOLIO_PRD.md §5.3
 *
 * 关键设计判断（§6.3）：min-height 88vh 而非 100vh，
 * 让 Proof Metrics 的第一行数字在首屏底部露出 40–80px，
 * 这是让 HR 继续滚动的唯一诱因。
 * 移动端用 dvh 规避地址栏高度跳变（§15.3 M6）。
 */
export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-heading">
      <div className="shell flex min-h-[88dvh] flex-col justify-center pt-[72px] pb-16 md:pb-[88px] lg:pb-[120px]">
        <Eyebrow>AI Product Candidate · Data Science</Eyebrow>

        <h1 id="hero-heading" className="mt-6 text-display-xl text-ink">
          Jaco Wang
          <span
            lang="zh-CN"
            className="mt-1 block text-[0.62em] font-medium text-ink-2"
          >
            王一杰
          </span>
        </h1>

        {/* Statement：强制窄行宽，两行断句制造版面节奏（§6.2） */}
        <p className="mt-8 max-w-[16ch] text-display-l text-ink">
          I build and evaluate practical AI products.
        </p>

        <p className="mt-6 max-w-[640px] text-body-l text-ink-2">
          Data Science student working on AI product design, LLM evaluation,
          prompt systems, and data-driven product decisions.
        </p>

        <p className="mt-8 text-caption text-ink-3">
          Universiti Kebangsaan Malaysia · Available within 1 week · 6+ month
          internship
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="#work" variant="primary" size="lg">
            View Selected Work
          </Button>
          <Button href="#work" variant="secondary" size="lg">
            Read Case Studies
          </Button>
          <Button href={links.github} variant="secondary" size="lg" external>
            GitHub
          </Button>
          <Button href={links.resume} variant="secondary" size="lg" external>
            Resume
          </Button>
        </div>
      </div>
    </section>
  )
}

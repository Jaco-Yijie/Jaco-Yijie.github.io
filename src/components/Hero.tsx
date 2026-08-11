import { links } from '../data/links'
import { useContent } from '../hooks'
import { Button, Eyebrow } from './ui'

/**
 * Hero —— DESIGN_SYSTEM.md §6
 *
 * 原本用 88dvh 是为了让下方 Proof Metrics 的第一行数字在首屏底部露出。
 * 那一组数字已移除，这个理由不再成立，因此改为 76dvh：
 * 首屏仍然由 Hero 主导，同时 Selected Work 的分隔线会自然进入视野，
 * 而不会在 CTA 与项目区之间留下一大片空白。
 * 移动端用 dvh 规避地址栏高度跳变。
 */
export function Hero() {
  const c = useContent()

  return (
    <section id="hero" aria-labelledby="hero-heading">
      <div className="shell flex min-h-[76dvh] flex-col justify-center pt-[88px] pb-10 md:pb-12 lg:pb-16">
        <Eyebrow>{c.hero.eyebrow}</Eyebrow>

        <h1 id="hero-heading" className="mt-6 text-display-xl text-ink">
          {c.hero.name}
          <span className="mt-1 block text-[0.62em] font-medium text-ink-2">{c.hero.nameAlt}</span>
        </h1>

        {/* Statement：强制窄行宽，断句制造版面节奏（§6.2） */}
        <p className="mt-8 max-w-[16ch] text-display-l text-ink">{c.hero.statement}</p>

        <p className="mt-6 max-w-[640px] text-body-l text-ink-2">{c.hero.supporting}</p>

        <p className="mt-8 text-caption text-ink-3">{c.hero.meta}</p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="#work" variant="primary" size="lg">{c.cta.viewWork}</Button>
          <Button href="#work" variant="secondary" size="lg">{c.cta.readCaseStudies}</Button>
          <Button href={links.github} variant="secondary" size="lg" external>GitHub</Button>
          <Button href={links.resume} variant="secondary" size="lg" external>{c.cta.resume}</Button>
        </div>
      </div>
    </section>
  )
}

import { links } from '../data/links'
import { useLang } from '../i18n'
import { useContent } from '../hooks'
import { Button, Eyebrow } from './ui'

export function Hero() {
  const c = useContent()
  const { lang } = useLang()

  return (
    <section id="hero" aria-labelledby="hero-heading">
      <div className="shell flex flex-col pt-[96px] pb-12 lg:pt-[112px] lg:pb-14">
        <Eyebrow>{c.hero.eyebrow}</Eyebrow>

        <h1 id="hero-heading" className="mt-6 text-display-xl text-ink">
          {c.hero.name}
          <span className="mt-1 block text-[0.62em] font-medium text-ink-2">{c.hero.nameAlt}</span>
        </h1>

        <p className={`mt-6 text-ink ${lang === 'zh' ? 'max-w-[20em] text-[clamp(1.5rem,6.3vw,3.5rem)] leading-[1.2] font-semibold tracking-[-0.03em]' : 'max-w-[18ch] text-display-l text-balance'}`}>
          {c.hero.statementLines ? c.hero.statementLines.map((line) => <span key={line} className="block">{line}</span>) : c.hero.statement}
        </p>

        <p className="mt-6 max-w-[640px] text-body-l text-ink-2">{c.hero.supporting}</p>

        <p className="mt-5 text-caption text-ink-3">{c.hero.meta}</p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Button href="#work" variant="primary" size="lg">{c.cta.viewWork}</Button>
          <Button href={links.resume} variant="secondary" size="lg" external>{c.cta.resume}</Button>
          <a href={links.github} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center px-3 text-body-s text-ink-2 hover:text-accent">GitHub ↗</a>
        </div>
      </div>
    </section>
  )
}

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useContent } from '../hooks'
import { useLangHref } from '../i18n'
import { Eyebrow } from '../components/ui'
import { Reveal } from '../components/motion'

/**
 * /learning
 * 每条 note 都出自一个真实的项目决策，并标注来源项目。
 * 没有真实内容的主题保持简短并说明边界，不写虚构文章。
 */
export function LearningPage() {
  const c = useContent()
  const withLang = useLangHref()
  const [active, setActive] = useState<string>('__all__')

  useEffect(() => {
    const { hash } = window.location
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [])

  const categories = Array.from(new Set(c.learning.notes.map((n) => n.category)))
  const shown =
    active === '__all__' ? c.learning.notes : c.learning.notes.filter((n) => n.category === active)

  const chip = (key: string, label: string) => (
    <button
      key={key}
      type="button"
      onClick={() => setActive(key)}
      aria-pressed={active === key}
      className={`text-label rounded-full border px-3 py-1.5 transition-colors duration-[180ms] ${
        active === key
          ? 'border-accent/30 bg-accent/10 text-accent'
          : 'border-line-strong text-ink-2 hover:text-ink'
      }`}
    >
      {label}
    </button>
  )

  return (
    <>
      <header className="border-b border-line">
        <div className="shell pt-[104px] pb-14 lg:pt-[140px] lg:pb-20">
          <Eyebrow>{c.sections.learningEyebrow}</Eyebrow>
          <h1 className="mt-4 max-w-[20ch] text-display-l text-ink">{c.learning.heroTitle}</h1>
          <p className="mt-6 max-w-[58ch] text-body-l text-ink-2">{c.learning.heroLead}</p>
        </div>
      </header>

      <div className="shell py-14 lg:py-20">
        <div className="flex flex-wrap gap-2" role="group" aria-label={c.sections.filterNotes}>
          {chip('__all__', c.sections.all)}
          {categories.map((cat) => chip(cat, c.learning.categories[cat] ?? cat))}
        </div>

        <ul className="mt-10 border-t border-line">
          {shown.map((n, i) => (
            <Reveal as="li" key={n.slug} delay={Math.min(i, 6) * 40} className="border-b border-line">
              <article id={n.slug} className="scroll-mt-[100px] py-10 lg:py-14">
                <div className="grid grid-cols-1 gap-x-6 gap-y-6 lg:grid-cols-12">
                  <div className="lg:col-span-3">
                    <span className="text-label uppercase text-ink-3">
                      {c.learning.categories[n.category] ?? n.category}
                    </span>
                    <p className="text-caption mt-3 text-ink-3">{n.readingTime}</p>
                    {n.from && (
                      <p className="text-caption mt-1 text-ink-3">
                        {c.sections.from} <span className="text-ink-2">{n.from}</span>
                      </p>
                    )}
                  </div>

                  <div className="lg:col-span-8 lg:col-start-5">
                    <h2 className="max-w-[26ch] text-heading-l text-ink">{n.title}</h2>
                    <p className="mt-3 max-w-[60ch] text-body text-ink-2">{n.summary}</p>
                    <div className="mt-6 max-w-[68ch] space-y-5">
                      {n.body.map((p, j) => (
                        <p key={j} className="font-prose text-prose text-ink-2">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <div className="mt-12">
          <Link to={withLang('/')} className="text-body-s text-ink-3 transition-colors hover:text-ink">
            {c.cta.backHome}
          </Link>
        </div>
      </div>
    </>
  )
}

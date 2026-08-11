import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { isLive } from '../data/links'
import { Metric } from './Metric'
import { Button, Eyebrow, Tag } from './ui'
import { Reveal } from './motion'

/**
 * Selected Work —— DESIGN_SYSTEM.md §8
 * 全宽 Editorial Row，不是盒装卡片网格（盒装网格是作品集模板最强的视觉信号）。
 * 每张卡有独立的 highlight，避免四张长得一样。
 */
export function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-heading" className="border-t border-line">
      <div className="shell section-y">
        <header className="mb-8 md:mb-10 lg:mb-12">
          <Eyebrow>Selected Work</Eyebrow>
          <h2 id="work-heading" className="mt-4 text-display-m text-ink">
            Four projects, four different problems.
          </h2>
          <p className="mt-5 max-w-[58ch] text-body-l text-ink-2">
            Each one is here for a different reason: a boundary I had to redesign, a boundary I
            refused to cross, a system that runs without me, and a dataset that produced a decision.
          </p>
        </header>

        <ul className="border-t border-line">
          {projects.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 60} className="group block border-b border-line">
              <article className="relative grid grid-cols-1 gap-x-6 gap-y-8 py-7 transition-colors duration-[240ms] md:py-9 lg:grid-cols-12 lg:py-12 lg:group-hover:bg-surface-1">
                {/* hover 左侧指示条 */}
                <span
                  aria-hidden="true"
                  className="absolute -left-5 top-0 hidden h-full w-0.5 origin-top scale-y-0 bg-accent transition-transform duration-[320ms] group-hover:scale-y-100 lg:block"
                />

                <div className="lg:col-span-1">
                  <span className="text-eyebrow uppercase text-ink-3 transition-colors duration-[240ms] group-hover:text-accent">
                    {p.index}
                  </span>
                </div>

                <div className="lg:col-span-6">
                  <h3 className="text-heading-l text-ink">
                    <Link to={`/work/${p.slug}`} className="after:absolute after:inset-0">
                      {p.title}
                    </Link>
                  </h3>

                  {/* 中文副标题 = 英文标题的 0.62×（= 17px）。必须显式字号：
                      这个 <p> 是 h3 的兄弟节点，用 em 会相对 body 的 16px 解析。 */}
                  {p.titleZh && (
                    <p lang="zh-CN" className="mt-1 text-[17px] font-medium leading-snug text-ink-2">
                      {p.titleZh}
                    </p>
                  )}

                  <p className="mt-4 max-w-[48ch] text-body text-ink">{p.subtitle}</p>

                  <dl className="mt-5 max-w-[52ch] space-y-3">
                    <div>
                      <dt className="text-label uppercase text-ink-3">Problem</dt>
                      <dd className="mt-1 text-body-s text-ink-2">{p.problem}</dd>
                    </div>
                    <div>
                      <dt className="text-label uppercase text-ink-3">Outcome</dt>
                      <dd className="mt-1 text-body-s text-ink-2">{p.outcome}</dd>
                    </div>
                  </dl>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>

                  {/* z-10：让按钮浮在 h3 的 after 覆盖层之上，可独立点击 */}
                  <div className="relative z-10 mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                    {p.ctas
                      .filter((c) => isLive(c.href))
                      .map((c) => (
                        <Button
                          key={c.label}
                          href={c.href}
                          variant={c.variant}
                          size="sm"
                          external={c.external}
                        >
                          {c.label}
                        </Button>
                      ))}
                  </div>
                </div>

                <div className="lg:col-span-4 lg:col-start-9">
                  <dl className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-1 lg:gap-y-7">
                    {p.proofs.map((m) => (
                      <Metric key={m.label} data={m} variant="card" />
                    ))}
                  </dl>

                  <p className="mt-7 border-l border-line-strong pl-4 text-body-s text-ink-3 lg:mt-8">
                    <span className="text-label mr-2 uppercase text-ink-2">
                      {p.highlight.label}
                    </span>
                    {p.highlight.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

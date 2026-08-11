import { capabilities, capabilitiesClosing } from '../data/capabilities'
import { Eyebrow } from './ui'

/**
 * Capabilities —— DESIGN_SYSTEM.md §10
 *
 * 硬性禁止（§10.4）：百分比 / 进度条 / 星级 / 雷达图 / 熟练度标签。
 * 唯一的能力证据是 "Used in" 的项目引用。
 *
 * 用 hairline 分隔而非独立卡片描边，与 Proof Metrics 保持同一种分割语言。
 */
export function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="border-t border-line"
    >
      <div className="shell section-y">
        <header className="mb-8 md:mb-10 lg:mb-12">
          <Eyebrow>Capabilities</Eyebrow>
          <h2 id="capabilities-heading" className="mt-4 text-display-m text-ink">
            Every capability points to a project.
          </h2>
        </header>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c, i) => (
            <li
              key={c.index}
              className={[
                // flex-col + 下方 mt-auto：让四列的 "Used in" 底部对齐，
                // 技能条目数量不同也不会显得参差
                'flex flex-col py-8 lg:py-0',
                // 分隔线一律「只在需要时加」，不用 border-0 覆盖（同族工具类
                // specificity 相同，生效与否取决于 Tailwind 生成顺序）
                i > 0 ? 'border-t border-line' : '',              // mobile：项间水平线
                i >= 2 ? 'md:border-t md:border-line' : '',       // tablet 2×2：第 3/4 项上方
                i === 1 ? 'md:border-t-0' : '',                   // tablet：第 2 项与第 1 项同排
                i > 0 ? 'lg:border-l lg:border-line lg:pl-6' : '', // desktop：项间垂直线
                i > 0 ? 'lg:border-t-0' : '',                     // desktop：取消水平线
                i < 3 ? 'lg:pr-6' : '',
              ].join(' ')}
            >
              <Eyebrow>{c.index}</Eyebrow>

              <h3 className="mt-3 text-heading-m text-ink">{c.title}</h3>

              <div className="mt-4 h-px w-8 bg-line-strong" aria-hidden="true" />

              <ul className="mt-4 space-y-0">
                {c.skills.map((s) => (
                  <li key={s} className="text-body-s leading-[1.9] text-ink-2">
                    {s}
                  </li>
                ))}
              </ul>

              <p className="text-label mt-auto pt-6 uppercase text-ink-3">Used in</p>
              <ul className="mt-2 space-y-1">
                {c.usedIn.map((u) => (
                  <li key={u.slug}>
                    <a
                      href={`/work/${u.slug}`}
                      className="text-body-s text-accent hover:text-accent-hover"
                    >
                      {u.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <p className="mt-12 max-w-[40ch] text-body-l text-ink-2 lg:mt-16">
          {capabilitiesClosing}
        </p>
      </div>
    </section>
  )
}

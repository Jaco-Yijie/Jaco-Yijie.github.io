import { heroMetricIds } from '../data/metrics'
import { useContent } from '../hooks'
import { Metric } from './Metric'

/**
 * Proof Metrics —— DESIGN_SYSTEM.md §7.1
 * Desktop 4 列，Mobile 2×2 田字格。
 * 分隔线用「只在需要时加」的条件式，不用 border-0 覆盖
 * （同族工具类 specificity 相同，谁生效取决于 Tailwind 生成顺序）。
 */
export function ProofMetrics() {
  const c = useContent()

  const cellCls = (i: number) => {
    const cls = ['py-6 md:py-8 lg:py-10']
    if (i % 2 === 1) cls.push('border-l border-line pl-5')
    if (i > 0) cls.push('lg:border-l lg:border-line lg:pl-6')
    if (i >= 2) cls.push('border-t border-line lg:border-t-0')
    return cls.join(' ')
  }

  return (
    <section aria-label={c.sections.keyProof} className="border-y border-line">
      <div className="shell">
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {heroMetricIds.map((id, i) => (
            <div key={id} className={cellCls(i)}>
              <Metric id={id} variant="hero" />
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

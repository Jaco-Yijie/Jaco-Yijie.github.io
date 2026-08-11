import { heroMetrics } from '../data/metrics'
import { Metric } from './Metric'

/**
 * Proof Metrics —— DESIGN_SYSTEM.md §7.1
 *
 * Desktop：4 列等宽，列间 1px 垂直 hairline，首尾无线。
 * Mobile：2 × 2 田字格，水平 + 垂直 hairline。
 *
 * 实现注意：分隔线用「只在需要时加」的条件式，
 * 不用「先加 border 再用 border-0 覆盖」——同族工具类
 * （border-l / border-l-0）specificity 相同，谁生效取决于
 * Tailwind 生成顺序，是一个不该赌的隐患。
 */
export function ProofMetrics() {
  const cellCls = (i: number) => {
    const cls = ['py-6 md:py-8 lg:py-10']

    // 垂直分隔线
    if (i % 2 === 1) cls.push('border-l border-line pl-5')       // mobile 右列
    if (i > 0) cls.push('lg:border-l lg:border-line lg:pl-6')    // desktop 第 2–4 列
    if (i === 1) cls.push('lg:pl-6')                             // 保持一致的左内边距

    // 水平分隔线：仅 mobile 第二行
    if (i >= 2) cls.push('border-t border-line lg:border-t-0')

    return cls.join(' ')
  }

  return (
    <section aria-label="Key proof metrics" className="border-y border-line">
      <div className="shell">
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {heroMetrics.map((m, i) => (
            <div key={m.label} className={cellCls(i)}>
              <Metric data={m} variant="hero" />
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

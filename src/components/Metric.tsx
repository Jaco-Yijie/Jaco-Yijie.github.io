import { metricValues, type MetricId } from '../data/metrics'
import { useContent } from '../hooks'
import { CountUp } from './motion'

/**
 * Proof Metric —— DESIGN_SYSTEM.md §7
 *
 * 数字来自 data/metrics.ts（与语言无关），label 来自当前语言包。
 * 核心约束：数字 : 标签 字号比 ≥ 3.5 : 1（移动端 ≥ 4 : 1）。
 *
 * 符号降级（§7.3）：prefix 0.60×·ink-3 / infix 0.50×·accent / suffix 0.62×·ink-2
 * 数字本体永远 ink 满字号。
 *
 * 语义（§17.1）：<dl> 内 dt=标签 / dd=数字，视觉用 flex-col-reverse。
 */
export function Metric({ id, variant = 'hero' }: { id: MetricId; variant?: 'hero' | 'card' }) {
  const c = useContent()
  const { prefix, value, infix, value2, suffix } = metricValues[id]
  const label = c.metricLabels[id]

  const numCls = variant === 'hero' ? 'text-metric text-ink tnum' : 'text-metric-sm text-ink tnum'
  const labelCls =
    variant === 'hero'
      ? 'text-label uppercase text-ink-2'
      : 'text-[11px] font-medium uppercase leading-[1.35] tracking-[0.1em] text-ink-2'

  const plain = `${prefix ?? ''}${value}${infix ? ` ${infix} ` : ''}${value2 ?? ''}${suffix ?? ''}`

  return (
    <div className="flex flex-col-reverse">
      <dt className={`${labelCls} mt-4 max-w-[22ch]`}>{label}</dt>
      <dd className={numCls} aria-label={`${plain} ${label}`}>
        <span aria-hidden="true">
          {prefix && <span className="align-baseline text-[0.6em] text-ink-3">{prefix}</span>}
          <CountUp value={value} />
          {infix && <span className="mx-[0.14em] align-baseline text-[0.5em] text-accent">{infix}</span>}
          {value2 && <CountUp value={value2} />}
          {suffix && <span className="align-baseline text-[0.62em] text-ink-2">{suffix}</span>}
        </span>
      </dd>
    </div>
  )
}

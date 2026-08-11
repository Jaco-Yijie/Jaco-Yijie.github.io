import type { Metric as MetricData } from '../data/metrics'
import { CountUp } from './motion'

/**
 * Proof Metric —— DESIGN_SYSTEM.md §7
 *
 * 核心约束：数字 : 标签 字号比 ≥ 3.5 : 1（移动端 ≥ 4 : 1）。
 *
 * 符号降级规则（§7.3）：
 *   prefix (~)  0.60× · ink-3
 *   infix (→ +) 0.50× · accent · 左右 0.14em
 *   suffix (M+) 0.62× · ink-2
 * 数字本体永远 ink 满字号 —— 读者第一眼只捕获数值。
 *
 * 语义（§17.1）：<dl> 内 dt=标签 / dd=数字，视觉用 flex-col-reverse
 * 让数字在上；屏幕阅读器读作「AI Evaluation Cases: 10」。
 */
type Props = {
  data: MetricData
  variant?: 'hero' | 'card'
}

export function Metric({ data, variant = 'hero' }: Props) {
  const { prefix, value, infix, value2, suffix, label } = data

  const numCls = variant === 'hero' ? 'text-metric text-ink tnum' : 'text-metric-sm text-ink tnum'
  const labelCls =
    variant === 'hero'
      ? 'text-label uppercase text-ink-2'
      : 'text-[11px] font-medium uppercase leading-[1.35] tracking-[0.1em] text-ink-2'

  // 屏幕阅读器读终值，不朗读 count-up 中间过程（§17.4）
  const plain = `${prefix ?? ''}${value}${infix ? ` ${infix} ` : ''}${value2 ?? ''}${suffix ?? ''}`

  return (
    <div className="flex flex-col-reverse">
      <dt className={`${labelCls} mt-4 max-w-[22ch]`}>{label}</dt>
      <dd className={numCls} aria-label={`${plain} ${label}`}>
        <span aria-hidden="true">
          {prefix && <span className="align-baseline text-[0.6em] text-ink-3">{prefix}</span>}
          <CountUp value={value} />
          {infix && (
            <span className="mx-[0.14em] align-baseline text-[0.5em] text-accent">{infix}</span>
          )}
          {value2 && <CountUp value={value2} />}
          {suffix && <span className="align-baseline text-[0.62em] text-ink-2">{suffix}</span>}
        </span>
      </dd>
    </div>
  )
}

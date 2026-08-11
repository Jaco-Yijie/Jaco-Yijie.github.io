import { useEffect, useRef, useState, type ReactNode } from 'react'

/**
 * Motion —— DESIGN_SYSTEM.md §16
 * 只允许四类：fade+slide / number reveal / hover / stagger。
 * 全部尊重 prefers-reduced-motion（§16.4）。
 * 不引入动画库：这几类用 IntersectionObserver + CSS transition 就够了。
 */

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduced
}

/**
 * 进入视口 15% 时触发一次（§16.3）。
 *
 * 兜底很重要：内容的可见性绝不能只依赖 IntersectionObserver。
 * 只要它因为任何原因没有派发（渲染被节流、页面在后台、环境不支持），
 * 元素就会永远停在 opacity:0 —— 对一个求职作品集来说，
 * 这意味着招聘方可能看到一片空白。所以无论如何都在 1.2s 后强制显示。
 */
const FALLBACK_MS = 1200

function useInView<T extends HTMLElement>(enabled: boolean) {
  const ref = useRef<T>(null)
  const [seen, setSeen] = useState(!enabled)

  useEffect(() => {
    if (!enabled || seen) return

    const timer = window.setTimeout(() => setSeen(true), FALLBACK_MS)

    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      return () => window.clearTimeout(timer)
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -5% 0px' },
    )
    io.observe(el)

    return () => {
      window.clearTimeout(timer)
      io.disconnect()
    }
  }, [enabled, seen])

  return { ref, seen }
}

/** fade + slide-up，可选 stagger 延迟 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  className = '',
}: {
  children: ReactNode
  delay?: number
  as?: 'div' | 'li' | 'section' | 'article' | 'header'
  className?: string
}) {
  const reduced = usePrefersReducedMotion()
  const { ref, seen } = useInView<HTMLDivElement>(!reduced)

  if (reduced) return <Tag className={className}>{children}</Tag>

  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{
        opacity: seen ? 1 : 0,
        transform: seen ? 'none' : 'translateY(24px)',
        transition: `opacity 600ms var(--ease-out-expo) ${delay}ms, transform 600ms var(--ease-out-expo) ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  )
}

/**
 * Number reveal —— 900ms count-up（§7.5）。
 * 非纯数字（V1–V5 / V1.4）直接淡入，不做递增。
 * reduced motion 下直接显示终值。
 */
export function CountUp({ value }: { value: string }) {
  const reduced = usePrefersReducedMotion()
  const numeric = /^\d+(\.\d+)?$/.test(value)
  const { ref, seen } = useInView<HTMLSpanElement>(!reduced && numeric)
  const [shown, setShown] = useState(numeric && !reduced ? '0' : value)

  useEffect(() => {
    if (!seen || !numeric || reduced) return
    const target = parseFloat(value)
    const decimals = (value.split('.')[1] ?? '').length
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      // 必须钳制到 [0,1]：rAF 回调拿到的是当前帧【开始】的时间戳，
      // 它可能早于上面记录的 start，进度变负会让缓动算出负数，
      // 于是数字会闪一下 "-4M+" 这种东西。
      const p = Math.min(1, Math.max(0, (now - start) / 900))
      const eased = 1 - Math.pow(1 - p, 3)
      setShown((target * eased).toFixed(decimals))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setShown(value)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [seen, numeric, reduced, value])

  if (!numeric || reduced) return <span>{value}</span>
  return <span ref={ref}>{shown}</span>
}

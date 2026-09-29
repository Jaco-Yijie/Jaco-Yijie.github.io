import { useEffect, useState } from 'react'

/** 复制纯文本；失败时提示手动复制，不静默吞掉 */
export function CopyButton({ value, label, done, failed, className }: {
  value: string
  label: string
  done: string
  failed: string
  className?: string
}) {
  const [state, setState] = useState<'idle' | 'done' | 'failed'>('idle')
  useEffect(() => {
    if (state === 'idle') return
    const t = window.setTimeout(() => setState('idle'), 2000)
    return () => window.clearTimeout(t)
  }, [state])
  async function copy() {
    try {
      await navigator.clipboard.writeText(value)
      setState('done')
    } catch {
      setState('failed')
    }
  }
  return (
    <button type="button" className={className} onClick={() => void copy()}>
      <span aria-live="polite">{state === 'done' ? done : state === 'failed' ? failed : label}</span>
    </button>
  )
}

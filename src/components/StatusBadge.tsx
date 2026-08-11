import type { ProjectStatus } from '../data/projects'
import { useContent } from '../hooks'

/**
 * 项目状态徽章。
 *
 * 刻意克制：一个小圆点 + 文字，中性灰底与描边，不用红色、不用警告图标。
 * 要传达的是「这是一个还在持续迭代的真实项目」，
 * 而不是「这个项目没做完 / 出问题了」。
 */
export function StatusBadge({ status }: { status: ProjectStatus }) {
  const c = useContent()
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface-1 px-3 py-1.5">
      <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
      <span className="text-label uppercase text-ink-2">{c.status[status].label}</span>
    </span>
  )
}

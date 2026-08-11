/**
 * GitHub Pages 上的 SPA 深链会返回 404 状态码——即使 404.html 把应用壳发了出去。
 * 这里为每个真实路由写一个目录 + index.html，让它们返回真正的 200，
 * 同时给每个路由填入自己的 <title> 与 description（分享和搜索都会用到）。
 *
 * 应用仍是客户端渲染：每份 HTML 都是同一个壳，React Router 根据 URL 决定渲染哪一页。
 */
import { mkdirSync, readFileSync, writeFileSync, copyFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist')
const shell = readFileSync(join(dist, 'index.html'), 'utf8')

const NAME = 'Jaco Wang'

const routes = [
  {
    path: 'work/seller-profit',
    title: `Seller Profit Calculator — Case Study — ${NAME}`,
    desc: 'Prompt constraints were not enough, so I redesigned the architecture so the LLM could no longer perform the calculation.',
  },
  {
    path: 'work/arcana',
    title: `Arcana — Case Study — ${NAME}`,
    desc: 'The LLM never draws the cards. It only interprets a result the user has already frozen. 160 runnable assertions keep it there.',
  },
  {
    path: 'work/stock-news',
    title: `Stock News Intelligence — Case Study — ${NAME}`,
    desc: 'A rule engine decides; the model only reviews what the rules are unsure about. 38 A-share industry sectors, fully automated.',
  },
  {
    path: 'work/taobao-analysis',
    title: `Taobao User Behavior Analysis — Case Study — ${NAME}`,
    desc: 'Turning 100M behavior logs into one segment an operations team can act on.',
  },
  {
    path: 'ai-evals',
    title: `AI Evaluation & Prompt Engineering — ${NAME}`,
    desc: 'Task boundary, output constraints, failure handling, context control and regression testing — with a library of real AI failure modes.',
  },
  {
    path: 'learning',
    title: `Learning — ${NAME}`,
    desc: 'Short notes on AI product work, each one out of a specific decision in a specific project.',
  },
]

const render = ({ title, desc }) =>
  shell
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[\s\S]*?(")/, `$1${desc}$2`)

for (const r of routes) {
  const dir = join(dist, r.path)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), render(r))
}

// 未知路径的兜底（应用壳，由路由渲染首页）
copyFileSync(join(dist, 'index.html'), join(dist, '404.html'))

console.log(`prerender: ${routes.length} routes + 404.html`)

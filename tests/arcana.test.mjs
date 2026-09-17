import assert from 'node:assert/strict'
import test from 'node:test'
import { readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { execFileSync } from 'node:child_process'
import ts from 'typescript'

const cache = new Map()
function load(file) {
  file = resolve(file)
  if (cache.has(file)) return cache.get(file)
  const exports = {}
  cache.set(file, exports)
  const { outputText } = ts.transpileModule(readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  })
  new Function('exports', 'require', outputText)(exports, (specifier) => load(resolve(dirname(file), `${specifier}.ts`)))
  return exports
}
const { caseStudiesEn } = load('src/data/caseStudies.ts')
const { caseStudiesZh } = load('src/data/caseStudies.zh.ts')
const { projectOverrides, arcanaQuickRead } = load('src/data/projectUpdates.ts')
const { projects } = load('src/data/projects.ts')
const { metricValues, projectMetricIds } = load('src/data/metrics.ts')
const arcana = (studies) => studies.find((study) => study.slug === 'arcana')

test('Arcana stays fourth and in development with usable case study and GitHub CTAs', () => {
  assert.deepEqual(projects.map((project) => project.slug), ['seller-profit', 'stock-news', 'taobao-analysis', 'arcana'])
  const project = projects[3]
  assert.equal(project.index, '04')
  assert.equal(project.status, 'development')
  assert.equal(project.ctas.find((cta) => cta.kind === 'caseStudy').href, '/work/arcana')
  assert.equal(project.ctas.find((cta) => cta.kind === 'github').href, 'https://github.com/Jaco-Yijie/arcana')
})

test('both languages retain ten matching chapters, six quick-read items and identical numeric evidence', () => {
  const zh = arcana(caseStudiesZh), en = arcana(caseStudiesEn)
  assert.equal(zh.chapters.length, 10)
  assert.deepEqual(zh.chapters.map((ch) => ch.num), en.chapters.map((ch) => ch.num))
  const numbers = (study) => JSON.stringify(study.chapters).match(/\d+(?:\.\d+)?/g).sort()
  assert.deepEqual(numbers(zh), numbers(en))
  for (const lang of ['zh', 'en']) {
    assert.equal(arcanaQuickRead[lang].items.length, 6)
    assert.equal(projectOverrides[lang].arcana.title, 'Arcana')
  }
  assert.equal(projectMetricIds.arcana.length, 3)
  assert.equal(Number(metricValues.assertions.value), 64 + 367 + 147 + 89 + 118)
  assert.ok(projectMetricIds.arcana.every((id) => metricValues[id].verified && metricValues[id].source.includes('2026-09-17')))
})

test('other project case studies and cards remain byte-for-byte unchanged', () => {
  for (const file of ['src/data/caseStudies.ts', 'src/data/caseStudies.zh.ts']) {
    const before = execFileSync('git', ['show', `HEAD:${file}`], { encoding: 'utf8' })
    const after = readFileSync(file, 'utf8')
    for (const name of ['sellerProfit', 'stockNews', 'taobao']) {
      const block = (text) => text.match(new RegExp(`const ${name}: CaseStudy = [\\s\\S]*?\\n}`))[0]
      assert.equal(block(after), block(before), `${file}: ${name}`)
    }
  }
  for (const file of ['src/content/zh.ts', 'src/content/en.ts']) {
    const before = execFileSync('git', ['show', `HEAD:${file}`], { encoding: 'utf8' })
    const after = readFileSync(file, 'utf8')
    for (const slug of ['seller-profit', 'stock-news', 'taobao-analysis']) {
      const block = (text) => text.match(new RegExp(`    '${slug}': \\{[\\s\\S]*?\\n    \\},`))[0]
      assert.equal(block(after), block(before), `${file}: ${slug}`)
    }
  }
})

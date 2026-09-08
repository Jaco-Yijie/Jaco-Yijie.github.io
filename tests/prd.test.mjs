import assert from 'node:assert/strict'
import test from 'node:test'
import { stockNewsPrd as prd } from '../src/data/stockNewsPrd.zh.ts'
import { links } from '../src/data/links.ts'

const tables = (num) => prd.sections.find((section) => section.num === num).blocks.filter((block) => block.kind === 'table')

test('the PDF transcription retains all 26 individually accepted requirements', () => {
  const expected = [4, 3, 3, 4, 4, 3, 2, 3].flatMap((count, group) =>
    Array.from({ length: count }, (_, index) => `F${group + 1}-${index + 1}`))
  const rows = tables('05').flatMap((table) => table.rows)
  assert.deepEqual(rows.map((row) => row[0]), expected)
  assert.ok(rows.every((row) => row.length === 3 && row.every((cell) => cell.trim().length > 0)))
  assert.match(rows.find((row) => row[0] === 'F8-3')[1], /66 个用例/)
})

test('all original chapters, metadata and acceptance thresholds are retained', () => {
  assert.deepEqual(prd.sections.map((section) => section.num), ['01','02','03','04','05','06','07','08','09'])
  assert.equal(prd.version, 'V1.4')
  assert.equal(prd.date, '2026-07-17')
  assert.equal(prd.metadata.length, 6)
  assert.deepEqual(tables('07')[0].rows.map((row) => row[2]), ['≥ 95%', '≤ 30 分钟', '≤ 5%', '≥ 90%', '≥ 80%，单次 ≤ 8 条', '≤ 20%'])
  assert.equal(tables('06')[0].rows.length, 5)
  assert.equal(tables('09')[0].rows.length, 5)
})

test('V2.0 remains planned and is never promoted to a shipped version', () => {
  const rows = tables('08')[0].rows
  assert.deepEqual(rows.map((row) => row[0]), ['V1.0','V1.1','V1.2','V1.3','V1.4','V2.0'])
  assert.ok(rows.slice(0, 5).every((row) => row[3] === '已上线'))
  assert.equal(rows[5][3], '规划中')
})

test('the complete PRD is internal and Arcana uses the documented public app', () => {
  assert.equal(links.prds.stockNews, '/work/stock-news/prd')
  assert.equal(links.demos.arcana, 'https://arcana-e190.onrender.com')
})

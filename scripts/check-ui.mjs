import assert from 'node:assert/strict'
import { mkdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

// Use an existing Playwright installation; no production dependency is required.
const moduleId = process.env.PLAYWRIGHT_MODULE
const { chromium } = await import(moduleId ? pathToFileURL(resolve(moduleId)).href : 'playwright')
const base = process.env.PORTFOLIO_TEST_URL ?? 'http://127.0.0.1:4175'
const output = process.env.UI_OUTPUT_DIR ?? '../ui-validation'
await mkdir(output, { recursive: true })
const browser = await chromium.launch({ channel: 'chrome', headless: true })
const results = []
try {
  for (const width of [320, 390, 900, 1440]) {
    for (const lang of ['zh', 'en']) {
      const page = await browser.newPage({ viewport: { width, height: 900 }, reducedMotion: 'reduce' })
      const errors = []
      page.on('pageerror', (error) => errors.push(error.message))
      page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()) })
      for (const route of ['/', '/work/arcana', '/work/stock-news', '/work/stock-news/prd']) {
        await page.goto(`${base}${route}?lang=${lang}`)
        await page.evaluate(() => document.fonts.ready)
        await page.waitForFunction((expected) => document.documentElement.lang === expected, lang === 'zh' ? 'zh-CN' : 'en')
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)
        assert.ok(overflow <= 1, `${width} ${lang} ${route}: overflow ${overflow}`)
        if (route === '/') {
          assert.equal(await page.locator('#hero a[href="#work"]').count(), 1)
          for (const slug of ['stock-news', 'arcana']) {
            const trigger = page.locator('figure button[aria-haspopup="dialog"]').filter({ has: page.locator(`img[src*="${slug}.webp"]`) })
            await trigger.click()
            assert.equal(await page.locator('dialog[open]').count(), 1)
            await page.keyboard.press('Escape')
            await page.waitForFunction(() => !document.querySelector('dialog[open]'))
            assert.equal(await trigger.evaluate((el) => el === document.activeElement), true)
          }
          await page.evaluate(() => scrollTo(0, 0))
        } else {
          if (route === '/work/arcana') {
            const demo = page.locator('main a[href="https://arcana-e190.onrender.com"]').first()
            assert.ok((await demo.boundingBox()).y < 650, 'Demo must be visible early')
          }
          const target = route.endsWith('/prd') ? 'prd-feature-5-8' : 'ch-02'
          if (width < 1280) await page.getByRole('button', { name: /^(目录|Contents)/ }).click()
          await page.locator(`a[href="#${target}"]:visible`).click()
          await page.waitForFunction((id) => location.hash === `#${id}` && document.getElementById(id).getBoundingClientRect().top >= 90 && document.getElementById(id).getBoundingClientRect().top < 180, target)
          assert.equal(await page.locator('dialog[open]').count(), 0)
          assert.equal(await page.evaluate(() => document.body.style.overflow), '')
          if (route.endsWith('/prd')) {
            assert.equal(await page.locator('[data-requirement]').count(), 26)
            if (width < 768) {
              const sizes = await page.locator('.requirements-table').evaluateAll((tables) => tables.map((table) => ({ width: table.getBoundingClientRect().width, scroll: table.scrollWidth, display: getComputedStyle(table.querySelector('td')).display })))
              assert.ok(sizes.every((table) => table.scroll <= table.width + 1 && table.display === 'block'))
            }
          }
        }
        if (lang === 'zh') {
          await page.waitForTimeout(300) // Let navigation background transitions settle for visual review.
          await page.screenshot({ path: `${output}/${width}-${route === '/' ? 'home' : route.split('/').at(-1)}.png`, animations: 'disabled' })
        }
        assert.deepEqual(errors, [])
        results.push({ width, lang, route, passed: true })
      }
      await page.close()
    }
  }
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } })
  await page.goto(`${base}/work/arcana?lang=zh#ch-02`)
  await page.waitForFunction(() => Math.abs(document.getElementById('ch-02').getBoundingClientRect().top - 104) < 2)
  await page.goto(`${base}/work/stock-news/prd?lang=zh#prd-feature-5-3`)
  await page.waitForFunction(() => Math.abs(document.getElementById('prd-feature-5-3').getBoundingClientRect().top - 104) < 2)
  await page.getByRole('button', { name: /^目录/ }).click()
  await page.keyboard.press('Escape')
  await page.waitForFunction(() => !document.querySelector('dialog[open]'))
  await page.getByRole('button', { name: /^目录/ }).click()
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.waitForFunction(() => !document.querySelector('dialog[open]') && document.body.style.overflow === '')
  await page.locator('a[href="#prd-feature-5-1"]:visible').click()
  await page.waitForFunction(() => Math.abs(document.getElementById('prd-feature-5-1').getBoundingClientRect().top - 104) < 2)
  await page.getByRole('button', { name: 'EN', exact: true }).click()
  await page.waitForFunction(() => document.documentElement.lang === 'en')
  assert.match(page.url(), /lang=en#prd-feature-5-1/)
  await page.setViewportSize({ width: 390, height: 844 })
  await page.getByRole('button', { name: /open menu/i }).click()
  await page.getByRole('button', { name: '中文', exact: true }).filter({ visible: true }).click()
  await page.keyboard.press('Escape')
  await page.getByRole('button', { name: /^目录/ }).click()
  await page.screenshot({ path: `${output}/mobile-contents.png` })
  await page.keyboard.press('Escape')
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto(`${base}/work/arcana?lang=zh`)
  await page.evaluate(() => document.fonts.ready)
  await page.screenshot({ path: `${output}/mobile-arcana-header.png` })
  await page.goto(`${base}/?lang=zh`)
  await page.locator('figure').first().scrollIntoViewIfNeeded()
  await page.waitForTimeout(500)
  await page.screenshot({ path: `${output}/mobile-stock-preview.png` })
  await page.close()
  await writeFile(`${output}/results.json`, JSON.stringify(results, null, 2))
  console.log(`Passed ${results.length} responsive route checks, including dialogs, anchors, CTA and PRD requirements.`)
  console.log('Passed normal-motion deep links, responsive dialog cleanup and desktop/mobile language switching.')
} finally {
  await browser.close()
}

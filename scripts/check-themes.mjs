import assert from 'node:assert/strict'
import { mkdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
const moduleId = process.env.PLAYWRIGHT_MODULE
const { chromium } = await import(moduleId ? pathToFileURL(resolve(moduleId)).href : 'playwright')
const base = process.env.PORTFOLIO_TEST_URL ?? 'http://127.0.0.1:4175'
const output = process.env.UI_OUTPUT_DIR ?? '../round2-validation'
await mkdir(output, { recursive: true })
const browser = await chromium.launch({ channel: 'chrome', headless: true })
const results = []
const round1 = { zh: { 390: 8849, 1440: 7402 }, en: { 390: 9355, 1440: 7587 } }
async function chooseTheme(page, name) {
  const switcher = page.locator('.nav-preferences .theme-switcher')
  await switcher.locator('summary').click()
  await switcher.getByRole('button', { name, exact: true }).click()
}
try {
  for (const width of [320, 375, 390, 430, 768, 1024, 1440]) {
    for (const lang of ['zh', 'en']) {
      for (const theme of ['light', 'dark']) {
        const page = await browser.newPage({
          viewport: { width, height: 900 },
          colorScheme: theme,
          reducedMotion: 'reduce',
        })
        const errors = []
        page.on('pageerror', (error) => errors.push(error.message))
        await page.goto(`${base}/?lang=${lang}`)
        await page.evaluate(() => document.fonts.ready)
        assert.equal(await page.locator('html').getAttribute('data-theme-mode'), 'system')
        assert.equal(await page.locator('html').getAttribute('data-theme'), theme)
        assert.equal(await page.locator('main > section').count(), 5)
        const heading = await page.locator('h1').innerText()
        if (lang === 'zh') assert.match(heading, /把 AI 想法/)
        else assert.doesNotMatch(heading, /[\u3400-\u9fff]/)
        const height = await page.evaluate(() => document.documentElement.scrollHeight)
        if (round1[lang][width])
          assert.ok(
            height < round1[lang][width] * 0.65,
            `${lang} ${width}: page not significantly shorter`,
          )
        for (const id of ['hero', 'motion', 'work', 'about', 'contact']) {
          await page.locator(`#${id}`).scrollIntoViewIfNeeded()
          assert.ok(
            await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1),
            `${lang} ${width} ${theme} ${id}: horizontal overflow`,
          )
        }
        const styles = await page.evaluate(() => {
          const root = getComputedStyle(document.documentElement)
          const colors = Object.fromEntries(
            [
              '--color-bg',
              '--color-ink',
              '--color-ink-2',
              '--color-ink-3',
              '--color-accent',
              '--color-accent-on',
            ].map((key) => [key, root.getPropertyValue(key).trim()]),
          )
          return {
            colors,
            stage: getComputedStyle(document.querySelector('.video-canvas')).backgroundColor,
            card: getComputedStyle(document.querySelector('.project-visual')).backgroundColor,
            nav: getComputedStyle(document.querySelector('.nav-inner')).backgroundColor,
          }
        })
        // Check semantic text contrast in both themes, including muted labels and filled CTAs.
        const luminance = (hex) => {
          const rgb = hex
            .slice(1)
            .match(/../g)
            .slice(0, 3)
            .map((v) => parseInt(v, 16) / 255)
            .map((v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4))
          return rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722
        }
        const contrast = (a, b) => {
          const l = [luminance(a), luminance(b)].sort((a, b) => b - a)
          return (l[0] + 0.05) / (l[1] + 0.05)
        }
        for (const key of ['--color-ink', '--color-ink-2', '--color-ink-3', '--color-accent'])
          assert.ok(
            contrast(styles.colors[key], styles.colors['--color-bg']) >= 4.5,
            `${theme}: insufficient ${key} contrast`,
          )
        assert.ok(
          contrast(styles.colors['--color-accent'], styles.colors['--color-accent-on']) >= 4.5,
        )
        if ([390, 1440].includes(width)) {
          await page.evaluate(() => scrollTo(0, 0))
          await page.screenshot({
            path: `${output}/${width}-${lang}-${theme}.png`,
            fullPage: true,
            animations: 'disabled',
          })
        }
        assert.deepEqual(errors, [])
        results.push({ width, lang, theme, height, ...styles })
        await page.close()
      }
    }
  }
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    colorScheme: 'light',
    locale: 'zh-CN',
    reducedMotion: 'reduce',
  })
  const page = await context.newPage()
  await page.goto(base)
  assert.equal(
    await page.locator('html').getAttribute('lang'),
    'zh-CN',
    'fresh Chinese browser uses Chinese',
  )
  await page.emulateMedia({ colorScheme: 'dark' })
  await page.waitForFunction(() => document.documentElement.dataset.theme === 'dark')
  await chooseTheme(page, '浅色')
  await page.waitForFunction(() => document.documentElement.dataset.theme === 'light')
  assert.equal(await page.evaluate(() => localStorage.getItem('portfolio-theme')), 'light')
  await page.reload()
  assert.equal(
    await page.locator('html').getAttribute('data-theme'),
    'light',
    'explicit preference survives reload',
  )
  await page.emulateMedia({ colorScheme: 'light' })
  await page.emulateMedia({ colorScheme: 'dark' })
  assert.equal(
    await page.locator('html').getAttribute('data-theme'),
    'light',
    'explicit mode ignores system changes',
  )
  await chooseTheme(page, '深色')
  await page.waitForFunction(() => document.documentElement.dataset.theme === 'dark')
  await chooseTheme(page, '跟随系统')
  await page.emulateMedia({ colorScheme: 'light' })
  await page.waitForFunction(() => document.documentElement.dataset.theme === 'light')
  await page.getByRole('button', { name: 'EN', exact: true }).click()
  await page.waitForFunction(() => document.documentElement.lang === 'en')
  await page.goto(base)
  assert.equal(
    await page.locator('html').getAttribute('lang'),
    'en',
    'stored language overrides Chinese browser',
  )
  await page.goto(`${base}/?lang=zh`)
  assert.equal(
    await page.locator('html').getAttribute('lang'),
    'zh-CN',
    'URL overrides stored English',
  )
  await page.goto(`${base}/work/arcana?lang=en#ch-02`)
  await page.getByRole('button', { name: '中', exact: true }).click()
  await page.waitForFunction(() => document.documentElement.lang === 'zh-CN')
  assert.match(page.url(), /lang=zh#ch-02/)
  // An OS theme change must recolor detail pages as well as the homepage.
  await page.emulateMedia({ colorScheme: 'dark' })
  await page.waitForFunction(() => document.documentElement.dataset.theme === 'dark')
  await page.setViewportSize({ width: 390, height: 900 })
  await page.getByRole('button', { name: '打开菜单' }).click()
  const menu = page.getByRole('dialog', { name: '导航菜单' })
  await menu.locator('.theme-switcher summary').click()
  await menu.getByRole('button', { name: '浅色', exact: true }).click()
  await page.waitForFunction(() => document.documentElement.dataset.theme === 'light')
  await page.keyboard.press('Escape')
  assert.equal(await page.getByRole('dialog').count(), 0)
  await page.close()
  await context.close()
  const restricted = await browser.newContext({ colorScheme: 'dark', locale: 'zh-CN' })
  await restricted.addInitScript(() => {
    Object.defineProperty(Storage.prototype, 'getItem', {
      value() {
        throw new DOMException('Blocked', 'SecurityError')
      },
    })
    Object.defineProperty(Storage.prototype, 'setItem', {
      value() {
        throw new DOMException('Blocked', 'SecurityError')
      },
    })
  })
  const fallback = await restricted.newPage()
  await fallback.goto(base)
  assert.equal(await fallback.locator('html').getAttribute('data-theme'), 'dark')
  assert.equal(await fallback.locator('html').getAttribute('lang'), 'zh-CN')
  await chooseTheme(fallback, '浅色')
  await fallback.waitForFunction(() => document.documentElement.dataset.theme === 'light')
  await restricted.close()
  // Verify the early head script without allowing React to mount.
  const initial = await browser.newContext({ colorScheme: 'light' })
  await initial.addInitScript(() => localStorage.setItem('portfolio-theme', 'dark'))
  await initial.route('**/assets/*.js', (route) => route.abort())
  const firstPaint = await initial.newPage()
  await firstPaint.goto(base)
  assert.equal(
    await firstPaint.locator('html').getAttribute('data-theme'),
    'dark',
    'saved theme is applied before React',
  )
  assert.equal(await firstPaint.locator('#root').innerHTML(), '')
  await initial.close()
  await writeFile(`${output}/results.json`, JSON.stringify(results, null, 2))
  console.log(
    `Passed ${results.length} language/theme/viewport layouts; theme persistence, system tracking, storage denial, language priority, deep-link preservation and semantic contrast.`,
  )
  console.log(
    JSON.stringify(
      results
        .filter((x) => x.theme === 'light' && round1[x.lang][x.width])
        .map((x) => ({
          width: x.width,
          lang: x.lang,
          before: round1[x.lang][x.width],
          after: x.height,
          reduction: Math.round((1 - x.height / round1[x.lang][x.width]) * 100) + '%',
        })),
    ),
  )
} finally {
  await browser.close()
}

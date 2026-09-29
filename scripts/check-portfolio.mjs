import assert from 'node:assert/strict'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { access, readFile } from 'node:fs/promises'
const moduleId = process.env.PLAYWRIGHT_MODULE
const { chromium } = await import(moduleId ? pathToFileURL(resolve(moduleId)).href : 'playwright')
const base = process.env.PORTFOLIO_TEST_URL ?? 'http://127.0.0.1:4175'
const browser = await chromium.launch({ channel: 'chrome', headless: true })
try {
  for (const lang of ['en', 'zh']) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
    const errors = [],
      requests = []
    page.on('pageerror', (error) => errors.push(error.message))
    page.on('request', (request) => {
      if (request.url().endsWith('.mp4')) requests.push(request.url())
    })
    await page.goto(`${base}/?lang=${lang}`)
    await page.evaluate(() => document.fonts.ready)
    assert.equal(
      await page.locator('video').getAttribute('src'),
      null,
      'no video source on the first screen',
    )
    assert.equal(requests.length, 0, 'no MP4 request before entering viewport')
    await page.locator('.video-frame').scrollIntoViewIfNeeded()
    await page.waitForFunction(() => {
      const video = document.querySelector('video')
      return video.readyState >= 2 && !video.paused && video.currentTime > 0
    })
    const videoInfo = await page
      .locator('video')
      .evaluate((video) => ({
        width: video.videoWidth,
        height: video.videoHeight,
        muted: video.muted,
        loop: video.loop,
        inline: video.playsInline,
      }))
    assert.equal(videoInfo.width / videoInfo.height, 9 / 16)
    assert.ok(videoInfo.muted && videoInfo.loop && videoInfo.inline)
    const control = page.locator('.video-toggle')
    await control.click()
    assert.equal(await page.locator('video').evaluate((video) => video.paused), true)
    await page.locator('#hero').scrollIntoViewIfNeeded()
    await page.locator('.video-frame').scrollIntoViewIfNeeded()
    assert.equal(
      await page.locator('video').evaluate((video) => video.paused),
      true,
      'manual pause survives viewport changes',
    )
    await control.click()
    await page.waitForFunction(() => !document.querySelector('video').paused)
    await page.locator('#hero').scrollIntoViewIfNeeded()
    await page.waitForFunction(() => document.querySelector('video').paused)
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await page.reload()
    await page.locator('.video-frame').scrollIntoViewIfNeeded()
    await page.waitForFunction(() => document.querySelector('video').readyState >= 2)
    assert.equal(
      await page.locator('video').evaluate((video) => video.paused),
      true,
      'reduced motion disables autoplay',
    )
    await control.click()
    await page.waitForFunction(() => !document.querySelector('video').paused)
    await control.click()
    await page.locator('.archive-work summary').click()
    const hrefs = await page
      .locator('a[href]')
      .evaluateAll((links) => [...new Set(links.map((link) => link.getAttribute('href')))])
    for (const href of hrefs) {
      const url = new URL(href, base)
      if (url.origin !== base) continue
      if (url.pathname === '/' && url.hash) {
        assert.equal(
          await page.locator(`[id="${url.hash.slice(1)}"]`).count(),
          1,
          `missing anchor: ${href}`,
        )
      } else if (url.pathname !== '/') {
        const response = await page.request.get(url.href)
        assert.equal(response.status(), 200, href)
        if (url.pathname.endsWith('.pdf')) assert.match(response.headers()['content-type'], /pdf/)
      }
    }
    for (const route of [
      '/work/arcana',
      '/work/stock-news',
      '/work/seller-profit',
      '/work/taobao-analysis',
      '/work/stock-news/prd',
      '/ai-evals',
      '/learning',
    ]) {
      await access(`dist${route}/index.html`)
      await page.goto(`${base}${route}?lang=${lang}`)
      assert.equal(await page.locator('main h1').count(), 1, route)
      assert.ok((await page.locator('main').innerText()).length > 150, route)
    }
    assert.deepEqual(errors, [])
    await page.close()
  }
  const page = await browser.newPage({
    viewport: { width: 390, height: 844 },
    reducedMotion: 'reduce',
  })
  await page.goto(`${base}/?lang=zh`)
  await page.getByRole('button', { name: '打开菜单' }).click()
  await page
    .getByRole('dialog', { name: 'Menu' })
    .getByRole('link', { name: '实验', exact: true })
    .click()
  await page.waitForFunction(() => location.hash === '#experiments')
  assert.match(page.url(), /lang=zh#experiments/)
  assert.equal(await page.evaluate(() => document.body.style.overflow), '')
  await page.getByRole('button', { name: '打开菜单' }).click()
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.waitForFunction(
    () => !document.querySelector('[role="dialog"]') && document.body.style.overflow === '',
  )
  await page.close()
  const workflow = await readFile('.github/workflows/deploy.yml', 'utf8')
  assert.match(workflow, /path: dist/)
  await access('dist/videos/jaco-motion.mp4')
  await access('dist/videos/jaco-motion-poster.webp')
  console.log(
    'Passed bilingual lazy video, playback, pause persistence, reduced motion, all internal routes/assets/anchors, mobile navigation and Pages artifact checks.',
  )
} finally {
  await browser.close()
}

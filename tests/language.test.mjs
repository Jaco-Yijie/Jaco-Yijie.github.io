import assert from 'node:assert/strict'
import test from 'node:test'
import { resolveLanguage, withLanguage } from '../src/i18n/preferences.ts'

test('URL language overrides saved and browser preferences', () => {
  assert.equal(resolveLanguage('?lang=zh', 'en', ['en-US']), 'zh')
  assert.equal(resolveLanguage('?lang=en', 'zh', ['zh-CN']), 'en')
})

test('saved language wins over browser; unsupported values fall through', () => {
  assert.equal(resolveLanguage('', 'zh', ['en-US']), 'zh')
  assert.equal(resolveLanguage('?lang=xx', 'invalid', ['fr-FR', 'zh-Hans', 'en']), 'zh')
  assert.equal(resolveLanguage('', null, ['en-GB', 'zh-CN']), 'en')
  assert.equal(resolveLanguage('', null, ['zh_TW']), 'zh')
  assert.equal(resolveLanguage('', null, []), 'en')
})

test('language links preserve hashes and queries without duplicate lang parameters', () => {
  assert.equal(withLanguage('/#motion', 'zh'), '/?lang=zh#motion')
  assert.equal(
    withLanguage('/work/arcana?lang=en&view=full#ch-02', 'zh'),
    '/work/arcana?lang=zh&view=full#ch-02',
  )
})

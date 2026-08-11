import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useContent } from '../hooks'
import { useLang } from '../i18n'

/**
 * 按语言与路由动态更新 title / description / Open Graph（需求 §19）。
 * 静态预渲染的 HTML 里是英文，客户端在这里按当前语言覆盖。
 */
function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function Seo() {
  const c = useContent()
  const { lang } = useLang()
  const { pathname } = useLocation()

  useEffect(() => {
    const clean = pathname.replace(/\/$/, '') || '/'
    const title = c.seo.routeTitles[clean] ?? c.seo.home.title
    const description = c.seo.home.description

    document.title = title
    setMeta('meta[name="description"]', 'name', 'description', description)
    setMeta('meta[property="og:title"]', 'property', 'og:title', title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setMeta('meta[property="og:type"]', 'property', 'og:type', 'website')
    setMeta('meta[property="og:locale"]', 'property', 'og:locale', lang === 'zh' ? 'zh_CN' : 'en_US')
  }, [c, lang, pathname])

  return null
}

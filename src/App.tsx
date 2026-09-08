import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { LanguageProvider } from './i18n'
import { useContent } from './hooks'
import { Seo } from './components/Seo'
import { Nav } from './components/Nav'
import { Footer } from './components/HomeSections'
import { StockNewsPrdPage } from './pages/StockNewsPrdPage'
import { HomePage } from './pages/HomePage'
import { CaseStudyPage } from './pages/CaseStudyPage'
import { AIEvalsPage } from './pages/AIEvalsPage'
import { LearningPage } from './pages/LearningPage'

/** 带 hash 的站内跳转（/#work）落地后滚到对应锚点 */
function HashScroll() {
  const { pathname, search, hash } = useLocation()
  useEffect(() => {
    if (!hash) return
    let cancelled = false
    let frame = 0
    // Font metrics can move a deep target after the browser's initial hash scroll.
    void document.fonts.ready.then(() => {
      if (cancelled) return
      frame = requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
          block: 'start',
        })
      })
    })
    return () => { cancelled = true; cancelAnimationFrame(frame) }
  }, [pathname, search, hash])
  return null
}

function Shell() {
  const c = useContent()
  return (
    <>
      <Seo />
      <HashScroll />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-200 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-on"
      >
        {c.nav.skipToContent}
      </a>
      <Nav />
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work/stock-news/prd" element={<StockNewsPrdPage />} />
          <Route path="/work/:slug" element={<CaseStudyPage />} />
          <Route path="/ai-evals" element={<AIEvalsPage />} />
          <Route path="/learning" element={<LearningPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Shell />
      </LanguageProvider>
    </BrowserRouter>
  )
}

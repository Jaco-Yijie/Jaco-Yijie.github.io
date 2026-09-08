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
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) return
    const el = document.getElementById(hash.slice(1))
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [pathname, hash])
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

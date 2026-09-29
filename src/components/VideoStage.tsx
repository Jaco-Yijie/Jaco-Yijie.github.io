import { useEffect, useRef, useState } from 'react'
import { useContent } from '../hooks'
import { links } from '../data/links'
import { usePrefersReducedMotion } from './motion'

export function VideoStage() {
  const { portfolio: c } = useContent()
  const video = useRef<HTMLVideoElement>(null)
  const stage = useRef<HTMLDivElement>(null)
  const userPaused = useRef(false)
  const reduced = usePrefersReducedMotion()
  const [visible, setVisible] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [error, setError] = useState(false)
  const [playBlocked, setPlayBlocked] = useState(false)

  useEffect(() => {
    if (!stage.current) return
    if (typeof IntersectionObserver === 'undefined') return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
        if (entry.isIntersecting) setLoaded(true)
      },
      { threshold: 0.35 },
    )
    observer.observe(stage.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const el = video.current
    if (!el) return
    if (visible && loaded && !reduced && !userPaused.current) {
      void el.play().catch(() => setPlaying(false))
    } else el.pause()
  }, [visible, loaded, reduced])

  useEffect(() => {
    const onVisibility = () => {
      if (document.hidden) video.current?.pause()
      else if (visible && !reduced && !userPaused.current)
        void video.current?.play().catch(() => setPlaying(false))
    }
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [visible, reduced])

  async function toggle() {
    const el = video.current
    if (!el) return
    if (!el.paused) {
      userPaused.current = true
      el.pause()
      return
    }
    userPaused.current = false
    if (!loaded) {
      el.src = links.video
      setLoaded(true)
    }
    try {
      await el.play()
      setPlayBlocked(false)
    } catch {
      setPlaying(false)
      setPlayBlocked(true)
    }
  }

  return (
    <div className="video-canvas" ref={stage}>
      <span className="stage-index" aria-hidden="true">
        {c.stageLabel}
      </span>
      <div className="video-frame">
        <video
          ref={video}
          src={loaded ? links.video : undefined}
          poster="/videos/jaco-motion-poster.webp"
          muted
          loop
          playsInline
          preload="metadata"
          autoPlay={loaded && visible && !reduced && !userPaused.current}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onError={() => setError(true)}
          aria-label={c.motionTitle}
        >
          <a href={links.video}>{c.openVideo}</a>
        </video>
        <button
          type="button"
          className="video-toggle"
          onClick={() => void toggle()}
          aria-label={playing ? c.pause : c.play}
          aria-pressed={playing}
        >
          <span className="video-control">
            <span aria-hidden="true">{playing ? 'Ⅱ' : '▷'}</span>
            {playing ? c.pause : c.play}
          </span>
        </button>
        <div className="video-credit" aria-hidden="true">
          {c.motionCredit}
        </div>
      </div>
      {(error || playBlocked) && (
        <p className="video-error" role="alert">
          {c.videoError} <a href="/videos/jaco-motion.mp4">{c.openVideo} ↗</a>
        </p>
      )}
      <span className="stage-footnote" aria-hidden="true">
        {c.tech.join(' / ')}
      </span>
    </div>
  )
}

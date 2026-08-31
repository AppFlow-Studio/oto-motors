'use client'

import { useEffect, useRef } from 'react'

/**
 * Abstract black-and-white "light trail" field on a 2D canvas.
 * - Decorative only (aria-hidden), never blocks content render.
 * - Lazy-initialized after first paint so it does not hurt LCP.
 * - Respects prefers-reduced-motion and pauses when offscreen/hidden.
 */
export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    let raf = 0
    let running = false
    let width = 0
    let height = 0
    let dpr = 1

    type Trail = { x: number; y: number; speed: number; len: number; opacity: number }
    let trails: Trail[] = []

    function resize() {
      const parent = canvas.parentElement
      if (!parent) return
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = parent.clientWidth
      height = parent.clientHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      seed()
    }

    function seed() {
      const count = Math.max(10, Math.min(28, Math.floor(width / 60)))
      trails = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        speed: 0.15 + Math.random() * 0.5,
        len: 40 + Math.random() * 160,
        opacity: 0.04 + Math.random() * 0.08,
      }))
    }

    function frame() {
      if (!running) return
      // paper background
      ctx.clearRect(0, 0, width, height)
      for (const t of trails) {
        t.x += t.speed
        if (t.x - t.len > width) {
          t.x = -Math.random() * 120
          t.y = Math.random() * height
        }
        const grad = ctx.createLinearGradient(t.x - t.len, t.y, t.x, t.y)
        grad.addColorStop(0, 'rgba(10,10,11,0)')
        grad.addColorStop(1, `rgba(10,10,11,${t.opacity})`)
        ctx.strokeStyle = grad
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(t.x - t.len, t.y)
        ctx.lineTo(t.x, t.y)
        ctx.stroke()
      }
      raf = requestAnimationFrame(frame)
    }

    function start() {
      if (running) return
      running = true
      raf = requestAnimationFrame(frame)
    }
    function stop() {
      running = false
      cancelAnimationFrame(raf)
    }

    const onVisibility = () => (document.hidden ? stop() : start())

    // Lazy init after first paint.
    const init = () => {
      resize()
      start()
      window.addEventListener('resize', resize)
      document.addEventListener('visibilitychange', onVisibility)
    }

    const idle =
      'requestIdleCallback' in window
        ? (window as unknown as { requestIdleCallback: (cb: () => void) => number }).requestIdleCallback(init)
        : window.setTimeout(init, 200)

    return () => {
      stop()
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVisibility)
      if ('cancelIdleCallback' in window && typeof idle === 'number') {
        ;(window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(idle)
      } else {
        clearTimeout(idle as number)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  )
}

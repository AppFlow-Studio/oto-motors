"use client"

import { useEffect, useRef, useState } from "react"

const cars = [
  "/images/oto-hero-car.png",
  "/images/oto-car-02.png",
  "/images/oto-car-03.png",
  "/images/oto-car-04.png",
]

export function HeroCarShowcase() {
  const [active, setActive] = useState(0)
  const [hovered, setHovered] = useState(false)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (!hovered) return
    timer.current = setInterval(() => setActive((current) => (current + 1) % cars.length), 2000)
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [hovered])

  return (
    <div
      className="hero-showcase reveal reveal-delay-2 relative z-10 w-full overflow-hidden border border-foreground bg-foreground md:w-[54%]"
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      tabIndex={0}
      aria-label="Vehicle image gallery. Hover or focus to view more vehicles."
    >
      {cars.map((src, index) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden="true"
          className={`hero-showcase-image image-lift aspect-[4/3] h-full w-full object-cover grayscale ${index === active ? "is-active" : ""}`}
        />
      ))}
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-foreground/75 px-4 py-3 font-data text-[10px] uppercase tracking-[0.2em] text-background backdrop-blur-sm">
        <span>OTO Motors</span>
        <span>{String(active + 1).padStart(2, "0")} / {String(cars.length).padStart(2, "0")}</span>
      </div>
    </div>
  )
}

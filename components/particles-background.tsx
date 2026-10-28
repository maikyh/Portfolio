"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import { useTheme } from "next-themes"
import type { Engine, ISourceOptions } from "tsparticles-engine"

export function ParticlesBackground() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    setMounted(true)
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  }, [])

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const isDark = resolvedTheme === "dark"

  const options = useMemo<ISourceOptions>(() => {
    const color = isDark ? "#6b84ff" : "#0000ff"
    return {
      fullScreen: { enable: false },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: { value: 55, density: { enable: true, area: 900 } },
        color: { value: color },
        opacity: { value: { min: 0.12, max: isDark ? 0.4 : 0.3 } },
        size: { value: { min: 1, max: 2.6 } },
        links: { enable: true, distance: 140, color, opacity: isDark ? 0.18 : 0.12, width: 1 },
        move: { enable: !reduceMotion, speed: 0.6, outModes: { default: "out" } },
      },
      interactivity: {
        detectsOn: "window",
        events: { onHover: { enable: !reduceMotion, mode: "grab" }, resize: true },
        modes: { grab: { distance: 150, links: { opacity: 0.35 } } },
      },
    }
  }, [isDark, reduceMotion])

  if (!mounted) return null

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  )
}

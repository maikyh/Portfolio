"use client"

import { useEffect, useRef } from "react"

export function ScrollAnimations() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const animateElements = document.querySelectorAll(".scroll-animation")

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    animateElements.forEach((element) => {
      observerRef.current?.observe(element)
    })

    return () => {
      if (observerRef.current) {
        animateElements.forEach((element) => {
          observerRef.current?.unobserve(element)
        })
      }
    }
  }, [])

  return null
}

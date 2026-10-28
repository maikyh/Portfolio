"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

// Every role sits in the same grid cell, so the slot is always as tall and wide as the
// longest role: words can cross-fade but never overlap the lines around them.
export function RotatingRole({ roles, className }: { roles: string[]; className?: string }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % roles.length), 2400)
    return () => window.clearInterval(id)
  }, [roles.length])

  return (
    <p className={cn("grid", className)}>
      <span className="sr-only">{roles.join(", ")}</span>
      {roles.map((role, i) => (
        <span
          key={role}
          aria-hidden="true"
          className={cn(
            "col-start-1 row-start-1 transition-[opacity,transform] duration-500 ease-out",
            i === index ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
          )}
        >
          {role}
        </span>
      ))}
    </p>
  )
}

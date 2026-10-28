"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

// Every role sits in the same grid cell, so the slot is always as tall and wide as the
// longest role and never pushes into the lines around it.
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
            "col-start-1 row-start-1 transition-[opacity,transform] ease-out",
            // The outgoing role is gone before the next one appears, so the two never show at once.
            i === index
              ? "translate-y-0 opacity-100 duration-300 delay-200"
              : "-translate-y-2 opacity-0 duration-200",
          )}
        >
          {role}
        </span>
      ))}
    </p>
  )
}

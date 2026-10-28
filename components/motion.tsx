"use client"

import type React from "react"
import { MotionConfig, motion } from "framer-motion"

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}

// Fades content up the first time it scrolls into view.
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children?: React.ReactNode
}) {
  return (
    <Reveal className="mb-10 grid gap-3 md:mb-12">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="text-[clamp(2rem,4.4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em]">{title}</h2>
      {children && <p className="max-w-[60ch] text-[17px] text-muted-foreground">{children}</p>}
    </Reveal>
  )
}

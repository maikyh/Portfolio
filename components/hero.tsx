"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Trophy } from "lucide-react"
import { intro, roles, site } from "@/lib/content"
import { RotatingRole } from "@/components/rotating-role"
import { socialLinks } from "@/components/social-links"
import portrait from "@/assets/miguel-nyc.jpg"

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="container grid items-center gap-12 pb-16 pt-10 md:pb-24 md:pt-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14 lg:pt-20">
        <div className="grid min-w-0 justify-items-start gap-5 md:gap-6">
          <motion.p {...fadeUp(0)} className="-mb-3 text-[clamp(1.375rem,3vw,1.875rem)] font-semibold text-muted-foreground">
            Hey! I’m
          </motion.p>
          <motion.h1
            {...fadeUp(0.08)}
            className="text-[clamp(2.75rem,8vw,5.75rem)] font-extrabold leading-none tracking-[-0.04em]"
          >
            Miguel Garza.
          </motion.h1>
          <motion.div {...fadeUp(0.16)}>
            <RotatingRole
              roles={roles}
              className="text-[clamp(1.6rem,4.4vw,2.875rem)] font-extrabold leading-[1.15] tracking-[-0.025em] text-primary"
            />
          </motion.div>
          <motion.p {...fadeUp(0.24)} className="max-w-[56ch] text-[16.5px] text-muted-foreground md:text-lg">
            {intro}
          </motion.p>
          <motion.p {...fadeUp(0.28)} className="text-lg font-extrabold text-primary">
            Always Improving!
          </motion.p>
          <motion.div {...fadeUp(0.32)} className="flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              Get in touch
            </a>
            <a href="#experience" className="btn-outline">
              See my work
            </a>
          </motion.div>
          <motion.ul {...fadeUp(0.38)} className="flex gap-2.5" aria-label="Social links">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.figure
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[420px] pb-5 lg:mr-4"
        >
          <Image
            src={portrait}
            alt="Miguel Garza at the top of a skyscraper in New York City"
            priority
            sizes="(min-width: 1024px) 420px, 100vw"
            className="aspect-[4/5] w-full rounded-[28px] object-cover object-[50%_75%] shadow-[0_30px_60px_-24px_hsl(var(--glow)/0.35)]"
          />

          <div className="absolute right-3 top-6 rounded-2xl border border-border bg-background/95 px-4 py-3 shadow-lg backdrop-blur sm:-right-5 sm:top-10">
            <p className="text-[13px] font-medium text-muted-foreground">Software Engineer Intern</p>
            <p className="text-lg font-extrabold leading-tight">3× Meta</p>
          </div>

          <div className="absolute bottom-14 left-3 rounded-2xl border border-border bg-background/95 px-4 py-3 shadow-lg backdrop-blur sm:-left-6 sm:bottom-16">
            <p className="text-[13px] font-medium text-muted-foreground">ICPC Mexico Finals 2025</p>
            <p className="flex items-center gap-1.5 text-lg font-extrabold leading-tight">
              <Trophy className="h-5 w-5 fill-amber-400 text-amber-500" aria-hidden="true" />
              State Champion
            </p>
          </div>

          {site.showIncomingMeta && (
            <figcaption className="absolute bottom-0 left-1/2 w-max max-w-[calc(100%-1.5rem)] -translate-x-1/2 rounded-full border border-dashed border-amber-500 bg-amber-50 px-4 py-1.5 text-center text-[13px] font-bold text-amber-700 shadow-sm dark:bg-amber-950 dark:text-amber-300">
              Incoming Software Engineer @ Meta
            </figcaption>
          )}
        </motion.figure>
      </div>
    </section>
  )
}

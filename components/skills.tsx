"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

/** Brand icons via Simple Icons CDN (https://simpleicons.org/) */
const technologies = [
  { name: "React", src: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "JavaScript", src: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "Node.js", src: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "PHP", src: "https://cdn.simpleicons.org/php/777BB4" },
  { name: "MySQL", src: "https://cdn.simpleicons.org/mysql/4479A1" },
  { name: "Java", src: "https://cdn.simpleicons.org/openjdk/007396" },
  { name: "SQL", src: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "HTML5", src: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "CSS3", src: "https://cdn.simpleicons.org/css/1572B6" },
  { name: "TypeScript", src: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "Next.js", src: "https://cdn.simpleicons.org/nextdotjs/000000" },
  { name: "Tailwind CSS", src: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
] as const

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-blue-600">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I work with most often—a snapshot of my stack.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 md:gap-10"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
              className="flex flex-col items-center group"
            >
              <div className="w-24 h-24 bg-card rounded-xl p-4 flex items-center justify-center border border-border shadow-sm group-hover:shadow-md group-hover:border-blue-300 group-hover:scale-110 transition-all duration-300 dark:bg-muted/30">
                <img
                  src={tech.src}
                  alt={tech.name}
                  width={56}
                  height={56}
                  loading="lazy"
                  className="w-14 h-14 object-contain"
                />
              </div>
              <span className="mt-3 text-sm font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-40 right-10 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50 dark:opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-blue-200 rounded-full blur-3xl opacity-40 dark:opacity-15"></div>
    </section>
  )
}

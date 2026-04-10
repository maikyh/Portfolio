"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const technologies = [
    { name: "React", icon: "/static/media/react.236e02a25e48dfbd528d.png" },
    { name: "JavaScript", icon: "/placeholder.svg?height=80&width=80" },
    { name: "Node.js", icon: "/placeholder.svg?height=80&width=80" },
    { name: "PHP", icon: "/static/media/php.2c104da8d568faa66a2f.png" },
    { name: "MySQL", icon: "/static/media/mysql.c49e99a89a0ca2e456f4.png" },
    { name: "Java", icon: "/static/media/java.04584919241178ad427f.png" },
    { name: "SQL", icon: "/static/media/sql.be36dfb1d491277fc8bf.png" },
    { name: "HTML5", icon: "/placeholder.svg?height=80&width=80" },
    { name: "CSS3", icon: "/placeholder.svg?height=80&width=80" },
    { name: "TypeScript", icon: "/placeholder.svg?height=80&width=80" },
    { name: "Next.js", icon: "/placeholder.svg?height=80&width=80" },
    { name: "Tailwind CSS", icon: "/placeholder.svg?height=80&width=80" },
  ]

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
            Mis <span className="text-blue-600">Habilidades</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            He trabajado con diversas tecnologías y herramientas a lo largo de mi carrera. Aquí hay un vistazo a mi
            stack tecnológico.
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
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
              className="flex flex-col items-center group"
            >
              <div className="w-24 h-24 bg-white rounded-xl p-4 flex items-center justify-center border border-gray-200 shadow-sm group-hover:shadow-md group-hover:border-blue-300 group-hover:scale-110 transition-all duration-300">
                <img src={tech.icon || "/placeholder.svg"} alt={tech.name} className="w-14 h-14 object-contain" />
              </div>
              <span className="mt-3 text-sm font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-40 right-10 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
    </section>
  )
}

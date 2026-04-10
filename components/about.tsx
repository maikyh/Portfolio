"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, BookOpen, Code, Lightbulb, Rocket, Users } from "lucide-react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Desarrollo Web",
      description: "Especializado en crear aplicaciones web modernas y responsivas utilizando las últimas tecnologías.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Solución de Problemas",
      description: "Enfoque analítico para resolver problemas complejos y crear soluciones eficientes.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Trabajo en Equipo",
      description: "Experiencia colaborando en equipos multidisciplinarios para lograr objetivos comunes.",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "Aprendizaje Continuo",
      description: "Constantemente actualizándome con las nuevas tecnologías y mejores prácticas.",
    },
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: "Innovación",
      description: "Buscando siempre nuevas formas de mejorar y optimizar procesos y productos.",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Calidad",
      description: "Comprometido con entregar código limpio, mantenible y de alta calidad.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre <span className="text-blue-600">Mí</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Soy un desarrollador web apasionado con experiencia en la creación de aplicaciones web modernas y
            responsivas. Me especializo en tecnologías frontend y backend, con un enfoque en la creación de experiencias
            de usuario excepcionales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 card-hover h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-primary/10">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  )
}

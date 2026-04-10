"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects = [
    {
      id: 1,
      title: "TikTok Festival",
      description:
        "Aplicación web para un festival de TikTok, con funcionalidades de registro, galería y streaming en vivo.",
      image: "/static/media/TikTok-Festival.90ced50291ecf2a2bc1e.png",
      tags: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/yourusername/tiktok-festival",
      demo: "https://tiktok-festival.example.com",
    },
    {
      id: 2,
      title: "Conquering Seattle",
      description:
        "Plataforma para turistas que visitan Seattle, con recomendaciones personalizadas y mapas interactivos.",
      image: "/static/media/ConqueringSeattle.fd6390b41c7cf906eb37.png",
      tags: ["Next.js", "Tailwind CSS", "Google Maps API"],
      github: "https://github.com/yourusername/conquering-seattle",
      demo: "https://conquering-seattle.example.com",
    },
    {
      id: 3,
      title: "Espantabugs",
      description: "Juego educativo para enseñar conceptos de programación a niños de manera divertida e interactiva.",
      image: "/static/media/espantabugs.1f2fe4f107eefe8ae81f.jpeg",
      tags: ["JavaScript", "Canvas API", "Firebase"],
      github: "https://github.com/yourusername/espantabugs",
      demo: "https://espantabugs.example.com",
    },
    {
      id: 4,
      title: "Sistema de Gestión Escolar",
      description:
        "Sistema completo para la gestión de escuelas, incluyendo módulos para estudiantes, profesores y administradores.",
      image: "/static/media/itlag1.00294e02a1613b4576fd.jpeg",
      tags: ["PHP", "MySQL", "Bootstrap"],
      github: "https://github.com/yourusername/school-management",
      demo: "https://school-management.example.com",
    },
    {
      id: 5,
      title: "App de Seguimiento Deportivo",
      description:
        "Aplicación móvil para seguimiento de actividades deportivas, con estadísticas y planes de entrenamiento.",
      image: "/static/media/granpremiomx.e7b087f5b7baed8ba172.jpeg",
      tags: ["React Native", "Firebase", "Redux"],
      github: "https://github.com/yourusername/sports-tracker",
      demo: "https://sports-tracker.example.com",
    },
    {
      id: 6,
      title: "Portfolio Personal",
      description: "Mi sitio web personal, mostrando mis proyectos, habilidades y experiencia profesional.",
      image: "/static/media/me.f9163fe9b6fb4140c4aa.jpeg",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/yourusername/portfolio",
      demo: "https://miguelgarza.dev",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-secondary/30 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mis <span className="text-blue-600">Proyectos</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Aquí hay una selección de proyectos en los que he trabajado. Cada proyecto representa un desafío único y una
            oportunidad para aprender y crecer como desarrollador.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Card className="overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 card-hover h-full">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/50 text-primary hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Código
                      </a>
                    </Button>
                    <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl"></div>
    </section>
  )
}

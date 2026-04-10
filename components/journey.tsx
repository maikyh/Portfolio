"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap, Award, Calendar, MapPin } from "lucide-react"

export function Journey() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const education = [
    {
      id: 1,
      degree: "Ingeniería en Sistemas Computacionales",
      institution: "Instituto Tecnológico de Laguna",
      location: "Torreón, Coahuila",
      period: "2018 - 2022",
      description: "Especialización en desarrollo de software y sistemas de información.",
      image: "/static/media/itlaglogo.0bb41928f3e017d997bc.jpeg",
    },
    {
      id: 2,
      degree: "Bachillerato Técnico en Informática",
      institution: "CBTIS 4",
      location: "Torreón, Coahuila",
      period: "2015 - 2018",
      description: "Formación técnica en programación, redes y mantenimiento de equipos de cómputo.",
      image: "/static/media/secundaria.7abf86c4aa8e398d5a8c.jpeg",
    },
  ]

  const experience = [
    {
      id: 1,
      position: "Desarrollador Web Full Stack",
      company: "Empresa Tecnológica",
      location: "Torreón, Coahuila",
      period: "2022 - Presente",
      description:
        "Desarrollo de aplicaciones web utilizando React, Node.js y bases de datos SQL y NoSQL. Implementación de APIs RESTful y arquitecturas escalables.",
      image: "/static/media/logo.7882141ef5d9905db6fd.png",
    },
    {
      id: 2,
      position: "Desarrollador Frontend",
      company: "Agencia Digital",
      location: "Torreón, Coahuila",
      period: "2020 - 2022",
      description:
        "Diseño y desarrollo de interfaces de usuario para sitios web y aplicaciones móviles. Implementación de diseños responsivos y optimización de rendimiento.",
      image: "/static/media/banner.45fa4a290b461f9ea629.png",
    },
    {
      id: 3,
      position: "Practicante de Desarrollo",
      company: "Startup Local",
      location: "Torreón, Coahuila",
      period: "2019 - 2020",
      description:
        "Asistencia en el desarrollo de aplicaciones web y móviles. Participación en todas las etapas del ciclo de vida del desarrollo de software.",
      image: "/static/media/luzac.60b1460c8acaca670e11.jpeg",
    },
  ]

  const achievements = [
    {
      id: 1,
      title: "Primer Lugar en Hackathon Regional",
      organization: "TecLaguna",
      year: "2021",
      description: "Desarrollo de una solución innovadora para problemas de movilidad urbana.",
      image: "/static/media/oro.4322873c1c58a138254e.jpeg",
    },
    {
      id: 2,
      title: "Certificación en Desarrollo Web",
      organization: "freeCodeCamp",
      year: "2020",
      description: "Completé la certificación de Responsive Web Design y JavaScript Algorithms and Data Structures.",
      image: "/static/media/medalla.69686c825813d98523fd.jpeg",
    },
    {
      id: 3,
      title: "Participación en Coding Cup",
      organization: "Coding Cup México",
      year: "2019",
      description: "Participé en la competencia nacional de programación, alcanzando las semifinales.",
      image: "/static/media/codingcup.518b46239e5424344cd0.jpeg",
    },
  ]

  return (
    <section id="journey" className="py-20 bg-background relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mi <span className="text-blue-600">Trayectoria</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Un vistazo a mi formación académica, experiencia profesional y logros a lo largo de mi carrera.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-full bg-primary/10 mr-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Educación</h3>
            </div>

            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-border">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.institution}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{item.degree}</h4>
                          <p className="text-sm text-muted-foreground">{item.institution}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{item.location}</span>
                        </div>
                        <p className="text-sm mt-2">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-full bg-primary/10 mr-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Experiencia</h3>
            </div>

            <div className="space-y-6">
              {experience.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-border">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.company}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{item.position}</h4>
                          <p className="text-sm text-muted-foreground">{item.company}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{item.location}</span>
                        </div>
                        <p className="text-sm mt-2">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-full bg-primary/10 mr-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Logros</h3>
            </div>

            <div className="space-y-6">
              {achievements.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-border">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.organization}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{item.year}</span>
                        </div>
                        <p className="text-sm mt-2">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-40 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl"></div>
    </section>
  )
}

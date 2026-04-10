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
      degree: "B.S. Computer Systems Engineering",
      institution: "Instituto Tecnológico de Laguna",
      location: "Torreón, Coahuila",
      period: "2018 - 2022",
      description: "Focus on software development and information systems.",
    },
  ]

  const experience = [
    {
      id: 1,
      position: "Full Stack Web Developer",
      company: "Technology Company",
      location: "Torreón, Coahuila",
      period: "2022 - Present",
      description:
        "Building web applications with React, Node.js, and SQL/NoSQL databases. REST APIs and scalable architectures.",
    },
    {
      id: 2,
      position: "Frontend Developer",
      company: "Digital Agency",
      location: "Torreón, Coahuila",
      period: "2020 - 2022",
      description:
        "UI design and development for websites and mobile apps. Responsive layouts and performance optimization.",
    },
    {
      id: 3,
      position: "Development Intern",
      company: "Local Startup",
      location: "Torreón, Coahuila",
      period: "2019 - 2020",
      description:
        "Supporting web and mobile development across the full software development lifecycle.",
    },
  ]

  const achievements = [
    {
      id: 1,
      title: "1st Place — Regional Hackathon",
      organization: "TecLaguna",
      year: "2021",
      description: "Built an innovative solution for urban mobility challenges.",
    },
    {
      id: 2,
      title: "Web Development Certification",
      organization: "freeCodeCamp",
      year: "2020",
      description: "Completed Responsive Web Design and JavaScript Algorithms & Data Structures certifications.",
    },
    {
      id: 3,
      title: "Coding Cup Participation",
      organization: "Coding Cup México",
      year: "2019",
      description: "Competed nationally in programming and reached the semifinals.",
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
            My <span className="text-blue-600">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Education, professional experience, and highlights along the way.
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
              <h3 className="text-2xl font-semibold">Education</h3>
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
                      <h4 className="font-semibold text-lg">{item.degree}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{item.institution}</p>
                      <div className="space-y-2 mt-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2 shrink-0" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2 shrink-0" />
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
              <h3 className="text-2xl font-semibold">Experience</h3>
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
                      <h4 className="font-semibold text-lg">{item.position}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{item.company}</p>
                      <div className="space-y-2 mt-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2 shrink-0" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2 shrink-0" />
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
              <h3 className="text-2xl font-semibold">Achievements</h3>
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
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{item.organization}</p>
                      <div className="space-y-2 mt-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2 shrink-0" />
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

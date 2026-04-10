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
      title: "Web development",
      description: "Building modern, responsive web applications with up-to-date tooling and best practices.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Problem solving",
      description: "Analytical approach to complex problems and pragmatic, efficient solutions.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Teamwork",
      description: "Collaborating in cross-functional teams to ship features and hit shared goals.",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "Continuous learning",
      description: "Staying current with new technologies, patterns, and industry practices.",
    },
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: "Innovation",
      description: "Looking for ways to improve workflows, performance, and user experience.",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Quality",
      description: "Committed to clean, maintainable code and thoughtful implementation details.",
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
            About <span className="text-blue-600">me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I&apos;m a web developer focused on modern, responsive applications. I work across frontend and backend with
            a strong interest in great user experiences.
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

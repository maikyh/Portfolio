"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const referencesLogoSrc = `/media/${encodeURIComponent("references logo.57d4ad98c67ca6084d49.png")}`

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects: {
    id: number
    title: string
    description: string
    image: string
    tags: string[]
    github: string
    demo: string
    demoLabel?: string
  }[] = [
    {
      id: 1,
      title: "Conquering Seattle",
      description:
        "A platform for visitors to Seattle with personalized recommendations and interactive maps.",
      image: "/media/ConqueringSeattle.fd6390b41c7cf906eb37.png",
      tags: ["Next.js", "Tailwind CSS", "Google Maps API"],
      github: "https://github.com/yourusername/conquering-seattle",
      demo: "https://conquering-seattle.example.com",
    },
    {
      id: 2,
      title: "Reference for Competitive Programming",
      description:
        "Collection of classical algorithms and data structures implementations for competitive programming involving distinct areas such as graphs, geometry, strings, number theory, and combinatorics.\n\n• Went from position 135 to 24 (+462.5%) in the ICPC in just a 6-month gap with its use.\n• Maintaining the GitHub repository along with 2 ICPC teammates.",
      image: referencesLogoSrc,
      tags: ["C++"],
      github: "https://github.com/maikyh/references",
      demo: "https://github.com/maikyh/references",
      demoLabel: "Repository",
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
            My <span className="text-blue-600">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A selection of work I&apos;ve shipped—each project was a chance to learn, iterate, and grow as a developer.
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
                  <p className="text-muted-foreground mb-4 whitespace-pre-line">{project.description}</p>
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
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {project.demoLabel ?? "Demo"}
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

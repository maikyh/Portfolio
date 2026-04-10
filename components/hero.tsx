"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary glow mx-auto">
              <img
                src="/static/media/me.f9163fe9b6fb4140c4aa.jpeg"
                alt="Miguel Garza"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Hola, soy <span className="text-gradient font-extrabold">Miguel Garza</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 h-16"
          >
            <TypeAnimation
              sequence={[
                "Desarrollador Web",
                1000,
                "Ingeniero de Software",
                1000,
                "Diseñador UI/UX",
                1000,
                "Entusiasta de la Tecnología",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-500 text-white hover-glow transition-all duration-300"
            >
              <Link href="#contact">Contáctame</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300"
            >
              <Link href="#projects">Ver Proyectos</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center space-x-6 mb-16"
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-muted-foreground hover:text-primary transition-all duration-300"
            >
              <Mail size={28} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 1,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="absolute bottom-10"
          >
            <Link href="#about">
              <Button variant="ghost" size="icon" className="rounded-full animate-bounce">
                <ArrowDown className="h-6 w-6 text-primary" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

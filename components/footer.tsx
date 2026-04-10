"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background py-10 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <Link href="/" className="text-2xl font-bold text-primary">
              Miguel<span className="text-foreground"> Garza</span>
            </Link>
            <p className="text-muted-foreground mt-2">Web Developer & Software Engineer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-end"
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primary text-primary hover:bg-primary/10 mb-4"
              onClick={scrollToTop}
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
            <p className="text-muted-foreground text-sm">
              © {currentYear} Miguel Garza. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
    </footer>
  )
}

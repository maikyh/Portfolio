import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Journey } from "@/components/journey"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ParticlesBackground } from "@/components/particles-background"
import { ModeToggle } from "@/components/mode-toggle"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>
      <ParticlesBackground />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Contact />
      <Footer />
    </main>
  )
}

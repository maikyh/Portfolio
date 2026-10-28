import { MotionProvider } from "@/components/motion"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Experience } from "@/components/experience"
import { Leadership } from "@/components/leadership"
import { Awards } from "@/components/awards"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ParticlesBackground } from "@/components/particles-background"

export default function Home() {
  return (
    <MotionProvider>
      <ParticlesBackground />
      <SiteHeader />
      <main className="relative z-10">
        <Hero />
        <Stats />
        <Experience />
        <Leadership />
        <Awards />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </MotionProvider>
  )
}

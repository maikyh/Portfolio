import { ArrowUpRight } from "lucide-react"
import { projects } from "@/lib/content"
import { Reveal, SectionHeading } from "@/components/motion"

export function Projects() {
  return (
    <section id="projects" className="pb-16 md:pb-24">
      <div className="container">
        <SectionHeading eyebrow="Projects" title="Things I’ve made" />
        <ul className="grid gap-4 md:grid-cols-2 md:gap-5">
          {projects.map((p, i) => (
            <li key={p.name}>
              <Reveal delay={(i % 2) * 0.06} className="h-full">
                <article className="glow-card grid h-full content-start gap-3.5 rounded-[20px] p-5 md:p-7">
                  <h3 className="text-[1.3rem] font-extrabold">{p.name}</h3>
                  <p className="text-muted-foreground">{p.description}</p>
                  <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
                    {p.tags.map((tag) => (
                      <li key={tag} className="tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-4">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[14.5px] font-bold text-primary hover:underline"
                      >
                        {l.label}
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        <span className="sr-only"> for {p.name}</span>
                      </a>
                    ))}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

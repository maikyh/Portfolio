import { education, skills } from "@/lib/content"
import { Reveal } from "@/components/motion"

export function Skills() {
  return (
    <section id="skills" aria-label="Skills and education" className="pb-16 md:pb-24">
      <div className="container grid gap-4 lg:grid-cols-[1.4fr_1fr] lg:gap-5">
        <Reveal className="grid gap-6 rounded-[20px] border border-border bg-background p-5 md:p-7">
          {skills.map((s) => (
            <div key={s.group}>
              <h2 className="mb-2.5 text-sm font-extrabold uppercase tracking-[0.08em] text-muted-foreground">{s.group}</h2>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <li key={item} className="rounded-full bg-secondary px-3.5 py-1.5 text-sm font-semibold">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.08} className="grid content-between gap-6 rounded-[20px] border border-border bg-background p-5 md:p-7">
          <div>
            <h2 className="mb-2.5 text-sm font-extrabold uppercase tracking-[0.08em] text-muted-foreground">Education</h2>
            <p className="text-[1.375rem] font-extrabold leading-snug tracking-[-0.01em]">{education.school}</p>
            <p className="text-muted-foreground">
              {education.degree}
              <br />
              {education.date}
            </p>
          </div>
          <p className="text-muted-foreground">
            <span className="block text-[2.75rem] font-extrabold leading-none tracking-[-0.03em] text-primary">
              {education.gpa}
              <span className="text-xl text-muted-foreground"> / 100</span>
            </span>
            GPA
          </p>
        </Reveal>
      </div>
    </section>
  )
}

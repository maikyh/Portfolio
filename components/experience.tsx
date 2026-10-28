import { experience } from "@/lib/content"
import { Reveal, SectionHeading } from "@/components/motion"

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container">
        <SectionHeading eyebrow="Experience" title="Where I’ve built things">
          Five internships in three years, from product features at Meta to forecasting models for Mexico’s power grid.
        </SectionHeading>

        <ol className="relative grid gap-5 pl-7 before:absolute before:bottom-2 before:left-[3px] before:top-2 before:w-0.5 before:bg-gradient-to-b before:from-primary before:to-primary/10 md:pl-9 md:before:left-[7px]">
          {experience.map((job) => (
            <li key={`${job.company}-${job.dates}`} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-7 top-7 h-4 w-4 rounded-full border-4 border-primary bg-background md:-left-9 md:top-8"
              />
              <Reveal>
                <article className="glow-card grid gap-x-7 gap-y-2 rounded-[20px] p-5 md:grid-cols-[1fr_auto] md:p-7">
                  {job.metric && (
                    <p className="flex items-baseline gap-2 md:col-start-2 md:row-span-4 md:row-start-1 md:block md:min-w-[120px] md:text-right">
                      <span className="block text-2xl font-extrabold leading-tight tracking-[-0.02em] text-primary tabular-nums md:text-[1.875rem]">
                        {job.metric.value}
                      </span>
                      <span className="text-[13px] text-muted-foreground">{job.metric.label}</span>
                    </p>
                  )}
                  <div className="md:col-start-1 md:row-start-1">
                    <h3 className="text-xl font-extrabold tracking-[-0.01em] md:text-[1.3rem]">
                      {job.title} <span className="text-primary">@ {job.company}</span>
                    </h3>
                    <p className="text-sm font-semibold text-muted-foreground">
                      {[job.team, job.dates, job.location].filter(Boolean).join(" · ")}
                    </p>
                  </div>
                  <ul className="my-1.5 grid list-disc gap-1 pl-5 text-muted-foreground marker:text-primary/60 md:col-start-1">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <ul className="flex flex-wrap gap-1.5 md:col-start-1" aria-label="Technologies">
                    {job.tags.map((tag) => (
                      <li key={tag} className="tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

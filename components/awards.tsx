import { moreAwards, topAwards, type Award } from "@/lib/content"
import { Reveal, SectionHeading } from "@/components/motion"
import { cn } from "@/lib/utils"

const totalAwards = topAwards.length + moreAwards.length

function rankLine(a: Award) {
  return [a.rank, a.detail].filter(Boolean).join(" ")
}

export function Awards() {
  return (
    <section id="awards" className="py-16 md:py-24">
      <div className="container">
        <SectionHeading eyebrow="Awards" title="Competitive programming record">
          {totalAwards} awards and honors in programming and math. The most recent six:
        </SectionHeading>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topAwards.map((a, i) => (
            <li key={a.event}>
              <Reveal delay={(i % 3) * 0.06} className="h-full">
                <article
                  className={cn(
                    "glow-card grid h-full content-start gap-1.5 rounded-[20px] p-5 md:p-6",
                    i === 0 && "border-primary bg-primary text-primary-foreground",
                  )}
                >
                  <p
                    className={cn(
                      "text-[1.75rem] font-extrabold leading-tight tracking-[-0.03em] md:text-[2.125rem]",
                      i === 0 ? "text-primary-foreground" : "text-primary",
                    )}
                  >
                    {a.rank}
                  </p>
                  <p className={cn("text-sm font-semibold", i === 0 ? "opacity-85" : "text-muted-foreground")}>{a.detail}</p>
                  <h3 className="mt-2 text-[17px] font-bold">{a.event}</h3>
                  <p className={cn("text-sm", i === 0 ? "opacity-85" : "text-muted-foreground")}>
                    Team {a.team} · {a.date}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal>
          <details className="group mt-5 rounded-2xl border border-border bg-background">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 font-bold text-primary [&::-webkit-details-marker]:hidden">
              All {totalAwards} awards &amp; honors
              <span aria-hidden="true" className="text-xl leading-none transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <ol className="px-5 pb-3">
              {[...topAwards, ...moreAwards].map((a) => (
                <li
                  key={`${a.event}-${a.date}`}
                  className="grid grid-cols-[1fr_auto] gap-x-3 gap-y-0.5 border-t border-border py-3 text-[14.5px] sm:grid-cols-[180px_1fr_auto] sm:items-baseline"
                >
                  <span className="font-bold tabular-nums">{rankLine(a)}</span>
                  <span className="col-span-2 row-start-2 min-w-0 text-muted-foreground sm:col-span-1 sm:col-start-2 sm:row-start-1">
                    {a.event}
                    {a.team && ` · ${a.team}`}
                  </span>
                  <time className="col-start-2 row-start-1 whitespace-nowrap text-[13px] text-muted-foreground tabular-nums sm:col-start-3">
                    {a.date}
                  </time>
                </li>
              ))}
            </ol>
          </details>
        </Reveal>
      </div>
    </section>
  )
}

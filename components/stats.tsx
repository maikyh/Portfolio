import { stats } from "@/lib/content"
import { Reveal } from "@/components/motion"
import { cn } from "@/lib/utils"

export function Stats() {
  return (
    <section aria-label="Highlights" className="border-y border-border bg-background">
      <Reveal className="container grid grid-cols-3">
        {stats.map((stat, i) => (
          <div key={stat.label} className={cn("py-6 pr-3 md:py-7 md:pr-6", i > 0 && "border-l pl-3 md:pl-6")}>
            <p className="text-[1.75rem] font-extrabold leading-tight tracking-[-0.03em] text-primary tabular-nums md:text-[2.5rem]">
              {stat.value}
            </p>
            <p className="text-[13px] leading-snug text-muted-foreground md:text-sm">{stat.label}</p>
          </div>
        ))}
      </Reveal>
    </section>
  )
}

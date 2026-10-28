import { stats } from "@/lib/content"
import { Reveal } from "@/components/motion"
import { cn } from "@/lib/utils"

export function Stats() {
  return (
    <section aria-label="Highlights" className="border-y border-border bg-background">
      <Reveal className="container grid grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            // 2×2 grid on phones, one row on desktop: dividers follow the layout.
            className={cn(
              "py-6 pr-4 md:py-7",
              i % 2 === 1 && "border-l pl-4 md:pl-6",
              i >= 2 && "border-t lg:border-t-0",
              i > 0 && "lg:border-l lg:pl-6",
            )}
          >
            <p className="text-[2rem] font-extrabold leading-tight tracking-[-0.03em] text-primary tabular-nums md:text-[2.5rem]">
              {stat.value}
            </p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </Reveal>
    </section>
  )
}

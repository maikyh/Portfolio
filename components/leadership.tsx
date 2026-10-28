import Image from "next/image"
import { club } from "@/lib/content"
import { Reveal } from "@/components/motion"
import clubSession from "@/assets/club-session.jpg"
import teamPhoto from "@/assets/team-espantabugs.jpg"

export function Leadership() {
  return (
    <section id="leadership" className="bg-secondary py-16 md:py-24">
      <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <Reveal className="grid min-w-0 gap-5">
          <span className="eyebrow">Leadership</span>
          <h2 className="text-[clamp(2rem,4.4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em]">
            Coaching the next ICPC teams
          </h2>
          <div>
            <h3 className="text-[1.375rem] font-extrabold">{club.name}</h3>
            <p className="font-bold text-primary">
              {club.role} · {club.dates}
            </p>
          </div>
          <p className="text-[17px] text-muted-foreground">{club.text}</p>
          <dl className="grid grid-cols-3 gap-2.5 md:gap-3">
            {club.numbers.map((n) => (
              <div key={n.label} className="flex flex-col rounded-2xl bg-background p-3 md:p-4">
                <dt className="order-2 text-[13px] leading-snug text-muted-foreground">{n.label}</dt>
                <dd className="order-1 text-2xl font-extrabold leading-tight text-primary md:text-[1.875rem]">{n.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.1} className="grid grid-cols-2 gap-3 md:gap-4">
          <Image
            src={clubSession}
            alt="A club training session with students working on laptops"
            sizes="(min-width: 1024px) 280px, 50vw"
            className="aspect-[3/4] w-full rounded-[20px] object-cover"
          />
          <Image
            src={teamPhoto}
            alt="Team EspantaBugs in front of the TecNM La Laguna sign"
            sizes="(min-width: 1024px) 280px, 50vw"
            className="mt-6 aspect-[3/4] w-full rounded-[20px] object-cover md:mt-10"
          />
        </Reveal>
      </div>
    </section>
  )
}

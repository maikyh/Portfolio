import { site } from "@/lib/content"
import { Reveal } from "@/components/motion"
import { socialLinks } from "@/components/social-links"

export function Contact() {
  return (
    <section id="contact" className="bg-band text-band-foreground">
      <Reveal className="container grid justify-items-start gap-5 py-16 md:gap-6 md:py-24">
        <span className="text-[13px] font-extrabold uppercase tracking-[0.14em] opacity-80">Contact</span>
        <h2 className="text-[clamp(2.5rem,7vw,5rem)] font-extrabold leading-none tracking-[-0.04em]">Let’s talk.</h2>
        <p className="max-w-[52ch] text-lg opacity-85">
          Open to software engineering roles. The fastest way to reach me is email.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="break-all border-b-[3px] border-current text-[clamp(1.25rem,3vw,1.875rem)] font-extrabold transition-opacity hover:opacity-80"
        >
          {site.email}
        </a>
        <ul className="flex gap-2.5" aria-label="Social links">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-xl border border-white/30 transition-colors hover:bg-white/10"
              >
                <Icon className="h-5 w-5" />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}

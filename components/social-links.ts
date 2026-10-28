import { Github, Linkedin, Mail } from "lucide-react"
import { site } from "@/lib/content"

export const socialLinks = [
  { label: "GitHub", href: site.github, icon: Github },
  { label: "LinkedIn", href: site.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${site.email}`, icon: Mail },
]

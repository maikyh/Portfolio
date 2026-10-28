// All copy on the site lives here. Source: Miguel's CV and LinkedIn — keep it factual.

export const site = {
  name: "Miguel Garza",
  url: "https://maikyh.github.io/miguel-garza/",
  email: "miguelgrza.12@gmail.com",
  github: "https://github.com/maikyh",
  linkedin: "https://www.linkedin.com/in/maiky/",
  // Copy of the CV with the phone number removed. Plain links don't get basePath, so it's spelled out.
  resume: "/miguel-garza/media/Miguel-Garza-Resume.pdf",
  // Flip to true once the full-time offer is confirmed publicly.
  showIncomingMeta: false,
}

export const roles = ["Software Engineer", "ICPC Coach", "Competitive Programmer", "Problem Solver"]

export const intro =
  "Software engineer from Torreón, Coahuila. I’ve interned three times at Meta, plus John Deere and CENACE, building systems that run at very large scale. I also founded and coach my university’s competitive programming club."

export const stats = [
  { value: "3×", label: "Meta SWE internships" },
  { value: "100+", label: "students mentored in algorithms" },
  { value: "6", label: "teams coached to ICPC Mexico Finals" },
]

export type Job = {
  company: string
  title: string
  team?: string
  dates: string
  location: string
  metric?: { value: string; label: string }
  points: string[]
  tags: string[]
}

export const experience: Job[] = [
  {
    company: "CENACE",
    title: "AI Engineer Intern",
    dates: "Sep – Dec 2025",
    location: "Coahuila, MX",
    metric: { value: "2.56%", label: "MAPE" },
    points: [
      "Built a Temporal Fusion Transformer that forecasts electrical demand from weather and load data.",
      "Wrote the end-to-end Python pipeline with Darts: data processing, training and forecasting.",
      "Reached 2.56% MAPE with interpretable, probabilistic forecasts for power-system planning.",
    ],
    tags: ["Python", "Darts", "TFT"],
  },
  {
    company: "Meta",
    title: "Software Engineer Intern",
    team: "Media Metrics",
    dates: "May – Aug 2025",
    location: "Seattle, WA",
    metric: { value: "2B+", label: "events / min" },
    points: [
      "Built an internal tool that handles over 2 billion video events per minute across Reels, video, live and ads.",
      "Covers every app in Meta’s family: Instagram, Facebook, WhatsApp, Threads, Messenger and Oculus.",
      "Turns trillions of daily events into views and watch time, metrics used for monetization and analytics.",
    ],
    tags: ["Data pipelines", "Scale"],
  },
  {
    company: "Meta",
    title: "Software Engineer Intern",
    team: "Professional Dashboard",
    dates: "May – Aug 2024",
    location: "New York, NY",
    metric: { value: "+0.7182%", label: "engagement" },
    points: [
      "Shipped a feature to millions of users with cross-functional partners.",
      "Led the experiment review for ProDash translation, which launched and lifted engagement by 0.7182%.",
      "Proposed and built improvements to the original plan.",
    ],
    tags: ["Bloks", "Hack", "EntSQL"],
  },
  {
    company: "John Deere",
    title: "Software Engineer Intern",
    team: "Control Tower",
    dates: "Jan – May 2024",
    location: "Coahuila, MX",
    points: [
      "Worked on a worldwide supply-chain application.",
      "Delivered production features accepted by the product owner and stakeholders.",
      "Contributed to every phase of analysis and development in an agile team.",
    ],
    tags: ["React", "TypeScript", "Elasticsearch", "Docker"],
  },
  {
    company: "Meta",
    title: "Software Engineer Intern",
    team: "CAA New Platforms",
    dates: "Jun – Aug 2023",
    location: "Menlo Park, CA",
    points: [
      "Built Ans2Ask, a full-stack Q&A app, from scratch with guidance from Meta engineers.",
      "React and Node/Express front to back, Sequelize for data, Python for the ML models.",
    ],
    tags: ["React", "Node.js", "Express", "Python"],
  },
]

export const club = {
  name: "Competitive Programming Club ITLag",
  role: "Founder, President & Head Coach",
  dates: "Sep 2022 – Present",
  text: "I started the club at Instituto Tecnológico de la Laguna and coach it: data structures, dynamic programming, graph theory and C++, from first contest to regional finals.",
  numbers: [
    { value: "100+", label: "members mentored" },
    { value: "6", label: "teams to ICPC Mexico Finals" },
    { value: "3", label: "teams to ICPC Texas Regional 2025" },
  ],
}

export type Award = { rank: string; detail: string; event: string; team?: string; date: string }

export const topAwards: Award[] = [
  { rank: "State Champion", detail: "Coahuila", event: "ICPC Mexico Finals 2025", team: "gatOS", date: "Nov 2025" },
  { rank: "1st", detail: "of 675 teams", event: "Coding Cup TecNM 2025", team: "gatOS", date: "Oct 2025" },
  { rank: "2nd", detail: "of 20 teams", event: "ICPC TXST Texas–Mexico 2025", team: "EspantaBugs", date: "Apr 2025" },
  { rank: "1st", detail: "of 183 teams", event: "8° ITS San Pedro Contest", team: "Usurpadores", date: "Nov 2024" },
  { rank: "1st", detail: "of 150 teams", event: "4° ITSA Code Contest", team: "Usurpadores", date: "Oct 2024" },
  { rank: "3rd", detail: "of 625 teams", event: "Coding Cup TecNM 2024", team: "Usurpadores", date: "Oct 2024" },
]

export const moreAwards: Award[] = [
  { rank: "24th", detail: "of 295 teams", event: "Gran Premio de México ICPC", team: "EspantaBugs", date: "Oct 2022" },
  { rank: "5th", detail: "of 684 teams", event: "Coding Cup TecNM 2022", team: "EspantaBugs", date: "Oct 2022" },
  { rank: "16th", detail: "of 92", event: "Donald Knuth Annual Programming Contest", date: "Aug 2022" },
  { rank: "3rd", detail: "of 160 teams", event: "7° ITS San Pedro Contest", team: "EspantaBugs", date: "Jun 2022" },
  { rank: "135th", detail: "of 271 teams", event: "Gran Premio de México ICPC", team: "EspantaBugs", date: "May 2022" },
  { rank: "2nd", detail: "of 42", event: "Google Kick Start Round B, Mexico", date: "Apr 2022" },
  { rank: "9th", detail: "of 110", event: "Liga de Programación, Phase 2 (omegaUp)", date: "Jan 2022" },
  { rank: "2nd", detail: "of 300+", event: "ITLag Computer Systems admission exam", date: "Jul 2021" },
  { rank: "Gold medal", detail: "", event: "Coahuila Regional Math Olympiad", date: "May 2018" },
  { rank: "Honorable mention", detail: "", event: "II Mexican Math Olympiad (OMMEB)", date: "Jan 2018" },
  { rank: "Honorable mention", detail: "", event: "XVIII Mexican Math Olympiad (ONMAPS)", date: "Jan 2018" },
  { rank: "Honorable mention", detail: "", event: "XXVI Pre-National Pre-University Math Tournament", date: "Mar 2017" },
]

export type Project = { name: string; description: string; tags: string[]; links: { label: string; href: string }[] }

export const projects: Project[] = [
  {
    name: "Ans2Ask",
    description:
      "A Q&A network where asking costs points and answering earns them, so people keep helping each other. Built from scratch during my 2023 Meta internship.",
    tags: ["React", "Node.js", "Express", "Sequelize", "Python ML"],
    links: [{ label: "Code", href: "https://github.com/maikyh/Ans2Ask" }],
  },
  {
    name: "Competitive Programming Reference",
    description:
      "My team’s library of classic algorithms and data structures: graphs, geometry, strings, number theory and combinatorics. We used it to climb from 135th to 24th at the ICPC Gran Premio de México in six months.",
    tags: ["C++"],
    links: [{ label: "Code", href: "https://github.com/maikyh/references" }],
  },
  {
    name: "Conquering Seattle",
    description:
      "Full-stack real estate site I built to learn PHP, JavaScript and SQL from scratch, with validated forms and full CRUD.",
    tags: ["PHP", "JavaScript", "MySQL"],
    links: [{ label: "Code", href: "https://github.com/maikyh/Conquering-Seattle" }],
  },
  {
    name: "TikTok Festival",
    description:
      "Landing page practicing DOM work, smooth scrolling and a sticky nav, with a Gulp build that converts images to WebP.",
    tags: ["JavaScript", "Sass", "Gulp"],
    links: [
      { label: "Live demo", href: "https://tiktokfestival-mg.netlify.app" },
      { label: "Code", href: "https://github.com/maikyh/TikTok-Festival" },
    ],
  },
]

export const skills = [
  { group: "Languages", items: ["C++", "Python", "JavaScript", "TypeScript", "Hack / PHP", "Java", "SQL"] },
  { group: "Frameworks & tools", items: ["React", "Node.js", "Express", "Docker", "Elasticsearch", "Darts", "Git", "MySQL"] },
  { group: "Spoken", items: ["Spanish (native)", "English (fluent)"] },
]

export const education = {
  school: "Instituto Tecnológico de la Laguna",
  degree: "B.S. Computer Systems Engineering",
  date: "Graduated Dec 2025",
  gpa: "91",
}

export const nav = [
  { label: "Experience", href: "#experience" },
  { label: "Leadership", href: "#leadership" },
  { label: "Awards", href: "#awards" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

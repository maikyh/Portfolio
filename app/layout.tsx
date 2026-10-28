import type React from "react"
import type { Metadata, Viewport } from "next"
import { Plus_Jakarta_Sans as FontSans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { site } from "@/lib/content"
import { ThemeProvider } from "@/components/theme-provider"

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
})

const title = "Miguel Garza · Software Engineer"
const description =
  "Software engineer from Torreón, Mexico. Three-time Meta SWE intern, ICPC Mexico Finals state champion and founder of the ITLag competitive programming club."

export const metadata: Metadata = {
  metadataBase: new URL("https://maikyh.github.io"),
  title,
  description,
  authors: [{ name: site.name, url: site.url }],
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title,
    description,
    locale: "en_US",
    images: [{ url: "/miguel-garza/og.png", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/miguel-garza/og.png"],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#060918" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen font-sans", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

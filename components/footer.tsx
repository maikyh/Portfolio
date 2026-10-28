export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-background py-7">
      <div className="container flex flex-wrap justify-between gap-3 text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} Miguel Garza · Torreón, Coahuila</span>
        <span className="font-extrabold text-primary">Always Improving!</span>
      </div>
    </footer>
  )
}

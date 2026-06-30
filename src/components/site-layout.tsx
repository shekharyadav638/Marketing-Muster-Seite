import { Link, Outlet } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/funktionen", label: "Funktionen" },
  { to: "/preise", label: "Preise" },
  { to: "/kunden", label: "Kunden" },
  { to: "/ueber-uns", label: "Über uns" },
  { to: "/blog", label: "Blog" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteLayout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight text-lg">
            <span className="inline-block w-7 h-7 rounded-md bg-primary text-primary-foreground grid place-items-center text-sm">Z</span>
            Zeitwerk
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="hover:text-foreground transition-colors" activeProps={{ className: "text-foreground" }}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="https://app.zeitwerk.de" className="text-sm text-muted-foreground hover:text-foreground">Anmelden</a>
            <Link to="/preise" className="text-sm rounded-md bg-primary text-primary-foreground px-3.5 py-2 font-medium hover:opacity-90">
              Kostenlos testen
            </Link>
          </div>
          <button className="md:hidden text-sm" onClick={() => setOpen(!open)} aria-label="Menü">☰</button>
        </div>
        {open && (
          <div className="md:hidden border-t border-border px-6 py-4 flex flex-col gap-3 text-sm">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)}>{n.label}</Link>
            ))}
            <Link to="/preise" onClick={() => setOpen(false)} className="rounded-md bg-primary text-primary-foreground px-3 py-2 font-medium text-center">Kostenlos testen</Link>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border mt-24 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-4 text-sm">
          <div>
            <div className="flex items-center gap-2 font-semibold mb-3">
              <span className="inline-block w-6 h-6 rounded bg-primary text-primary-foreground grid place-items-center text-xs">Z</span>
              Zeitwerk
            </div>
            <p className="text-muted-foreground">Zeiterfassung und Projektsteuerung für mittelständische Teams aus Deutschland, Österreich und der Schweiz.</p>
          </div>
          <div>
            <div className="font-medium mb-3">Produkt</div>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/funktionen">Funktionen</Link></li>
              <li><Link to="/preise">Preise</Link></li>
              <li><Link to="/kunden">Kundenstimmen</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3">Unternehmen</div>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/ueber-uns">Über uns</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/kontakt">Kontakt</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3">Rechtliches</div>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/datenschutz">Datenschutz</Link></li>
              <li><Link to="/impressum">Impressum</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-5 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
            <span>© {new Date().getFullYear()} Zeitwerk GmbH · Made in München</span>
            <span>DSGVO-konform · Hosting in Frankfurt am Main</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
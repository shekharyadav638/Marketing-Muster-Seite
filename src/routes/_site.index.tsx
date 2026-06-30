import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_site/")({
  head: () => ({
    meta: [
      { title: "Zeitwerk – Zeiterfassung & Projektsteuerung für Teams" },
      { name: "description", content: "Zeitwerk ist die DSGVO-konforme Zeiterfassung und Projektsteuerung für mittelständische Teams. Hosting in Frankfurt, in 14 Tagen einsatzbereit." },
      { property: "og:title", content: "Zeitwerk – Zeiterfassung & Projektsteuerung" },
      { property: "og:description", content: "Stunden erfassen, Projekte steuern, Reports erstellen. Made in Germany, gehostet in Frankfurt." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium rounded-full bg-accent text-accent-foreground px-3 py-1 mb-6">
            Neu · Version 4.2 mit KI-gestützter Wochenplanung
          </span>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Zeiterfassung, die Ihr Team tatsächlich benutzt.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Zeitwerk bringt Stundenerfassung, Projektplanung und Reporting in eine Oberfläche – DSGVO-konform, gehostet in Frankfurt am Main und in unter 14 Tagen im gesamten Unternehmen einsatzbereit.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/preise" className="rounded-md bg-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:opacity-90">30 Tage kostenlos testen</Link>
            <Link to="/kontakt" className="rounded-md border border-border bg-card px-5 py-3 text-sm font-medium hover:bg-secondary">Demo vereinbaren</Link>
          </div>
          <p className="mt-5 text-xs text-muted-foreground">Keine Kreditkarte erforderlich · Vertragslaufzeit monatlich kündbar</p>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-80 text-sm text-muted-foreground">
          {["Brauerei Köhler","Stadtwerke Lindau","Heller Architekten","Bauer & Sohn KG","Praxis Dr. Weidmann","Verlag Nordlicht","ConsultaPlus","Möbelhaus Vogt"].map((c)=>(
            <div key={c} className="border border-border rounded-md px-3 py-3 text-center bg-card">{c}</div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-3 gap-10">
          {[
            { t: "Zeiten in Sekunden erfasst", d: "Per Klick, Tastenkürzel oder mobil. Auch offline – Daten synchronisieren sich automatisch." },
            { t: "Projekte ohne Excel-Wildwuchs", d: "Budgets, Phasen und Stundenkontingente in einer Ansicht. Warnungen, bevor das Projekt rot wird." },
            { t: "Reports in Minuten statt Tagen", d: "DATEV-Export, Lohnabrechnung, Kundenrechnung – einmal eingerichtet, monatlich auf Knopfdruck." },
          ].map((f)=>(
            <div key={f.t}>
              <div className="w-10 h-10 rounded-md bg-primary/10 text-primary grid place-items-center mb-4">✓</div>
              <h3 className="font-semibold mb-2">{f.t}</h3>
              <p className="text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Speziell für deutschsprachige Unternehmen entwickelt.</h2>
          <p className="mt-5 text-muted-foreground">Pausenregelungen nach Arbeitszeitgesetz, Feiertage für alle 16 Bundesländer, Tarifverträge IG Metall und ver.di vorkonfiguriert. Schnittstellen zu DATEV, Lexware, sevDesk und Personio inklusive.</p>
          <ul className="mt-6 space-y-3 text-sm">
            <li>• Konform mit dem BAG-Urteil zur Arbeitszeiterfassung</li>
            <li>• Server ausschließlich in Deutschland (ISO 27001)</li>
            <li>• Support aus München – telefonisch erreichbar</li>
            <li>• Schulungen vor Ort oder remote auf Deutsch</li>
          </ul>
        </div>
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <div className="text-sm text-muted-foreground mb-4">Wochenübersicht · KW 27</div>
          {[
            { day: "Mo", h: "8,25 h", p: "Kunde Heller" },
            { day: "Di", h: "7,75 h", p: "Stadtwerke Lindau" },
            { day: "Mi", h: "8,00 h", p: "Interne Entwicklung" },
            { day: "Do", h: "6,50 h", p: "Bauer & Sohn KG" },
            { day: "Fr", h: "4,00 h", p: "Verwaltung" },
          ].map((r)=>(
            <div key={r.day} className="flex items-center justify-between border-t border-border py-3 text-sm">
              <span className="font-medium w-8">{r.day}</span>
              <span className="text-muted-foreground flex-1 ml-3">{r.p}</span>
              <span className="tabular-nums">{r.h}</span>
            </div>
          ))}
          <div className="flex justify-between pt-4 mt-2 border-t border-border text-sm font-medium">
            <span>Summe</span><span>34,50 h</span>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Bereit, die Stundenzettel abzuschaffen?</h2>
          <p className="mt-4 opacity-90 max-w-2xl mx-auto">Testen Sie Zeitwerk 30 Tage kostenlos mit Ihrem gesamten Team. Wir helfen beim Datenimport aus Excel, MOCO oder ZEP.</p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link to="/preise" className="rounded-md bg-background text-foreground px-5 py-3 text-sm font-medium">Jetzt starten</Link>
            <Link to="/kontakt" className="rounded-md border border-primary-foreground/40 px-5 py-3 text-sm font-medium">Mit Vertrieb sprechen</Link>
          </div>
        </div>
      </section>
    </>
  );
}
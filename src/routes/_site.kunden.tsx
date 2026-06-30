import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_site/kunden")({
  head: () => ({
    meta: [
      { title: "Kunden & Referenzen – Zeitwerk" },
      { name: "description", content: "Über 1.200 Unternehmen setzen Zeitwerk ein. Erfahrungsberichte aus Industrie, Handwerk und IT-Dienstleistung." },
      { property: "og:title", content: "Kunden – Zeitwerk" },
      { property: "og:description", content: "Was unsere Kunden über Zeitwerk sagen." },
    ],
  }),
  component: Kunden,
});

const stories = [
  { name: "Bauer & Sohn KG", branche: "Bauunternehmen, 84 Mitarbeitende", quote: "Vorher haben wir Stundenzettel von der Baustelle eingesammelt und abgetippt. Mit Zeitwerk sparen wir in der Lohnbuchhaltung zwei volle Tage pro Monat.", person: "Andrea Bauer, Geschäftsführerin" },
  { name: "Heller Architekten", branche: "Architekturbüro, 22 Mitarbeitende", quote: "Endlich sehen wir pro Projekt, wann wir aus dem Budget laufen – nicht erst am Quartalsende. Das hat unsere Rendite spürbar verbessert.", person: "Markus Heller, Partner" },
  { name: "ConsultaPlus", branche: "IT-Beratung, 140 Mitarbeitende", quote: "Die DATEV-Schnittstelle hat uns überzeugt. Die Einführung war in drei Wochen abgeschlossen, der Support reagiert noch am gleichen Tag.", person: "Dr. Sabine Klassen, CFO" },
  { name: "Stadtwerke Lindau", branche: "Versorger, 310 Mitarbeitende", quote: "Wir haben strenge Anforderungen an Datenschutz und Betriebsrat-Mitbestimmung. Zeitwerk hat beides von Anfang an mitgedacht.", person: "Thomas Reuter, Personalleitung" },
];

function Kunden() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl">Warum 1.200 Unternehmen auf Zeitwerk vertrauen.</h1>
      <p className="mt-5 text-muted-foreground max-w-2xl">Vom Handwerksbetrieb mit 8 Mitarbeitenden bis zum mittelständischen Versorger mit 300 Personen – Zeitwerk wächst mit Ihrer Organisation.</p>

      <div className="mt-14 grid md:grid-cols-2 gap-6">
        {stories.map((s)=>(
          <article key={s.name} className="border border-border rounded-lg bg-card p-7">
            <div className="text-xs uppercase tracking-wide text-muted-foreground">{s.branche}</div>
            <h3 className="mt-2 font-semibold text-lg">{s.name}</h3>
            <blockquote className="mt-4 text-foreground">„{s.quote}“</blockquote>
            <div className="mt-4 text-sm text-muted-foreground">{s.person}</div>
          </article>
        ))}
      </div>

      <div className="mt-20 grid md:grid-cols-4 gap-6 text-center">
        {[
          { k: "1.247", v: "aktive Unternehmen" },
          { k: "38.000+", v: "Mitarbeitende erfassen täglich" },
          { k: "99,98 %", v: "Verfügbarkeit 2025" },
          { k: "4,7 / 5", v: "OMR Reviews Bewertung" },
        ].map((m)=>(
          <div key={m.v} className="border border-border rounded-lg p-6 bg-card">
            <div className="text-3xl font-semibold">{m.k}</div>
            <div className="text-sm text-muted-foreground mt-1">{m.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_site/preise")({
  head: () => ({
    meta: [
      { title: "Preise – Zeitwerk Zeiterfassung" },
      { name: "description", content: "Transparente Preise pro Nutzer. Starter, Business und Enterprise – monatlich kündbar, keine Einrichtungsgebühr." },
      { property: "og:title", content: "Preise – Zeitwerk" },
      { property: "og:description", content: "Faire Preise pro Nutzer. Monatlich kündbar, keine versteckten Kosten." },
    ],
  }),
  component: Preise,
});

const tiers = [
  { name: "Starter", price: "5,90 €", desc: "Für kleine Teams bis 10 Mitarbeitende.", features: ["Zeiterfassung Web & Mobil","Projekte & Aufgaben","Urlaubsverwaltung","E-Mail-Support"], cta: "Kostenlos testen" },
  { name: "Business", price: "9,90 €", desc: "Für wachsende Unternehmen mit Projektsteuerung.", features: ["Alles aus Starter","Budgets & Auslastung","DATEV-Export","Rechnungsstellung","Telefon-Support"], cta: "Kostenlos testen", featured: true },
  { name: "Enterprise", price: "Auf Anfrage", desc: "Für Konzerne mit eigenen Compliance-Anforderungen.", features: ["Alles aus Business","Single Sign-On (SAML)","On-Premises möglich","Eigener Customer Success","SLA 99,95 %"], cta: "Beratung anfragen" },
];

function Preise() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Faire Preise. Pro Nutzer. Pro Monat.</h1>
        <p className="mt-5 text-muted-foreground">Alle Preise zzgl. USt. Monatlich oder jährlich abrechenbar – bei jährlicher Zahlung sparen Sie zwei Monate.</p>
      </div>

      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <div key={t.name} className={`rounded-xl border p-7 bg-card flex flex-col ${t.featured ? "border-primary shadow-md" : "border-border"}`}>
            {t.featured && <div className="text-xs font-medium text-primary mb-2">Beliebteste Wahl</div>}
            <h3 className="text-lg font-semibold">{t.name}</h3>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-3xl font-semibold">{t.price}</span>
              {t.price.includes("€") && <span className="text-sm text-muted-foreground">/Nutzer/Monat</span>}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
            <ul className="mt-6 space-y-2 text-sm flex-1">
              {t.features.map((f) => <li key={f}>• {f}</li>)}
            </ul>
            <Link to="/kontakt" className={`mt-7 rounded-md px-4 py-2.5 text-sm font-medium text-center ${t.featured ? "bg-primary text-primary-foreground" : "border border-border hover:bg-secondary"}`}>{t.cta}</Link>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <h2 className="text-2xl font-semibold">Häufige Fragen</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6 text-sm">
          {[
            { q: "Gibt es eine Mindestvertragslaufzeit?", a: "Nein. Sie können monatlich kündigen. Bei jährlicher Zahlung gewähren wir zwei Monate Rabatt." },
            { q: "Was kostet die Einrichtung?", a: "Nichts. Datenimport aus Excel, MOCO, ZEP oder Clockodo ist kostenfrei in jedem Plan enthalten." },
            { q: "Werden Auszubildende mitgezählt?", a: "Ja, jeder aktive Account ist ein Nutzer. Inaktive Konten (z. B. Elternzeit) zählen nicht." },
            { q: "Bietet ihr Sonderkonditionen für Vereine?", a: "Gemeinnützige Organisationen erhalten 50 % Rabatt auf alle Pläne. Bitte Nachweis per E-Mail senden." },
          ].map((f)=>(
            <div key={f.q} className="border border-border rounded-md p-5 bg-card">
              <div className="font-medium mb-1">{f.q}</div>
              <p className="text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
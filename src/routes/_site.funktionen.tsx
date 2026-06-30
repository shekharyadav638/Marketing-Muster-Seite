import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_site/funktionen")({
  head: () => ({
    meta: [
      { title: "Funktionen – Zeitwerk Zeiterfassung" },
      { name: "description", content: "Stundenerfassung, Projektplanung, Reporting, DATEV-Export und mobile App. Alle Funktionen von Zeitwerk im Überblick." },
      { property: "og:title", content: "Funktionen – Zeitwerk" },
      { property: "og:description", content: "Alle Funktionen von Zeitwerk: Zeiterfassung, Projektsteuerung, Reporting." },
    ],
  }),
  component: Funktionen,
});

const features = [
  { t: "Stempeluhr & Timer", d: "Per Browser, Desktop-App oder iOS/Android. Tastenkürzel zum Starten und Wechseln zwischen Aufgaben. Offline-Modus mit automatischer Synchronisation." },
  { t: "Projekte & Budgets", d: "Projekte in Phasen und Aufgaben gliedern, Stundenkontingente festlegen und ab 75 % Verbrauch automatisch Warnungen an die Projektleitung schicken." },
  { t: "Urlaub & Abwesenheiten", d: "Resturlaub, Krankheitstage, Elternzeit und Sonderurlaub in einem Antragsworkflow. Genehmigung per E-Mail oder Slack." },
  { t: "Schichten & Dienstpläne", d: "Wiederkehrende Schichten planen, Tausch zwischen Mitarbeitenden, automatische Pausenabzüge nach ArbZG." },
  { t: "DATEV- und Lohnexport", d: "Direktexport nach DATEV Lohn und Gehalt, sevDesk, Lexware sowie individueller CSV-Export für Personalabteilungen." },
  { t: "Kundenrechnungen", d: "Aus erfassten Stunden Honorarnoten mit eigenem Briefkopf erstellen, als PDF oder per ZUGFeRD/XRechnung versenden." },
  { t: "Auswertungen", d: "Dashboards für Geschäftsführung, Projektleitung und Mitarbeitende – mit Drilldown bis auf die einzelne Buchung." },
  { t: "Schnittstellen", d: "Personio, Slack, Microsoft Teams, Asana, Jira, Trello, Google Kalender und mehr. REST-API und Zapier-Integration verfügbar." },
  { t: "Sicherheit", d: "Zwei-Faktor-Authentifizierung, Single Sign-On (SAML), rollenbasierte Rechte, Audit-Log und tägliche verschlüsselte Backups." },
];

function Funktionen() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl">Alles, was Sie für die Arbeitszeit­erfassung brauchen.</h1>
      <p className="mt-5 text-muted-foreground max-w-2xl">Über 1.200 Unternehmen aus Industrie, Handwerk, IT-Dienstleistung und freien Berufen vertrauen täglich auf Zeitwerk.</p>

      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {features.map((f) => (
          <div key={f.t} className="rounded-lg border border-border bg-card p-6">
            <div className="w-9 h-9 rounded-md bg-primary/10 text-primary grid place-items-center mb-4 text-sm font-semibold">✓</div>
            <h3 className="font-semibold mb-2">{f.t}</h3>
            <p className="text-sm text-muted-foreground">{f.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
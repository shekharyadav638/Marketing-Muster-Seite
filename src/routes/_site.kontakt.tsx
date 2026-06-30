import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_site/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt – Zeitwerk" },
      { name: "description", content: "Sprechen Sie mit unserem Team in München. Vertrieb, Support und Presseanfragen erreichen Sie persönlich." },
      { property: "og:title", content: "Kontakt – Zeitwerk" },
      { property: "og:description", content: "So erreichen Sie Zeitwerk." },
    ],
  }),
  component: Kontakt,
});

function Kontakt() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 grid md:grid-cols-2 gap-12">
      <div>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Sprechen wir.</h1>
        <p className="mt-5 text-muted-foreground">Unser Team in München beantwortet Ihre Fragen werktags von 8 bis 18 Uhr – persönlich, nicht per Chatbot.</p>

        <div className="mt-10 space-y-6 text-sm">
          <div>
            <div className="font-medium">Vertrieb</div>
            <a href="mailto:vertrieb@zeitwerk.de" className="text-primary">vertrieb@zeitwerk.de</a>
            <div className="text-muted-foreground">+49 89 380 88 12-0</div>
          </div>
          <div>
            <div className="font-medium">Support für Bestandskunden</div>
            <a href="mailto:support@zeitwerk.de" className="text-primary">support@zeitwerk.de</a>
            <div className="text-muted-foreground">+49 89 380 88 12-9</div>
          </div>
          <div>
            <div className="font-medium">Presse</div>
            <a href="mailto:presse@zeitwerk.de" className="text-primary">presse@zeitwerk.de</a>
          </div>
          <div>
            <div className="font-medium">Postanschrift</div>
            <div className="text-muted-foreground">Zeitwerk GmbH<br/>Werkstattstraße 14<br/>81371 München</div>
          </div>
        </div>
      </div>

      <form className="border border-border rounded-lg bg-card p-6 space-y-4" onSubmit={(e)=>e.preventDefault()}>
        <h2 className="font-semibold text-lg">Demo anfragen</h2>
        <div>
          <label className="text-sm font-medium block mb-1.5">Name</label>
          <input className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm" placeholder="Max Mustermann" />
        </div>
        <div>
          <label className="text-sm font-medium block mb-1.5">Firma</label>
          <input className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm" placeholder="Mustermann GmbH" />
        </div>
        <div>
          <label className="text-sm font-medium block mb-1.5">E-Mail</label>
          <input type="email" className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm" placeholder="max@beispiel.de" />
        </div>
        <div>
          <label className="text-sm font-medium block mb-1.5">Anzahl Mitarbeitende</label>
          <select className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm">
            <option>1–10</option><option>11–50</option><option>51–200</option><option>200+</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium block mb-1.5">Nachricht</label>
          <textarea rows={4} className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm" placeholder="Worum geht es?" />
        </div>
        <button className="w-full rounded-md bg-primary text-primary-foreground py-2.5 text-sm font-medium">Demo anfragen</button>
        <p className="text-xs text-muted-foreground">Wir melden uns binnen eines Werktags. Datenschutz versteht sich.</p>
      </form>
    </div>
  );
}
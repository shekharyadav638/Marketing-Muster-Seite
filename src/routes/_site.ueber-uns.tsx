import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_site/ueber-uns")({
  head: () => ({
    meta: [
      { title: "Über uns – Zeitwerk GmbH" },
      { name: "description", content: "Zeitwerk wurde 2017 in München gegründet. Heute arbeiten 48 Menschen daran, Arbeitszeiterfassung einfach zu machen." },
      { property: "og:title", content: "Über uns – Zeitwerk" },
      { property: "og:description", content: "Die Geschichte und das Team hinter Zeitwerk." },
    ],
  }),
  component: UeberUns,
});

function UeberUns() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Wir glauben: Zeiterfassung sollte nicht nerven.</h1>
      <p className="mt-6 text-lg text-muted-foreground">Zeitwerk wurde 2017 von Hannah Vollmer und Jonas Brandt in München gegründet. Beide hatten in vorherigen Stationen erlebt, wie viel Zeit kleine und mittelständische Unternehmen mit Papier-Stundenzetteln, Excel-Tabellen und unleserlicher Schrift verschwenden.</p>

      <h2 className="mt-12 text-2xl font-semibold">Heute</h2>
      <p className="mt-3 text-muted-foreground">Aus der Idee ist ein Team von 48 Menschen geworden, das aus München, Leipzig und remote arbeitet. Wir sind eigenfinanziert, profitabel seit 2021 und legen Wert darauf, dass unsere Kunden mit echten Menschen sprechen – nicht mit Chatbots.</p>

      <h2 className="mt-12 text-2xl font-semibold">Werte</h2>
      <ul className="mt-3 space-y-3 text-muted-foreground">
        <li><strong className="text-foreground">Werkzeug, nicht Überwachung.</strong> Zeiterfassung dient den Mitarbeitenden, nicht der Kontrolle.</li>
        <li><strong className="text-foreground">Daten gehören Ihnen.</strong> Export jederzeit, keine Vendor-Lock-ins.</li>
        <li><strong className="text-foreground">Boring Technology.</strong> Wir nutzen bewährte Bausteine – Verfügbarkeit ist wichtiger als Hype.</li>
        <li><strong className="text-foreground">Faire Preise.</strong> Wir veröffentlichen unsere Preise. Keine versteckten Aufschläge.</li>
      </ul>

      <h2 className="mt-12 text-2xl font-semibold">Standorte</h2>
      <p className="mt-3 text-muted-foreground">Hauptsitz München (Werkstattstraße 14), Entwicklungsbüro Leipzig (Karl-Liebknecht-Straße 88). Server in Frankfurt am Main (Hetzner, ISO 27001).</p>
    </div>
  );
}
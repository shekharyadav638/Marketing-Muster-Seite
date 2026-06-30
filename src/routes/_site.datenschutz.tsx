import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_site/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung – Zeitwerk" },
      { name: "description", content: "Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO bei Zeitwerk." },
    ],
  }),
  component: Datenschutz,
});

function Datenschutz() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 prose-zeitwerk">
      <h1 className="text-4xl font-semibold tracking-tight">Datenschutzerklärung</h1>
      <p className="mt-3 text-sm text-muted-foreground">Stand: 1. Mai 2026</p>

      <h2 className="mt-10 text-2xl font-semibold">1. Verantwortlicher</h2>
      <p className="mt-2 text-muted-foreground">Verantwortlich für die Datenverarbeitung auf dieser Website ist die Zeitwerk GmbH, Werkstattstraße 14, 81371 München, vertreten durch die Geschäftsführer Hannah Vollmer und Jonas Brandt.</p>

      <h2 className="mt-8 text-2xl font-semibold">2. Datenschutzbeauftragter</h2>
      <p className="mt-2 text-muted-foreground">Unsere Datenschutzbeauftragte erreichen Sie unter datenschutz@zeitwerk.de oder schriftlich an die oben genannte Anschrift mit dem Zusatz „Datenschutz“.</p>

      <h2 className="mt-8 text-2xl font-semibold">3. Zwecke und Rechtsgrundlagen der Verarbeitung</h2>
      <p className="mt-2 text-muted-foreground">Wir verarbeiten personenbezogene Daten zum Betrieb dieser Website, zur Bereitstellung der Software „Zeitwerk“ sowie zur Vertragsanbahnung und -abwicklung. Rechtsgrundlagen sind Art. 6 Abs. 1 lit. b, lit. c und lit. f DSGVO.</p>

      <h2 className="mt-8 text-2xl font-semibold">4. Empfänger und Auftragsverarbeiter</h2>
      <p className="mt-2 text-muted-foreground">Hosting erfolgt durch Hetzner Online GmbH, Gunzenhausen. E-Mail-Versand über Mailjet (Sinch Email GmbH, Berlin). Mit allen Auftragsverarbeitern bestehen Verträge gemäß Art. 28 DSGVO.</p>

      <h2 className="mt-8 text-2xl font-semibold">5. Speicherdauer</h2>
      <p className="mt-2 text-muted-foreground">Personenbezogene Daten werden gelöscht, sobald der Zweck der Verarbeitung entfällt und keine gesetzlichen Aufbewahrungsfristen entgegenstehen.</p>

      <h2 className="mt-8 text-2xl font-semibold">6. Ihre Rechte</h2>
      <p className="mt-2 text-muted-foreground">Sie haben jederzeit das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21). Beschwerden können Sie beim Bayerischen Landesamt für Datenschutzaufsicht einreichen.</p>

      <h2 className="mt-8 text-2xl font-semibold">7. Cookies und Analyse</h2>
      <p className="mt-2 text-muted-foreground">Diese Website setzt ausschließlich technisch notwendige Cookies ein. Zur Reichweitenanalyse nutzen wir die selbst gehostete Open-Source-Lösung „Plausible“, die keine personenbezogenen Daten speichert.</p>
    </div>
  );
}
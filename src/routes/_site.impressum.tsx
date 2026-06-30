import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_site/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – Zeitwerk" },
      { name: "description", content: "Anbieterkennzeichnung gemäß § 5 DDG der Zeitwerk GmbH." },
    ],
  }),
  component: Impressum,
});

function Impressum() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-semibold tracking-tight">Impressum</h1>

      <h2 className="mt-10 text-xl font-semibold">Anbieter</h2>
      <p className="mt-2 text-muted-foreground">Zeitwerk GmbH<br/>Werkstattstraße 14<br/>81371 München<br/>Deutschland</p>

      <h2 className="mt-8 text-xl font-semibold">Kontakt</h2>
      <p className="mt-2 text-muted-foreground">Telefon: +49 89 380 88 12-0<br/>E-Mail: hallo@zeitwerk.de</p>

      <h2 className="mt-8 text-xl font-semibold">Vertretungsberechtigte Geschäftsführer</h2>
      <p className="mt-2 text-muted-foreground">Hannah Vollmer, Jonas Brandt</p>

      <h2 className="mt-8 text-xl font-semibold">Registereintrag</h2>
      <p className="mt-2 text-muted-foreground">Amtsgericht München, HRB 234 567<br/>USt-IdNr.: DE 314 159 265</p>

      <h2 className="mt-8 text-xl font-semibold">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p className="mt-2 text-muted-foreground">Hannah Vollmer, Anschrift wie oben</p>

      <h2 className="mt-8 text-xl font-semibold">Streitschlichtung</h2>
      <p className="mt-2 text-muted-foreground">Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
    </div>
  );
}
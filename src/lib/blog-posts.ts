export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readingTime: string;
  author: string;
  body: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "bag-urteil-arbeitszeiterfassung",
    title: "Das BAG-Urteil im Alltag: Was Mittelständler jetzt umsetzen müssen",
    description:
      "Seit September 2022 ist klar: Arbeitszeit muss systematisch erfasst werden. Wir zeigen, welche Schritte konkret nötig sind.",
    date: "12. Juni 2026",
    category: "Recht",
    readingTime: "7 Min. Lesezeit",
    author: "Hannah Vollmer",
    body: [
      "Mit seiner Entscheidung vom 13. September 2022 (1 ABR 22/21) hat das Bundesarbeitsgericht klargestellt, dass Arbeitgeber in Deutschland verpflichtet sind, ein System zur Erfassung der Arbeitszeit ihrer Mitarbeitenden einzuführen. Was vorher unter Verweis auf das EuGH-Urteil von 2019 noch diskutiert wurde, ist seitdem geltendes Recht – und betrifft auch Unternehmen, die bislang auf Vertrauensarbeitszeit gesetzt haben.",
      "Für den Mittelstand stellt sich nun nicht mehr die Frage, ob Arbeitszeit erfasst wird, sondern wie. Die Anforderungen sind klar: Beginn, Ende und Dauer der täglichen Arbeitszeit müssen objektiv, verlässlich und zugänglich dokumentiert werden. Eine bloße Selbstauskunft per Excel-Liste reicht dafür in der Regel nicht aus.",
      "Wir empfehlen ein Vorgehen in drei Schritten: Erstens die Bestandsaufnahme, welche Arbeitszeitmodelle und Sonderfälle (Außendienst, Schichtarbeit, Homeoffice) im Unternehmen existieren. Zweitens die Einbindung des Betriebsrats, der bei der Einführung eines Zeiterfassungssystems ein Mitbestimmungsrecht nach § 87 Abs. 1 Nr. 6 BetrVG hat. Drittens die technische Einführung mit einer kurzen Pilotphase in einer Abteilung.",
      "Wichtig: Vertrauensarbeitszeit bleibt grundsätzlich zulässig. Die gesetzliche Pflicht bezieht sich auf die Erfassung, nicht auf die Kontrolle. Mitarbeitende können ihre Zeit weiter eigenverantwortlich einteilen – sie muss nur dokumentiert sein.",
      "In Zeitwerk haben wir die rechtlichen Vorgaben direkt in die Software eingebaut: Pausen werden automatisch nach den Vorgaben des Arbeitszeitgesetzes berücksichtigt, Höchstarbeitszeiten werden überwacht und der Betriebsrat erhält auf Wunsch eigene Auswertungen ohne personenbezogene Detaildaten.",
    ],
  },
  {
    slug: "vier-tage-woche-erfahrungen",
    title: "Vier-Tage-Woche: Erfahrungen aus 30 deutschen Unternehmen",
    description:
      "Wir haben mit Kunden gesprochen, die auf 32 Wochenstunden umgestellt haben – und ehrlich gefragt, was funktioniert und was nicht.",
    date: "28. Mai 2026",
    category: "New Work",
    readingTime: "9 Min. Lesezeit",
    author: "Jonas Brandt",
    body: [
      "Die Vier-Tage-Woche ist in Deutschland längst aus der Pilotphase heraus. Knapp 30 unserer Kunden haben in den vergangenen 18 Monaten auf eine reduzierte Wochenarbeitszeit umgestellt – meist auf 32 Stunden bei vollem Lohnausgleich. Wir haben mit den Geschäftsführungen, Personalverantwortlichen und Mitarbeitenden gesprochen.",
      "Die wichtigste Erkenntnis: Eine Vier-Tage-Woche funktioniert nicht, indem man die alten fünf Tage in vier presst. Erfolgreich umgestellt haben vor allem Betriebe, die parallel ihre Meetingkultur, ihre Tools und ihre Abstimmungsprozesse überdacht haben. Wer einfach den Freitag streicht, riskiert Überlastung statt Erholung.",
      "Auch bei der Auslastung zeigen sich klare Muster. In wissensbasierten Berufen – Beratung, Software, Architektur – berichten 22 von 27 befragten Unternehmen, dass die Produktivität stabil geblieben oder gestiegen ist. In Produktion und Handel hingegen ist die Umstellung deutlich aufwendiger, weil Schichten und Anwesenheit anders geplant werden müssen.",
      "Spannend ist der Effekt auf das Recruiting: Acht von zehn Unternehmen geben an, dass sie seit Einführung der Vier-Tage-Woche signifikant mehr qualifizierte Bewerbungen erhalten. Eine Personalleiterin formulierte es so: „Wir sind plötzlich der attraktive Mittelständler, an den vorher niemand gedacht hat.“",
      "Zeitwerk unterstützt das Modell mit flexiblen Sollzeit-Profilen, automatischer Berechnung von Resturlaub bei reduzierter Wochenarbeitszeit und einer eigenen Auswertung „Auslastung pro Vier-Tage-Woche“. Den vollständigen Erfahrungsbericht senden wir auf Anfrage als PDF zu.",
    ],
  },
  {
    slug: "datev-export-update-4-2",
    title: "DATEV-Export ohne Excel-Brücke: So funktioniert es seit Update 4.2",
    description:
      "Mit unserer neuen Direktanbindung sparen Steuerbüros pro Mandant rund 40 Minuten im Monat.",
    date: "14. Mai 2026",
    category: "Produkt",
    readingTime: "5 Min. Lesezeit",
    author: "Produktteam Zeitwerk",
    body: [
      "Mit der Version 4.2 stellt Zeitwerk eine direkte Anbindung an DATEV Lohn und Gehalt sowie an DATEV LODAS bereit. Der Umweg über CSV- oder Excel-Dateien entfällt damit komplett. Lohnbuchhaltungen können die Stunden eines Monats per Knopfdruck nach DATEV übertragen.",
      "Die neue Schnittstelle nutzt das offizielle DATEV-Connect-Protokoll. Für die Einrichtung benötigen Sie einen DATEVnet-Zugang sowie eine kurze Freigabe Ihres Steuerbüros – die Zugangsdaten werden niemals lokal gespeichert.",
      "Konkret übertragen werden: geleistete Arbeitsstunden, Mehrarbeit, Abwesenheiten (Urlaub, Krankheit, Sonderurlaub), Zuschläge für Nacht- und Sonntagsarbeit sowie individuelle Lohnarten, die Sie in Zeitwerk pflegen können. Die Lohnarten lassen sich 1:1 mit den DATEV-Lohnartennummern verknüpfen, sodass nichts manuell zugeordnet werden muss.",
      "Erste Erfahrungen aus dem Beta-Programm zeigen: Pro Mandant sparen die teilnehmenden Steuerbüros rund 40 Minuten pro Monat – Zeit, die bisher mit Plausibilitätsprüfungen, Korrekturen und Rückfragen verbracht wurde. Bei einem Steuerbüro mit 50 Mandanten sind das mehr als 33 Stunden pro Monat.",
      "Die Funktion ist ab sofort in allen Business- und Enterprise-Plänen ohne Aufpreis enthalten. Eine Schritt-für-Schritt-Anleitung finden Bestandskunden im Hilfecenter unter „DATEV-Export einrichten“.",
    ],
  },
  {
    slug: "projektbudgets-stundensaetze-kalkulieren",
    title: "Projektbudgets verstehen: Stundensätze richtig kalkulieren",
    description:
      "Vom Vollkostensatz bis zur internen Verrechnung – ein Leitfaden für Projektleiter:innen.",
    date: "2. Mai 2026",
    category: "Projektsteuerung",
    readingTime: "8 Min. Lesezeit",
    author: "Dr. Sabine Klassen (Gastbeitrag)",
    body: [
      "Viele Projekte werden nicht zu spät unrentabel – sie waren es von Anfang an. Der Grund liegt fast immer im Stundensatz: Wer mit einem zu niedrigen Verrechnungssatz kalkuliert, holt das verlorene Geld auch durch noch so viel Mehrarbeit nicht wieder herein.",
      "Der Vollkostensatz besteht aus drei Bausteinen: dem Bruttogehalt inklusive Lohnnebenkosten, den anteiligen Gemeinkosten (Büro, IT, Verwaltung, Versicherungen) und einem angemessenen Gewinnaufschlag. Eine grobe Faustregel: Multiplizieren Sie das Bruttojahresgehalt mit 2,1 bis 2,4 – das ergibt einen realistischen Vollkostensatz für die meisten wissensbasierten Dienstleistungen.",
      "Anschließend folgt die Frage nach der fakturierbaren Quote. In Beratung, IT und Architektur sind 70–80 % realistisch, der Rest entfällt auf interne Tätigkeiten, Weiterbildung, Vertrieb und Urlaub. Wer mit 100 % rechnet, kalkuliert sich systematisch arm.",
      "Wichtig ist auch die Trennung zwischen Verrechnungssatz nach außen (zum Kunden) und internem Stundensatz (für die Projektkalkulation). Beide werden gerne verwechselt, was zu Missverständnissen bei Festpreis-Projekten führt.",
      "In Zeitwerk hinterlegen Sie pro Mitarbeitendem zwei Sätze: den internen Kostensatz und den externen Verrechnungssatz. Das Projekt-Dashboard zeigt damit sowohl Deckungsbeitrag als auch Marge – und warnt, sobald sich ein Projekt aus dem geplanten Korridor bewegt.",
    ],
  },
  {
    slug: "betriebsrat-zeiterfassung-einfuehrung",
    title: "Betriebsrat und Zeiterfassung: Eine Anleitung für die Einführung",
    description:
      "Wie Sie das Projekt gemeinsam mit dem Betriebsrat aufsetzen, statt es ihm zu verkaufen.",
    date: "21. April 2026",
    category: "Personal",
    readingTime: "6 Min. Lesezeit",
    author: "Hannah Vollmer",
    body: [
      "Die Einführung einer digitalen Zeiterfassung ist mitbestimmungspflichtig. Nach § 87 Abs. 1 Nr. 6 BetrVG hat der Betriebsrat ein echtes Mitbestimmungsrecht – nicht nur ein Anhörungsrecht. Wer das ignoriert, riskiert nicht nur Konflikte, sondern auch die Wirksamkeit der eingeführten Lösung.",
      "Unsere Erfahrung aus über 200 Einführungen: Projekte, die den Betriebsrat von Beginn an einbinden, sind im Schnitt vier Wochen schneller produktiv. Der Grund ist einfach – es entstehen keine Nachverhandlungen, weil die kritischen Punkte schon in der Auswahl geklärt wurden.",
      "Zentrale Themen für eine Betriebsvereinbarung sind: Welche Daten werden erfasst? Wer darf welche Daten einsehen? Wie lange werden die Daten gespeichert? Gibt es Auswertungen auf Einzelpersonen oder nur aggregiert? Wie wird mit Stempel-Fehlern umgegangen, ohne dass es disziplinarische Folgen hat?",
      "Wir stellen Ihnen kostenfrei eine Muster-Betriebsvereinbarung zur Verfügung, die in Abstimmung mit drei Fachanwälten für Arbeitsrecht entstanden ist. Sie deckt die typischen Punkte ab und kann an Ihre Situation angepasst werden.",
      "Ein letzter Hinweis: Behandeln Sie den Betriebsrat als Mitgestalter, nicht als Hürde. In jedem Unternehmen, in dem die Einführung scheiterte, war es nicht die Software – es war die Kommunikation.",
    ],
  },
  {
    slug: "mobiles-arbeiten-abrechnen",
    title: "Mobiles Arbeiten richtig abrechnen: Reisezeit, Rüstzeit, Pausen",
    description:
      "Drei Fälle aus dem Außendienst und wie wir sie in Zeitwerk abbilden.",
    date: "9. April 2026",
    category: "Recht",
    readingTime: "6 Min. Lesezeit",
    author: "Jonas Brandt",
    body: [
      "Reisezeit ist nicht gleich Arbeitszeit – aber sie ist auch nicht einfach Freizeit. Das Bundesarbeitsgericht hat in mehreren Urteilen klargestellt, dass Reisen zu auswärtigen Einsatzorten zur Arbeitszeit zählen, wenn sie auf Veranlassung des Arbeitgebers erfolgen. Die Frage der Vergütung ist davon allerdings zu trennen.",
      "Fall 1: Ein Servicetechniker fährt am Montagmorgen direkt von zuhause zu einem Kundenstandort. Die Fahrtzeit gilt als Arbeitszeit ab dem Moment, in dem sie über die normale Pendelzeit zur regelmäßigen Arbeitsstätte hinausgeht. In Zeitwerk hinterlegen Sie pro Mitarbeitendem eine Sockel-Pendelzeit, die automatisch berücksichtigt wird.",
      "Fall 2: Eine Beraterin ist drei Tage in Hamburg bei einem Kunden. Die Hin- und Rückfahrt mit dem Zug zählt vollständig zur Arbeitszeit. Wenn sie während der Fahrt aktiv arbeitet (Mails, Vorbereitung), erfasst sie dies als reguläre Projektzeit; reine Reisezeit als „Reise – produktiv“ oder „Reise – passiv“, je nach Betriebsvereinbarung.",
      "Fall 3: Ein Monteur rüstet seinen Werkstattwagen morgens 30 Minuten lang. Diese Rüstzeit ist Arbeitszeit, sobald sie vom Arbeitgeber angeordnet ist – egal, ob am Betriebsort oder zuhause. In Zeitwerk bilden Sie dies als eigene Tätigkeitsart ab, die automatisch zur Tagesarbeitszeit hinzugerechnet wird.",
      "Wichtig: Auch bei der mobilen Erfassung gelten die Mindestpausen nach Arbeitszeitgesetz. Zeitwerk warnt, sobald eine Schicht ohne dokumentierte Pause die 6-Stunden-Grenze überschreitet, und schlägt automatisch eine 30-minütige Pause vor.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
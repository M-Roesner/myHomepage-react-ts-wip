import { ProjectType } from "../../pages/myPortfolio/types/projectTypes";

export const myInternshipProjects: ProjectType[] = [
  {
    id: 2,
    category: "internship",
    title: "Konverter Prototyp",
    cardIntroduction: [
      "Dies war meine IHK-Abschlussarbeit zur Entwicklung eines Prototyps, der Word-Dokumente in ein JSON-Format konvertiert.",
    ],
    introduction: [
      "Dieser Prototyp wurde als Abschlussarbeit für meine IHK-Prüfung entwickelt. Das Ziel war es, ein Tool zu erstellen, das Word-Dokumente in ein JSON-Format für den Designer Polotno konvertiert.",
      "Dadurch erhalten Kunden die Möglichkeit, Informationen aus einem Word-Dokument im Designer Polotno weiterzuverwenden.",
      "Polotno Studio ist ein Design-Editor, der eine umfangreiche Bibliothek mit Fotos und Vektorillustrationen verwendet, um Bilder für soziale Medien, YouTube-Vorschauen, Cover und Präsentationen zu erstellen.",
    ],
    why: [
      "Für meinen IHK-Abschluss musste ein Projekt entwickelt und präsentiert werden.",
      "Es gab vermehrt Kundenanfragen, vorhandene Dokumente als Grundlage für ein Design zu nutzen, da dies bisher nur mit dem Designer selbst möglich war. Daher haben wir uns für die Entwicklung dieses Prototyps entschieden.",
      "Das Ziel war es, ein Tool zu erstellen, das Word-Dokumente in ein JSON-Format für den Designer Polotno konvertiert. Dabei werden Texte, Bilder, Formatierungen und Positionierungen extrahiert und aufbereitet.",
    ],
    skills: [
      "Umgang mit XML (docx) und JSON-Formaten, Extraktion und Aufbereitung der relevanten Daten.",
      "Analysieren und Extrahieren von Daten aus einem docx-Format, um Bilder, Texte und Formatierungen zu erhalten.",
      "Vertiefung der TypeScript-Kenntnisse.",
      "Erfahrung in Projektplanung und -management.",
      "Fähigkeiten in Fehlerbehandlung und Debugging entwickelt.",
      "Erstellung von Dokumentationen, unter anderem unter Verwendung von Markdown.",
    ],
    technologies: [{ title: "React.js" }, { title: "TypeScript" }],
    addedDate: new Date("2024-01-16"),
    updatedDate: new Date("2024-01-16"),
  },
  {
    id: 1,
    category: "internship",
    title: "Erworbene Fähigkeiten während meines Praktikums",
    cardIntroduction: [
      "Während meines Praktikums als Webentwickler bei der FutureNext GmbH habe ich Kenntnisse in verschiedenen Technologien und Methoden erworben.",
    ],
    introduction: [
      "In meinem Praktikum bei der FutureNext GmbH, einem führenden Unternehmen in der Entwicklung von fälschungssicheren Zertifikaten, konnte ich tiefgehende Einblicke in die Praxis der Softwareentwicklung gewinnen.",
      "Ich erweiterte meine Kenntnisse als Webentwickler mit verschiedenen Technologien und Methoden wie React, TypeScript und Scrum in einem internationalen Team.",
    ],
    why: [
      "Durch meine Umschulung zum Fachinformatiker im Bereich Anwendungsentwicklung musste ich ein mehrmonatiges Praktikum absolvieren und meine Abschlussarbeit für die IHK-Prüfung schreiben.",
      "Mein Praktikum bei der FutureNext GmbH bot mir die Möglichkeit, theoretisches Wissen in der Praxis anzuwenden und meine technischen Fähigkeiten zu vertiefen.",
      "Das Arbeiten an realen Projekten gab mir wertvolle Erfahrungen in der Softwareentwicklung und verbesserte meine Problemlösungsfähigkeiten.",
      "Diese Erfahrungen haben meine beruflichen Perspektiven erweitert und mir geholfen, meine Karriereziele klarer zu definieren.",
    ],
    additionalInfo: [
      {
        headlinetext: "Über FutureNext GmbH",
        paragraphs: [
          "FutureNext GmbH ist in Mannheim ansässig und beschäftigte zu diesem Zeitpunkt ca. 20 Mitarbeiter. Sie ist bekannt für ihr Produkt Virtualbadge.io.",
          "Virtualbadge.io ist eine Web-Software, die von der FutureNext GmbH entwickelt wird. Mit dieser Software können fälschungssichere digitale Zertifikate, Teilnahmebescheinigungen und Badges erstellt, versendet und verwaltet werden.",
          "Dies ermöglicht es Unternehmen, digitale Zertifikate direkt an ihre Teilnehmer nach Abschluss eines Kurses oder Projekts zu übermitteln.",
        ],
        idTag: "futurenext",
        asidebarText: "FutureNext GmbH",
      },
      {
        headlinetext: "Praxiserfahrungen",
        paragraphs: [
          "Zu Beginn meines Praktikums habe ich die Entwicklung mit TypeScript und React durch einen umfassenden Udemy-Kurs erlernt.",
          "Während meines gesamten Praktikums habe ich auch die Software getestet und Bugreports erstellt. So konnte ich Erfahrungen sammeln, wie man Probleme mithilfe von Browser-Tools identifiziert.",
          "Eine meiner ersten Aufgaben war die Migration des kostenlosen Zertifikat-Design-Tools zu einer Third-Party-Bibliothek (Polotno) und Anpassung der vorhandenen Funktionen, einschließlich der Übersetzung mit i18next und responsiven Anpassungen.",
          "Für meine Abschlussarbeit entwickelte ich einen Prototyp, der Word-Dokumente in JSON-Format konvertiert und relevante Daten in den Designer überführt. Mehr dazu finden Sie im Link weiter unten.",
        ],
        idTag: "erfahrung",
        asidebarText: "Praxiserfahrungen",
      },
      {
        headlinetext: "Agile Arbeitsmethoden",
        paragraphs: [
          "Während meines Praktikums arbeitete ich mit Scrum in 3-Wochen-Sprints. Dies beinhaltete tägliche Standups und wöchentliche Meetings mit dem gesamten Unternehmen.",
          "Diese agile Arbeitsweise hat meine Kommunikationsfähigkeiten, besonders im englischsprachigen Umfeld, erheblich verbessert.",
        ],
        idTag: "scrum",
        asidebarText: "Arbeitsmethoden",
      },
    ],
    skills: [
      "Erlernen neuer Sprachen und Frameworks/Libraries wie TypeScript und React.js.",
      "Erstellen von Bugreports und Testen von Web-Anwendungen.",
      "Arbeiten in agilen Teams mit Scrum.",
      "Erfahrung in der Migration von Tools zu Third-Party-Bibliotheken.",
      "Umgang mit dem Redux-Store.",
      "Translation (i18next) - Englisch/Deutsch.",
      "Erste Erfahrungen mit Figma.",
      "Umgang mit XML (docx), JSON und CSV-Formaten.",
    ],
    technologies: [
      { title: "TypeScript", isNew: true },
      { title: "JavaScript" },
      { title: "React.js", isNew: true },
      { title: "Redux", isNew: true },
      { title: "i18next", isNew: true },
      { title: "Figma", isNew: true },
    ],
    links: [
      {
        text: "Abschlussarbeit: Konverter Prototyp",
        route: "/project/internship/2",
      },
    ],
    addedDate: new Date("2023-09-21"),
    updatedDate: new Date("2023-09-21"),
  },
];

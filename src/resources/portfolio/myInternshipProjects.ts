import { ProjectType } from "../../pages/myPortfolio/types/projectTypes";

export const myInternshipProjects: ProjectType[] = [
  {
    id: 2,
    category: "internship",
    title: "Konverter Prototyp",
    cardIntroduction: [
      "Dies war meine IHK Abschlussarbeit zur Entwicklung eines Prototyps, der Word-Dokumente in JSON-Format konvertiert.",
    ],
    introduction: [
      "Dieser Prototyp wurde als Abschlussarbeit für meine IHK-Prüfung entwickelt. Das Ziel war es, ein Tool zu erstellen, das Word-Dokumente in ein JSON-Format für den Designer Polotno konvertiert.",
      "Dadurch erhalten Kunden die Möglichkeit, Informationen aus einem Word-Dokument im Designer Polotno weiterzuverwenden.",
      "Polotno Studio ist ein Design-Editor, der eine umfangreiche Bibliothek mit Fotos und Vektorillustrationen verwendet, um Bilder für soziale Medien, YouTube-Vorschauen, Cover und Präsentationen zu erstellen.",
    ],
    why: [
      "Für meinen IHK Abschluss musste ein Projekt entwickelt und präsentiert werden.",
      "Es gab vermehrt Kundenanfragen, vorhandene Dokumente als Grundlage für ein Design zu nutzen, da dies bisher nur mit dem Designer selbst möglich war. Daher haben wir uns für die Entwicklung dieses Prototyps entschieden.",
      "Ziel war es, ein Tool zu erstellen, das Word-Dokumente in ein JSON-Format für den Designer Polotno konvertiert. Dabei werden Texte, Bilder, Formatierungen und Positionierungen extrahiert und aufbereitet.",
    ],
    skills: [
      "Umgang mit XML (docx) und JSON-Formaten",
      "Analysieren und Extrahieren von Daten aus einem docx-Format, um Bilder, Texte und Formatierungen zu erhalten.",
      "Vertiefung der TypeScript-Kenntnisse",
      "Erfahrung in Projektplanung und -management",
      "Fähigkeiten in Fehlerbehandlung und Debugging entwickelt",
      "Umgang mit der Erstellung von Dokumentationen unter Verwendung von Markdown",
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
      "Während meines Praktikums bei der FutureNext GmbH habe ich umfangreiche Kenntnisse in verschiedenen Technologien und Methoden erworben.",
    ],
    introduction: [
      "In meinem Praktikum bei der FutureNext GmbH, einem führenden Unternehmen in der Entwicklung von Web-Software, konnte ich tiefgehende Einblicke in die Praxis der Softwareentwicklung gewinnen und meine Kenntnisse in verschiedenen Technologien erweitern.",
    ],
    why: [
      "Das Praktikum bot mir die Möglichkeit, theoretisches Wissen in der Praxis anzuwenden und meine technischen Fähigkeiten zu vertiefen.",
      "Durch die Arbeit an realen Projekten konnte ich wertvolle Erfahrungen in der Softwareentwicklung sammeln und meine Problemlösungsfähigkeiten verbessern.",
      "Die erworbenen Fähigkeiten und Erfahrungen haben meine beruflichen Perspektiven erweitert und mir geholfen, meine Karriereziele klarer zu definieren.",
    ],
    additionalInfo: [
      {
        headlinetext: "Über FutureNext GmbH",
        paragraphs: [
          "Die Firma FutureNext GmbH ist ansässig in Mannheim, beschäftigte zu diesem Zeitpunkt ca. 20 Mitarbeiter und ist bekannt für die Produktion von Virtualbadge.io. Diese Web-Software ermöglicht das Erstellen, Versenden und Verwalten von fälschungssicheren digitalen Zertifikaten, Teilnahmebescheinigungen und Badges.",
        ],
        idTag: "futurenext",
        asidebarText: "FutureNext GmbH",
      },
      {
        headlinetext: "Agile Arbeitsmethoden",
        paragraphs: [
          "Während meines Praktikums arbeitete ich mit Scrum in einem 3-Wochen-Sprint. Dies beinhaltete tägliche Standups und wöchentliche Meetings mit dem gesamten Unternehmen. Diese agile Arbeitsweise hat meine Teamkommunikationsfähigkeiten in einem englischsprachigen Umfeld erheblich verbessert.",
        ],
        idTag: "srum",
        asidebarText: "Arbeitsmethoden",
      },
    ],
    skills: [
      "Erlernen neuer Sprachen und Frameworks/Libraries wie TypeScript und React.js.",
      "Umgang mit XML (docx), JSON, CSV",
      "Translation (i18next) - Englisch/Deutsch",
      "Arbeiten in agilen Teams mit Scrum",
      "Erste Erfahrungen mit Figma",
    ],
    technologies: [
      { title: "TypeScript", isNew: true },
      { title: "JavaScript" },
      { title: "React.js", isNew: true },
      { title: "Redux", isNew: true },
      { title: "Figma", isNew: true },
      { title: "i18next", isNew: true },
    ],
    addedDate: new Date("2023-09-21"),
    updatedDate: new Date("2023-09-21"),
  },
];

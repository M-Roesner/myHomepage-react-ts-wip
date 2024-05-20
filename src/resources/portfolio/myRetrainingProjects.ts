import { ProjectType } from "../../pages/myPortfolio/types/projectTypes";

export const myRetrainingProjects: ProjectType[] = [
  {
    id: 1,
    category: "retraining",
    title: "Endless Jumping and Running Game",
    cardIntroduction: [
      "Ein Spiel zur praktischen Übung in OOP mit JavaScript, Canvas-Nutzung, Kollisionsabfragen, Eventhandling und mehr.",
    ],
    introduction: [
      "Dieses Jump-and-Run-Spiel habe ich mithilfe eines Tutorials auf YouTube entwickelt, um meine Fähigkeiten in der objektorientierten Programmierung (OOP) mit JavaScript zu verbessern.",
    ],
    why: [
      "Die Entwicklung eines Spiels bot eine hervorragende Möglichkeit, ein tieferes Verständnis für die Anwendung der Objektorientierung in JavaScript zu erlangen.",
      "Durch das Projekt konnte ich verschiedene Techniken und Ansätze kennenlernen, darunter die Nutzung von Canvas, das Handling von Mausevents und Kollisionsabfragen.",
    ],
    images: [
      {
        imgTitle: "Krähen schießen Spiel",
        imgSrcs: {
          preview: "/src/assets/projects/frankslaboratory_tutorial/CrowShooting-600pxWide.png",
          mobile: "/src/assets/projects/frankslaboratory_tutorial/CrowShooting-600pxWide.png",
          full: "/src/assets/projects/frankslaboratory_tutorial/CrowShooting-600pxWide.png",
        },
        imgAlt: "Krähen schießen Spiel",
        imgDescription:
          "Beim Krähen schießen Spiel habe ich getestet, wie man Mausevents verarbeitet und Kollisionen mit Objekten erkennt.",
        isMainPreview: true,
      },
      {
        imgTitle: "Final Jump-and-Run Spiel",
        imgSrcs: {
          preview: "/src/assets/projects/frankslaboratory_tutorial/finalGame-600pxWide.png",
          mobile: "/src/assets/projects/frankslaboratory_tutorial/finalGame-600pxWide.png",
          full: "/src/assets/projects/frankslaboratory_tutorial/finalGame-600pxWide.png",
        },
        imgAlt: "Final Jump-and-Run Spiel",
        imgDescription:
          "In diesem Spiel steuert man einen kleinen Hund, der Gegnern ausweichen muss. Mit bestimmten Fähigkeiten kann man Gegner besiegen und Punkte sammeln.",
      },
    ],
    skills: [
      "Umgang mit Objektorientierung in JavaScript",
      "Nutzung von Canvas-Funktionen zum Zeichnen von Bildern",
      "Techniken für Sprite-Animationen",
      "Parallaxeffekte",
      "Bewegungsmuster für Gegner",
      "Handling von Maus- und Tastenevents",
      "Kollisionsabfragen von Objekten",
      "State-Management für die Charakterbewegungen",
      "Implementierung von Partikelsystemen für spezielle Effekte",
    ],
    technologies: [
      { title: "JavaScript OOP", isNew: true },
      { title: "Canvas" },
      { title: "Git" },
      { title: "HTML" },
      { title: "CSS" },
    ],
    links: [
      {
        text: "Github: mein Code",
        route: "https://github.com/M-Roesner/frankslaboratory_JavaScript-Game-Development-Course-for-Beginners",
        iconSrc: "/src/assets/fontawesome-free-svg/github.svg",
        iconAltText: "externer Github Link",
      },
      {
        text: "YouTube Tutorial",
        route: "https://www.youtube.com/c/Frankslaboratory",
        iconSrc: "/src/assets/fontawesome-free-svg/external-link.svg",
        iconAltText: "externer link",
      },
    ],
    addedDate: new Date("2024-2-01"),
    updatedDate: new Date("2024-04-13"),
  },
  {
    id: 2,
    category: "retraining",
    title: "4 Gewinnt - SRH Edition",
    cardIntroduction: ["Gruppenprojekt während meiner Umschulung, mit Schwerpunkt auf PHP."],
    introduction: [
      "Dies war ein kleines Gruppenprojekt während meiner Umschulung. Es wurde innerhalb von etwa 2 Wochen außerhalb des regulären Schulunterrichts geplant und entwickelt.",
    ],
    why: [
      "Der Schwerpunkt lag auf der Entwicklung einer Webseite ausschließlich mit PHP, wobei folgende Vorgaben von unserem Dozenten festgelegt wurden:",
      "Verwendung von Funktionen, Schleifen und If-Klauseln.",
      "Da ich mit einem Klassenkameraten ein gemeinsames Projekt umsetzen wollte, musste der Umfang entsprechend größer sein, um die Note zu rechtfertigen. Aus diesem Grund haben wir uns für die Entwicklung dieses Spiels entschieden.",
      "Zusätzlich wollten wir es auch als ein objektorientiertes Spiel umsetzen.",
    ],
    images: [
      {
        imgTitle: "4 Gewinnt",
        imgSrcs: {
          preview: "/src/assets/projects/4wins/4gewinnt-600pxWide.png",
          mobile: "/src/assets/projects/4wins/4gewinnt-600pxWide.png",
          full: "/src/assets/projects/4wins/4gewinnt-600pxWide.png",
        },
        imgAlt: "4 Gewinnt",
        imgDescription: "4 Gewinnt",
        isMainPreview: true,
      },
    ],
    skills: [
      "Umgang mit Objektorientierung in PHP",
      "Beherrschung von PHP-Grundlagen wie Funktionen, Arrays, Schleifen und If-Klauseln",
      "Zusammenarbeit im Team durch klare Aufgabenverteilung.",
      "Verwendung von Animationen mit CSS",
      "Verbesserung der Code-Qualität durch Auslagerung von Dateien und Anwendung von Clean-Code-Prinzipien.",
    ],
    technologies: [{ title: "PHP OOP" }, { title: "HTML" }, { title: "CSS" }],
    links: [
      {
        text: "GitHub",
        route: "https://github.com/M-Roesner/four-wins",
        iconSrc: "/src/assets/fontawesome-free-svg/github.svg",
        iconAltText: "externer Github Link",
      },
    ],
    addedDate: new Date("2024-03-27"),
    updatedDate: new Date("2024-04-05"),
  },
  {
    id: 3,
    category: "retraining",
    title: "Haushaltsbuch",
    cardIntroduction: ["Erstellung eines Haushaltsbuches mit Datenbankanbindung als DO-IT-Projekt."],
    introduction: [
      "Dieses Haushaltsbuch wurde im Rahmen eines DO-IT-Projekts entwickelt.",
      "DO-IT ist eine Art Selbstpraktikum während meiner Umschulung, bei dem ich mich selbstständig ein Projekt erarbeitet habe, um neue Kenntnisse zu erlangen.",
      "Dieses Projekt erstreckte sich über einen Zeitraum von 6 Wochen, in denen ich eigenständig an der Konzeption, Entwicklung und Dokumentation des Haushaltsbuchs gearbeitet habe.",
      "Die Dokumentation des Projekts erfolgte nach den Standards der Industrie- und Handelskammer (IHK), um die Anforderungen für das Selbstpraktikum zu erfüllen.",
    ],
    why: [
      "Die Entwicklung eines Haushaltsbuchs bot eine praktische Möglichkeit, meine Fähigkeiten in der Anwendung von Datenbanken und der Programmierung zu vertiefen.",
      "Durch das DO-IT-Projekt konnte ich selbstständig neue Technologien erkunden und herausfinden, wie sie in einem realen Projekt eingesetzt werden können.",
    ],
    skills: [
      "Entwicklung einer Datenbankanbindung mit PHP OOP",
      "Arbeit mit relationalen Datenbanken (MySQL) und PDO-Schnittstelle",
      "Gestaltung der Benutzeroberfläche mit HTML und CSS (Scss)",
      "Implementierung von JavaScript für interaktive Funktionen",
      "Dokumentation des Projekts nach IHK-Standards",
    ],
    technologies: [
      { title: "PHP OOP", isNew: true },
      { title: "DB (MySQL)", isNew: true },
      { title: "HTML" },
      { title: "PDO DB Schnittelle", isNew: true },
      { title: "CSS (Scss)", isNew: true },
      { title: "etwas JavaScript", isNew: true },
    ],
    addedDate: new Date("2024-03-27"),
    updatedDate: new Date("2024-04-05"),
  },
  {
    id: 4,
    category: "retraining",
    title: "Minesweeper",
    cardIntroduction: ["Entwicklung des Minesweeper-Spiels zur Erlernung von Arrays und Aufbau eines Spielmenüs."],
    introduction: [
      "Das Minesweeper-Spiel wurde entwickelt, um die Funktionsweise von Arrays zu erlernen und ein Spielmenü aufzubauen.",
      "Das Projekt zielt darauf ab, die Grundlagen der Programmierung zu erlernen.",
    ],
    why: [
      "Die Entwicklung von Minesweeper bot eine praktische Möglichkeit, die Funktionsweise von Arrays in mehreren Dimensionen zu verstehen und zu üben.",
      "Durch den Aufbau eines Spielmenüs konnte ich wichtige Benutzerinteraktionen umsetzen und die Strukturierung von Benutzeroberflächen kennenlernen.",
    ],
    skills: [
      "Verständnis und Anwendung von Arrays in mehreren Dimensionen",
      "Aufbau eines Spielmenüs",
      "Speichern von Parametern",
    ],
    technologies: [{ title: "IntelliJ - Ein-, Ausgabe in der Konsole", isNew: true }],
    addedDate: new Date("2024-03-27"),
    updatedDate: new Date("2024-04-05"),
  },
];

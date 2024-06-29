import { ProjectType } from "../../pages/myPortfolio/types/projectTypes";
import { processJsonData } from "../../utils/pathUtils";

const myRetrainingProjectsRawData: ProjectType[] = [
  {
    id: 4,
    category: "retraining",
    title: "4 Gewinnt - SRH Edition",
    cardIntroduction: ["Gruppenprojekt während meiner Umschulung, mit Schwerpunkt auf PHP."],
    introduction: [
      "Dies war ein kleines Gruppenprojekt während meiner Umschulung. Es wurde innerhalb von etwa 2 Wochen außerhalb des regulären Schulunterrichts geplant und entwickelt.",
    ],
    why: [
      "Der Schwerpunkt lag auf der Entwicklung einer Webseite ausschließlich mit PHP, wobei folgende Vorgaben von unserem Dozenten festgelegt wurden:",
      "Verwendung von Funktionen, Schleifen und If-Klauseln.",
      "Da ich mit einem Klassenkameraden ein gemeinsames Projekt umsetzen wollte, musste der Umfang entsprechend größer sein, um die Note zu rechtfertigen. Aus diesem Grund haben wir uns für die Entwicklung dieses Spiels entschieden.",
      "Zusätzlich wollten wir es auch als ein objektorientiertes Spiel umsetzen.",
    ],
    images: [
      {
        imgTitle: "4 Gewinnt",
        imgSrcs: {
          preview: "/images/projects/4wins/4gewinnt-600pxWide.png",
          mobile: "/images/projects/4wins/4gewinnt-600pxWide.png",
          desktop: "/images/projects/4wins/4gewinnt-600pxWide.png",
        },
        imgAlt: "4 Gewinnt",
        imgDescription: "4 Gewinnt",
        isMainPreview: true,
      },
    ],
    knowledge: [
      "Umgang mit Objektorientierung in PHP.",
      "Beherrschung von PHP-Grundlagen wie Funktionen, Arrays, Schleifen und If-Klauseln.",
      "Zusammenarbeit im Team durch klare Aufgabenverteilung.",
      "Verwendung von Animationen mit CSS.",
      "Verbesserung der Code-Qualität durch Auslagerung von Dateien und Anwendung von Clean-Code-Prinzipien.",
    ],
    technologies: [{ title: "PHP OOP" }, { title: "HTML" }, { title: "CSS" }],
    links: [
      {
        text: "GitHub",
        route: "https://github.com/M-Roesner/four-wins",
        iconSrc: "/images/fontawesome-free-svg/github.svg",
        iconAltText: "externer Github Link",
      },
    ],
    addedDate: new Date("2024-03-27"),
    updatedDate: new Date("2024-04-05"),
  },
  {
    id: 3,
    category: "retraining",
    title: "Homepage mit PHP",
    cardIntroduction: [
      "Mein erster Internet-Auftritt, auf dem ich mich selbst präsentiert habe. Entwickelt mit PHP, HTML und SCSS.",
    ],
    introduction: [
      "Diese Homepage präsentierte meinen ersten Internet-Auftritt, um mich selbst vorzustellen und meine Motivation für den Einstieg in die IT-Branche zu erklären.",
      "Sie zeigte einen kleinen Einblick in meine Fähigkeiten, die ich bis dahin erworben hatte, sowie in meine bisherigen Projekte.",
    ],
    why: [
      "Die Entwicklung dieser Homepage war für mich ein wichtiger Schritt, um mich selbst und meine Ziele in der IT-Branche zu präsentieren.",
      "Durch die Gestaltung und Entwicklung dieser Seite konnte ich meine Kenntnisse in den Bereichen PHP, HTML und SCSS vertiefen und praktische Erfahrungen sammeln.",
    ],
    knowledge: [
      "Vertiefte Kenntnisse in der Webentwicklung mit PHP.",
      "Erweiterte Fähigkeiten in HTML und SCSS.",
      "Umsetzung von Responsive Design für verschiedene Endgeräte.",
    ],
    technologies: [{ title: "PHP" }, { title: "HTML" }, { title: "CSS (SCSS)" }],
    links: [
      {
        text: "GitHub",
        route: "https://github.com/M-Roesner/eigeneHompageVersionPHP",
        iconSrc: "/images/fontawesome-free-svg/github.svg",
        iconAltText: "externer Github Link",
      },
    ],
    addedDate: new Date("2022-12-01"),
    updatedDate: new Date("2022-12-01"),
  },
  {
    id: 2,
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
    knowledge: [
      "Verständnis und Anwendung von Arrays in mehreren Dimensionen.",
      "Aufbau eines Spielmenüs.",
      "Speichern von Parametern.",
    ],
    technologies: [{ title: "IntelliJ - Ein-, Ausgabe in der Konsole", isNew: true }],
    addedDate: new Date("2022-10-01"),
    updatedDate: new Date("2022-10-01"),
  },
  {
    id: 1,
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
    knowledge: [
      "Entwicklung einer Datenbankanbindung mit PHP OOP.",
      "Arbeit mit relationalen Datenbanken (MySQL) und PDO-Schnittstelle.",
      "Gestaltung der Benutzeroberfläche mit HTML und CSS (SCSS).",
      "Implementierung von JavaScript für interaktive Funktionen.",
      "Dokumentation des Projekts nach IHK-Standards.",
    ],
    technologies: [
      { title: "PHP OOP", isNew: true },
      { title: "DB (MySQL)", isNew: true },
      { title: "HTML" },
      { title: "PDO DB Schnittelle", isNew: true },
      { title: "CSS (SCSS)", isNew: true },
      { title: "etwas JavaScript", isNew: true },
    ],
    links: [
      {
        text: "Github: mein Code",
        route: "https://github.com/M-Roesner/Haushaltsbuch_2321",
        iconSrc: "/images/fontawesome-free-svg/github.svg",
        iconAltText: "externer Github Link",
      },
    ],
    addedDate: new Date("2022-07-01"),
    updatedDate: new Date("2022-07-01"),
  },
];

export const myRetrainingProjects: ProjectType[] = processJsonData(myRetrainingProjectsRawData);

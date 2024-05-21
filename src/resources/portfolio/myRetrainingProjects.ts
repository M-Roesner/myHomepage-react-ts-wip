import { ProjectType } from "../../pages/myPortfolio/types/projectTypes";

export const myRetrainingProjects: ProjectType[] = [
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
    title: "Homepage mit PHP",
    cardIntroduction: [
      "Mein erster Internet-Auftritt, auf dem ich mich selbst präsentiert habe. Entwickelt mit PHP, HTML und SCSS.",
    ],
    introduction: [
      "Diese Homepage war mein erster Schritt in die Welt des Internets. Sie diente dazu, mich selbst vorzustellen und meine Motivation für den Einstieg in die IT-Branche zu erklären.",
      "Sie bietete einen Einblicke in meine bisherigen Projekte.",
    ],
    why: [
      "Die Entwicklung dieser Homepage war für mich ein wichtiger Schritt, um mich selbst und meine Ziele in der IT-Branche zu präsentieren.",
      "Durch die Gestaltung und Entwicklung dieser Seite konnte ich meine Kenntnisse in den Bereichen PHP, HTML und SCSS vertiefen und praktische Erfahrungen sammeln.",
    ],
    skills: [
      "Grundlagen der Webentwicklung mit PHP",
      "Kenntnisse in HTML und SCSS",
      "Selbstpräsentation und Motivationserklärung",
      "",
    ],
    technologies: [{ title: "PHP" }, { title: "HTML" }, { title: "CSS (SCSS)" }],
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
    skills: [
      "Verständnis und Anwendung von Arrays in mehreren Dimensionen",
      "Aufbau eines Spielmenüs",
      "Speichern von Parametern",
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
    skills: [
      "Entwicklung einer Datenbankanbindung mit PHP OOP",
      "Arbeit mit relationalen Datenbanken (MySQL) und PDO-Schnittstelle",
      "Gestaltung der Benutzeroberfläche mit HTML und CSS (SCSS)",
      "Implementierung von JavaScript für interaktive Funktionen",
      "Dokumentation des Projekts nach IHK-Standards",
    ],
    technologies: [
      { title: "PHP OOP", isNew: true },
      { title: "DB (MySQL)", isNew: true },
      { title: "HTML" },
      { title: "PDO DB Schnittelle", isNew: true },
      { title: "CSS (SCSS)", isNew: true },
      { title: "etwas JavaScript", isNew: true },
    ],
    addedDate: new Date("2022-07-01"),
    updatedDate: new Date("2022-07-01"),
  },
];

// eintrag für mein portfolio:

// {
//     id: 3,
//     category: "retraining",
//     title: "Homepage with PHP",
//     cardIntroduction: [""],
//     introduction: [
//       "",
//       "",
//     ],
//     why: [
//       "",
//     ],
//     skills: [
//       "Verständnis und Anwendung von Arrays in mehreren Dimensionen",
//       "Aufbau eines Spielmenüs",
//       "Speichern von Parametern",
//     ],
//     technologies: [{ title: "PHP"}, {title: "HTML"}, {title: "CSS (Scss)"}],
//     addedDate: new Date("2023-02-01"),
//     updatedDate: new Date("2023-05-01"),
//   },

// die texte passen nicht anpassen und ergänzen!

// Dies war mein  erster intetrnetauftritt wo ich mich selbst präsentierte habe, diese seite habe ich mit php html und SCSS entwickelt, dir kann man einiges über mich erfahren warum ich den weg in die welt der IT gegangen bin und ein paar projekte die ich bis dahin gemacht habe

// alle keys können angepasst werden

// export type ProjectType = {
//   id: number;
//   category: ProjectCategoryType;
//   title: string;
//   cardIntroduction: string[];
//   introduction: string[];
//   why: string[];
//   skills?: string[];
//   technologies?: ProjectTechnologyType[];
//   images?: ProjectImageType[];
//   links?: ProjectLinkType[];
//   addedDate?: Date;
//   updatedDate?: Date;
// };

// string [] wird der abschnitt in paragraphen dargestellt oder eine auflistung

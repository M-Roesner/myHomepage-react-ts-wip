import { GroupedSkills } from "../../../pages/aboutMe/sections/skills/skillTypes";

export const mySampleSkills: GroupedSkills = {
  Frontend: [
    {
      id: 2,
      name: "JavaScript",
      priority: 1,
      category: "Frontend",
      description:
        "JavaScript ist eine vielseitige Programmiersprache, die häufig für die Webentwicklung verwendet wird.",
      projectLinks: [
        { text: "Endloses Sprung- und Laufspiel", route: "/project/personal/2" },
        { text: "Erworbene Fähigkeiten beim Praktikum", route: "/project/internship/1" },
        { text: "Haushaltsbuch", route: "/project/retraining/1" },
      ],
      icon: "SiJavascript",
      addedDate: new Date("2024-04-27"),
      updatedDate: new Date("2024-04-27"),
    },
    {
      id: 3,
      name: "React.js",
      priority: 1,
      category: "Frontend",
      description: "React.js ist eine beliebte JavaScript-Bibliothek zum Erstellen von Benutzeroberflächen.",
      projectLinks: [
        { text: "Homepage mit React.js und TypeScript", route: "/project/personal/1" },
        { text: "Konverter Prototyp (docx zu JSON)", route: "/project/internship/2" },
        { text: "Erworbene Fähigkeiten beim Praktikum", route: "/project/internship/1" },
      ],
      icon: "FaReact",
      addedDate: new Date("2024-04-22"),
      updatedDate: new Date("2024-04-22"),
    },
    {
      id: 4,
      name: "TypeScript",
      priority: 1,
      category: "Frontend",
      description:
        "TypeScript ist eine Erweiterung von JavaScript, die statisches Typing und andere Funktionen hinzufügt.",
      projectLinks: [
        { text: "Homepage mit React.js und TypeScript", route: "/project/personal/1" },
        { text: "Endloses Sprung- und Laufspiel", route: "/project/personal/2" },
        { text: "Konverter Prototyp (docx zu JSON)", route: "/project/internship/2" },
        { text: "Erworbene Fähigkeiten beim Praktikum", route: "/project/internship/1" },
      ],
      icon: "SiTypescript",
      addedDate: new Date("2024-04-26"),
      updatedDate: new Date("2024-04-26"),
    },
    {
      id: 17,
      name: "HTML",
      priority: 5,
      category: "Frontend",
      description:
        "HTML (Hypertext Markup Language) ist die Standardauszeichnungssprache zur Strukturierung von Webseiten und Webanwendungen.",
      icon: "SiHtml5",
      projectLinks: [
        { text: "Homepage mit React.js und TypeScript", route: "/project/personal/1" },
        { text: "Endloses Sprung- und Laufspiel", route: "/project/personal/2" },
        { text: "4 Gewinnt - SRH Edition", route: "/project/retraining/4" },
        { text: "Homepage mit PHP", route: "/project/retraining/3" },
      ],
      addedDate: new Date("2024-04-22"),
      updatedDate: new Date("2024-04-22"),
    },
    {
      id: 8,
      name: "CSS / SCSS",
      priority: 5,
      category: "Frontend",
      description:
        "SCSS (Sassy CSS) ist eine Erweiterung von CSS, die Funktionen wie Variablen, Verschachtelungen und Mixins bietet.",
      projectLinks: [
        { text: "Homepage mit React.js und TypeScript", route: "/project/personal/1" },
        { text: "Endloses Sprung- und Laufspiel", route: "/project/personal/2" },
        { text: "4 Gewinnt - SRH Edition", route: "/project/retraining/4" },
        { text: "Homepage mit PHP", route: "/project/retraining/3" },
      ],
      icon: "SiCss3",
      addedDate: new Date("2024-04-10"),
      updatedDate: new Date("2024-04-10"),
    },
    {
      id: 11,
      name: "Styled Components",
      priority: 2,
      category: "Frontend",
      description:
        "Styled Components ist eine CSS-in-JS-Bibliothek, mit der CSS direkt in JavaScript-Dateien geschrieben werden kann.",
      projectLinks: [{ text: "Homepage mit React.js und TypeScript", route: "/project/personal/1" }],
      icon: "SiStyledcomponents",
      addedDate: new Date("2024-04-17"),
      updatedDate: new Date("2024-04-17"),
    },
    {
      id: 12,
      name: "React Router",
      priority: 1,
      category: "Frontend",
      description: "React Router ist eine Bibliothek für die Navigation in React-Anwendungen.",
      projectLinks: [{ text: "Homepage mit React.js und TypeScript", route: "/project/personal/1" }],
      icon: "SiReactrouter",
      addedDate: new Date("2024-04-02"),
      updatedDate: new Date("2024-04-02"),
    },
    {
      id: 19,
      name: "Redux (Toolkit)",
      priority: 2,
      category: "Frontend",
      description:
        "Redux Toolkit ist ein offizielles, von Redux maintainiertes Paket, das verschiedene Utility-Funktionen und abstrakte Schichten für die Redux-Logik bereitstellt.",
      icon: "SiRedux",
      addedDate: new Date("2024-06-17"),
      updatedDate: new Date("2024-06-17"),
    },
  ],
  Backend: [
    {
      id: 1,
      name: "Java",
      priority: 3,
      category: "Backend",
      description:
        "Java ist eine weit verbreitete Programmiersprache, die für ihre Portabilität und Robustheit bekannt ist.",
      projectLinks: [{ text: "Minesweeper", route: "/project/retraining/2" }],
      icon: "FaJava",
      addedDate: new Date("2024-04-10"),
      updatedDate: new Date("2024-04-10"),
    },
    {
      id: 5,
      name: "PHP",
      priority: 1,
      category: "Backend",
      description: "PHP ist eine serverseitige Skriptsprache, die häufig für die Webentwicklung verwendet wird.",
      projectLinks: [
        { text: "4 Gewinnt - SRH Edition", route: "/project/retraining/4" },
        { text: "Homepage mit PHP", route: "/project/retraining/3" },
      ],
      icon: "SiPhp",
      addedDate: new Date("2024-04-08"),
      updatedDate: new Date("2024-04-08"),
    },
    {
      id: 14,
      name: "MySQL",
      priority: 3,
      category: "Backend",
      description:
        "MySQL ist ein Open-Source-Relationales Datenbankmanagementsystem, das SQL (Structured Query Language) verwendet, um Daten in einer relationalen Datenbank zu verwalten und abzufragen.",
      icon: "SiMysql",
      addedDate: new Date("2024-03-10"),
      updatedDate: new Date("2024-03-10"),
    },
    {
      id: 15,
      name: "SQLite",
      priority: 4,
      category: "Backend",
      description:
        "SQLite ist eine C-Bibliothek, die eine kleine, schnelle, eigenständige, zuverlässige, voll ausgestattete SQL-Datenbank-Engine implementiert.",
      icon: "DiSqllite",
      addedDate: new Date("2024-01-28"),
      updatedDate: new Date("2024-01-28"),
    },
    {
      id: 16,
      name: "Express.js",
      priority: 5,
      category: "Backend",
      description:
        "Express.js ist ein Webanwendungs-Framework für Node.js, das zur Erstellung von Webanwendungen und APIs verwendet wird.",
      addedDate: new Date("2024-04-11"),
      updatedDate: new Date("2024-04-11"),
    },
  ],

  Design: [],
  Other: [
    {
      id: 7,
      name: "GitHub",
      priority: 1,
      category: "Other",
      description:
        "GitHub ist eine webbasierte Plattform zur Versionskontrolle und Zusammenarbeit an Softwareprojekten.",
      icon: "SiGithub",
      addedDate: new Date("2024-04-26"),
      updatedDate: new Date("2024-04-26"),
    },
    {
      id: 9,
      name: "MS Word",
      priority: 4,
      category: "Other",
      description:
        "Microsoft Word ist ein Textverarbeitungsprogramm, das zur Erstellung von Dokumenten verwendet wird.",
      icon: "SiMicrosoftword",
      addedDate: new Date("2024-04-09"),
      updatedDate: new Date("2024-04-09"),
    },
    {
      id: 10,
      name: "MS Excel",
      priority: 4,
      category: "Other",
      description:
        "Microsoft Excel ist ein Tabellenkalkulationsprogramm, das für Berechnungen, Datenanalyse und Visualisierung verwendet wird.",
      icon: "SiMicrosoftexcel",
      addedDate: new Date("2024-04-27"),
      updatedDate: new Date("2024-04-27"),
    },
    {
      id: 13,
      name: "Figma",
      priority: 3,
      category: "Other",
      description:
        "Figma ist ein webbasiertes Design- und Prototyping-Tool, das zur Erstellung von UI/UX-Designs verwendet wird.",
      projectLinks: [{ text: "Erworbene Fähigkeiten beim Praktikum", route: "/project/internship/1" }],
      icon: "SiFigma",
      addedDate: new Date("2024-04-01"),
      updatedDate: new Date("2024-04-01"),
    },
    {
      id: 22,
      name: "Azure",
      priority: 2,
      category: "Other",
      description:
        "Azure ist eine umfassende Cloud-Computing-Plattform von Microsoft, die eine Vielzahl von Diensten zur Entwicklung, Bereitstellung und Verwaltung von Anwendungen und Diensten über das Internet bietet.",
      icon: "SiAzuredevops",

      addedDate: new Date("2024-06-17"),
      updatedDate: new Date("2024-06-17"),
    },
    {
      id: 21,
      name: "SVG",
      priority: 3,
      category: "Other",
      description:
        "SVG (Skalierbare Vektorgrafik) ist ein XML-basiertes Format für die Darstellung von zweidimensionalen Vektorgrafiken.",
      addedDate: new Date("2024-06-17"),
      updatedDate: new Date("2024-06-17"),
    },
    {
      id: 20,
      name: "Canvas",
      priority: 3,
      category: "Other",
      description:
        "Canvas ist ein HTML5-Element, das zur dynamischen, programmatischen Generierung und Manipulation von Grafiken, Animationen und anderen visuellen Effekten verwendet wird.",
      addedDate: new Date("2024-06-17"),
      updatedDate: new Date("2024-06-17"),
    },
  ],
};

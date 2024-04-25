import { GroupedSkills } from "../../pages/aboutMe/sections/skills/skillTypes";

export const mySampleSkills: GroupedSkills = {
  Frontend: [
    {
      id: 2,
      name: "JavaScript",
      order: 3,
      category: "Frontend",
      description:
        "JavaScript ist eine vielseitige Programmiersprache, die häufig für die Webentwicklung verwendet wird.",
      links: [
        { text: "Projekt JavaScript 1", route: "/projectJavaScript1" },
        { text: "Projekt JavaScript 2", route: "/projectJavaScript2" },
        { text: "Projekt JavaScript 3", route: "/projectJavaScript3" },
      ],
    },
    {
      id: 3,
      name: "React.js",
      order: 2,
      category: "Frontend",
      description: "React.js ist eine beliebte JavaScript-Bibliothek zum Erstellen von Benutzeroberflächen.",
      links: [
        { text: "Projekt React 1", route: "/projectReact1" },
        { text: "Projekt React 2", route: "/projectReact2" },
      ],
    },
    {
      id: 4,
      name: "TypeScript",
      order: 2,
      category: "Frontend",
      description:
        "TypeScript ist eine Erweiterung von JavaScript, die statisches Typing und andere Funktionen hinzufügt.",
    },
    {
      id: 17,
      name: "HTML",
      order: 7,
      category: "Frontend",
      description:
        "HTML (Hypertext Markup Language) ist die Standardauszeichnungssprache zur Strukturierung von Webseiten und Webanwendungen.",
      links: [
        { text: "HTML Tutorial", route: "https://www.w3schools.com/html/" },
        { text: "MDN Web Docs - HTML", route: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      ],
    },
    {
      id: 8,
      name: "SCSS",
      order: 6,
      category: "Frontend",
      description:
        "SCSS (Sassy CSS) ist eine Erweiterung von CSS, die Funktionen wie Variablen, Verschachtelungen und Mixins bietet.",
      links: [
        { text: "Projekt SCSS 1", route: "/projectSCSS1" },
        { text: "Projekt SCSS 2", route: "/projectSCSS2" },
        { text: "Projekt SCSS 3", route: "/projectSCSS3" },
      ],
    },
    {
      id: 11,
      name: "Styled Components",
      order: 5,
      category: "Frontend",
      description:
        "Styled Components ist eine CSS-in-JS-Bibliothek, mit der CSS direkt in JavaScript-Dateien geschrieben werden kann.",
      links: [
        { text: "Projekt Styled Components 1", route: "/projectStyledComponents1" },
        { text: "Projekt Styled Components 2", route: "/projectStyledComponents2" },
        { text: "Projekt Styled Components 3", route: "/projectStyledComponents3" },
      ],
    },
    {
      id: 12,
      name: "React Router",
      order: 4,
      category: "Frontend",
      description: "React Router ist eine Bibliothek für die Navigation in React-Anwendungen.",
    },
  ],
  Backend: [
    {
      id: 1,
      name: "Java",
      order: 1,
      category: "Backend",
      description:
        "Java ist eine weit verbreitete Programmiersprache, die für ihre Portabilität und Robustheit bekannt ist.",
    },
    {
      id: 5,
      name: "PHP",
      order: 2,
      category: "Backend",
      description: "PHP ist eine serverseitige Skriptsprache, die häufig für die Webentwicklung verwendet wird.",
    },
    {
      id: 6,
      name: "SQL",
      order: 3,
      category: "Backend",
      description:
        "SQL (Structured Query Language) ist eine domänenspezifische Sprache, die für das Programmieren entwickelt wurde und zur Verwaltung von Daten in einem relationalen Datenbankmanagementsystem dient.",
    },
    {
      id: 14,
      name: "MySQL",
      order: 6,
      category: "Backend",
      description: "MySQL ist ein Open-Source-Relationales Datenbankmanagementsystem.",
    },
    {
      id: 15,
      name: "SQLite",
      order: 4,
      category: "Backend",
      description:
        "SQLite ist eine C-Bibliothek, die eine kleine, schnelle, eigenständige, zuverlässige, voll ausgestattete SQL-Datenbank-Engine implementiert.",
    },
    {
      id: 16,
      name: "Express.js",
      order: 5,
      category: "Backend",
      description:
        "Express.js ist ein Webanwendungs-Framework für Node.js, das zur Erstellung von Webanwendungen und APIs verwendet wird.",
    },
  ],
  Design: [],
  Other: [
    {
      id: 7,
      name: "GitHub",
      order: 1,
      category: "Other",
      description:
        "GitHub ist eine webbasierte Plattform zur Versionskontrolle und Zusammenarbeit an Softwareprojekten.",
    },
    {
      id: 9,
      name: "MS Word",
      order: 3,
      category: "Other",
      description:
        "Microsoft Word ist ein Textverarbeitungsprogramm, das zur Erstellung von Dokumenten verwendet wird.",
    },
    {
      id: 10,
      name: "MS Excel",
      order: 4,
      category: "Other",
      description:
        "Microsoft Excel ist ein Tabellenkalkulationsprogramm, das für Berechnungen, Datenanalyse und Visualisierung verwendet wird.",
    },
    {
      id: 13,
      name: "Figma",
      order: 2,
      category: "Other",
      description:
        "Figma ist ein webbasiertes Design- und Prototyping-Tool, das zur Erstellung von UI/UX-Designs verwendet wird.",
    },
  ],
};

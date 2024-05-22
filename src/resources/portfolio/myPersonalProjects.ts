import { ProjectType } from "../../pages/myPortfolio/types/projectTypes";

export const myPersonalProjects: ProjectType[] = [
  {
    id: 1,
    category: "personal",
    title: "Homepage mit React.js und TypeScript",
    cardIntroduction: [
      "Entwicklung meiner persönlichen Homepage zur Erweiterung meiner erworbenen Fähigkeiten während des Praktikums und mehr.",
    ],
    introduction: [
      "Dieses Projekt besteht aus der Entwicklung einer persönlichen Homepage mit React.js und TypeScript.",
      "Die Hauptziele waren die Erweiterung meiner während des Praktikums erworbenen Fähigkeiten und die Umsetzung moderner Webtechnologien.",
    ],
    why: [
      "Dieses Projekt ermöglichte es mir, meine während des Praktikums gelernten Fähigkeiten weiter auszubauen.",
      "Durch die Arbeit mit React.js und TypeScript konnte ich tiefere Kenntnisse in modernen Webentwicklungstechnologien gewinnen.",
    ],
    images: [
      {
        imgTitle: "Homepage Preview",
        imgSrcs: {
          preview: "/src/assets/projects/homepage-preview.png",
          mobile: "/src/assets/projects/homepage-mobile.png",
          full: "/src/assets/projects/homepage-full.png",
        },
        imgAlt: "Vorschau der Homepage",
        imgDescription: "Einblicke in die Struktur und das Design der Homepage.",
        isMainPreview: true,
      },
    ],
    skills: [
      "Strukturaufbau mit React-Router-Dom",
      "Erstellen von Styles mit dem Styled Components Framework in Verbindung mit TypeScript",
      "Umgang mit SVG-Grafiken",
      "Verständnis und Umgang mit Generics in TypeScript",
    ],
    technologies: [
      { title: "TypeScript" },
      { title: "React.js" },
      { title: "React-Router-Dom", isNew: true },
      { title: "Styled Components", isNew: true },
      { title: "SVG", isNew: true },
      { title: "HTML" },
      { title: "CSS" },
    ],
    links: [
      {
        text: "GitHub - Source Code Repository",
        route: "https://github.com/M-Roesner/myHomepage-react-ts-wip",
        iconSrc: "/src/assets/fontawesome-free-svg/github.svg",
        iconAltText: "Externer GitHub Link",
      },
    ],
    addedDate: new Date("2024-05-20"),
    updatedDate: new Date("2024-05-20"),
  },
  {
    id: 2,
    category: "personal",
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
    addedDate: new Date("2024-02-01"),
    updatedDate: new Date("2024-02-09"),
  },
];
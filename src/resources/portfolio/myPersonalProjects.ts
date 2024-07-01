import { ProjectType } from "../../pages/myPortfolio/types/projectTypes";
import { processJsonData } from "../../utils/pathUtils/pathUtils";

const myPersonalProjectsRawData: ProjectType[] = [
  {
    id: 1,
    category: "personal",
    title: "Homepage mit React.js und TypeScript",
    cardIntroduction: [
      "Entwicklung meiner persönlichen Homepage zur Erweiterung meiner Fähigkeiten während des Praktikums.",
    ],
    introduction: [
      "Dieses Projekt umfasst die Entwicklung einer persönlichen Homepage mit React.js und TypeScript.",
      "Die Hauptziele sind die Erweiterung meiner während des Praktikums erworbenen Fähigkeiten und die Umsetzung moderner Webtechnologien.",
    ],
    why: [
      "Dieses Projekt bietet die Möglichkeit, die im Praktikum gelernten Fähigkeiten weiter auszubauen.",
      "Durch die Arbeit mit React.js und TypeScript konnte ich tiefere Kenntnisse in modernen Webentwicklungstechnologien gewinnen.",
    ],
    images: [
      {
        imgTitle: "Image Slider",
        imgSrcs: {
          preview: "/images/projects/homepageV2/image_slider/image_slider_B320x200.jpg",
          mobile: "/images/projects/homepageV2/image_slider/image_slider_B640x400.jpg",
          tablet: "/images/projects/homepageV2/image_slider/image_slider_B1280x800.jpg",
          laptop: "/images/projects/homepageV2/image_slider/image_slider_B1920x1200.jpg",
        },
        imgAlt: "Image Slider",
        imgDescription: "Konzeptzeichnung des Bildsliders für den Vollbildmodus.",
        isMainPreview: true,
      },
      {
        imgTitle: "Navigation",
        imgSrcs: {
          preview: "/images/projects/homepageV2/navigation_header/navigation_header_B320x200.jpg",
          mobile: "/images/projects/homepageV2/navigation_header/navigation_header_B640x400.jpg",
          tablet: "/images/projects/homepageV2/navigation_header/navigation_header_B1280x800.jpg",
          laptop: "/images/projects/homepageV2/navigation_header/navigation_header_B1920x1200.jpg",
        },
        imgAlt: "Navigation",
        imgDescription: "Konzeptzeichnung der Navigation für Desktop und Mobile.",
      },
      {
        imgTitle: "Fortschrittsanzeige der implementierten Features",
        imgSrcs: {
          preview: "/images/projects/homepageV2/implemented_features/implemented_features_B320x200.jpg",
          mobile: "/images/projects/homepageV2/implemented_features/implemented_features_B640x400.jpg",
          tablet: "/images/projects/homepageV2/implemented_features/implemented_features_B1280x800.jpg",
          laptop: "/images/projects/homepageV2/implemented_features/implemented_features_B1920x1200.jpg",
        },
        imgAlt: "Fortschrittsanzeige der implementierten Features",
        imgDescription: "Konzeptzeichnung der Fortschrittsanzeige für alle implementierten Features.",
      },
      {
        imgTitle: "Fähigkeiten auf der 'Über mich' Seite",
        imgSrcs: {
          preview: "/images/projects/homepageV2/skill_concept/skill_concept_B320x200.jpg",
          mobile: "/images/projects/homepageV2/skill_concept/skill_concept_B640x400.jpg",
          tablet: "/images/projects/homepageV2/skill_concept/skill_concept_B1280x800.jpg",
          laptop: "/images/projects/homepageV2/skill_concept/skill_concept_B1920x1200.jpg",
        },
        imgAlt: "Fähigkeiten auf der 'Über mich' Seite",
        imgDescription: "Konzeptzeichnung meiner Fähigkeiten auf der 'Über mich' Seite.",
      },
      {
        imgTitle: "Fähigkeiten auf der 'Über mich'-Seite (Tablet-Version)",
        imgSrcs: {
          preview: "/images/projects/homepageV2/skill_navigation_tablet/skill_navigation_tablet_B320x200.jpg",
          mobile: "/images/projects/homepageV2/skill_navigation_tablet/skill_navigation_tablet_B640x400.jpg",
          tablet: "/images/projects/homepageV2/skill_navigation_tablet/skill_navigation_tablet_B1280x800.jpg",
          laptop: "/images/projects/homepageV2/skill_navigation_tablet/skill_navigation_tablet_B1920x1200.jpg",
        },
        imgAlt: "Fähigkeiten auf der 'Über mich' Seite",
        imgDescription: "Konzeptzeichnung meiner Fähigkeiten auf der 'Über mich' Seite (Tablet-Version).",
      },
      {
        imgTitle: "Fähigkeiten auf der 'Über mich' Seite (Mobile-Version)",
        imgSrcs: {
          preview: "/images/projects/homepageV2/skill_navigation_mobile/skill_navigation_mobile_B320x200.jpg",
          mobile: "/images/projects/homepageV2/skill_navigation_mobile/skill_navigation_mobile_B640x400.jpg",
          tablet: "/images/projects/homepageV2/skill_navigation_mobile/skill_navigation_mobile_B1280x800.jpg",
          laptop: "/images/projects/homepageV2/skill_navigation_mobile/skill_navigation_mobile_B1920x1200.jpg",
        },
        imgAlt: "Fähigkeiten auf der 'Über mich' Seite",
        imgDescription: "Konzeptzeichnung meiner Fähigkeiten auf der 'Über mich' Seite (Mobile-Version).",
      },
      {
        imgTitle: "ERM Struktur",
        imgSrcs: {
          preview: "/images/projects/homepageV2/erm-db-structure/erm-db-structure.svg",
          mobile: "/images/projects/homepageV2/erm-db-structure/erm-db-structure.svg",
          tablet: "/images/projects/homepageV2/erm-db-structure/erm-db-structure.svg",
          laptop: "/images/projects/homepageV2/erm-db-structure/erm-db-structure.svg",
        },
        imgAlt: "ERM Struktur",
        imgDescription: "Dies ist meine ERM-Struktur für die Datenbank.",
      },
    ],
    knowledge: [
      "Strukturaufbau mit React-Router für das Routing einer Single Page Application",
      "Erstellen von Styles mit dem Styled Components Framework in Kombination mit React.js",
      "Themes unter Verwendung von Styled Components Framework",
      "Umgang mit SVG-Grafiken, unter anderem in Verbindung mit GSAP",
      "Eventhandling z.B. von Maus, Tastatur und Bildschirmgrößen in Verbindung mit Hooks",
      "Schreiben von Hilfsfunktionen und Middleware, um die benötigten Typen zu erhalten",
      "Verständnis und Anwendung von Generics, Interfaces und Typen in TypeScript",
    ],
    technologies: [
      { title: "TypeScript" },
      { title: "React.js" },
      { title: "React-Router-Dom", isNew: true },
      { title: "Styled Components", isNew: true },
      { title: "SVG mit GSAP", isNew: true },
      { title: "HTML" },
      { title: "CSS" },
    ],
    links: [
      {
        text: "GitHub - Source Code Repository",
        route: "https://github.com/M-Roesner/myHomepage-react-ts-wip",
        iconSrc: "/images/fontawesome-free-svg/github.svg",
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
      "Ein Spiel zur Vertiefung des Verständnisses von Objektorientierung in JavaScript, mit Canvas-Nutzung, Kollisionsabfragen, Eventhandling und mehr.",
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
          preview: "/images/projects/frankslaboratory_tutorial/CrowShooting-600pxWide.png",
          mobile: "/images/projects/frankslaboratory_tutorial/CrowShooting-600pxWide.png",
          desktop: "/images/projects/frankslaboratory_tutorial/CrowShooting-600pxWide.png",
        },
        imgAlt: "Krähen schießen Spiel",
        imgDescription:
          "Beim Krähen schießen Spiel habe ich getestet, wie man Mausevents verarbeitet und Kollisionen mit Objekten erkennt.",
        isMainPreview: true,
      },
      {
        imgTitle: "Final Jump-and-Run Spiel",
        imgSrcs: {
          preview: "/images/projects/frankslaboratory_tutorial/finalGame-600pxWide.png",
          mobile: "/images/projects/frankslaboratory_tutorial/finalGame-600pxWide.png",
          desktop: "/images/projects/frankslaboratory_tutorial/finalGame-600pxWide.png",
        },
        imgAlt: "Final Jump-and-Run Spiel",
        imgDescription:
          "In diesem Spiel steuert man einen kleinen Hund, der Gegnern ausweichen muss. Mit bestimmten Fähigkeiten kann man Gegner besiegen und Punkte sammeln.",
      },
    ],
    knowledge: [
      "Umgang mit Objektorientierung in JavaScript",
      "Nutzung von Canvas-Funktionen zum Zeichnen von Bildern",
      "Techniken für Sprite-Animationen",
      "Erstellen von Parallaxeffekten",
      "Bewegungsmuster für Gegner entwickeln",
      "Implementierung von Partikelsystemen für spezielle Effekte",
      "Handling von Maus- und Tastenevents",
      "Kollisionsabfragen von Objekten",
      "State-Management für die Charakterbewegungen",
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
        iconSrc: "/images/fontawesome-free-svg/github.svg",
        iconAltText: "externer Github Link",
      },
      {
        text: "YouTube Tutorial",
        route: "https://www.youtube.com/c/Frankslaboratory",
        iconSrc: "/images/fontawesome-free-svg/external-link.svg",
        iconAltText: "externer link",
      },
    ],
    addedDate: new Date("2024-02-01"),
    updatedDate: new Date("2024-02-09"),
  },
];

export const myPersonalProjects: ProjectType[] = processJsonData(myPersonalProjectsRawData);

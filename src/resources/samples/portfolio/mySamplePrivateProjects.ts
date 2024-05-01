import { ProjectType, newProjectType } from "../../../pages/myPortfolio/types/projectTypes";

export const mySamplePrivateProjects: ProjectType[] = [
  {
    id: 1,
    category: "personal",
    title: "Endless Jumping and Running Game",
    cardIntroduction:
      "Ein JavaScript-Spiel zur praktischen Übung in objektorientierter Programmierung, Canvas-Nutzung und Eventhandling.",
    introduction: "Dieses Jump-and-Run-Spiel habe ich mithilfe eines Tutorials auf YouTube entwickelt.",
    description:
      "Ich wollte ein besseres Verständnis dafür entwickeln, wie man objektorientiert in JavaScript arbeitet. Die Entwicklung eines Spiels bot sich an, um ebenso Einblicke in die Verwendung von Canvas zu erhalten.",
    images: [
      {
        imgTitle: "Krähen schießen Spiel",
        imgSrc: "/src/assets/projects/frankslaboratory_tutorial/CrowShooting-600pxWide.png",
        imgAlt: "Krähen schießen Spiel",
      },
      {
        imgTitle: "Final Jump-and-Run Spiel",
        imgSrc: "/src/assets/projects/frankslaboratory_tutorial/finalGame-600pxWide.png",
        imgAlt: "Final Jump-and-Run Spiel",
        isPreviewImage: true,
      },
    ],
    addedDate: new Date("2024-04-28"),
    updatedDate: new Date("2024-04-28"),
    usedSkills: ["testSkill 1 nicht der 2.", "testSkills2LongTestForTestingOfTheDesignWithFlexBox"],
    // acquiredNewSkills: ["my new skill", "test new learned skill"],
  },
  {
    id: 2,
    category: "personal",
    title: "4 Gewinnt - SRH edition",
    cardIntroduction: "Gruppenprojekt wärend meiner Umschulung",
    introduction:
      "Dies war ein kleines Gruppenprojekt während meiner Umschulung, welches benotet wurde. Es wurde innerhalb von etwa 2 Wochen außerhalb des regulären Schulunterrichts geplant und entwickelt.",
    description: `Der Schwerpunkt lag auf der Entwicklung einer Webseite ausschließlich mit PHP, wobei folgende Vorgaben von unserem Dozenten festgelegt wurden:

    Funktionen
    Schleifen
    If-Klauseln
    Da ich mit einem Klassenkameraten ein gemeinsames Projekt umsetzen wollte, musste der Umfang entsprechend größer sein, um die Note zu rechtfertigen. Aus diesem Grund haben wir uns für die Entwicklung dieses Spiels entschieden.`,
    images: [
      {
        imgTitle: "4 Gewinnt",
        imgSrc: "/src/assets/projects/4wins/4gewinnt-600pxWide.png",
        imgAlt: "4 Gewinnt",
        isPreviewImage: true,
      },
    ],
    usedSkills: [
      "usedSkills 1",
      "usedSkills 2",
      "usedSkills 3",
      "usedSkills 4",
      "usedSkills 5",
      "usedSkills 6",
      // "usedSkills 7",
    ],
    acquiredNewSkills: ["acquiredNewSkills 1", "acquiredNewSkills 2"],
    addedDate: new Date("2024-04-28"),
    updatedDate: new Date("2024-04-28"),
  },
];

export const mySamplePrivateProjects_NEW: newProjectType[] = [
  {
    id: 1,
    category: "personal",
    title: "Endless Jumping and Running Game",
    cardIntroduction:
      "Ein JavaScript-Spiel zur praktischen Übung in objektorientierter Programmierung, Canvas-Nutzung und Eventhandling.",
    introduction: "Dieses Jump-and-Run-Spiel habe ich mithilfe eines Tutorials auf YouTube entwickelt.",
    description:
      "Ich wollte ein besseres Verständnis dafür entwickeln, wie man objektorientiert in JavaScript arbeitet. Die Entwicklung eines Spiels bot sich an, um ebenso Einblicke in die Verwendung von Canvas zu erhalten.",
    images: [
      {
        imgTitle: "Krähen schießen Spiel",
        imgSrcs: {
          preview: "/src/assets/projects/frankslaboratory_tutorial/CrowShooting-600pxWide.png",
          mobile: "/src/assets/projects/frankslaboratory_tutorial/CrowShooting-600pxWide.png",
          full: "/src/assets/projects/frankslaboratory_tutorial/CrowShooting-600pxWide.png",
        },
        imgAlt: "Krähen schießen Spiel",
      },
      {
        imgTitle: "Final Jump-and-Run Spiel",
        imgSrcs: {
          preview: "/src/assets/projects/frankslaboratory_tutorial/finalGame-600pxWide.png",
          mobile: "/src/assets/projects/frankslaboratory_tutorial/finalGame-600pxWide.png",
          full: "/src/assets/projects/frankslaboratory_tutorial/finalGame-600pxWide.png",
        },
        imgAlt: "Final Jump-and-Run Spiel",
      },
    ],
    addedDate: new Date("2024-04-28"),
    updatedDate: new Date("2024-04-28"),
    skills: [
      { skillTitle: "testSkill 1 nicht der 2." },
      { skillTitle: "my new skill", isNewSkill: true },
      { skillTitle: "testSkills2LongTestForTestingOfTheDesignWithFlexBox" },
      { skillTitle: "test new learned skill", isNewSkill: true },
    ],
  },
  {
    id: 2,
    category: "personal",
    title: "4 Gewinnt - SRH edition",
    cardIntroduction: "Gruppenprojekt wärend meiner Umschulung",
    introduction:
      "Dies war ein kleines Gruppenprojekt während meiner Umschulung, welches benotet wurde. Es wurde innerhalb von etwa 2 Wochen außerhalb des regulären Schulunterrichts geplant und entwickelt.",
    description: `Der Schwerpunkt lag auf der Entwicklung einer Webseite ausschließlich mit PHP, wobei folgende Vorgaben von unserem Dozenten festgelegt wurden:

    Funktionen
    Schleifen
    If-Klauseln
    Da ich mit einem Klassenkameraten ein gemeinsames Projekt umsetzen wollte, musste der Umfang entsprechend größer sein, um die Note zu rechtfertigen. Aus diesem Grund haben wir uns für die Entwicklung dieses Spiels entschieden.`,
    images: [
      {
        imgTitle: "4 Gewinnt",
        imgSrcs: {
          preview: "/src/assets/projects/4wins/4gewinnt-600pxWide.png",
          mobile: "/src/assets/projects/4wins/4gewinnt-600pxWide.png",
          full: "/src/assets/projects/4wins/4gewinnt-600pxWide.png",
        },
        imgAlt: "4 Gewinnt",
      },
    ],
    addedDate: new Date("2024-04-28"),
    updatedDate: new Date("2024-04-28"),
  },
];

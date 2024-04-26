import { ProjectType } from "../../../pages/myPortfolio/types/projectTypes";

export const mySamplePrivateProjects: ProjectType[] = [
  {
    id: 1,
    title: "Endless Jumping and Running Game",
    cardIntroduction:
      "Ein JavaScript-Spiel zur praktischen Übung in objektorientierter Programmierung, Canvas-Nutzung und Eventhandling.",
    introduction: "Dieses Jump-and-Run-Spiel habe ich mithilfe eines Tutorials auf YouTube entwickelt.",
    description:
      "Ich wollte ein besseres Verständnis dafür entwickeln, wie man objektorientiert in JavaScript arbeitet. Die Entwicklung eines Spiels bot sich an, um ebenso Einblicke in die Verwendung von Canvas zu erhalten.",
    imgSrc: [
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
  },
  {
    id: 2,
    title: "4 Gewinnt - SRH edition",
    cardIntroduction: "Gruppenprojekt wärend meiner Umschulung",
    introduction:
      "Dies war ein kleines Gruppenprojekt während meiner Umschulung, welches benotet wurde. Es wurde innerhalb von etwa 2 Wochen außerhalb des regulären Schulunterrichts geplant und entwickelt.",
    description: "",
    imgSrc: [
      {
        imgTitle: "4 Gewinnt",
        imgSrc: "/src/assets/projects/4wins/4gewinnt-600pxWide.png",
        imgAlt: "4 Gewinnt",
        isPreviewImage: true,
      },
    ],
  },
];

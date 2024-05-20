import { ProjectType } from "../../pages/myPortfolio/types/projectTypes";

export const myInternshipProjects: ProjectType[] = [
  {
    id: 2,
    category: "internship",
    title: "Konverter Prototyp",
    cardIntroduction: [""],
    introduction: [""],
    why: [""],
    images: [
      {
        imgTitle: "",
        imgSrcs: {
          preview: "/src/assets/projects/",
          mobile: "/src/assets/projects/",
          full: "/src/assets/projects/",
        },
        imgAlt: "",
        imgDescription: "",
        isMainPreview: true,
      },
    ],
    skills: [""],
    technologies: [
      { title: "React.js", isNew: true },
      { title: "TypeScript", isNew: true },
      { title: "HTML" },
      { title: "CSS" },
    ],
    addedDate: new Date("2024-01-16"),
    updatedDate: new Date("2024-01-16"),
  },
  {
    id: 1,
    category: "internship",
    title: "Erworbene Fähigkeiten während meines Praktikums",
    cardIntroduction: [""],
    introduction: [""],
    why: [""],
    images: [
      {
        imgTitle: "",
        imgSrcs: {
          preview: "/src/assets/projects/",
          mobile: "/src/assets/projects/",
          full: "/src/assets/projects/",
        },
        imgAlt: "",
        imgDescription: "",
        isMainPreview: true,
      },
    ],
    skills: ["Umgang mit XML (docx), JSON, CSV", "Translation (i18next) - Englisch/Deutsch"],
    technologies: [{ title: "TypeScript" }, { title: "JavaScript" }, { title: "React.js" }, { title: "Redux" }],
    addedDate: new Date("2023-09-21"),
    updatedDate: new Date("2023-09-21"),
  },
];

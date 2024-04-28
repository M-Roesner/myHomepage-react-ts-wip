export type SkillCategoryType = "Frontend" | "Backend" | "Design" | "Other";
export type LinkType = {
  text: string;
  route: string;
};
export type SkillType = {
  id: number;
  name: string;
  order: number;
  category: SkillCategoryType;
  description: string;
  links?: LinkType[];
  personalKnowledgeLevel?: number;
  addedDate?: Date;
  updatedDate?: Date;
};

export type GroupedSkills = {
  [key in SkillCategoryType]: SkillType[];
};

export enum ESkillCategory {
  FRONTEND = "Frontend",
  BACKEND = "Backend",
  DESIGN = "Design",
  OTHER = "Other",
}

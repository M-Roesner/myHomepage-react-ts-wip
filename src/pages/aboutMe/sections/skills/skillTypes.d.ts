export type SkillCategoryType = "Frontend" | "Backend" | "Design" | "Other";
export type LinkType = {
  text: string;
  route: string;
};
export type SkillLevelType = 1 | 2 | 3 | 4 | 5;
export type SkillType = {
  id: number;
  name: string;
  priority: 1 | 2 | 3 | 4 | 5;
  level?: SkillLevelType;
  category: SkillCategoryType;
  description: string;
  projectLinks?: LinkType[];
  personalKnowledgeLevel?: number;
  addedDate?: Date;
  updatedDate?: Date;
  icon?: string;
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

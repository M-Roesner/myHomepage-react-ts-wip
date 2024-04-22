export type PriorityType = 1 | 2 | 3;
export type CategoryType =
  | "Programming Language"
  | "Frontend Framework"
  | "Backend Language"
  | "Database"
  | "Version Control"
  | "Stylesheet Language"
  | "Office Suite"
  | "Design Tool"
  | "Server Framework";
export type LinkType = {
  text: string;
  route: string;
};
export type SkillType = {
  id: number;
  name: string;
  priority: PriorityType;
  category: CategoryType;
  description: string;
  links?: LinkType[];
};

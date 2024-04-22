export type PriorityType = 1 | 2 | 3;
export type CategoryType =
  | "Programming Language"
  | "Frontend Framework"
  | "Version Control"
  | "Design Tool"
  | "Office Suite"
  | "Backend Development";

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

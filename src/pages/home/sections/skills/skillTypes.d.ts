export type priorityType = 1 | 2 | 3;
export type categoryType =
  | "Programming Language"
  | "Frontend Framework"
  | "Backend Language"
  | "Database"
  | "Version Control"
  | "Stylesheet Language"
  | "Office Suite"
  | "Design Tool"
  | "Server Framework";
export type skillType = {
  id: number;
  name: string;
  priority: priorityType;
  category: categoryType;
  description: string;
};

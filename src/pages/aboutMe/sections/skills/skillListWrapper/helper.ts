import { GroupedSkills, SkillCategoryType } from "../skillTypes";

export const extractSkillCategories = (skills: GroupedSkills): SkillCategoryType[] => {
  // 'as SkillCategoryType' is needed to ensure TypeScript correctly infers the type of 'category'
  return Object.keys(skills)
    .filter((category) => skills[category as SkillCategoryType].length > 0) // Filter the categories with at least one skill
    .map((category) => category as SkillCategoryType); // Converting the keys to the SkillCategoryType
};

/**
 * Switches the name from the category
 */
export const getCategoryName = (category: SkillCategoryType): string => {
  switch (category) {
    case "Frontend":
      return "Front-End";
    case "Backend":
      return "Back-End";
    case "Other":
      return "Sonstige";
    default:
      return category;
  }
};

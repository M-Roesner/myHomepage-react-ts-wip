import React from "react";
import { GroupedSkills, SkillType } from "../skillTypes";
import { extractSkillCategories, getCategoryName } from "./helper";
import SkillList from "./skillList/skillList";

type RenderSkillCategoriesProps = {
  skillListCollection: GroupedSkills;
  onClick: (skill: SkillType) => void;
};
/**
 * Renders each skill category along with its respective skill list.
 *
 * @param {Object} props - The component props.
 * @param {SkillCategoryType[]} props.skillListCollection - Object containing skill lists grouped by categories.
 */
export const RenderSkillCategories = ({ skillListCollection, onClick }: RenderSkillCategoriesProps) => {
  // Extract category names from the skills list collection
  const skillCategories = extractSkillCategories(skillListCollection);

  return skillCategories.map((category) => {
    // Get the skill list for the current category
    const skillList = skillListCollection[category]?.sort((a, b) => a.order - b.order);
    // Get the title for the current category
    const titleCategory = getCategoryName(category);

    // Checks if a skill list exists and renders it if present
    // The skill list must contain at least one element to be rendered
    return (
      skillList &&
      skillList.length > 0 && (
        <React.Fragment key={category}>
          <SkillList skillList={skillList} title={titleCategory} onClick={onClick}></SkillList>
        </React.Fragment>
      )
    );
  });
};

import { useState } from "react";

// components
import { StyledSectionSkillWrapper } from "./styledSectionSkillWrapper";
import SkillList from "./skillList/SkillList";
import SkillDescription from "./skillDescription/SkillDescription";

// Types
import { SkillType } from "./skillTypes";

// Resources
import { mySampleSkills } from "../../../../resources/samples/mySampleSkills";

const groupSkillsByCategory = (skills: SkillType[]) => {
  const groupedSkills: { [category: string]: SkillType[] } = {};

  // Iterate through the list of skills
  skills.forEach((skill) => {
    // Check if the category already exists in the grouped object
    if (!groupedSkills[skill.category]) {
      console.log(skill.category);

      console.log(groupedSkills);
      console.log(Object.getOwnPropertyNames(groupedSkills).length);

      // If not, add it as a key and initialize the array
      groupedSkills[skill.category] = [];
    }
    // Add the current skill to the corresponding category array
    groupedSkills[skill.category].push(skill);
  });

  // Sort the skills within each category by priority
  for (const category in groupedSkills) {
    groupedSkills[category].sort((a, b) => a.priority - b.priority);
  }

  return groupedSkills;
};

/**
 * Renders a list of skills and their description.
 */
const SectionSkillWrapper = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillType | null>(null);

  const handleSkillClick = (skill: SkillType) => {
    if (skill !== null) setSelectedSkill(skill);
  };

  // const sortedSkills = mySampleSkills.sort((a, b) => a.priority - b.priority);

  const sortedSkills = mySampleSkills.sort((a, b) => {
    // Zuerst nach Kategorie sortieren
    if (a.category !== b.category) {
      return a.category.localeCompare(b.category);
    }
    // Innerhalb derselben Kategorie nach Priorität sortieren
    return a.priority - b.priority;
  });

  groupSkillsByCategory(mySampleSkills);

  return (
    <StyledSectionSkillWrapper>
      <SkillList list={sortedSkills} onClick={handleSkillClick} />
      <SkillDescription skill={selectedSkill} />
    </StyledSectionSkillWrapper>
  );
};

export default SectionSkillWrapper;

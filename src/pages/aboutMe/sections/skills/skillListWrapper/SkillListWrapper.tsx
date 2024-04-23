// components
import { StyledSkillListWrapper } from "./styledSkillListWrapper";
import SkillList from "./skillList/SkillList";

// Types
import { SkillType } from "../skillTypes";

// Resources
import { mySampleSkills } from "../../../../../resources/samples/mySampleSkills";

// const groupSkillsByCategory = (skills: SkillType[]) => {
//   const groupedSkills: { [category: string]: SkillType[] } = {};

//   // Iterate through the list of skills
//   skills.forEach((skill) => {
//     // Check if the category already exists in the grouped object
//     if (!groupedSkills[skill.category]) {
//       console.log(skill.category);

//       console.log(groupedSkills);
//       console.log(Object.getOwnPropertyNames(groupedSkills).length);

//       // If not, add it as a key and initialize the array
//       groupedSkills[skill.category] = [];
//     }
//     // Add the current skill to the corresponding category array
//     groupedSkills[skill.category].push(skill);
//   });

//   // Sort the skills within each category by priority
//   for (const category in groupedSkills) {
//     groupedSkills[category].sort((a, b) => a.priority - b.priority);
//   }

//   return groupedSkills;
// };

type SkillListWrapperProps = {
  onClick: (skill: SkillType) => void;
};

const SkillListWrapper = ({ onClick }: SkillListWrapperProps) => {
  // const sortedSkills = mySampleSkills.sort((a, b) => a.priority - b.priority);

  const sortedSkills = mySampleSkills.sort((a, b) => {
    // Zuerst nach Kategorie sortieren
    if (a.category !== b.category) {
      return a.category.localeCompare(b.category);
    }
    // Innerhalb derselben Kategorie nach Priorität sortieren
    return a.priority - b.priority;
  });

  return (
    <StyledSkillListWrapper>
      list 1
      <SkillList list={sortedSkills} onClick={onClick} />
      list 2
      <SkillList list={sortedSkills} onClick={onClick} />
    </StyledSkillListWrapper>
  );
};

export default SkillListWrapper;

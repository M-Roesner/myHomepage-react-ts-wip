import { useState } from "react";

// components
import { StyledSectionSkillWrapper } from "./styledSectionSkillWrapper";
import SkillList from "./skillList/SkillList";
import SkillDescription from "./skillDescription/SkillDescription";

// Types
import { skillType } from "./skillTypes";

// Resources
import { mySkills } from "./mySkills";

/**
 * Renders a list of skills and their description.
 */
const SectionSkillWrapper = () => {
  const [selectedSkill, setSelectedSkill] = useState<skillType | null>(null);

  const handleSkillClick = (skill: skillType) => {
    if (skill !== null) {
      console.log(skill);
      setSelectedSkill(skill);
    }
  };

  const sortedSkills = mySkills.sort((a, b) => a.priority - b.priority);
  return (
    <StyledSectionSkillWrapper>
      <SkillList list={sortedSkills} onClick={handleSkillClick} />
      <SkillDescription skill={selectedSkill} />
    </StyledSectionSkillWrapper>
  );
};

export default SectionSkillWrapper;

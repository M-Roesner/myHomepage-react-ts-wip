import { useState } from "react";

// components
import { StyledSectionSkillWrapper } from "./styledSectionSkillWrapper";
import SkillDescription from "./skillDescription/SkillDescription";

// Types
import { SkillType } from "./skillTypes";

// Resources
import SkillListWrapper from "./skillListWrapper/SkillListWrapper";

/**
 * Renders a list of skills and their description.
 */
const SectionSkillWrapper = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillType | null>(null);

  const handleSkillClick = (skill: SkillType) => {
    if (skill !== null) setSelectedSkill(skill);
  };

  return (
    <StyledSectionSkillWrapper>
      <SkillListWrapper onClick={handleSkillClick} />
      <SkillDescription oldskill={selectedSkill} />
    </StyledSectionSkillWrapper>
  );
};

export default SectionSkillWrapper;

// components
import { StyledSectionSkillWrapper } from "./styledSectionSkillWrapper";
import SkillListWrapper from "./skillListWrapper/SkillListWrapper";
import SkillDescription from "./skillDescription/SkillDescription";

/**
 * Renders a list of skills and their description.
 */
const SectionSkillWrapper = () => {
  return (
    <StyledSectionSkillWrapper>
      <SkillListWrapper />
      <SkillDescription />
    </StyledSectionSkillWrapper>
  );
};

export default SectionSkillWrapper;

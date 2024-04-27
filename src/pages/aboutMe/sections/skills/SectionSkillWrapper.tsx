// components
import { StyledSectionSkillWrapper } from "./styledSectionSkillWrapper";
import SkillListWrapper from "./skillListWrapper/SkillListWrapper";
import SkillDescription from "./skillDescription/SkillDescription";
import { CardVerticalLineStyle } from "../../../../components/custom/card/cardVerticalLine/styledCardVerticalLineStyle";

/**
 * Renders a list of skills and their description.
 */
const SectionSkillWrapper = () => {
  return (
    <StyledSectionSkillWrapper>
      <SkillListWrapper />
      <CardVerticalLineStyle style={{ paddingLeft: 0, marginTop: "1.5ch" }} />
      <SkillDescription />
    </StyledSectionSkillWrapper>
  );
};

export default SectionSkillWrapper;

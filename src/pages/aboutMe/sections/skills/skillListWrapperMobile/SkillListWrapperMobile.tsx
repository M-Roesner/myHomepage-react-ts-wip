// Components
import { StyledSkillListWrapperMobile } from "./styledSkillListWrapperMobile";
import SkillsNavigation from "./skillsNavigation/SkillsNavigation";
import { StyledCardFootnote } from "../../../../../components/custom/card/cardFootnote/StyledCardFootnote";
import SkillDescription from "../skillDescription/SkillDescription";

// Helper functions
import useLastUpdateDate from "../hooks/useLastUpdateDate";
import { ELanguage, formatDate } from "../../../../../utils/dateHelper";

/**
 * Mobile version of the skills display wrapper component.
 * Displays a mobile-optimized view of skills navigation, last update date, and skill description.
 */
const SkillListWrapperMobile = () => {
  const lastDate = useLastUpdateDate();
  const formattedLastDate = formatDate(lastDate, ELanguage.GERMAN);

  return (
    <StyledSkillListWrapperMobile>
      <SkillsNavigation />
      <StyledCardFootnote>{`Letztes Update am: ${formattedLastDate}`}</StyledCardFootnote>
      <SkillDescription />
    </StyledSkillListWrapperMobile>
  );
};

export default SkillListWrapperMobile;

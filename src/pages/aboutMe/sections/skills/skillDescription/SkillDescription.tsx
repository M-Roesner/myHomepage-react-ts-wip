import { useParams } from "react-router-dom";

// components
import { StyledSkillDescription } from "./styledSkillDescription";
import SkilledDescriptionText from "./skillDescriptionText/SkillDescriptionText";
import SkillProjectLinks from "./SkillProjectLinks/SkillProjectLinks";
import SkillDesciptionHeader from "./skillDescriptionHeader/SkillDesciptionHeader";

// Resources & Helpers
import { getSingleSkill } from "./helper";

// Types
import { SkillCategoryType } from "../skillTypes";
import { CardParagraph } from "../../../../../components/custom/card/cardParagraph/styledCardParagraphStyle";

export type imgFontAwesomeType = {
  className: string;
  style: React.CSSProperties;
};

/**
 * Returns a styled description of the skill that utilizes parameters from the React Router.
 */
const SkillDescription = () => {
  const { skillId, skillCategory } = useParams<{ skillId: string; skillCategory: SkillCategoryType }>();
  const skill = getSingleSkill(skillCategory, skillId);

  return (
    <StyledSkillDescription>
      {skill ? (
        <>
          {/* TODO: Icon: Find a matching icon for the respective skill! */}
          <SkillDesciptionHeader name={skill.name} />
          <SkilledDescriptionText text={skill.description} />
          {skill.projectLinks !== undefined && <SkillProjectLinks links={skill.projectLinks} />}
        </>
      ) : (
        <>
          <CardParagraph style={{ display: "flex", textAlign: "center", alignItems: "center", height: "100%" }}>
            Wählen Sie eine Fähigkeit aus, um die entsprechende Beschreibung zu sehen!
          </CardParagraph>
        </>
      )}
    </StyledSkillDescription>
  );
};

export default SkillDescription;

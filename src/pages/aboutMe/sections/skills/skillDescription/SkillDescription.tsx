import { useParams } from "react-router-dom";

// components
import { StyledSkillDescription } from "./styledSkillDescription";
import SkillProjectLinks from "./SkillProjectLinks/SkillProjectLinks";
import SkillDesciptionHeader from "./skillDescriptionHeader/SkillDesciptionHeader";
import CardParagraph from "../../../../../components/custom/card/cardParagraph/CardParagraph";

// Resources & Helpers
import { getSingleSkill } from "./helper";
import useScreenSize from "../../../../../utils/hooks/screenSize/useScreenSize";

// Types
import { SkillCategoryType } from "../skillTypes";

/**
 * A component that returns a styled description of the skill.
 * Utilizes parameters from the React Router to fetch and display the relevant skill data.
 *
 * @returns A JSX element containing the skill description, header, text, and project links.
 */
const SkillDescription = () => {
  const screnSize = useScreenSize();
  const isMobile = screnSize.deviceType === "mobile" || screnSize.deviceType === "tablet";

  const { skillCategory, skillId } = useParams<{ skillCategory: SkillCategoryType; skillId: string }>();
  const skill = getSingleSkill(skillCategory, skillId);

  return (
    <StyledSkillDescription $isMobile={isMobile}>
      {skill ? (
        <>
          <SkillDesciptionHeader name={skill.name} icon={skill.icon} skillLevel={skill.level} />
          <CardParagraph paragraphs={skill.description} />
          {skill.projectLinks !== undefined && <SkillProjectLinks links={skill.projectLinks} />}
        </>
      ) : (
        <div style={{ display: "flex", textAlign: "center", alignItems: "center", height: "100%" }}>
          <CardParagraph
            paragraphs={["Wählen Sie eine Fähigkeit aus, um hier detaillierte Informationen zu erhalten."]}
          />
        </div>
      )}
    </StyledSkillDescription>
  );
};

export default SkillDescription;

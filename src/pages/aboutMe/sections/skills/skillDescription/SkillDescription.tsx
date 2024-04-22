// components
import { StyledSkillDescription } from "./styledSkillDescription";
import SkilledDescriptionText from "./skillDescriptionText/SkillDescriptionText";
import SkillProjectLinks from "./SkillProjectLinks/SkillProjectLinks";
import SkillDesciptionHeader from "./skillDescriptionHeader/SkillDesciptionHeader";

// Types
import { SkillType } from "../skillTypes";

export type imgFontAwesomeType = {
  className: string;
  style: React.CSSProperties;
};

type SkillDescriptionProps = {
  skill: SkillType | null;
};

/**
 * Returns a styled description text with the passed skill.
 *
 * @param {SkillType} skill - The skill object contains the description text, among other things.
 */
const SkillDescription = ({ skill }: SkillDescriptionProps) => {
  return (
    <StyledSkillDescription>
      {skill ? (
        <>
          <SkillDesciptionHeader name={skill.name} />
          <SkilledDescriptionText text={skill.description} />
          {skill.links && <SkillProjectLinks links={skill.links} />}
        </>
      ) : (
        "Wählen Sie eine Fähigkeit aus, um die entsprechende Beschreibung zu sehen!"
      )}
    </StyledSkillDescription>
  );
};

export default SkillDescription;

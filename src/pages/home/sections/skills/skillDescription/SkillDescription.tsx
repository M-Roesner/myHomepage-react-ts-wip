import { skillType } from "../skillTypes";
import { StyledSkillDescription } from "./styledSkillDescription";

type SkillDescriptionProps = {
  skill: skillType | null;
};

/**
 * Returns a styled description text with the passed skill.
 *
 * @param {skillType} skill - The skill object contains the description text, among other things.
 */
const SkillDescription = ({ skill }: SkillDescriptionProps) => {
  return (
    <StyledSkillDescription>
      {skill && skill.description
        ? skill.description
        : "Wählen Sie eine Fähigkeit aus, um die entsprechende Beschreibung zu sehen!"}
    </StyledSkillDescription>
  );
};

export default SkillDescription;

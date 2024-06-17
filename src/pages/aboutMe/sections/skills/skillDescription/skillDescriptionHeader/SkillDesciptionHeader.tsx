// Components
import { StyledSkillDesciptionHeader } from "./styledSkillDesciptionHeader";
import SkillImage from "./skillImage/SkillImage";
import CardHeadline from "../../../../../../components/custom/card/cardHeadline/CardHeadline";
import SkillStars from "../skillDescriptionLevel/skillStars/SkillStars";

// Types
import { SkillLevelType } from "../../skillTypes";

type SkillDesciptionHeaderProps = {
  name: string;
  icon?: string;
  skillLevel?: SkillLevelType;
};

/**
 * A component that returns a styled header with an optional icon and a title.
 *
 * @param {SkillDesciptionHeaderProps} props - The properties for the SkillDescriptionHeader component.
 * @param {string} props.name - The name of the skill.
 * @param {string} [props.icon] - The optional icon name for the skill.
 * @returns A JSX element containing a styled header with an icon and title.
 */
const SkillDesciptionHeader = ({ name, icon, skillLevel }: SkillDesciptionHeaderProps) => {
  return (
    <StyledSkillDesciptionHeader>
      {icon && <SkillImage icon={icon} />}
      <CardHeadline level={3}>{name}</CardHeadline>
      {skillLevel && <SkillStars level={skillLevel} />}
    </StyledSkillDesciptionHeader>
  );
};

export default SkillDesciptionHeader;

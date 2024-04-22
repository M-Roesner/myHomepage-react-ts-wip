// import { faJs } from "@fortawesome/free-brands-svg-icons";6
import { skillType } from "../skillTypes";
import { StyledSkillDescription } from "./styledSkillDescription";
import SkillImage from "./skillImage/SkillImage";
import CardHeadline from "../../../../../components/custom/card/cardHeadline/CardHeadline";
import SkilledDescriptionText from "./skillDescriptionText/SkillDescriptionText";
import SkillProjectLinks from "./SkillProjectLinks/SkillProjectLinks";

export type imgFontAwesomeType = {
  className: string;
  style: React.CSSProperties;
};
type SkillDescriptionProps = {
  skill: skillType | null;
};

/**
 * Returns a styled description text with the passed skill.
 *
 * @param {skillType} skill - The skill object contains the description text, among other things.
 */
const SkillDescription = ({ skill }: SkillDescriptionProps) => {
  // TODO: Image - Adding images to the description does not currently work with fontawesome.
  // The following import is required to get icons from fontawesome. (in index.html)
  // <script src="https://kit.fontawesome.com/418764a8f1.js" crossorigin="anonymous"></script>
  const imgStyle: imgFontAwesomeType = { className: "fa-brands fa-vuejs fa-lg", style: {} };
  return (
    <StyledSkillDescription>
      {skill ? (
        <>
          {imgStyle && <SkillImage imgStyle={imgStyle} />}
          <CardHeadline level={3}>{skill.name}</CardHeadline>
          <SkilledDescriptionText text={skill.description} />
          <SkillProjectLinks />
        </>
      ) : (
        "Wählen Sie eine Fähigkeit aus, um die entsprechende Beschreibung zu sehen!"
      )}
    </StyledSkillDescription>
  );
};

export default SkillDescription;

import CardHeadline from "../../../../../../components/custom/card/cardHeadline/CardHeadline";
import { imgFontAwesomeType } from "../SkillDescription";
import SkillImage from "./skillImage/SkillImage";
import { StyledSkillDesciptionHeader } from "./styledSkillDesciptionHeader";

type SkillDesciptionHeaderProps = {
  name: string;
  icon?: string;
};

/**
 * Returns a styled header with an icon and title.
 *
 * @param {string} name
 */
const SkillDesciptionHeader = ({ name, icon }: SkillDesciptionHeaderProps) => {
  // TODO: Image - Adding images to the description does not currently work with fontawesome.
  // The following import is required to get icons from fontawesome. (in index.html)
  // <script src="https://kit.fontawesome.com/418764a8f1.js" crossorigin="anonymous"></script>
  const imgStyle: imgFontAwesomeType = { className: "fa-brands fa-vuejs fa-lg", style: {} };
  return (
    <StyledSkillDesciptionHeader>
      {icon || (imgStyle && <SkillImage imgStyle={imgStyle} />)}
      <CardHeadline level={3}>{name}</CardHeadline>
    </StyledSkillDesciptionHeader>
  );
};

export default SkillDesciptionHeader;

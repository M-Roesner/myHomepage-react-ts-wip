import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components
import { StyledSkillImage } from "./styledSkillImage";

// Types
import { imgFontAwesomeType } from "../../SkillDescription";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type SkillImageType = {
  imgStyle: imgFontAwesomeType | IconDefinition;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isFontAwesomeType = (imgStyle: any): imgStyle is imgFontAwesomeType => {
  return "className" in imgStyle && "style" in imgStyle;
};

/**
 * Returns a given image.
 *
 * TODO: wip - More icons are needed, currently only with fontawesome.
 *
 * @param {} imgStyle
 */
const SkillImage = ({ imgStyle }: SkillImageType) => {
  return (
    <StyledSkillImage>
      {isFontAwesomeType(imgStyle) ? (
        <i className={imgStyle.className} style={imgStyle.style}></i>
      ) : (
        <FontAwesomeIcon icon={imgStyle} />
      )}
      {/* <i className="fa-brands fa-js fa-lg" style={{ color: "#FFD43B" }}></i> */}
    </StyledSkillImage>
  );
};

export default SkillImage;

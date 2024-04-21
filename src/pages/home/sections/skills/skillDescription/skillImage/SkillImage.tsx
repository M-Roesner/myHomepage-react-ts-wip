import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { imgFontAwesomeType } from "../SkillDescription";

type SkillImageType = {
  imgStyle: imgFontAwesomeType | IconDefinition;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isFontAwesomeType = (imgStyle: any): imgStyle is imgFontAwesomeType => {
  return "className" in imgStyle && "style" in imgStyle;
};

const SkillImage = ({ imgStyle }: SkillImageType) => {
  return (
    <>
      {isFontAwesomeType(imgStyle) ? (
        <i className={imgStyle.className} style={imgStyle.style}></i>
      ) : (
        <FontAwesomeIcon icon={imgStyle} />
      )}

      <i className="fa-brands fa-js fa-lg" style={{ color: "#FFD43B" }}></i>
    </>
  );
};

export default SkillImage;
{
  /* FontAwesomeIcon */
}

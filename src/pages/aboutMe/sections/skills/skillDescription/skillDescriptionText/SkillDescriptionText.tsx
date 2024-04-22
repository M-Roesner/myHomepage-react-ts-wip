import { StyledskillDescriptionText } from "./styledSkillDescriptionText";

type SkilledDescriptionTextType = {
  text: string;
};

/**
 * Returns a styled component with a text.
 *
 * @param {string} text
 */
const SkilledDescriptionText = ({ text }: SkilledDescriptionTextType) => {
  return <StyledskillDescriptionText>{text}</StyledskillDescriptionText>;
};

export default SkilledDescriptionText;

import { StyledskillDescriptionText } from "./styledSkillDescriptionText";

type SkilledDescriptionTextType = {
  text: string;
};
const SkilledDescriptionText = ({ text }: SkilledDescriptionTextType) => {
  return <StyledskillDescriptionText>{text}</StyledskillDescriptionText>;
};

export default SkilledDescriptionText;

// Components
import SkillItem from "./SkillItem/SkillItem";
import { StyledSkillList, StyledSkillListParagraph } from "./styledskillList";

// Types
import { SkillType } from "../../skillTypes";

type SkillListProps = {
  skillList: SkillType[];
  title: string;
  onClick: (skill: SkillType) => void;
};

/**
 * Retrun a list of skills
 * @param {Object} props - The component props.
 * @param {SkillType[]} props.skillListCollection - Array contains a list of skills.
 * @param {string} props.title - The title of the list.
 * @param {Function} props.onClick
 */
const SkillList = ({ skillList, title, onClick }: SkillListProps) => {
  return (
    <StyledSkillList>
      <StyledSkillListParagraph>{title}:</StyledSkillListParagraph>
      <SkillItem list={skillList} onClick={onClick} />
    </StyledSkillList>
  );
};

export default SkillList;

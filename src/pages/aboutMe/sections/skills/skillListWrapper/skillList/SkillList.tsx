// Components
import SkillItem from "./SkillItem/SkillItem";
import { StyledSkillList } from "./styledskillList";

// Types
import { SkillType } from "../../skillTypes";
import CardHeadline from "../../../../../../components/custom/card/cardHeadline/CardHeadline";

type SkillListProps = {
  skillList: SkillType[];
  title: string;
};

/**
 * Retrun a list of skills
 * @param {Object} props - The component props.
 * @param {SkillType[]} props.skillListCollection - Array contains a list of skills.
 * @param {string} props.title - The title of the list.
 * @param {Function} props.onClick
 */
const SkillList = ({ skillList, title }: SkillListProps) => {
  return (
    <StyledSkillList>
      <CardHeadline level={4}>{title}:</CardHeadline>
      <SkillItem list={skillList} />
    </StyledSkillList>
  );
};

export default SkillList;

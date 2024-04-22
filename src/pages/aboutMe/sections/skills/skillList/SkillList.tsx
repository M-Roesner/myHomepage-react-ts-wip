// components
import OnClickButton from "../../../../../components/custom/button/onClickButton/OnClickButton";
import { StyledSectionSkillList } from "./styledSkillList";

// Types
import { skillType } from "../skillTypes";

type SectionSkillListProps = {
  list: skillType[];
  onClick: (skill: skillType) => void;
};

/**
 * Renders a list of skills with the given list.
 *
 * @param {Object} props - The props object containing the list of skills and onClick function.
 * @param {skillType[]} props.list - The array of skills.
 * @param {Function} props.onClick - The function to be called when a skill is clicked.
 */
const SkillList = ({ list, onClick }: SectionSkillListProps) => {
  return (
    <StyledSectionSkillList>
      {list.map((skill) => (
        <OnClickButton key={skill.id} onClick={() => onClick(skill)}>
          {skill.name}
        </OnClickButton>
      ))}
    </StyledSectionSkillList>
  );
};

export default SkillList;

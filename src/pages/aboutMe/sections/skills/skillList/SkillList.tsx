// components
import OnClickButton from "../../../../../components/custom/button/onClickButton/OnClickButton";
import { StyledSectionSkillList } from "./styledSkillList";

// Types
import { SkillType } from "../skillTypes";

type SectionSkillListProps = {
  list: SkillType[];
  onClick: (skill: SkillType) => void;
};

/**
 * Renders a list of skills with the given list.
 *
 * @param {Object} props - The props object containing the list of skills and onClick function.
 * @param {SkillType[]} props.list - The array of skills.
 * @param {Function} props.onClick - The function to be called when a skill is clicked.
 */
const SkillList = ({ list, onClick }: SectionSkillListProps) => {
  console.log(list);

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

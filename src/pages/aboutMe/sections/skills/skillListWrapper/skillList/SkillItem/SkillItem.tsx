import { useState } from "react";

// components
import OnClickButton from "../../../../../../../components/custom/button/onClickButton/OnClickButton";
import { StyledSectionSkillItem, StyledSectionSkillList } from "./styledSkillItem";
import { StyledButtonOnlyText } from "../../../../../../../components/custom/button/styledButtonDefault";

// Types
import { SkillType } from "../../../skillTypes";
import { StyledNormalButton } from "../../../../../../../components/custom/button/normalButton/styledNormalButton";

type SkillListProps = {
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
const SkillItem = ({ list, onClick }: SkillListProps) => {
  const [showAll, setShowAll] = useState(false);

  const maxVisableSkills = 5;
  const remainingSkills = list.length - maxVisableSkills;

  const handleClick = () => {
    setShowAll(true);
  };

  const renderSkillItem = (skill: SkillType) => (
    <StyledSectionSkillItem key={skill.id}>
      <OnClickButton onClick={() => onClick(skill)}>{skill.name}</OnClickButton>
      {/* <StyledNormalButton to={`/${skill.id}/${skill.category}`}>{skill.name}</StyledNormalButton> */}
    </StyledSectionSkillItem>
  );

  return (
    <StyledSectionSkillList>
      {showAll
        ? list.map((skill) => renderSkillItem(skill))
        : list.slice(0, maxVisableSkills).map((skill) => renderSkillItem(skill))}
      {!showAll && list.length > maxVisableSkills ? (
        <StyledButtonOnlyText onClick={handleClick}>{`+${remainingSkills} weitere Skills`}</StyledButtonOnlyText>
      ) : (
        ""
      )}
    </StyledSectionSkillList>
  );
};

export default SkillItem;

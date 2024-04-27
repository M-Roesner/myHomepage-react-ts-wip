import { useState } from "react";

// components
import { StyledSectionSkillItem, StyledSectionSkillList } from "./styledSkillItem";
import { StyledNormalButton_OnlyText } from "../../../../../../../components/custom/button/styledButtonDefault";
import { StyledNormalButton } from "../../../../../../../components/custom/button/normalButton/styledNormalButton";

// Types
import { SkillType } from "../../../skillTypes";
import { ERouteType } from "../../../../../../../routes/router";

type SkillListProps = {
  list: SkillType[];
};

/**
 * Renders a list of skills with the given list.
 *
 * @param {Object} props - The props object containing the list of skills and onClick function.
 * @param {SkillType[]} props.list - The array of skills.
 * @param {Function} props.onClick - The function to be called when a skill is clicked.
 */
const SkillItem = ({ list }: SkillListProps) => {
  const [showAll, setShowAll] = useState(false);

  const maxVisableSkills = 5;
  const remainingSkills = list.length - maxVisableSkills;

  const handleClick = () => setShowAll(true);

  const renderSkillItem = (skill: SkillType) => (
    <StyledSectionSkillItem key={skill.id}>
      <StyledNormalButton to={`/${ERouteType.ABOUT_ME}/${skill.id}/${skill.category}`}>{skill.name}</StyledNormalButton>
    </StyledSectionSkillItem>
  );

  return (
    <StyledSectionSkillList>
      {showAll
        ? list.map((skill) => renderSkillItem(skill))
        : list.slice(0, maxVisableSkills).map((skill) => renderSkillItem(skill))}
      {!showAll && list.length > maxVisableSkills ? (
        <StyledNormalButton_OnlyText
          onClick={handleClick}
        >{`+${remainingSkills} weitere Skills`}</StyledNormalButton_OnlyText>
      ) : (
        ""
      )}
    </StyledSectionSkillList>
  );
};

export default SkillItem;

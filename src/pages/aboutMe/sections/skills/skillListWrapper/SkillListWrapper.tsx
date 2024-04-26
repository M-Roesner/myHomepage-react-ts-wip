// components
import { StyledSkillListWrapper } from "./styledSkillListWrapper";
import CardHeadline from "../../../../../components/custom/card/cardHeadline/CardHeadline";

// Resources & helpers
import { mySampleSkills } from "../../../../../resources/samples/mySampleSkills";
import SkillList from "./skillList/skillList";

/**
 * Component for displaying a list of skills grouped by categories.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.onClick - Function to handle click events on skills.
 */
export const SkillListWrapper = () => {
  const frontendSkillList = mySampleSkills["Frontend"].sort((a, b) => a.order - b.order);
  const backendSkillList = mySampleSkills["Backend"].sort((a, b) => a.order - b.order);
  const designSkillList = mySampleSkills["Design"].sort((a, b) => a.order - b.order);
  const otherSkillList = mySampleSkills["Other"].sort((a, b) => a.order - b.order);

  return (
    <StyledSkillListWrapper>
      <CardHeadline level={2}>Meine Fähigkeiten</CardHeadline>
      {frontendSkillList && frontendSkillList.length > 0 && (
        <SkillList skillList={frontendSkillList} title={"Frontend"}></SkillList>
      )}
      {backendSkillList && backendSkillList.length > 0 && (
        <SkillList skillList={backendSkillList} title={"Backend"}></SkillList>
      )}
      {designSkillList && designSkillList.length > 0 && (
        <SkillList skillList={designSkillList} title={"Design"}></SkillList>
      )}
      {otherSkillList && otherSkillList.length > 0 && (
        <SkillList skillList={otherSkillList} title={"Sonstige"}></SkillList>
      )}
    </StyledSkillListWrapper>
  );
};

export default SkillListWrapper;

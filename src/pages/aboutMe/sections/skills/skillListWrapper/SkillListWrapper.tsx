// components
import { StyledSkillListWrapper } from "./styledSkillListWrapper";
import CardHeadline from "../../../../../components/custom/card/cardHeadline/CardHeadline";

// Types
import { SkillType } from "../skillTypes";

// Resources & helpers
import { mySampleSkills } from "../../../../../resources/samples/mySampleSkills";
import SkillList from "./skillList/skillList";

type SkillListWrapperProps = {
  onClick: (skill: SkillType) => void;
};

/**
 * Component for displaying a list of skills grouped by categories.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.onClick - Function to handle click events on skills.
 */
export const SkillListWrapper = ({ onClick }: SkillListWrapperProps) => {
  const frontendSkillList = mySampleSkills["Frontend"].sort((a, b) => a.order - b.order);
  const backendSkillList = mySampleSkills["Backend"].sort((a, b) => a.order - b.order);
  const designSkillList = mySampleSkills["Design"].sort((a, b) => a.order - b.order);
  const otherSkillList = mySampleSkills["Other"].sort((a, b) => a.order - b.order);

  return (
    <StyledSkillListWrapper>
      <CardHeadline level={2}>Meine Fähigkeiten</CardHeadline>
      {frontendSkillList && frontendSkillList.length > 0 && (
        <SkillList skillList={frontendSkillList} title={"Frontend"} onClick={onClick}></SkillList>
      )}
      {backendSkillList && backendSkillList.length > 0 && (
        <SkillList skillList={backendSkillList} title={"Backend"} onClick={onClick}></SkillList>
      )}
      {designSkillList && designSkillList.length > 0 && (
        <SkillList skillList={designSkillList} title={"Design"} onClick={onClick}></SkillList>
      )}
      {otherSkillList && otherSkillList.length > 0 && (
        <SkillList skillList={otherSkillList} title={"Sonstige"} onClick={onClick}></SkillList>
      )}
    </StyledSkillListWrapper>
  );
};

export default SkillListWrapper;

/**
 * Component for displaying a list of skills grouped by categories.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.onClick - Function to handle click events on skills.
 */
// const SkillListWrapper_alternative = ({ onClick }: SkillListWrapperProps) => {
//   // TODO: Retrieve the list from the backend!
//   // Note: The functionality might change depending on how the data is fetched, whether individually or as an object.
//   const fetchedSkillListCollection = mySampleSkills;

//   return (
//     <StyledSkillListWrapper>
//       <CardHeadline level={2}>Meine Fähigkeiten</CardHeadline>
//       <RenderSkillCategories skillListCollection={fetchedSkillListCollection} onClick={onClick} />
//     </StyledSkillListWrapper>
//   );
// };

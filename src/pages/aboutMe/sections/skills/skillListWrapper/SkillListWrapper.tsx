// components
import { StyledSkillListWrapper } from "./styledSkillListWrapper";
import { CardParagraph } from "../../../../../components/custom/card/cardParagraph/styledCardParagraphStyle";
import SkillList from "./skillList/skillList";

// Resources, helpers and types
import { mySampleSkills } from "../../../../../resources/samples/skills/mySampleSkills";
import { sortListByKeyType } from "../../../../../utils/sortListByKeyType";
import { SkillType } from "../skillTypes";
import { ELanguage, formatDate } from "../../../../../utils/dateHelper";

/**
 * Finds the last updated date among the list of skills.
 * If no updated date is found, returns a default date value ("1900-01-01").
 *
 * @param skillList The list of skills to search through.
 * @returns The last updated date found among the skills.
 */
const findLastDateOfSkillList = (skillList: SkillType[]): Date => {
  let lastUpdatedDate = new Date("1900-01-01"); // Default value when nothing was found

  // Updates the date if the date is newer than the old date.
  for (const skill of skillList) {
    if (skill.updatedDate && skill.updatedDate > lastUpdatedDate) {
      lastUpdatedDate = skill.updatedDate;
    }
  }

  return lastUpdatedDate;
};

/**
 * Component for displaying a list of skills grouped by categories.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.onClick - Function to handle click events on skills.
 */
export const SkillListWrapper = () => {
  // TODO: SkillList data receiving: This structure for receiving data will be changed with the database in future.
  const frontendSkillList = sortListByKeyType(mySampleSkills["Frontend"], "order", "acc");
  const backendSkillList = sortListByKeyType(mySampleSkills["Backend"], "order", "acc");
  const designSkillList = sortListByKeyType(mySampleSkills["Design"], "order", "acc");
  const otherSkillList = sortListByKeyType(mySampleSkills["Other"], "order", "acc");

  const lastDateArray: Date[] = [];
  lastDateArray.push(findLastDateOfSkillList(mySampleSkills["Frontend"]));
  lastDateArray.push(findLastDateOfSkillList(mySampleSkills["Backend"]));
  lastDateArray.push(findLastDateOfSkillList(mySampleSkills["Design"]));
  lastDateArray.push(findLastDateOfSkillList(mySampleSkills["Other"]));
  lastDateArray.sort((a, b) => a.getTime() - b.getTime());

  const lastDate = formatDate(lastDateArray[lastDateArray.length - 1], ELanguage.GERMAN);

  return (
    <StyledSkillListWrapper>
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
      <CardParagraph $isFootnote>{`letztes update am: ${lastDate}`}</CardParagraph>
    </StyledSkillListWrapper>
  );
};

export default SkillListWrapper;

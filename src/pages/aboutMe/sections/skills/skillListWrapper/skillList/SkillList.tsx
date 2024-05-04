// Components
import { StyledSkillList } from "./styledskillList";
import CardHeadline from "../../../../../../components/custom/card/cardHeadline/CardHeadline";
import ListLayout from "../../../../../../components/custom/layout/listLayout/ListLayout";

// Helpers
import { mwAbout_SkillToListItemType } from "./middleware.helper";

// Types
import { SkillType } from "../../skillTypes";

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
  const newList = mwAbout_SkillToListItemType(skillList);

  if (!newList) return <></>;

  return (
    <StyledSkillList>
      <CardHeadline level={4}>{title}:</CardHeadline>
      <ListLayout
        list={newList}
        numerusText={{ singular: "weitere Fähigkeit", plural: "weitere Fähigkeiten" }}
      ></ListLayout>
    </StyledSkillList>
  );
};

export default SkillList;

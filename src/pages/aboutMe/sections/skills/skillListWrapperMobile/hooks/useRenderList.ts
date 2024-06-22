import { useEffect, useState } from "react";

// Helper functions
import { mwAbout_SkillToListItemType } from "../../skillListWrapper/skillList/middleware.helper";
import { sortListByKeyType } from "../../../../../../utils/sortListByKeyType";

// Types
import { ListItemType } from "../../../../../../components/custom/layout/listLayout/listLayoutTypes";
import { SkillCategoryType } from "../../skillTypes";

// Resource
import { mySampleSkills } from "../../../../../../resources/samples/skills/mySampleSkills";

/**
 * Custom hook to generate a list of items to render based on the current skill category.
 *
 * @param {SkillCategoryType | undefined} currentCategory - The current skill category.
 * @returns {ListItemType[] | undefined} The list of items to render.
 */
const useRenderList = (currentCategory: SkillCategoryType | undefined): ListItemType[] | undefined => {
  const [renderList, setRenderList] = useState<ListItemType[] | undefined>();

  useEffect(() => {
    if (currentCategory) {
      const sortedList = sortListByKeyType(mySampleSkills[currentCategory], "priority", "asc");
      setRenderList(mwAbout_SkillToListItemType(sortedList));
    }
  }, [currentCategory]);

  return renderList;
};

export default useRenderList;

import { useEffect, useState } from "react";
import { mySampleSkills } from "../../../../../../resources/samples/skills/mySampleSkills";
import { SkillType, SkillCategoryType } from "../../skillTypes";
import { sortListByKeyType } from "../../../../../../utils/sortListByKeyType";

/**
 * Custom hook to get sorted skills by category.
 *
 * @param {SkillCategoryType} category - The skill category to sort.
 * @returns {SkillType[]} Sorted list of skills for the given category.
 */
const useSortedSkills = (category: SkillCategoryType): SkillType[] => {
  const [sortedSkills, setSortedSkills] = useState<SkillType[]>([]);

  useEffect(() => {
    setSortedSkills(sortListByKeyType(mySampleSkills[category], "priority", "asc"));
  }, [category]);

  return sortedSkills;
};

export default useSortedSkills;

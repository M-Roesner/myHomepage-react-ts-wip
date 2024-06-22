import { useEffect, useState } from "react";
import { mySampleSkills } from "../../../../../resources/samples/skills/mySampleSkills";
import { SkillCategoryType, SkillType } from "../skillTypes";

/**
 * Custom hook to find the last updated date among the list of skills.
 *
 * @returns {Date} The last updated date found among the skills.
 */
const useLastUpdateDate = (): Date => {
  const [lastUpdatedDate, setLastUpdatedDate] = useState<Date>(new Date("1900-01-01"));

  useEffect(() => {
    let lastDate = new Date("1900-01-01");

    ["Frontend", "Backend", "Design", "Other"].forEach((category) => {
      mySampleSkills[category as SkillCategoryType].forEach((skill: SkillType) => {
        if (skill.updatedDate && skill.updatedDate > lastDate) {
          lastDate = skill.updatedDate;
        }
      });
    });

    setLastUpdatedDate(lastDate);
  }, []);

  return lastUpdatedDate;
};

export default useLastUpdateDate;

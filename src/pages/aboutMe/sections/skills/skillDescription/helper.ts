// Resources & Helpers
import { mySampleSkills } from "../../../../../resources/samples/mySampleSkills";
import { isNumber } from "../../../../../utils/isNumber";

// Types
import { SkillCategoryType, SkillType } from "../skillTypes";

/**
 * Retrieves a single skill based on its category and ID.
 *
 * @param skillCategory The category of the skill.
 * @param skillId The ID of the skill.
 * @returns The skill object if found, otherwise undefined.
 */
export const getSingleSkill = (
  skillCategory: SkillCategoryType | undefined,
  skillId: number | string | undefined
): SkillType | undefined => {
  if (skillCategory === undefined || skillId === undefined) return undefined;

  const skillIdNumber = typeof skillId === "string" && isNumber(skillId) ? Number(skillId) : (skillId as number);
  const skillList = mySampleSkills[skillCategory];
  const skill = skillList?.find((skill) => skill.id === skillIdNumber);
  return skill ?? undefined;
};

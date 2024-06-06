// Types & Enums
import { SkillType } from "../../skillTypes";
import { ListItemType } from "../../../../../../components/custom/layout/listLayout/listLayoutTypes";
import { ERouteType } from "../../../../../../routes/router";

/**
 * Transforms an array of SkillType objects into an array of ListItemType objects.
 * Each ListItemType object contains the skill name and a button URL constructed from the skill's category and ID.
 *
 * @param {SkillType[]} list - An array of SkillType objects representing skills.
 * @returns {ListItemType[] | undefined} An array of ListItemType objects representing skills as list items.
 */
export const mwAbout_SkillToListItemType = (list: SkillType[]): ListItemType[] | undefined => {
  return list.map((skill) => {
    const buttonUrl = `/${ERouteType.ABOUT_ME}/${skill.category}/${skill.id}`;

    return {
      text: skill.name,
      buttonUrl,
    };
  });
};

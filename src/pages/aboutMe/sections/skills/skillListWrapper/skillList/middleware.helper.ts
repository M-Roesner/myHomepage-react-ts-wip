// Types & Enums
import { SkillType } from "../../skillTypes";
import { ListItemType } from "../../../../../../components/custom/layout/listLayout/listLayoutTypes";
import { ERouteType } from "../../../../../../routes/router";

export const mwAbout_SkillToListItemType = (list: SkillType[]): ListItemType[] | undefined => {
  return list.map((skill) => {
    const buttonUrl = `/${ERouteType.ABOUT_ME}/${skill.id}/${skill.category}`;

    return {
      text: skill.name,
      buttonUrl,
    };
  });
};

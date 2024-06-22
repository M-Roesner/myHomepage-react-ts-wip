import { useState, useEffect } from "react";

// Types
import { RoundedButtonListType } from "../../../../../../components/custom/card/CardRoundedOffsetButtonWrapper/roundedButtonType";
import { ERouteType } from "../../../../../../routes/router";
import { SkillCategoryType } from "../../skillTypes";

// Resources
import { mySampleSkills } from "../../../../../../resources/samples/skills/mySampleSkills";

/**
 * Custom hook to generate a list of buttons based on available skill categories.
 *
 * @returns {RoundedButtonListType[]} An array of button objects with text and route information.
 */
const useButtonList = (): RoundedButtonListType[] => {
  const [buttonList, setButtonList] = useState<RoundedButtonListType[]>([]);

  useEffect(() => {
    const buttons: RoundedButtonListType[] = [];
    ["Frontend", "Backend", "Design", "Other"].forEach((category) => {
      if (mySampleSkills[category as SkillCategoryType].length > 0) {
        buttons.push({
          text: category === "Other" ? "Sonstiges" : category,
          to: `/${ERouteType.ABOUT_ME}/${mySampleSkills[category as SkillCategoryType][0].category}`,
        });
      }
    });
    setButtonList(buttons);
  }, []);

  return buttonList;
};

export default useButtonList;

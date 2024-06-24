import { SideNavigationButtonType } from "../../../components/custom/navigation/sideNavigation/SideNavigation";
import { EAboutHeadlineTagId } from "../aboutEnums";

/**
 * Converts the content of ProjectType to an array of ProjectAsideNavigationButtonProps objects.
 *
 * Checks whether a specific key exists and is not empty.
 * Currently types will be checked: skills, links, images and additional content.
 *
 * Ensure that the tagId must match the id of the tag being viewed.
 *
 * @param {ProjectType[]} content - The project content
 * @returns {SideNavigationButtonType[]} - An array of ProjectAsideNavigationButtonProps objects.
 */
export const useAsideNavigation_about = (): SideNavigationButtonType[] | undefined => {
  const listOfAsideNavigation: SideNavigationButtonType[] = [
    { tagId: EAboutHeadlineTagId.HOW_AM_I, buttonText: "Wer bin ich?" },
    { tagId: EAboutHeadlineTagId.WHY_IT, buttonText: "Warum Informatik?" },
    { tagId: EAboutHeadlineTagId.SKILLS, buttonText: "Fähigkeiten" },
    { tagId: EAboutHeadlineTagId.FUTURE, buttonText: "Zukünftige Entwicklung" },
  ];

  return listOfAsideNavigation;
};

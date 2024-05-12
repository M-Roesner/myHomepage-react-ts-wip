// Types
import { ImageType } from "../../components/custom/layout/imageWrapperLayout/imageType";
import { ListItemType } from "../../components/custom/layout/listLayout/listLayoutTypes";
import { ProjectLinkType, ProjectSkillType, ProjectImageType, ProjectType } from "../myPortfolio/types/projectTypes";
import { EProjectTagId } from "./projectEnums";
import { ProjectAsideNavigationButtonProps } from "./projectNavigation/ProjectNavigation";

// Sources
import svgNewLabel from "/src/assets/iconscout-free/new.svg";

/**
 * Converts a list of ProjectLinkType to an array of ListItemType objects.
 *
 * @param {ProjectLinkType[]} list - The array of ProjectLinkType to be converted.
 * @returns {ListItemType[]} - An array of ListItemType objects.
 */
export const mwProject_LinksToListItemType = (list: ProjectLinkType[]): ListItemType[] | undefined => {
  if (list.length === 0) return undefined;
  return list?.map((link) => {
    return {
      text: link.text,
      iconSrc: link.iconSrc,
      buttonUrl: link.route,
    };
  });
};

/**
 * Converts a list of ProjectSkillType to an array of ListItemType objects.
 * Each string in the input array corresponds to the 'text' property of the ListItemType object.
 *
 * @param {ProjectSkillType[]} list - The array of ProjectSkillType to be converted.
 * @returns {ListItemType[]} - An array of ListItemType objects.
 */
export const mwProject_SkillsToListItems = (list: ProjectSkillType[]): ListItemType[] | undefined => {
  if (list.length === 0) return undefined;
  const newlist = list.map((string) => {
    const iconSrc = string.isNewSkill ? svgNewLabel : undefined;
    return { text: string.skillTitle, iconSrc };
  });

  newlist.sort((a, b) => {
    // Überprüfe, ob das icon-Feld in beiden Objekten definiert ist
    if (a.iconSrc === undefined && b.iconSrc === undefined) return 0; // Wenn beide undefined sind, bleiben sie in der gleichen Reihenfolge
    if (a.iconSrc === undefined) return 1; // Wenn nur a.iconSrc undefined ist, soll es nach hinten sortiert werden
    if (b.iconSrc === undefined) return -1; // Wenn nur b.iconSrc undefined ist, soll es nach vorne sortiert werden

    // Vergleiche die iconSrc-Werte, um die Sortierreihenfolge zu bestimmen
    return a.iconSrc.localeCompare(b.iconSrc);

    // if (a.iconSrc < b.iconSrc) return -1;
    // if (a.iconSrc > b.iconSrc) return 1;
    // return 0; // Wenn die iconSrc-Werte gleich sind, bleiben sie in der gleichen Reihenfolge
  });
  return newlist;
};

/**
 * Converts a list of ProjectImageType to an array of ImageType objects.
 *
 * @param {ProjectImageType[]} images - The array of ProjectImageType to be converted.
 * @returns {ImageType[]} - An array of ImageType objects.
 */
export const mwProject_ImageToImageType = (images: ProjectImageType[]): ImageType[] | undefined => {
  if (images.length === 0) return undefined;
  return images?.map((image, index) => {
    return {
      id: index + 1, // + 1 to index because IDs must start from 1 (0 is not allowed to avoid ambiguity with falsy values).
      src: image.imgSrcs.mobile,
      srcFullSize: image.imgSrcs.full,
      srcPreviewSize: image.imgSrcs.preview === "" ? image.imgSrcs.preview : image.imgSrcs.mobile,
      title: image.imgTitle,
      alt: image.imgAlt,
      description: image.imgDescription,
    };
  });
};

/**
 * Converts the content of ProjectType to an array of ProjectNavigationButtonProps objects.
 *
 * Checks whether a specific key exists and is not empty.
 * Currently types will be checked: skills, links and images.
 *
 * Ensure that the tagId must match the id of the tag being viewed.
 *
 * @param {ProjectType[]} content - The project content
 * @returns {ProjectAsideNavigationButtonProps[]} - An array of ProjectNavigationButtonProps objects.
 */
export const mwProject_AsideNavigation = (content: ProjectType): ProjectAsideNavigationButtonProps[] | undefined => {
  const listOfAsideNavigation: ProjectAsideNavigationButtonProps[] = [
    { tagId: EProjectTagId.WHY, buttonText: "Warum" }, // "why" is always set
  ];
  // Check if "skills" is set in the content
  if (content.skills && content.skills.length > 0)
    listOfAsideNavigation.push({ tagId: EProjectTagId.SKILLS, buttonText: "Fähigkeiten" });

  // Check if "links" is set in the content
  if (content.links && content.links.length > 0)
    listOfAsideNavigation.push({ tagId: EProjectTagId.LINKS, buttonText: "Links" });

  // Check if "images" is set in the content
  if (content.images && content.images.length > 0)
    listOfAsideNavigation.push({ tagId: EProjectTagId.IMAGES, buttonText: "Bilder" });

  return listOfAsideNavigation;
};

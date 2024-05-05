import { ImageType } from "../../components/custom/layout/imageWrapperLayout/ImageWrapperLayout";
import { ListItemType } from "../../components/custom/layout/listLayout/listLayoutTypes";
import { ProjectLinkType, ProjectSkillType, ProjectImageType } from "../myPortfolio/types/projectTypes";
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
  return images?.map((image) => {
    return {
      src: image.imgSrcs.mobile,
      srcFullSize: image.imgSrcs.full,
      title: image.imgTitle,
      alt: image.imgAlt,
    };
  });
};

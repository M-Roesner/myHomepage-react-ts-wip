import { ListItemType } from "../../../components/custom/layout/listLayout/listLayoutTypes";
import { ProjectImageType, ProjectLinkType, ProjectSkillType } from "../types/projectTypes";

import svgNewLabel from "/src/assets/iconscout-free/new.svg";

export const mwPortfolio_LinksToListItemType = (links: ProjectLinkType[]): ListItemType[] | undefined => {
  if (links.length === 0) return undefined;
  return links?.map((link) => {
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
export const mwPortfolio_SkillsToListItems = (list: ProjectSkillType[]): ListItemType[] | undefined => {
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

export const mwPortfolio_ImageToListItemType = (images: ProjectImageType[]): ListItemType[] | undefined => {
  if (images.length === 0) return undefined;
  return images?.map((image) => {
    return {
      iconSrc: image.imgSrcs.preview,
    };
  });
};

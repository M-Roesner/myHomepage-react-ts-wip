// Resources and Helpers
import { mySamplePrivateProjects } from "../../../resources/samples/portfolio/mySamplePrivateProjects";
import { checkNumber } from "../../../utils/CheckNumber";
import svgNewLabel from "/src/assets/iconscout-free/new.svg";

// Types
import { ProjectCategoryType, ProjectSkillType, ProjectType } from "../types/projectTypes";
import { ListItemType } from "../../../components/custom/layout/listLayout/listLayoutTypes";

/**
 * Returns a array of projects for the given category otherwise returns undefined
 *
 * @param category
 * @returns {ProjectType[] | undefined} The array of projects or undefined.
 */
const checkCategoryName = (category: ProjectCategoryType): ProjectType[] | undefined => {
  switch (category) {
    case "personal":
      return mySamplePrivateProjects;
    default:
      return undefined;
  }
};

/**
 * Returns a single project from the given category and id!
 *
 * @param category
 * @param id
 * @returns {ProjectType | undefined} The single project or undefined.
 */
export const getPortfolioContent = (category: ProjectCategoryType, id: number | string): ProjectType | undefined => {
  const samplefile = checkCategoryName(category);
  if (samplefile === undefined) {
    console.error(`Given category '${category}' is not supported!`);
    return undefined;
  }

  // Double check to ensure that the given id is valid
  const checkedId = checkNumber(id);
  if (!checkedId) {
    console.error(`Given id '${checkedId}' is not a number!`);
    return undefined;
  }
  const content = samplefile.find((project) => project.id === checkedId);

  return content;
};

export const middlewareLinksFromProjectTypeToListItemType = (content: ProjectType): ListItemType[] | undefined => {
  if (!content.links) return undefined;
  if (content.links.length === 0) return undefined;
  return content.links?.map((link) => {
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
export const middlewareprojectSkillTypeToListItems = (list: ProjectSkillType[]): ListItemType[] | undefined => {
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

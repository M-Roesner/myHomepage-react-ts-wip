// Resources and Helpers
import { mySamplePrivateProjects } from "../../../resources/samples/portfolio/mySamplePrivateProjects";
import { checkNumber } from "../../../utils/CheckNumber";

// Types
import { ProjectCategoryType, ProjectType } from "../types/projectTypes";
import { ListItemType } from "../../../components/custom/layout/listLayout/ListLayout";

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

export const middlewareProjectTypeToListItemType = (content: ProjectType): ListItemType[] | undefined => {
  if (!content.links) return undefined;
  if (content.links.length === 0) return undefined;
  return content.links?.map((link) => {
    return {
      text: link.text,
      url: link.route,
    };
  });
};

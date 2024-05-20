// Resources and Helpers
import { myRetrainingProjects } from "../../resources/portfolio/myRetrainingProjects";
import { checkNumber } from "../../utils/CheckNumber";
import { ProjectCategoryType, ProjectType } from "../myPortfolio/types/projectTypes";

// Types

/**
 * Returns a array of projects for the given category otherwise returns undefined
 *
 * @param category
 * @returns {ProjectType[] | undefined} The array of projects or undefined.
 */
const getProjectsByCategoryName = (category: ProjectCategoryType): ProjectType[] | undefined => {
  switch (category) {
    case "retraining":
      return myRetrainingProjects;
    default:
      return undefined;
  }
};

/**
 * Returns a single project from the given category and the project id!
 *
 * @param category - The categorytype of the project.
 * @param id - The project id
 * @returns {ProjectType | undefined} The single project or undefined.
 */
export const getProjectContent = (category: ProjectCategoryType, id: number | string): ProjectType | undefined => {
  const projects = getProjectsByCategoryName(category);
  if (projects === undefined) {
    console.error(`Given category '${category}' is not supported!`);
    return undefined;
  }

  // Double check to ensure that the given id is valid
  const checkedId = checkNumber(id);
  if (!checkedId) {
    console.error(`Given id '${checkedId}' is not a number!`);
    return undefined;
  }

  return projects.find((project) => project.id === checkedId);
};

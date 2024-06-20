import { ProjectType } from "../pages/myPortfolio/types/projectTypes";

/**
 * Constructs the full URL path by appending the provided relative path to the BASE_URL.
 * @param relativePath The relative path to be appended to the BASE_URL.
 * @returns The full URL path.
 */
export function getFullPath(relativePath: string | undefined): string {
  // If relativePath is not defined or empty, return an empty string.
  if (!relativePath) return "";

  // Construct the full URL path by appending relativePath to BASE_URL.
  return `${import.meta.env.BASE_URL}${relativePath}`;
}

/**
 * Processes the array of projects by mapping each project and updating the image paths and link icons to use full URLs.
 * @param projects The array of ProjectType objects to be processed.
 * @returns The processed array of ProjectType objects with updated image paths and link icons.
 */
export function processJsonData(projects: ProjectType[]): ProjectType[] {
  // Map over each project in the projects array and update its images and links.
  return projects.map((project) => ({
    ...project,
    // Update images array by mapping over each image and updating imgSrcs paths.
    images: project.images?.map((image) => ({
      ...image,
      imgSrcs: {
        preview: getFullPath(image.imgSrcs.preview),
        mobile: getFullPath(image.imgSrcs.mobile),
        desktop: getFullPath(image.imgSrcs.desktop),
      },
    })),
    // Update links array by mapping over each link and updating iconSrc path if present.
    links: project.links?.map((link) => ({
      ...link,
      iconSrc: link.iconSrc ? getFullPath(link.iconSrc) : undefined,
    })),
  }));
}

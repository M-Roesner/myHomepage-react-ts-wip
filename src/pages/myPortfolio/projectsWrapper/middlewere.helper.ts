// Types & Enums
import { CardInfoBoxProps } from "../../../components/custom/card/CardInfoBox/CardInfoBox";
import { ProjectType } from "../types/projectTypes";
import { ERouteType } from "../../../routes/router";

/**
 * Converts a project object of type `ProjectType` into props suitable for the `CardInfoBox` component.
 * This function extracts relevant project information and formats it into props expected by the `CardInfoBox`.
 * If no main preview image is found in the project, an empty string is used for the image source.
 *
 * @param {ProjectType} project - The project object to be converted.
 * @returns {CardInfoBoxProps} - Props suitable for the `CardInfoBox` component.
 */
export const middlewareProjectTypeToCardInfoBoxProps = (project: ProjectType): CardInfoBoxProps => {
  // Finds the main preview image of the project, if available.
  const image = project.images?.find((img) => img.isMainPreview);
  return {
    route: `/${ERouteType.PROJECT}/${project.category}/${project.id}`,
    title: project.title,
    descriptions: project.cardIntroduction,
    image: image && { imgSrc: image.imgSrcs.mobile, imgAlt: image.imgAlt },
    // isBGImage: true,
  };
};

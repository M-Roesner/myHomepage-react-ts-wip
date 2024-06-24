// Helpers
import { sortListByKeyType } from "../../utils/sortListByKeyType";

// Types and Enums
import { ImageType } from "../../components/custom/layout/imageWrapperLayout/imageType";
import { ListItemType } from "../../components/custom/layout/listLayout/listLayoutTypes";
import {
  ProjectLinkType,
  ProjectTechnologyType,
  ProjectImageType,
  ProjectType,
} from "../myPortfolio/types/projectTypes";
import { EProjectTagId } from "./projectEnums";
import { SideNavigationButtonType } from "../../components/custom/navigation/sideNavigation/SideNavigation";

// Sources
import svgNewLabel from "/images/iconscout-free/new.svg";

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
 * @param {ProjectTechnologyType[]} list - The array of ProjectSkillType to be converted.
 * @returns {ListItemType[]} - An array of ListItemType objects.
 */
export const mwProject_TechnologyToListItems = (list: ProjectTechnologyType[]): ListItemType[] | undefined => {
  if (list.length === 0) return undefined;
  const newlist = list.map((item) => {
    const iconSrc = item.isNew ? svgNewLabel : undefined;
    return { text: item.title, iconSrc };
  });

  return sortListByKeyType(newlist, "iconSrc", "asc");
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
      srcPreview: image.imgSrcs.preview,
      srcMobile: image.imgSrcs.mobile,
      srcTablet: image.imgSrcs.tablet,
      srcLaptop: image.imgSrcs.laptop,
      srcDesktop: image.imgSrcs.desktop,
      title: image.imgTitle,
      alt: image.imgAlt,
      description: image.imgDescription,
    };
  });
};

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
export const mwProject_AsideNavigation = (content: ProjectType): SideNavigationButtonType[] | undefined => {
  const listOfAsideNavigation: SideNavigationButtonType[] = [
    { tagId: EProjectTagId.WHY, buttonText: "Warum" }, // "why" is always set
  ];

  // Inserts the additional content into the sidebar if additional content is available.
  if (content.additionalInfo && content.additionalInfo.length > 0) {
    content.additionalInfo.forEach((element) => {
      listOfAsideNavigation.push({
        tagId: element.idTag,
        buttonText: element.asidebarText,
      });
    });
  }

  // Check if "images" is set in the content
  if (content.images && content.images.length > 0)
    listOfAsideNavigation.push({ tagId: EProjectTagId.IMAGES, buttonText: "Bilder" });

  // Check if "skills" is set in the content
  if (content.skills && content.skills.length > 0)
    listOfAsideNavigation.push({ tagId: EProjectTagId.SKILLS, buttonText: "Fähigkeiten" });

  // Check if "technologies" is set in the content
  if (content.technologies && content.technologies.length > 0)
    listOfAsideNavigation.push({ tagId: EProjectTagId.TECHNOLOGIES, buttonText: "Technologien" });

  // Check if "links" is set in the content
  if (content.links && content.links.length > 0)
    listOfAsideNavigation.push({ tagId: EProjectTagId.LINKS, buttonText: "Links" });

  return listOfAsideNavigation;
};

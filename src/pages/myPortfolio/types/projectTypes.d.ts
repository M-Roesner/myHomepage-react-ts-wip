import { ERouteType } from "../../../routes/router";

export type ProjectCategoryType = "personal" | "retraining" | "internship";

export type ProjectTechnologyType = {
  title: string;
  isNew?: boolean;
};

// TODO: TOO much pictures! preview = mobile. I think 3 pictures are enough!
export type imgSrcType = {
  preview?: string;
  mobile: string;
  tablet?: string;
  laptop?: string;
  desktop?: string;
};

export type ProjectImageType = {
  imgSrcs: imgSrcType;
  imgTitle: string;
  imgAlt?: string;
  imgDescription?: string;
  isMainPreview?: boolean;
};

export type ProjectLinkType = {
  text: string;
  route: string | ERouteType;
  iconSrc?: string;
  iconAltText?: string;
};

export type ContentSectionType = {
  headlinetext: string;
  paragraphs: string[];
  idTag: string;
  asidebarText: string;
};

export type ProjectType = {
  id: number;
  category: ProjectCategoryType;
  title: string;
  cardIntroduction: string[];
  introduction: string[];
  why: string[];
  additionalInfo?: ContentSectionType[];
  knowledge?: string[];
  technologies?: ProjectTechnologyType[];
  images?: ProjectImageType[];
  links?: ProjectLinkType[];
  addedDate?: Date;
  updatedDate?: Date;
};

import { ERouteType } from "../../../routes/router";

export type ProjectCategoryType = "personal" | "retraining" | "internship";

export type ProjectSkillType = {
  skillTitle: string;
  isNewSkill?: boolean;
};

export type imgSrcType = {
  preview: string;
  mobile: string;
  full: string;
};

export type ProjectImageType = {
  imgSrcs: imgSrcType;
  imgTitle: string;
  imgAlt?: string;
  isMainPreview?: boolean;
};

export type ProjectLinkType = {
  text: string;
  route: string | ERouteType;
  icon?: string;
};

export type ProjectType = {
  id: number;
  category: ProjectCategoryType;
  title: string;
  cardIntroduction: string;
  introduction: string;
  description: string;
  skills?: ProjectSkillType[];
  images?: ProjectImageType[];
  links?: ProjectLinkType[];
  addedDate?: Date;
  updatedDate?: Date;
};

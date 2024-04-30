export type ProjectCategory = "personal" | "retraining" | "internship";

export type ProjectImageType = {
  imgSrc: string;
  imgTitle: string;
  imgAlt?: string;
  isPreviewImage?: boolean;
};

export type ProjectLinkType = {
  text: string;
  route: string;
};

export type ProjectType = {
  id: number;
  category: ProjectCategory;
  title: string;
  cardIntroduction: string;
  introduction: string;
  description: string;
  images?: ProjectImageType[];
  links?: ProjectLinkType[];
  usedSkills?: string[];
  acquiredNewSkills?: string[];
  addedDate?: Date;
  updatedDate?: Date;
};

export type ProjectSkillType = {
  skillTitle: string;
  isNewSkill?: boolean;
};

// new typing test for projectType

export type newProjectImageType = {
  imgSrcs: imgSrcType;
  imgTitle: string;
  imgAlt?: string;
};

type imgSrcType = {
  preview: string;
  mobile: string;
  full: string;
};

export type newProjectType = {
  id: number;
  category: ProjectCategory;
  title: string;
  cardIntroduction: string;
  introduction: string;
  description: string;
  skills?: ProjectSkillType[];
  images?: newProjectImageType[];
  links?: ProjectLinkType[];
  addedDate?: Date;
  updatedDate?: Date;
};

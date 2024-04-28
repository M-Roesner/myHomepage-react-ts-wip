export type ProjectCategory = "personal" | "retraining" | "internship";

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

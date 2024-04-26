export type ProjectType = {
  id: number;
  title: string;
  cardIntroduction: string;
  introduction: string;
  description: string;
  imgSrc?: ProjectImageType[];
  links?: ProjectLinkType[];
  usedSkills?: string[];
  categories?: string[];
  acquiredSkills?: string[];
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

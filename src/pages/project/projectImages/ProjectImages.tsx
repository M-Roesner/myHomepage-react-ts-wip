// Components
import SectionLayout_NoStyle from "../../../components/custom/layout/sectionLayout/SectionLayout_NoStyle";
import ImageWrapperLayout from "../../../components/custom/layout/imageWrapperLayout/ImageWrapperLayout";

// Types & Enums
import { EProjectTagId } from "../projectEnums";
import { ImageType } from "../../../components/custom/layout/imageWrapperLayout/imageType";

type ProjectImagesType = {
  title: string;
  tagId: EProjectTagId;
  images: ImageType[];
};

/**
 * Returns a section with a list of images.
 *
 * @param {string} props.title - Title of the section
 * @param {EProjectTagId} props.tagId - props.tagId - Unique identifier for direct navigation via the URL to the corresponding "#tagId" section.
 * @param {ImageType[]} props.list - An array of ImageType objects.
 */
const ProjectImages = ({ title, tagId, images }: ProjectImagesType) => {
  return (
    <SectionLayout_NoStyle tagId={tagId} headlineText={title}>
      <ImageWrapperLayout images={images} />
    </SectionLayout_NoStyle>
  );
};

export default ProjectImages;

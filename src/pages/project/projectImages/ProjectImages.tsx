// Components
import SectionLayout_NoStyle from "../../../components/custom/layout/sectionLayout/SectionLayout_NoStyle";
import ImageWrapperLayout, { ImageType } from "../../../components/custom/layout/imageWrapperLayout/ImageWrapperLayout";

type ProjectImagesType = {
  title: string;
  images: ImageType[];
};

/**
 * Returns a section with a list of images.
 *
 * @param {string} props.title - Title of the section
 * @param {ImageType[]} props.list - An array of ImageType objects.
 */
const ProjectImages = ({ title, images }: ProjectImagesType) => {
  return (
    <SectionLayout_NoStyle headlineText={title}>
      <ImageWrapperLayout images={images} />
    </SectionLayout_NoStyle>
  );
};

export default ProjectImages;

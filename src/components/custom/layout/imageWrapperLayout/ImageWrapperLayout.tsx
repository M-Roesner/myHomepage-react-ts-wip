// Components
import { StyledImageWrapperLayout } from "./styledImageWrapperLayout";
import { StyledImage } from "./styledImage";

export type ImageType = {
  src: string;
  srcFullSize: string;
  title?: string;
  alt?: string;
  // className?: string;
  // onClick?: () => void;
  // style?: React.CSSProperties;
  // loading?: "auto" | "eager" | "lazy";
  // onLoad?: () => void;
  // onError?: () => void;
  // ariaLabel?: string;
  // draggable?: boolean;
};

/**
 * Renders a layout structure for a list of images.
 *
 * @param images - An array of image objects containing the source (`src`), alt text (`alt`).
 */
const ImageWrapperLayout = ({ images }: { images: ImageType[] }) => {
  // TODO: Add functions for onClick handling to make the image cover the entire page.
  return (
    <StyledImageWrapperLayout>
      {images.map((image, index) => (
        <StyledImage key={index} src={image.src} alt={image.alt} title={image.title ? image.title : image.alt} />
      ))}
    </StyledImageWrapperLayout>
  );
};

export default ImageWrapperLayout;

import { FaRegHandPointer } from "react-icons/fa";

// Components
import { StyledHandClick, StyledImage, StyledImageWrapper } from "./StyledImageWrapper";

// Type
import { ImageType } from "../imageType";

type ImageWrapperProps = {
  image: ImageType;
  onClick: () => void;
};

/**
 * A wrapper component for displaying an image with a clickable overlay.
 *
 * @param {ImageWrapperProps} props - Props for the ImageWrapper component.
 * @param {ImageType} props.image - The image object containing the src, alt, and title attributes.
 * @param {() => void} props.onClick - The click handler function to be called when the image is clicked.
 * @returns {JSX.Element} The rendered ImageWrapper component.
 */
const ImageWrapper = ({ image, onClick }: ImageWrapperProps): JSX.Element => {
  return (
    <StyledImageWrapper onClick={onClick}>
      <StyledImage src={image.srcMobile} alt={image.alt} title={image.title ? image.title : image.alt} />
      <StyledHandClick>
        <FaRegHandPointer />
      </StyledHandClick>
    </StyledImageWrapper>
  );
};

export default ImageWrapper;

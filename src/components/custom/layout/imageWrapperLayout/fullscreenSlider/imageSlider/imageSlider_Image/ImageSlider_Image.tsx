// Components
import {
  ImageSlider_ImageWrapper,
  StyledFullscreenSliderCaption,
  StyledFullscreenSliderImage,
} from "./styledImageSlider_Image";

// Helpers
import useScreenSize from "../../../../../../../utils/hooks/screenSize/useScreenSize";

// Type
import { ImageType } from "../../../imageType";

type FullscreenSliderImageProps = { image: ImageType; onClick: () => void };

/**
 * Displays a specific image and a description if it is available.
 *
 * @param {FullscreenSliderImageProps} props - The props object containing the following properties:
 * @param {ImageType} props.image - ImageType object contains image data.
 * @param {void} props.onClick - Function called when the image is clicked or clicked off of the full screen.
 * @returns
 */
const ImageSlider_Image = ({ image, onClick }: FullscreenSliderImageProps) => {
  const screenSize = useScreenSize();

  const getImageSrc = (image: ImageType): string => {
    return screenSize.deviceType === "tablet" || screenSize.deviceType === "mobile" ? image.src : image.srcFullSize;
  };

  // TODO: Responsive image and description - image size and description does fit -wip-

  return (
    <ImageSlider_ImageWrapper
      $isMobile={screenSize.deviceType === "mobile" || screenSize.deviceType === "tablet"}
      onClick={onClick}
    >
      <StyledFullscreenSliderImage
        src={getImageSrc(image)}
        alt={image.alt}
        title={image.title ? image.title : image.alt}
      />
      {image.description && <StyledFullscreenSliderCaption>{image.description}</StyledFullscreenSliderCaption>}
    </ImageSlider_ImageWrapper>
  );
};

export default ImageSlider_Image;

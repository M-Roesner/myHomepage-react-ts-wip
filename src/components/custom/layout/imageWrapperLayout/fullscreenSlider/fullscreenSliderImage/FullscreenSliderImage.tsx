import useScreenSize from "../../../../../../utils/hooks/screenSize/useScreenSize";
import { ImageType } from "../../imageType";
import {
  FullscreenSliderImageWrapper,
  StyledFullscreenSliderCaption,
  StyledFullscreenSliderImage,
} from "./styledFullscreenSliderImage";

type FullscreenSliderImageProps = { image: ImageType; onClick: () => void };

/**
 * Displays a specific image and a description if it is available.
 *
 * @param {FullscreenSliderImageProps} props - The props object containing the following properties:
 * @param {ImageType} props.image - ImageType object contains image data.
 * @param {void} props.onClick - Function called when the image is clicked or clicked off of the full screen.
 * @returns
 */
const FullscreenSliderImage = ({ image, onClick }: FullscreenSliderImageProps) => {
  const screenSize = useScreenSize();

  const getImageSrc = (image: ImageType): string => {
    return screenSize.deviceType === "tablet" || screenSize.deviceType === "mobile" ? image.src : image.srcFullSize;
  };

  // TODO: Responsive image and description - image size and description does fit -wip-

  return (
    <FullscreenSliderImageWrapper
      $isMobile={screenSize.deviceType === "mobile" || screenSize.deviceType === "tablet"}
      onClick={onClick}
    >
      <StyledFullscreenSliderImage
        src={getImageSrc(image)}
        alt={image.alt}
        title={image.title ? image.title : image.alt}
      />
      {image.description && <StyledFullscreenSliderCaption>{image.description}</StyledFullscreenSliderCaption>}
    </FullscreenSliderImageWrapper>
  );
};

export default FullscreenSliderImage;

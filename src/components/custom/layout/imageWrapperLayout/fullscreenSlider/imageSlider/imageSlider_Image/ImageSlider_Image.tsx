import { useEffect, useState } from "react";

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
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState("Text minimieren.");

  useEffect(() => {
    setTitle(isExpanded ? "Text minimieren." : "Text maximieren.");
  }, [isExpanded]);

  const getImageSrc = (image: ImageType): string => {
    return screenSize.deviceType === "tablet" || screenSize.deviceType === "mobile" ? image.src : image.srcFullSize;
  };

  const toggleExpanded = () => setIsExpanded((prev) => !prev);

  return (
    <ImageSlider_ImageWrapper $isMobile={screenSize.deviceType === "mobile" || screenSize.deviceType === "tablet"}>
      <StyledFullscreenSliderImage
        src={getImageSrc(image)}
        alt={image.alt}
        title={image.title ? image.title : image.alt}
        onClick={onClick}
      />
      {image.description && (
        <StyledFullscreenSliderCaption $isExpanded={isExpanded} onClick={toggleExpanded} title={title}>
          {image.description}
        </StyledFullscreenSliderCaption>
      )}
    </ImageSlider_ImageWrapper>
  );
};

export default ImageSlider_Image;

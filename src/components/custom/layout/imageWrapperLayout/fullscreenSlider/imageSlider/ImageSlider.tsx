// Components
import { StyledImageSlider } from "./styledImageSlider";
import ImageSlider_Image from "./imageSlider_Image/ImageSlider_Image";
import CloseButton from "../../../../button/closeButton/CloseButton";
import ImageSlider_Button from "./imageSlider_Button/imageSlider_Button";

// Helpers
import useScreenSize from "../../../../../../utils/hooks/screenSize/useScreenSize";

// Type
import { ImageType } from "../../imageType";
import ImageSlider_Counter from "./imageSlider_Counter/ImageSlider_Counter";

type ImageSliderProps = {
  image: ImageType;
  sliderLength: number;
  setImageId: (id: number) => void;
  onClose: () => void;
};

/**
 * Displays a specific image depending on the screen size and allows users to navigate through available images.
 * Also provides a close button to exit the image slider view.
 *
 * @param {ImageSliderProps} props - The props object containing the following properties:
 * @param {ImageType} props.image - The current image to be displayed.
 * @param {number} props.sliderLength - The total number of images available in the slider.
 * @param {(id: number) => void} props.setImageId - Function to update the current image ID.
 * @param {void} props.onClose - Function to close the image slider.
 * @returns
 */
const ImageSlider = ({ image, sliderLength, setImageId, onClose }: ImageSliderProps): JSX.Element => {
  const screenSize = useScreenSize();
  const imageId = image.id;

  const handleBack = () => {
    if (imageId > 1) {
      setImageId(imageId - 1);
    }
  };

  const handleForward = () => {
    if (imageId < sliderLength) {
      setImageId(imageId + 1);
    }
  };

  return (
    <StyledImageSlider $isMobile={screenSize.deviceType === "mobile" || screenSize.deviceType === "tablet"}>
      <ImageSlider_Image image={image} onClick={onClose} />
      {sliderLength !== 1 && (
        <>
          <ImageSlider_Counter currentImageIndex={imageId} totalImages={sliderLength}></ImageSlider_Counter>
          <CloseButton onClick={onClose} />
          <ImageSlider_Button isInverted isEnd={imageId === 1 ? true : false} onClick={handleBack} />
          <ImageSlider_Button isEnd={imageId === sliderLength ? true : false} onClick={handleForward} />
        </>
      )}
    </StyledImageSlider>
  );
};

export default ImageSlider;

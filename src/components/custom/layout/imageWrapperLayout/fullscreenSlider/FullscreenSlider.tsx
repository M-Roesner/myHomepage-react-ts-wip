import { useEffect, useState } from "react";

// Component
import { StyledFullscreenSlider } from "./styledFullscreenSlider";
import FullscreenSliderbutton from "./fullscreenSliderButton/FullscreenSliderButton";
import FullscreenSliderImage from "./fullscreenSliderImage/FullscreenSliderImage";

// Types and Helpers
import { ImageType } from "../imageType";

type FullscreenSliderProps = { initialImageId: number; onClick: () => void; imageList: ImageType[] };

/**
 * Displays a specific image in full screen depending on the screen size and has an onClick event.
 * Allows users to navigate through available images.
 *
 * @param {FullscreenSliderProps} props - The props object containing the following properties:
 * @param {number} props.initialImageId - The ID of the image to be displayed initially.
 * @param {void} props.onClick - Function called when the image is clicked or clicked off of the full screen.
 * @param {ImageType[]} props.imageList - An array of ImageType objects containing image data.
 * @returns
 */
const FullscreenSlider = ({ initialImageId, onClick: onClickImage, imageList }: FullscreenSliderProps): JSX.Element => {
  const [currentImageId, setCurrentImageId] = useState<number>(initialImageId);
  const [currentImage, setCurrentImage] = useState<ImageType>(imageList[0]);

  useEffect(() => {
    const image = imageList.find((image) => image.id === currentImageId);
    if (image) {
      setCurrentImage(image);
    }
  }, [currentImageId, imageList]);

  const handleBack = () => {
    if (currentImageId > 1) {
      setCurrentImageId((prev) => prev - 1);
    }
  };

  const handleForward = () => {
    if (currentImageId < imageList.length) {
      setCurrentImageId((prev) => prev + 1);
    }
  };

  /**
   * TODO: Create a new ImageFullscreen where you can click through a list of images.
   * [x] - Set the correct position of each element.
   * [x] - buttons left and right
   * - [] optional - A better style with animation for buttons.
   * [x] - Add onClick functionality to change the displayed images with the buttons.
   * [x] - chosen image first
   * [x] - decription text of the image
   * [] Image slider
   * - [] via points (depending on the number of images) - for mobile devices
   * - [] a small display preview of what comes next or before.
   * [] - add close button as an additional option
   */
  return (
    <StyledFullscreenSlider>
      <FullscreenSliderbutton isInverted isEnd={currentImageId === 1 ? true : false} onClick={handleBack} />
      <FullscreenSliderImage image={currentImage} onClick={onClickImage} />
      <FullscreenSliderbutton isEnd={currentImageId === imageList.length ? true : false} onClick={handleForward} />
    </StyledFullscreenSlider>
  );
};

export default FullscreenSlider;

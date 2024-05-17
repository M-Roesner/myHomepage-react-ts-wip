import { useEffect, useState } from "react";

// Component
import { FullscreenSliderWrapper } from "./styledFullscreenSlider";
import ImageSlider from "./imageSlider/ImageSlider";
import DotSlider from "./dotSlider/DotSlider";

// Types and Helpers
import { ImageType } from "../imageType";

type FullscreenSliderProps = { initialImageId: number; onClose: () => void; imageList: ImageType[] };

/**
 * Displays a specific image in full screen depending on the screen size and allows users to navigate through available images.
 * Includes a close function to exit full screen mode.
 *
 * @param {FullscreenSliderProps} props - The props object containing the following properties:
 * @param {number} props.initialImageId - The ID of the image to be displayed initially.
 * @param {void} props.onClose - Function to close the full screen mode.
 * @param {ImageType[]} props.imageList - An array of ImageType objects containing image data.
 * @returns
 */
const FullscreenSlider = ({ initialImageId, onClose, imageList }: FullscreenSliderProps): JSX.Element => {
  const [currentImageId, setCurrentImageId] = useState<number>(initialImageId);
  const initialImage = imageList.find((image) => image.id === currentImageId) || imageList[0];
  const [currentImage, setCurrentImage] = useState<ImageType>(initialImage);

  useEffect(() => {
    const image = imageList.find((image) => image.id === currentImageId);
    if (image) {
      setCurrentImage(image);
    }
  }, [currentImageId, imageList]);

  const handleSliderId = (id: number) => {
    setCurrentImageId(id);
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
   * [x] - add close button as an additional option
   */
  return (
    <FullscreenSliderWrapper>
      <ImageSlider image={currentImage} sliderLength={imageList.length} setImageId={handleSliderId} onClose={onClose} />
      <DotSlider imageList={imageList} currentId={currentImageId} onClick={handleSliderId}></DotSlider>
    </FullscreenSliderWrapper>
  );
};

export default FullscreenSlider;

// Components
import { DotSliderWrapper, StyledDot } from "./styledDotSlider";

// Type
import { ImageType } from "../../imageType";

type DotSliderProps = { imageList: ImageType[]; currentId: number; onClick: (id: number) => void };

/**
 * Renders a list of dots depending on the image list.
 *
 * @param {Object} props - The props object containing the following properties:
 * @param {ImageType[]} props.imageList - An array of ImageType objects containing image data.
 * @param {number} props.currentId - The current ID of the image list to set an active style.
 * @param {Function} props.onClick - Function called when a dot is clicked, receives the image ID as an argument.
 * @returns {JSX.Element} The JSX representation of the dot slider component.
 */
const DotSlider = ({ imageList, currentId, onClick }: DotSliderProps): JSX.Element => {
  return (
    <DotSliderWrapper>
      {imageList.map((image) => (
        <StyledDot
          className={`${image.id === currentId ? "active" : ""}`}
          key={image.id}
          onClick={() => onClick(image.id)}
        />
      ))}
    </DotSliderWrapper>
  );
};

export default DotSlider;

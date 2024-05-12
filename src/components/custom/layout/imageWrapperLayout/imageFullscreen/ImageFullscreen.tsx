// Component
import { ImageFullScreenWrapper, StyledImageFullScreen, StyledParagraphFullScreen } from "./styledImageFullScreen";
import ImageFullscreenbutton from "./imageFullscreenbutton/ImageFullscreenbutton";

// Types and Helpers
import { ImageType } from "../imageType";
import useScreenSize from "../../../../../utils/hooks/screenSize/useScreenSize";

type ImageFullscreenProps = { initialImageId: number; onClick: () => void; imageList: ImageType[] };

/**
 * Displays a specific image in full screen depending on the screen size and has an onClick event.
 *
 * @param {ImageFullscreenProps} props
 * @param {number} props.initialImageId - Id is a number that indicates which image should be displayed first-
 * @param {void} props.onClick - Called when the image is clicked or clicked off of the full screen.
 * @param {ImageType[]} props.imageList - Contains a array of .ImageType
 * @returns
 */
const ImageFullscreen = ({ initialImageId, onClick, imageList }: ImageFullscreenProps): JSX.Element => {
  const screenSize = useScreenSize();

  const intialImage = imageList.find((image) => image.id === initialImageId);
  if (!intialImage) return <></>; // TODO: Error handling

  const src =
    screenSize.deviceType === "tablet" || screenSize.deviceType === "mobile"
      ? intialImage.src
      : intialImage.srcFullSize;

  const ImagesAmount = imageList.length;
  console.log(`ImagesAmount ${ImagesAmount}`);

  /**
   * TODO: Create a new ImageFullscreen where you can click through a list of images.
   * [] - Set the correct position of each element.
   * [] - buttons left and right - better style with animation
   * [x] - chosen image first
   * [] - decription text of the image
   * [] Image slider
   * - via points (depending on the number of images)
   * - or
   * - a small display preview of what comes next or before.
   */
  return (
    <ImageFullScreenWrapper>
      <ImageFullscreenbutton isInverted />
      <StyledImageFullScreen
        src={src}
        alt={intialImage.alt}
        title={intialImage.title ? intialImage.title : intialImage.alt}
        onClick={onClick}
      />
      <ImageFullscreenbutton />
      <StyledParagraphFullScreen>
        {intialImage.description}
        Beschreibungstext für das Bild, dies kann auch ein sehr lange Text sein. Dann soll dieser weiter nach oben
        dargestellt werden und nicht nach unten!!!
      </StyledParagraphFullScreen>
    </ImageFullScreenWrapper>
  );
};

export default ImageFullscreen;

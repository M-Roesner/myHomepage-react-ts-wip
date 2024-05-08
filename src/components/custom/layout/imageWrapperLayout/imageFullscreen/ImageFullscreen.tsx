// Component
import { StyledImageFullscreen } from "./styledImageFullscreen";

// Types and Helpers
import { ImageType } from "../imageType";
import useScreenSize from "../../../../../utils/hooks/screenSize/useScreenSize";

type ImageFullscreenProps = { image: ImageType; onClick: () => void };

/**
 * Displays a specific image in full screen depending on the screen size and has an onClick event.
 *
 * @param {ImageFullscreenProps} props
 * @param {ImageType} props.image - Contains the needed information to display a image.
 * @param {ImageType} props.onClick - Called when the image is clicked or clicked off of the full screen.
 * @returns
 */
const ImageFullscreen = ({ image, onClick }: ImageFullscreenProps): JSX.Element => {
  const screenSize = useScreenSize();
  const src = screenSize.deviceType === "tablet" || screenSize.deviceType === "mobile" ? image.src : image.srcFullSize;

  return (
    <StyledImageFullscreen src={src} alt={image.alt} title={image.title ? image.title : image.alt} onClick={onClick} />
  );
};

export default ImageFullscreen;

// Helper
import useScreenSize from "../../../../../../../utils/hooks/screenSize/useScreenSize";

// Types
import { ImageType } from "../../../imageType";
import { DeviceType } from "../../../../../../../utils/hooks/screenSize/screenSizeType";

/**
 * Hook to get the appropriate image source based on the screen size.
 * @param {ImageType} image - The image object containing different source URLs for different screen sizes.
 * @returns The source URL of the image appropriate for the current screen size.
 */
const useImageSrc = (image: ImageType): string => {
  const screenSize = useScreenSize();

  /**
   * Function to get the image source URL based on the screen size.
   * @param screen - The current screen type (e.g., "desktop", "laptop", "tablet", "mobile").
   * @returns The source URL of the image appropriate for the given screen size.
   */
  const getImageSrc = (screen: DeviceType): string => {
    let src: string;

    switch (screen) {
      case "desktop":
        src = image.srcDesktop || image.srcLaptop || image.srcTablet || image.srcMobile;
        break;
      case "laptop":
        src = image.srcLaptop || image.srcTablet || image.srcMobile;
        break;
      case "tablet":
        src = image.srcTablet || image.srcMobile;
        break;
      default:
        src = image.srcMobile;
        break;
    }

    return src;
  };

  return getImageSrc(screenSize.deviceType);
};

export default useImageSrc;

import { useState } from "react";

// Components
import { StyledImageWrapperLayout } from "./styledImageWrapperLayout";
import { StyledImage } from "./styledImage";
import FullscreenSlider from "./fullscreenSlider/FullscreenSlider";

// Types
import { ImageType } from "./imageType";

/**
 * Reders a list of images or displays them in full screen mode.
 *
 * @param {ImageType} images - An array of ImageType objects containing image data.
 */
const ImageWrapperLayout = ({ images }: { images: ImageType[] }) => {
  const [imageId, setImageId] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleOpenFullscreen = (imageId: number) => {
    setImageId(imageId);
    setIsFullscreen(true);
  };
  const handleCloseFullscreen = () => setIsFullscreen(false);

  return (
    <>
      <StyledImageWrapperLayout>
        {images.map((image) => (
          <StyledImage
            key={image.id}
            src={image.srcMobile}
            alt={image.alt}
            title={image.title ? image.title : image.alt}
            onClick={() => handleOpenFullscreen(image.id)}
          />
        ))}
      </StyledImageWrapperLayout>
      {isFullscreen && imageId && (
        <FullscreenSlider initialImageId={imageId} onClose={handleCloseFullscreen} imageList={images} />
      )}
    </>
  );
};

export default ImageWrapperLayout;

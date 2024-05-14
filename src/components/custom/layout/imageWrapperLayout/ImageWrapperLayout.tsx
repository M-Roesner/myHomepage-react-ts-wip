import { useState } from "react";

// Components
import { StyledImageWrapperLayout } from "./styledImageWrapperLayout";
import { StyledImage } from "./styledImage";
import FullscreenSlider from "./fullscreenSlider/FullscreenSlider";

// Types
import { ImageType } from "./imageType";

/**
 * Renders a layout structure for a list of images.
 *
 * @param images - An array of image objects containing the source (`src`), alt text (`alt`).
 */
const ImageWrapperLayout = ({ images }: { images: ImageType[] }) => {
  const [imageId, setImageId] = useState<number | null>(null);

  const handleOpenFullscreen = (imageId: number) => setImageId(imageId);
  const handleCloseFullscreen = () => setImageId(null);

  return (
    <>
      <StyledImageWrapperLayout>
        {images.map((image) => (
          <StyledImage
            key={image.id}
            src={image.src}
            alt={image.alt}
            title={image.title ? image.title : image.alt}
            onClick={() => handleOpenFullscreen(image.id)}
          />
        ))}
      </StyledImageWrapperLayout>
      {imageId && <FullscreenSlider initialImageId={imageId} onClick={handleCloseFullscreen} imageList={images} />}
    </>
  );
};

export default ImageWrapperLayout;

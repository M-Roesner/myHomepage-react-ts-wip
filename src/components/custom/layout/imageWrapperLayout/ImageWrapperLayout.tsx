import { useState } from "react";

// Components
import { StyledImageWrapperLayout } from "./styledImageWrapperLayout";
import { StyledImage } from "./styledImage";
import ImageFullscreen from "./imageFullscreen/ImageFullscreen";

// Types
import { ImageType } from "./imageType";

/**
 * Renders a layout structure for a list of images.
 *
 * @param images - An array of image objects containing the source (`src`), alt text (`alt`).
 */
const ImageWrapperLayout = ({ images }: { images: ImageType[] }) => {
  const [fullscreenImage, setFullscreenImage] = useState<ImageType | null>(null);

  const handleOpenFullscreen = (images: ImageType) => setFullscreenImage(images);
  const handleCloseFullscreen = () => setFullscreenImage(null);

  return (
    <>
      <StyledImageWrapperLayout>
        {images.map((image, index) => (
          <StyledImage
            key={index}
            src={image.src}
            alt={image.alt}
            title={image.title ? image.title : image.alt}
            onClick={() => handleOpenFullscreen(image)}
          />
        ))}
      </StyledImageWrapperLayout>
      {fullscreenImage && <ImageFullscreen image={fullscreenImage} onClick={handleCloseFullscreen} />}
    </>
  );
};

export default ImageWrapperLayout;

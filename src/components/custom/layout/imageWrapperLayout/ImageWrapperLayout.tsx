import { useState } from "react";

// Components
import { StyledImageWrapperLayout } from "./styledImageWrapperLayout";
import ImageWrapper from "./imageWrapper/ImageWrapper";
import FullscreenSlider from "./fullscreenSlider/FullscreenSlider";
import CustomListLayout from "../customListLayout/CustomListLayout";

// Type
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

  const renderProgressItem = (image: ImageType, index: number) => (
    <ImageWrapper key={index} image={image} onClick={() => handleOpenFullscreen(image.id)} />
  );

  return (
    <>
      <StyledImageWrapperLayout $maxColumns={images.length}>
        <CustomListLayout
          list={images}
          numerusText={{ singular: "weiteres Bild anzeigen", plural: "weitere Bilder anzeigen" }}
          renderItem={renderProgressItem}
          maxVisibleItems={3}
        />
      </StyledImageWrapperLayout>
      {isFullscreen && imageId && (
        <FullscreenSlider initialImageId={imageId} onClose={handleCloseFullscreen} imageList={images} />
      )}
    </>
  );
};

export default ImageWrapperLayout;

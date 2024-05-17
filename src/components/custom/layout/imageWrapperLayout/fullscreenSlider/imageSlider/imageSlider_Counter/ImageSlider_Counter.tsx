import { StyledImageSlider_Counter } from "./styledImageSlider_Counter";

type ImageSlider_CounterProps = {
  currentImageIndex: number;
  totalImages: number;
};

const ImageSlider_Counter = ({ currentImageIndex, totalImages }: ImageSlider_CounterProps) => {
  return <StyledImageSlider_Counter>{`${currentImageIndex}/${totalImages}`}</StyledImageSlider_Counter>;
};

export default ImageSlider_Counter;

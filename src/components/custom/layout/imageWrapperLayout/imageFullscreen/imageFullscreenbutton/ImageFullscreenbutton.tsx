import { StyledImageFullscreenButton } from "./styledImageFullscreenbutton";

const ImageFullscreenbutton = ({ isInverted }: { isInverted?: boolean }) => {
  return (
    <StyledImageFullscreenButton $isInverted={isInverted}>
      <span></span>
      <span></span>
    </StyledImageFullscreenButton>
  );
};

export default ImageFullscreenbutton;

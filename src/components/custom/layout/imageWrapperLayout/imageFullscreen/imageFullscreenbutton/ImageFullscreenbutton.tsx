import { StyledImageFullscreenButton } from "./styledImageFullscreenbutton";

const ImageFullscreenbutton = ({ isInverted = false, isEnd = false }: { isInverted?: boolean; isEnd?: boolean }) => {
  return (
    <StyledImageFullscreenButton $isInverted={isInverted} $isEnd={isEnd} disabled={isEnd} onClick={() => alert("test")}>
      <span></span>
      <span></span>
      {isEnd && <span></span>}
    </StyledImageFullscreenButton>
  );
};

export default ImageFullscreenbutton;

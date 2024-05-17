import styled from "styled-components";

export const FullscreenSliderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  width: 100%;
  height: 100%;

  background-color: ${(props) => props.theme.colors.fullScreen.backgroundColor};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledFullscreenSlider = styled.div.attrs<{
  $isMobile: boolean;
}>(() => ({}))`
  margin-inline: ${(props) => (props.$isMobile ? "5px" : "10%")};
  object-fit: contain;
  position: relative;
`;

import styled from "styled-components";

export const ImageSlider_ImageWrapper = styled.figure.attrs<{
  $isMobile: boolean;
}>(() => ({}))`
  width: 100%;

  position: relative;
  text-align: center;

  cursor: pointer;
`;

export const StyledFullscreenSliderImage = styled.img`
  width: 100%;
  max-height: 80vh;
`;

export const StyledFullscreenSliderCaption = styled.figcaption`
  position: absolute;
  bottom: 5%;
  left: 10%;

  padding: ${(props) => props.theme.sizes.common.padding};
  width: 80%;
  text-align: center;

  font-size: inherit;
  line-height: normal;

  background-color: #5893c48c;
`;

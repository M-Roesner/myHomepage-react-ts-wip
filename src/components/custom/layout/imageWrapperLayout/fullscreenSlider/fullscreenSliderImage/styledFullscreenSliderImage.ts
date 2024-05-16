import styled from "styled-components";

export const FullscreenSliderImageWrapper = styled.figure.attrs<{
  $isMobile: boolean;
}>(() => ({}))`
  width: ${(props) => (props.$isMobile ? "90%" : "80%")};
  width: 100%;
  /* height: 100%; */

  position: relative;
  text-align: center;

  /* display: flex;
  justify-content: center;
  align-items: center; */

  cursor: pointer;
`;

export const StyledFullscreenSliderImage = styled.img`
  width: 100%;
`;

export const StyledFullscreenSliderCaption = styled.figcaption`
  position: absolute;
  bottom: 5%;
  left: 20%;

  padding: ${(props) => props.theme.sizes.common.padding};
  width: 60%;
  text-align: center;

  background-color: #5893c48c;
`;

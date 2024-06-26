import styled from "styled-components";

export const ImageSlider_ImageWrapper = styled.figure.attrs<{
  $isMobile?: boolean; // Wird aktuell nicht verwendet!
}>(() => ({}))`
  // TODO: Size: Größe des Bildes anpassen, wenn es unterschiedlich breite Bilder in der Liste gibt!
  // Hoch- und Querformat
  width: 100%;

  position: relative;
  text-align: center;

  cursor: pointer;
`;

export const StyledFullscreenSliderImage = styled.img`
  width: 100%;
  max-height: 80vh;
`;

export const StyledFullscreenSliderCaption = styled.figcaption.attrs<{
  $isExpanded: boolean;
}>(() => ({}))`
  ${(props) =>
    props.$isExpanded
      ? { cursor: "zoom-out" }
      : { overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", cursor: "zoom-in" }}

  position: absolute;
  bottom: 5%;
  left: 10%;

  padding: ${(props) => props.theme.sizes.common.padding};
  width: 80%;
  text-align: center;

  font-size: inherit;
  line-height: normal;

  background-color: ${(props) => props.theme.colors.common.secondary.transparentStrong};
`;

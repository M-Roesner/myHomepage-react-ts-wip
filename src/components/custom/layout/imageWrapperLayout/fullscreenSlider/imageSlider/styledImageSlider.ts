import styled, { css } from "styled-components";

export const StyledImageSlider = styled.div.attrs<{
  $isMobile: boolean;
}>(() => ({}))`
  margin-inline: ${(props) => (props.$isMobile ? "5px" : "10%")};
  object-fit: contain;
  position: relative;
  ${(props) =>
    props.$isMobile
      ? css`
          font-size: ${(props) => props.theme.sizes.common.fontSizeMobile};
        `
      : css`
          font-size: "2rem";
        `};
`;

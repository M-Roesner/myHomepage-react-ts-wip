import styled from "styled-components";

export const StyledImageSlider = styled.div.attrs<{
  $isMobile: boolean;
}>(() => ({}))`
  margin-inline: ${(props) => (props.$isMobile ? "5px" : "10%")};
  object-fit: contain;
  position: relative;
`;

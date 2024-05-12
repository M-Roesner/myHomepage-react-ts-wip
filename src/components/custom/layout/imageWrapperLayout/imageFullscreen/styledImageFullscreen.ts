import styled from "styled-components";

export const ImageFullScreenWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 5%;
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
`;

export const StyledImageFullScreen = styled.img`
  cursor: pointer;
`;

export const StyledParagraphFullScreen = styled.p`
  width: 60%;
  text-align: center;
`;

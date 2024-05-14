import styled from "styled-components";

export const ImageFullScreenWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImageFullScreen = styled.img`
  cursor: pointer;
  width: 80%;
`;

export const StyledParagraphFullScreen = styled.p`
  position: absolute;
  bottom: 20%;
  width: 60%;
  text-align: center;
  background-color: #123456;
`;

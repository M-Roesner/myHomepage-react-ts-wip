import styled, { keyframes } from "styled-components";

export const StyledCloseCountdownBarContainer = styled.div`
  height: 4px;
`;

const progressAnimation = keyframes`
  0% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
`;

interface IStyledCloseCountdownBar {
  $animationDuration: number;
}

export const StyledCloseCountdownBar = styled.div<IStyledCloseCountdownBar>`
  height: 100%;
  background-color: ${(props) => props.theme.colors.common.action.default};
  animation: ${progressAnimation} linear forwards;
  animation-duration: ${(props) => props.$animationDuration}ms;
`;

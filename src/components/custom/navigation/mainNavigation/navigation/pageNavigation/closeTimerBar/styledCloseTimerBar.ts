import styled, { keyframes } from "styled-components";

export const StyledCloseTimerBarContainer = styled.div`
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

interface IStyledCloseTimerBar {
  $animationDuration: number;
}

export const StyledCloseTimerBar = styled.div<IStyledCloseTimerBar>`
  height: 100%;
  background-color: ${(props) => props.theme.colors.common.action.default};
  animation: ${progressAnimation} linear forwards;
  animation-duration: ${(props) => props.$animationDuration}ms;
`;

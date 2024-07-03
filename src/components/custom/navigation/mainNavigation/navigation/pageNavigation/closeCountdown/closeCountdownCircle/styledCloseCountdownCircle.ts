import { keyframes, styled } from "styled-components";

const animateCircle = (circumference: number) => keyframes`
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: ${circumference};
  }
`;

export const StyledCloseCountdownCircleContainer = styled.svg`
  height: inherit;
  width: inherit;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
`;

interface IStyledCloseCountdownCircle {
  duration: number;
  circumference: number;
}

export const StyledCloseCountdownCircle = styled.circle<IStyledCloseCountdownCircle>`
  fill: none;
  stroke: ${(props) => props.theme.colors.common.action.default};
  stroke-width: 5;
  stroke-dasharray: ${(props) => props.circumference};
  animation: ${(props) => animateCircle(props.circumference)} ${(props) => props.duration}ms linear forwards;
`;

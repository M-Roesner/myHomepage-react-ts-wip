import styled from "styled-components";

export const CircleContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

export const SVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(-90deg);
`;

export const CircleBackground = styled.circle`
  fill: none;
  stroke: #f3f3f3;
  stroke-width: 10;
`;

interface ICircleProgress {
  $percentage: number;
}
export const CircleProgress = styled.circle<ICircleProgress>`
  fill: none;
  stroke: #4caf50;
  stroke-width: 10;
  stroke-dasharray: 251; /* Circumference of the circle */
  stroke-dashoffset: ${(props) => 251 - (251 * props.$percentage) / 100};
  transition: stroke-dashoffset 1s;
`;

export const Percentage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.2em;
`;

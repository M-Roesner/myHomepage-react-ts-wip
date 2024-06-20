import styled, { css } from "styled-components";

const svgDefault = styled.svg`
  cursor: pointer;

  border: 1px solid ${(props) => props.theme.colors.common.action.border};
  border-radius: 10px;

  transition: background-color 0.5s ease-in;

  background-color: ${(props) => props.theme.colors.common.action.transparent};

  color: ${(props) => props.theme.colors.common.text.primary};
  &:hover {
    background-color: ${(props) => props.theme.colors.common.action.hover};
    color: ${(props) => props.theme.colors.common.text.lightOnDark};
  }
`;

export const StyledSliderSvg = styled(svgDefault).attrs<{
  $isInverted?: boolean;
  $isEnd?: boolean;
  $isMobile?: boolean;
}>(() => ({}))`
  --width: 50px;
  --normalPositionX: calc((var(--width) / 2) * -1);
  --positionX: ${(props) => (props.$isMobile ? 0 : "var(--normalPositionX)")};
  --height: 60px;
  --positionY: calc(50% - (var(--height) / 2));

  width: var(--width);
  height: var(--height);

  position: absolute;
  top: var(--positionY);

  ${(props) =>
    props.$isInverted
      ? css`
          transform: scaleX(-1);
          left: var(--positionX);
        `
      : css`
          right: var(--positionX);
        `}

  ${(props) =>
    props.$isEnd &&
    css`
      background-color: ${(props) => props.theme.colors.common.action.activeTransparent};
      cursor: default;
      &:hover {
        background-color: ${(props) => props.theme.colors.common.action.activeHover};
      }
    `}

    /* Handle mobile */
    ${(props) =>
    props.$isMobile &&
    css`
      border-radius: 10px 0 0 10px;
    `}

  line {
    stroke: ${(props) => props.theme.colors.common.text.primary};
    stroke-linecap: round;
    stroke-width: 5;
  }

  #lineTop {
    position: absolute;
  }
  #linebottom {
    position: absolute;
    right: 0;
  }

  #lineEnd {
    ${(props) =>
      !props.$isEnd &&
      css`
        display: none;
      `}
  }
`;

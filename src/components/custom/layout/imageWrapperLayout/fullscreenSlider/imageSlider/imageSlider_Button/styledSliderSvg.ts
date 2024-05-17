import styled, { css } from "styled-components";

const svgDefault = styled.svg`
  cursor: pointer;

  border: 1px solid ${(props) => props.theme.colors.common.borderColor};
  border-radius: 10px;

  background-color: ${(props) => props.theme.colors.common.backgroundColorAccent_Transparent};

  color: ${(props) => props.theme.colors.common.textColorMain};
  &:hover {
    background-color: ${(props) => props.theme.colors.common.backgroundColor_Hover};
    color: ${(props) => props.theme.colors.common.textColorThird};
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
      background-color: ${(props) => props.theme.colors.common.backgroundColorHighlight_Transparent};
      cursor: default;
      transition: background-color 0.5s ease-in;
      &:hover {
        background-color: ${(props) => props.theme.colors.common.backgroundColorHighlight_Hover};
      }
    `}

    /* Handle mobile */
    ${(props) =>
    props.$isMobile &&
    css`
      border-radius: 10px 0 0 10px;
    `}

  line {
    stroke: ${(props) => props.theme.colors.common.textColorMain};
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

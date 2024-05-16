import styled, { css } from "styled-components";
import { StyledNormalButton } from "../../../../button/normalButton/styledNormalButton";

export const StyledFullscreenSliderButton = styled(StyledNormalButton).attrs<{
  $isInverted?: boolean;
  $isEnd?: boolean;
  $isMobile?: boolean;
}>(() => ({}))`
  /* https://www.webdesign-journal.de/css3-animationen-erstellen/ */
  --width: 50px;
  --normalPositionX: calc((var(--width) / 2) * -1);
  --positionX: ${(props) => (props.$isMobile ? 0 : "var(--normalPositionX)")};
  --height: 60px;
  --positionY: calc(50% - (var(--height) / 2));

  /* General values for all child elements. */
  --span-deg: 54deg;
  --padding: 10px;

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
      background-color: ${(props) => props.theme.colors.common.backgroundColorHighlight};
      cursor: default;
      transition: background-color 0.5s ease-in;
      &:hover {
        background-color: ${(props) => props.theme.colors.common.backgroundColorHighlight_Hover};
      }
    `}

  // self designed button content
  width: var(--width);
  height: var(--height);

  :nth-child(n) {
    position: absolute;
    width: 5px;
    height: 32px;
    background-color: ${(props) => props.theme.colors.common.textColorMain};
  }

  :nth-child(1) {
    top: calc(3px + var(--padding));
    left: calc(var(--padding));
    transform-origin: top left;
    transform: rotate(calc(var(--span-deg) * -1));
    border-radius: 0 0 2px 2px;
  }

  :nth-child(2) {
    bottom: calc(3px + var(--padding));
    left: calc(var(--padding));
    transform-origin: bottom left;
    transform: rotate(var(--span-deg));
    border-radius: 2px 2px 0 0;
  }

  :nth-child(3) {
    top: calc(var(--padding));
    right: calc(var(--padding));
    height: calc(var(--height) - (var(--padding) * 2));
  }
`;

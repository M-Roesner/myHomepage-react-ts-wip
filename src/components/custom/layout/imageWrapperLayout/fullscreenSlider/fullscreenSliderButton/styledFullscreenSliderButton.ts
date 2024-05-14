import styled, { css } from "styled-components";
import { StyledNormalButton } from "../../../../button/normalButton/styledNormalButton";

export const StyledFullscreenSliderButton = styled(StyledNormalButton).attrs<{
  $isInverted?: boolean;
  $isEnd?: boolean;
}>(() => ({}))`
  /* https://www.webdesign-journal.de/css3-animationen-erstellen/ */
  --width: 50px;
  --width-half: calc(var(--width) / 2);
  ${(props) =>
    props.$isInverted
      ? css`
          transform: scaleX(-1);
          left: var(--width-half);
        `
      : css`
          right: var(--width-half);
        `}
  ${(props) =>
    props.$isEnd &&
    css`
      &:hover {
        background-color: red;
        cursor: default;
      }
    `}
    


  position: relative;
  width: var(--width);
  height: 60px;

  /* General values for all child elements. */
  --span-deg: 54deg;
  --padding: 10px;
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
    height: calc(60px - (var(--padding) * 2));
  }
`;

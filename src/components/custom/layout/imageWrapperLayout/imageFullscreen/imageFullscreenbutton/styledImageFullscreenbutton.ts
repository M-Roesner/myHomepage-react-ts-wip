import styled, { css } from "styled-components";
import { StyledNormalButton } from "../../../../button/normalButton/styledNormalButton";

export const StyledImageFullscreenButton = styled(StyledNormalButton).attrs<{ $isInverted?: boolean }>(() => ({}))`
  ${(props) =>
    props.$isInverted &&
    css`
      transform: scaleX(-1);
    `}

  position: relative;
  width: 50px;
  height: 60px;

  /* General values for all child elements. */
  --span-deg: 60deg;
  :nth-child(n) {
    position: absolute;
    width: 5px;
    height: 35px;
    background-color: ${(props) => props.theme.colors.common.textColorMain};
  }

  :nth-child(1) {
    top: 7%;
    left: 50%;
    transform: rotate(calc(var(--span-deg) * -1));
  }

  :nth-child(2) {
    bottom: 7%;
    left: 50%;
    transform: rotate(var(--span-deg));
  }
`;

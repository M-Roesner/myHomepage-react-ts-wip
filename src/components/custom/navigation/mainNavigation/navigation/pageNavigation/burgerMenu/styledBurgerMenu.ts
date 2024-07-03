import styled from "styled-components";

/**
 * A styled SVG wrapper component for the burger menu icon and the closing bar.
 *
 * The burger menu is hidden by default and only displayed on screens
 * with a maximum width of 700px.
 */
export const StyledBurgerMenuWrapper = styled.div`
  width: 64px;
  height: 64px;

  position: relative;

  display: none;

  @media (max-width: 700px) {
    display: block; // Display the burger menu icon on small screens
  }
`;

/**
 * A styled SVG component for the burger menu icon.
 */
export const StyledBurgerMenu = styled.svg`
  width: inherit;
  height: inherit;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  cursor: pointer;

  &:hover line {
    stroke: ${(props) => props.theme.colors.common.action.active};
  }
`;

/**
 * A styled line component for the lines in the burger menu icon.
 */
export const StyledBurgerMenuLine = styled.line`
  fill: none;
  stroke: ${(props) => props.theme.colors.common.text.primary};
  stroke-miterlimit: 10;
  stroke-width: 4;
`;

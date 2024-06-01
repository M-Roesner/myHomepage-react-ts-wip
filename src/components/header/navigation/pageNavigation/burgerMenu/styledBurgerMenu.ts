import styled from "styled-components";

/**
 * A styled SVG component for the burger menu icon.
 *
 * The burger menu is hidden by default and only displayed on screens
 * with a maximum width of 700px.
 */
export const BurgerMenuSvg = styled.svg`
  cursor: pointer;
  width: 100%;
  height: 100%;

  display: none;

  @media (max-width: 700px) {
    display: block; // Display the burger menu icon on small screens
  }
`;

/**
 * A styled line component for the lines in the burger menu icon.
 *
 * The line styles are consistent with the theme's border color.
 */
export const StyledBurgerMenuSvgItem = styled.line`
  fill: none;
  stroke: ${(props) => props.theme.colors.common.borderColor}; // Use the theme's border color for the stroke
  stroke-miterlimit: 10;
  stroke-width: 4;
`;

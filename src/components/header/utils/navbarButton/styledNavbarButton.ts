import { styled } from "styled-components";

// Styled-Component
import { NavLink } from "react-router-dom";

export const styledNavbarButton_Default = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.common.textColorMain};
  display: flex;
  align-items: center;
  text-align: center;
`;

/**
 * Navbar button component without content line break.
 *
 * **This styled component should not be directly used and requires an alias when imported.**
 */
export const styledNavbarButton = styled(styledNavbarButton_Default)`
  --min-padding: 10px;
  --max-padding: 20px;

  white-space: nowrap;
  width: min-content;
  height: 100%;
  padding: 10px clamp(var(--min-padding), 2vw, var(--max-padding));

  position: relative;
  overflow: hidden;
  /* transition: background-color 5ms ease; */

  // Ensures that the content of the button is always displayed in front of the button's background.
  // Set a higher z-index to lift the content above the background.
  :nth-child(1) {
    z-index: 1;
  }

  /* Displays a background color with the size of the content below the button if it is not active */
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.common.backgroundColor};
    transition: top 2s ease, height 2s ease; // Animates the background color rising effect
  }

  &.active {
    /* Brings the background color up to the visible area */
    &::after {
      top: 0;
      height: 100%;
    }

    /* Special hover background effect */
    &:hover {
      background-color: ${(props) => props.theme.colors.common.backgroundColor_Hover};

      /* Different background color to make the effect more visible */
      &::after {
        background-color: ${(props) => props.theme.colors.navBar.backgroundColor_ActiveHover};
      }
    }
  }

  // Normal hover background effect
  &:hover {
    background-color: ${(props) => props.theme.colors.common.backgroundColor_Hover};
  }
`;

/**
 * Navbar button component with content line break.
 *
 * **This styled component should not be directly used and requires an alias when imported.**
 */
export const styledNavbarButtonWrap = styled(styledNavbarButton)`
  white-space: normal; // "normal" - makes an automatic line break
`;

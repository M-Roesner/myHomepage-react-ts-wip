import { css, styled } from "styled-components";

// Styled-Component
import { NavLink } from "react-router-dom";

export const styledNavbarButton_Default = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.common.text.primary};
  display: flex;
  align-items: center;
  text-align: center;
`;

/**
 * Navbar button component without content line break.
 *
 * **This styled component should not be directly used and requires an alias when imported.**
 *
 * @param {boolean} $reverse - Specifies whether the animation should be reversed.
 * E.g. the imprint is at the bottom of the page, so the animation should be reversed.
 */
export const styledNavbarButton = styled(styledNavbarButton_Default).attrs<{
  $reverse: boolean;
}>(() => ({}))`
  white-space: nowrap; // "nowrap" - makes no line break
  width: min-content;
  height: 100%;
  padding: ${(props) => props.theme.sizes.common.paddingResponsive};

  position: relative;
  overflow: hidden;

  // Ensures that the content of the button is always displayed in front of the button's background.
  // Set a higher z-index to lift the content above the background.
  :nth-child(1) {
    z-index: 1;
  }

  ${(props) =>
    props.$reverse
      ? css`
          border-radius: 10px 10px 0 0;
        `
      : css`
          border-radius: 0 0 10px 10px;
        `};

  /* Moves the position of the background outside the visible area at the bottom or top edge, depending on the $reverse property. */
  &::after {
    content: "";
    position: absolute;
    ${(props) =>
      props.$reverse
        ? css`
            bottom: 100%;
          `
        : css`
            top: 100%;
          `};
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.common.action.active};
    transition: top 2s ease, bottom 2s ease; // Animates the background effect as the pseudo-element moves up or down
  }

  &.active {
    :nth-child(1) {
      font-weight: 600;
    }
    /* Moves the position of the background into the visible area, depending on the $reverse property. */
    &::after {
      ${(props) =>
        props.$reverse
          ? css`
              bottom: 0;
            `
          : css`
              top: 0;
            `};
    }

    /* Special hover background effect */
    &:hover {
      /* Different background color to make the effect more visible */
      &::after {
        background-color: ${(props) => props.theme.colors.common.action.activeHover};
      }
    }
  }

  @media (max-width: 700px) {
    &.navbar {
      width: 100%;
      justify-content: center;
      border-radius: 0;
    }
  }

  // Normal hover background effect
  &:hover {
    background-color: ${(props) => props.theme.colors.common.action.default};
  }
`;

/**
 * Navbar button component with content line break.
 *
 * **This styled component should not be directly used and requires an alias when imported.**
 *
 * @param {boolean} $reverse - Specifies whether the animation should be reversed.
 */
export const styledNavbarButtonWrap = styled(styledNavbarButton)`
  white-space: normal; // "normal" - makes an automatic line break
`;

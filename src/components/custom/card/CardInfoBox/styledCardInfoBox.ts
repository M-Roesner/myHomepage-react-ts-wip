import styled, { css } from "styled-components";
import { NavLinkButtonWrapperType, navLinkButtonWrapper_Default } from "../../button/navLinkButton/styledNavLinkButton";

type StyledInfoCard_NavLinkProps = NavLinkButtonWrapperType & {
  $bgImage?: string;
};

/**
 * Styled component for wrapping NavLink buttons, inheriting properties and styles from the default NavLink button wrapper.
 *
 * Applies default styling for NavLink button wrapper and allows customization of the display property through props.
 *
 * @param $display - Optional prop to set the display style of the NavLink button wrapper. Default is set to “inline”.
 * Example usage: `display: ${(props) => props.$display || "inline"};`
 */
export const StyledInfoCard_NavLink = styled(navLinkButtonWrapper_Default)<StyledInfoCard_NavLinkProps>`
  position: relative;
  display: ${(props) => props.$display || "inline"};
  padding: ${(props) => props.theme.sizes.common.paddingResponsive};
  text-align: center;
  border: solid 1px ${(props) => props.theme.colors.common.action.border};
  border-radius: 5px;
  z-index: 1;

  background-color: ${(props) => props.theme.colors.common.secondary.default};

  color: ${(props) => props.theme.colors.common.text.lightOnDark};

  :first-child {
    margin-top: 0;
  }

  ${(props) =>
    props.$bgImage &&
    css`
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${props.$bgImage});
        background-size: cover;
        background-position: center;
        opacity: 0.2;
        filter: blur(1px);
        z-index: 0;
      }
    `}
`;

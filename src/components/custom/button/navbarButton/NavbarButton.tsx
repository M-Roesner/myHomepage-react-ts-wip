// Styled-Component
import { StyledNavbarButton, StyledNavbarButtonWrap } from "./styledNavbarButton";

type NavbarButtonProps = {
  to: string;
  children: React.ReactNode;
  wrap?: boolean;
  style?: React.CSSProperties;
};

/**
 * Functional component for routing a styled navigation link.
 *
 * @component
 * @param {Object} props - The props object containing the following properties:
 * @param {string} props.to - The path to navigate to when the link is clicked.
 * @param {boolean} props.wrap - Optional: Specifies whether the link should wrap its content.
 * @param {React.CSSProperties} props.style - Optional: To add additional styles.
 * @param {ReactNode} props.children - The content of the link.
 */
const NavbarButton = ({ to, children, wrap, style }: NavbarButtonProps) => {
  return (
    <>
      {wrap ? (
        <StyledNavbarButtonWrap to={to} style={style}>
          {children}
        </StyledNavbarButtonWrap>
      ) : (
        <StyledNavbarButton to={to} style={style}>
          {children}
        </StyledNavbarButton>
      )}
    </>
  );
};

export default NavbarButton;

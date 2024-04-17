// Styled-Component
import { StyledNavLink } from "./styledNavLink";

type NavLinkProps = {
  to: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

/**
 * Functional component for routing a styled navigation link.
 *
 * @component
 * @param {Object} props - The props object containing the following properties:
 * @param {string} props.to - The path to navigate to when the link is clicked.
 * @param {ReactNode} props.children - The content of the link.
 */
const NavLink = ({ to, children, style }: NavLinkProps) => {
  return (
    <StyledNavLink to={to} style={style}>
      {children}
    </StyledNavLink>
  );
};

export default NavLink;

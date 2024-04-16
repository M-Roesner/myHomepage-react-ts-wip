// Styled-Component
import { StyledNavLink } from "./styledNavLink";

type NavLinkProps = {
  to: string;
  children: React.ReactNode;
};

/**
 * Functional component for routing a styled navigation link.
 *
 * @component
 * @param {string} to - The path to navigate to when the link is clicked.
 * @param {ReactNode} children - The content of the link.
 */
const NavLink = ({ to, children }: NavLinkProps) => {
  return (
    <>
      <StyledNavLink to={to}>{children}</StyledNavLink>
    </>
  );
};

export default NavLink;

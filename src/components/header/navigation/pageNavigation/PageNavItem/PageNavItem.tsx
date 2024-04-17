// Components
import NavLink from "../../../../custom/button/navLink/NavLink";

// Styled-Component
import { StyledNavList } from "./styledNavItem";

type NavItemProps = {
  to: string;
  children: React.ReactNode;
};

/**
 * Functional component for routing a styled list item and a link.
 *
 * @param {string} to - The path to navigate to when the link is clicked.
 * @param {ReactNode} children - The content of the navigation item.
 * @returns
 */
const NavItem = ({ to, children }: NavItemProps) => {
  return (
    <StyledNavList>
      <NavLink to={to}>{children}</NavLink>
    </StyledNavList>
  );
};

export default NavItem;

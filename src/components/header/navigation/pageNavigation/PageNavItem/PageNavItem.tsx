// Components
import NavLink from "../../../../custom/button/navLink/NavLink";

// Styled-Component
import { StyledNavList } from "./styledNavItem";

type NavItemProps = {
  to: string;
  autoWrap?: boolean;
  children: React.ReactNode;
};

/**
 * Functional component for routing a styled list item and a link.
 *
 * @param {Object} props - The props object containing the following properties:
 * @param {string} props.to - The path to navigate to when the link is clicked.
 * @param {boolean} props.autoWrap - Optional: Enables automatic line break for content if true; otherwise, disables it.
 * @param {ReactNode} props.children - Optional: The content of the navigation item.
 * @returns
 */
const NavItem = ({ to, autoWrap, children }: NavItemProps) => {
  return (
    <StyledNavList>
      <NavLink to={to} autoWrap={autoWrap}>
        {children}
      </NavLink>
    </StyledNavList>
  );
};

export default NavItem;

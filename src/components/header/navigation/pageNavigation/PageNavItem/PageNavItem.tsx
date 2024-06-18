// Components
import NavbarButton from "../../../utils/navbarButton/NavbarButton";
import { StyledNavListItem } from "../styledPageNavWrapper";

type NavListItemProps = {
  to: string;
  children: React.ReactNode;
};

/**
 * Functional component for routing a styled list item and a link.
 *
 * @param {Object} props - The props object containing the following properties:
 * @param {string} props.to - The path to navigate to when the link is clicked.
 * @param {ReactNode} props.children - Optional: The content of the navigation item.
 * @returns
 */
const NavListItem = ({ to, children }: NavListItemProps) => {
  return (
    <StyledNavListItem>
      <NavbarButton to={to} className="navbar">
        {children}
      </NavbarButton>
    </StyledNavListItem>
  );
};

export default NavListItem;

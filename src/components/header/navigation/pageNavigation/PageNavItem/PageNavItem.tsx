// Components
import NavbarButton from "../../../../custom/button/navbarButton/NavbarButton";
import { StyledNavList } from "../styledPageNavWrapper";

type NavListItemProps = {
  to: string;
  wrap?: boolean;
  children: React.ReactNode;
};

/**
 * Functional component for routing a styled list item and a link.
 *
 * @param {Object} props - The props object containing the following properties:
 * @param {string} props.to - The path to navigate to when the link is clicked.
 * @param {boolean} props.wrap - Optional: Specifies whether the link should wrap its content.
 * @param {ReactNode} props.children - Optional: The content of the navigation item.
 * @returns
 */
const NavListItem = ({ to, wrap, children }: NavListItemProps) => {
  return (
    <StyledNavList>
      <NavbarButton to={to} wrap={wrap}>
        {children}
      </NavbarButton>
    </StyledNavList>
  );
};

export default NavListItem;

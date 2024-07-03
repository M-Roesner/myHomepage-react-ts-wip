// Components
import NavbarButton from "../../../utils/navbarButton/NavbarButton";
import { StyledNavListItem } from "../styledPageNavWrapper";

type NavListItemProps = {
  to: string;
  onClick?: () => void;
  children: React.ReactNode;
};

/**
 * Functional component for rendering a styled list item and a link.
 *
 * @param {Object} props - The props object containing the following properties:
 * @param {string} props.to - The path to navigate to when the link is clicked.
 * @param {() => void} [props.onClick] - Optional: The click event handler.
 * @param {React.ReactNode} props.children - The content of the navigation item.
 * @returns {JSX.Element} The NavListItem component.
 */
const NavListItem = ({ to, onClick, children }: NavListItemProps): JSX.Element => {
  return (
    <StyledNavListItem>
      <NavbarButton onClick={onClick} to={to} className="navbar">
        {children}
      </NavbarButton>
    </StyledNavListItem>
  );
};

export default NavListItem;

// Styled-Component
import { StyledNavbarButton } from "./styledNavbarButton";

type NavLinkProps = {
  to: string;
  children: React.ReactNode;
  autoWrap?: boolean;
  style?: React.CSSProperties;
};

/**
 * Functional component for routing a styled navigation link.
 *
 * @component
 * @param {Object} props - The props object containing the following properties:
 * @param {string} props.to - The path to navigate to when the link is clicked.
 * @param {boolean} props.autoWrap - Optional: Enables automatic line break for content if true; otherwise, disables it.
 * @param {React.CSSProperties} props.style - Optional: To add fixed (important) styles.
 * @param {ReactNode} props.children - The content of the link.
 */
const NavbarButton = ({ to, children, autoWrap = true, style }: NavLinkProps) => {
  return (
    <StyledNavbarButton to={to} autoWrap={autoWrap} style={style}>
      {children}
    </StyledNavbarButton>
  );
};

export default NavbarButton;

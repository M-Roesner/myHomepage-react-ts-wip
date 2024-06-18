// Styled-Component
import {
  styledNavbarButton as StyledNavbarButton,
  styledNavbarButtonWrap as StyledNavbarButtonWrap,
} from "./styledNavbarButton";

type NavbarButtonProps = {
  to: string;
  wrap?: boolean;
  animationRevers?: boolean;
  id?: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * Functional component for routing a styled navigation link.
 *
 * @component
 * @param {Object} props - The props object containing the following properties:
 * @param {string} props.to - The path to navigate to when the link is clicked.
 * @param {boolean} props.wrap - Optional: Specifies whether the link should wrap its content.
 * @param {boolean} [props.animationRevers=false] - Optional: Specifies whether the animation should be reversed.
 * @param {string} props.id - Optional: Identifies the navigation link with the specified id.
 * @param {string} props.className - Optional: Identifies the navigation link with the specified class name.
 * @param {ReactNode} props.children - The content of the link.
 */
const NavbarButton = ({ to, wrap, animationRevers = false, id, className, children }: NavbarButtonProps) => {
  {
    /* Span-tag is important for the style, it ensures that the text is always displayed. */
  }
  return (
    <>
      {wrap ? (
        <StyledNavbarButtonWrap to={to} $reverse={animationRevers} id={id} className={className}>
          <span>{children}</span>
        </StyledNavbarButtonWrap>
      ) : (
        <StyledNavbarButton to={to} $reverse={animationRevers} id={id} className={className}>
          <span>{children}</span>
        </StyledNavbarButton>
      )}
    </>
  );
};

export default NavbarButton;

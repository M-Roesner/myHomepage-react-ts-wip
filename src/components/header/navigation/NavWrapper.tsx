// custom components
import NavItem from "./navItem/NavItem";

// Styled-Component
import { StyledNavWrapper, StyledNavUnorderedList } from "./styledNavWrapper";

/**
 * Functional component for routing to several pages.
 */
const NavWrapper = () => {
  return (
    <StyledNavWrapper>
      <StyledNavUnorderedList>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/aboutMe">Über mich</NavItem>
        <NavItem to="/myPortfolio">Mein Portfolio</NavItem>
      </StyledNavUnorderedList>
    </StyledNavWrapper>
  );
};

export default NavWrapper;

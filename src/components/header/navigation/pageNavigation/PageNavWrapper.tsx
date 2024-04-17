// custom components
import NavItem from "./PageNavItem/PageNavItem";

// Styled-Component
import { StyledPageNavWrapper, StyledNavUnorderedList } from "./styledPageNavWrapper";

/**
 * Functional component for routing to several pages.
 */
const PageNavWrapper = () => {
  return (
    <StyledPageNavWrapper>
      <StyledNavUnorderedList>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/aboutMe">Über mich</NavItem>
        <NavItem to="/myPortfolio">Mein Portfolio</NavItem>
      </StyledNavUnorderedList>
    </StyledPageNavWrapper>
  );
};

export default PageNavWrapper;

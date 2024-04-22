// custom components
import NavListItem from "./PageNavItem/PageNavItem";

// Styled-Component
import { StyledPageNavWrapper, StyledNavUnorderedList } from "./styledPageNavWrapper";

/**
 * Functional component for routing to several pages.
 */
const PageNavWrapper = () => {
  return (
    <StyledPageNavWrapper>
      <StyledNavUnorderedList>
        <NavListItem to="/aboutMe">Über mich</NavListItem>
        <NavListItem to="/myPortfolio" wrap>
          Mein Portfolio
        </NavListItem>
      </StyledNavUnorderedList>
    </StyledPageNavWrapper>
  );
};

export default PageNavWrapper;

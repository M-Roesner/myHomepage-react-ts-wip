// custom components
import { useState } from "react";
import NavListItem from "./PageNavItem/PageNavItem";
import BurgerMenu from "./burgerMenu/BurgerMenu";

// Styled-Component
import { StyledPageNavWrapper, StyledNavUnorderedList } from "./styledPageNavWrapper";

/**
 * Functional component for routing to several pages.
 */
const PageNavWrapper = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <StyledPageNavWrapper>
      <BurgerMenu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <StyledNavUnorderedList $isOpen={isOpen}>
        <NavListItem to="/aboutMe">Über mich</NavListItem>
        <NavListItem to="/myPortfolio" wrap>
          Mein Portfolio
        </NavListItem>
      </StyledNavUnorderedList>
    </StyledPageNavWrapper>
  );
};

export default PageNavWrapper;

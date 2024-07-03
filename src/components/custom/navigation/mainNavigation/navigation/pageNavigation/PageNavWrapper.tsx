import { useRef, useState } from "react";

// Custom components
import BurgerMenu from "./burgerMenu/BurgerMenu";
import CloseTimerBar from "./closeTimerBar/CloseTimerBar";
import NavListItem from "./PageNavItem/PageNavItem";

// Styled-Component
import { StyledPageNavWrapper, StyledNavUnorderedList } from "./styledPageNavWrapper";

/**
 * Functional component for rendering a navigation wrapper with routing to several pages.
 * It includes a BurgerMenu component, a navigation list, and a CloseTimerBar component
 * that shows a visual timer for auto-closing the menu.
 */
const PageNavWrapper = () => {
  const refMenu = useRef<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  /**
   * Handles navigation item click by closing the menu.
   */
  const handleNavItemClick = () => setIsOpen(false);

  /**
   * Handles the timeout event by closing the menu.
   */
  const handleTimeout = () => setIsOpen(false);

  /**
   * Toggles the menu open/close state.
   */
  const handleMenuClick = () => setIsOpen(!isOpen);

  /**
   * Sets the hovered state to true when the mouse enters the menu.
   */
  const handleMouseEnter = () => setIsHovered(true);

  /**
   * Sets the hovered state to false when the mouse leaves the menu.
   */
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <StyledPageNavWrapper ref={refMenu} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <BurgerMenu isOpen={isOpen} onClick={handleMenuClick} />
      <StyledNavUnorderedList $isOpen={isOpen}>
        <CloseTimerBar duration={5000} isOpen={isOpen && !isHovered} onTimeout={handleTimeout} />
        <NavListItem to="/aboutMe" onClick={handleNavItemClick}>
          Über mich
        </NavListItem>
        <NavListItem to="/myPortfolio" onClick={handleNavItemClick}>
          Portfolio
        </NavListItem>
      </StyledNavUnorderedList>
    </StyledPageNavWrapper>
  );
};

export default PageNavWrapper;

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Components
import { StyledSideNavigation, StyledSideNavigationList, StyledSideNavigationListItem } from "./styledSideNavigation";
// import CardHeadline from "../../../components/custom/card/cardHeadline/CardHeadline";
import ToggleButton from "./toggleButton/ToggleButton";
import { StyledSideNavigationButton } from "./sideNavigationButton/sytledSideNavigationButton";

// Types
import { EProjectTagId } from "../../../../pages/project/projectEnums";

// Helpers
import useScreenSize from "../../../../utils/hooks/screenSize/useScreenSize";

export type SideNavigationButtonType = {
  tagId: EProjectTagId | string;
  buttonText: string;
};

type SideNavigationProps = { ancorList: SideNavigationButtonType[] };

/**
 * Displays a navigation sidebar for a project with toggle functionality and navigation links.
 *
 * @component
 * @example
 * // Example usage:
 * // <SideNavigation anchorList={[{ tagId: 'example', buttonText: 'Example' }]} />
 *
 * @param {Object} props - The component props.
 * @param {SideNavigationButtonType[]} props.anchorList - List of navigation button props.
 * @returns {JSX.Element} The rendered SideNavigation component.
 */
const SideNavigation = ({ ancorList }: SideNavigationProps): JSX.Element => {
  const location = useLocation();
  const currentPath = location.pathname;
  const screenSize = useScreenSize();

  const [isOpen, setIsOpen] = useState(false);
  const [textAlign, setTextAlign] = useState<"center" | "left">("center");

  /**
   * Toggles the sidebar open or closed.
   */
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [showToggleButton, setShowToggleButton] = useState(false);

  useEffect(() => {
    const isMobileScreen = screenSize.width < 500;

    // Determine whether to show the toggle button
    setShowToggleButton(isMobileScreen);

    // Set text alignment based on screen size and isOpen state
    setTextAlign(isMobileScreen ? (isOpen ? "center" : "left") : "center");
  }, [screenSize, isOpen]);

  return (
    <StyledSideNavigation onClick={toggleSidebar} $isOpen={isOpen}>
      {showToggleButton && <ToggleButton isOpen={isOpen} />}
      <StyledSideNavigationList $isOpen={isOpen}>
        {ancorList.map((navItem, index) => (
          <StyledSideNavigationListItem key={index}>
            <StyledSideNavigationButton to={`${currentPath}#${navItem.tagId}`} $textAlign={textAlign}>
              {navItem.buttonText}
            </StyledSideNavigationButton>
          </StyledSideNavigationListItem>
        ))}
      </StyledSideNavigationList>
    </StyledSideNavigation>
  );
};

export default SideNavigation;

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Components
import {
  StyledProjectNavigation,
  StyledProjectNavigationList,
  StyledProjectNavigationListItem,
} from "./styledProjectNavigation";
// import CardHeadline from "../../../components/custom/card/cardHeadline/CardHeadline";
import ToggleButton from "./toggleButton/ToggleButton";
import { StyledProjectNavButton } from "./projectNavButton/sytledProjectNavButton";

// Types
import { EProjectTagId } from "../projectEnums";

// Helpers
import useScreenSize from "../../../utils/hooks/screenSize/useScreenSize";

export type ProjectAsideNavigationButtonProps = {
  tagId: EProjectTagId | string;
  buttonText: string;
};

export type ProjectAsideNavigationProps = { ancorList: ProjectAsideNavigationButtonProps[] };

/**
 * Displays a navigation sidebar for a project with toggle functionality and navigation links.
 *
 * @component
 * @example
 * // Example usage:
 * // <ProjectAsideNavigation anchorList={[{ tagId: 'example', buttonText: 'Example' }]} />
 *
 * @param {Object} props - The component props.
 * @param {ProjectAsideNavigationButtonProps[]} props.anchorList - List of navigation button props.
 * @returns {JSX.Element} The rendered ProjectAsideNavigation component.
 */
const ProjectAsideNavigation = ({ ancorList }: ProjectAsideNavigationProps) => {
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
    <StyledProjectNavigation onClick={toggleSidebar} $isOpen={isOpen}>
      {showToggleButton && <ToggleButton isOpen={isOpen} />}
      <StyledProjectNavigationList $isOpen={isOpen}>
        {ancorList.map((navItem, index) => (
          <StyledProjectNavigationListItem key={index}>
            <StyledProjectNavButton to={`${currentPath}#${navItem.tagId}`} $textAlign={textAlign}>
              {navItem.buttonText}
            </StyledProjectNavButton>
          </StyledProjectNavigationListItem>
        ))}
      </StyledProjectNavigationList>
    </StyledProjectNavigation>
  );
};

export default ProjectAsideNavigation;

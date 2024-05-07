// import { useLocation } from "react-router-dom";

import {
  StyledProjectNavigation,
  StyledProjectNavigationList,
  StyledProjectNavigationListItem,
} from "./styledProjectNavigation";
// import LinkButton from "../../../components/custom/button/linkButton/LinkButton";
import CardHeadline from "../../../components/custom/card/cardHeadline/CardHeadline";

export type ProjectNavigationButtonProps = {
  tagId?: string;
  buttonText: string;
};

export type ProjectNavigationProps = { navButtonList: ProjectNavigationButtonProps[] };

// TODO: Get information on how to navigate to a specific ID on the page.
const ProjectNavigation = ({ navButtonList }: ProjectNavigationProps) => {
  // const location = useLocation();
  // const currentPath = location.pathname;

  return (
    <StyledProjectNavigation>
      <CardHeadline level={4}>Projekt Inhalte</CardHeadline>
      <StyledProjectNavigationList>
        {navButtonList.map((navItem, index) => {
          // const newTagID = navItem.tagId !== undefined ? navItem.tagId : "";
          return (
            <StyledProjectNavigationListItem key={index}>
              {/* <LinkButton to={currentPath + `#${newTagID}`}>{navItem.buttonText}</LinkButton> */}
              <p>{navItem.buttonText}</p>
            </StyledProjectNavigationListItem>
          );
        })}
      </StyledProjectNavigationList>
    </StyledProjectNavigation>
  );
};

export default ProjectNavigation;

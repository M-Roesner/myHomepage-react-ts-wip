import { useLocation } from "react-router-dom";

import {
  StyledProjectNavigation,
  StyledProjectNavigationList,
  StyledProjectNavigationListItem,
} from "./styledProjectNavigation";
import CardHeadline from "../../../components/custom/card/cardHeadline/CardHeadline";
import { StyledLinkButton } from "../../../components/custom/button/linkButton/styledLinkButton";
import { EProjectTagId } from "../projectEnums";

export type ProjectAsideNavigationButtonProps = {
  tagId: EProjectTagId;
  buttonText: string;
};

export type ProjectAsideNavigationProps = { ancorList: ProjectAsideNavigationButtonProps[] };

// TODO: Get information on how to navigate to a specific ID on the page.
const ProjectAsideNavigation = ({ ancorList }: ProjectAsideNavigationProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <StyledProjectNavigation>
      <CardHeadline level={4}>
        Projekt
        <br />
        Navigation
      </CardHeadline>
      <StyledProjectNavigationList>
        {ancorList.map((navItem, index) => (
          <StyledProjectNavigationListItem key={index}>
            <StyledLinkButton to={`${currentPath}#${navItem.tagId}`}>{navItem.buttonText}</StyledLinkButton>
          </StyledProjectNavigationListItem>
        ))}
      </StyledProjectNavigationList>
    </StyledProjectNavigation>
  );
};

export default ProjectAsideNavigation;

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
  tagId: EProjectTagId | string;
  buttonText: string;
};

export type ProjectAsideNavigationProps = { ancorList: ProjectAsideNavigationButtonProps[] };

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
            <StyledLinkButton to={`${currentPath}#${navItem.tagId}`} style={{ display: "block" }}>
              {navItem.buttonText}
            </StyledLinkButton>
          </StyledProjectNavigationListItem>
        ))}
      </StyledProjectNavigationList>
    </StyledProjectNavigation>
  );
};

export default ProjectAsideNavigation;

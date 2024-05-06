import {
  StyledProjectNavigation,
  StyledProjectNavigationList,
  StyledProjectNavigationListItem,
} from "./styledProjectNavigation";
import LinkButton, { LinkButtonRouteType } from "../../../components/custom/button/linkButton/LinkButton";
import CardHeadline from "../../../components/custom/card/cardHeadline/CardHeadline";

export type ProjectNavigationButtonProps = {
  to: LinkButtonRouteType;
  buttonText: string;
};

export type ProjectNavigationProps = { navButtonList: ProjectNavigationButtonProps[] };

// TODO: Get information on how to navigate to a specific ID on the page.
const ProjectNavigation = ({ navButtonList }: ProjectNavigationProps) => {
  return (
    <StyledProjectNavigation>
      <CardHeadline level={4}>Projekt Navigation</CardHeadline>
      <StyledProjectNavigationList>
        {navButtonList.map((navItem, index) => {
          console.log(navItem.to);

          return (
            <StyledProjectNavigationListItem key={index}>
              <LinkButton to={navItem.to}>{navItem.buttonText}</LinkButton>
            </StyledProjectNavigationListItem>
          );
        })}
      </StyledProjectNavigationList>
    </StyledProjectNavigation>
  );
};

export default ProjectNavigation;

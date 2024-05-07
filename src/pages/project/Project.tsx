import { useParams } from "react-router";

// Components
import PageLayout from "../../components/custom/layout/pageLayout/PageLayout";
import { CardParagraphStyle } from "../../components/custom/card/cardParagraph/styledCardParagraphStyle";
import ProjectDescription from "./projectDescription/ProjectDescription";
import ProjectList from "./projectList/ProjectList";
import ErrorPage_InclProps from "../errorPage/ErrorPage_InclProps";
import ProjectNavigation, { ProjectNavigationButtonProps } from "./projectNavigation/ProjectNavigation";

// Rosources and Helpers
import { getProjectContent } from "./helper";
import {
  mwProject_SkillsToListItems,
  mwProject_LinksToListItemType,
  mwProject_ImageToImageType,
} from "./middleware.helper";

// Types and Enums
import { ProjectCategoryType } from "../myPortfolio/types/projectTypes";
import { ERouteType } from "../../routes/router";
import ProjectImages from "./projectImages/ProjectImages";

const Project = () => {
  const { portfolioCategory, portfolioId } = useParams<{
    portfolioCategory: ProjectCategoryType;
    portfolioId: string;
  }>();
  if (portfolioCategory === undefined || portfolioId === undefined) return;

  const content = getProjectContent(portfolioCategory, portfolioId);

  if (!content)
    return (
      <ErrorPage_InclProps
        url={ERouteType.MY_PORTFOLIO}
        titleButton={"Zurück zu Portfolio Seite"}
        descriptionText={"Portfolio nicht gefunden!"}
      ></ErrorPage_InclProps>
    );

  // This represents the navigation of this internal project page. It will be displayed with <ProjectNavigation> component.
  // TODO: Clicking on the button in the <ProjectNavigation> component does not lead to navigation to the ID!
  // Currently ignores whether a valid ID is available for navigation.
  // Maybe I need to work with queries from React-Router.
  const navigation: ProjectNavigationButtonProps[] = [
    { tagId: "why", buttonText: "Warum" },
    { tagId: "skills", buttonText: "Verwendete Fähigkeiten" },
    { tagId: "links", buttonText: "Links" },
    { tagId: "images", buttonText: "Bilder" },
  ];

  const skills = content.skills ? mwProject_SkillsToListItems(content.skills) : undefined;
  const projectLinks = content.links ? mwProject_LinksToListItemType(content.links) : undefined;
  const images = content.images ? mwProject_ImageToImageType(content.images) : undefined;

  return (
    <PageLayout headlineText={content.title}>
      <ProjectNavigation navButtonList={navigation}></ProjectNavigation>
      <CardParagraphStyle>{content.introduction}</CardParagraphStyle>
      <ProjectDescription title="Warum:" tagId="why">
        {content.description}
      </ProjectDescription>
      {skills && (
        <ProjectList
          title="Verwendete Fähigkeiten:"
          tagId="skills"
          list={skills}
          numerusText={{ singular: "weitere Fähigkeit", plural: "weitere Fähigkeiten" }}
        />
      )}
      {projectLinks && (
        <ProjectList
          title="Links:"
          tagId="links"
          list={projectLinks}
          numerusText={{ singular: "weiterer Link", plural: "weitere Links" }}
        />
      )}
      {images && <ProjectImages title={"Bilder:"} tagId="images" images={images} />}
    </PageLayout>
  );
};

export default Project;

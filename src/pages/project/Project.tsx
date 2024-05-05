import { useParams } from "react-router";

// Components
import PageLayout from "../../components/custom/layout/pageLayout/PageLayout";
import { CardParagraphStyle } from "../../components/custom/card/cardParagraph/styledCardParagraphStyle";
import ProjectDescription from "./projectDescription/ProjectDescription";
import ProjectList from "./projectList/ProjectList";
import ErrorPage_InclProps from "../errorPage/ErrorPage_InclProps";

// Rosources and Helpers
import { getProjectContent } from "./helper";
import {
  mwProject_SkillsToListItems,
  mwProject_LinksToListItemType,
  mwProject_ImageToListItemType,
} from "./middleware.helper";

// Types and Enums
import { ProjectCategoryType } from "../myPortfolio/types/projectTypes";
import { ERouteType } from "../../routes/router";

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

  const skills = content.skills ? mwProject_SkillsToListItems(content.skills) : undefined;
  const projectLinks = content.links ? mwProject_LinksToListItemType(content.links) : undefined;
  const images = content.images ? mwProject_ImageToListItemType(content.images) : undefined;

  return (
    <PageLayout headlineText={content.title}>
      <CardParagraphStyle>{content.introduction}</CardParagraphStyle>
      <ProjectDescription title="Warum:">{content.description}</ProjectDescription>
      {skills && (
        <ProjectList
          title="Verwendete Fähigkeiten:"
          lists={skills}
          numerusText={{ singular: "weitere Fähigkeit", plural: "weitere Fähigkeiten" }}
        />
      )}
      {projectLinks && (
        <ProjectList
          title="Links:"
          lists={projectLinks}
          numerusText={{ singular: "weiterer Link", plural: "weitere Links" }}
        />
      )}
      {/* TODO: Adjust the size of the images, maybe with a custom component! */}
      {images && (
        <ProjectList
          title={"Bilder:"}
          lists={images}
          numerusText={{ singular: "weiteres Bild", plural: "weitere Bilder" }}
        />
      )}
    </PageLayout>
  );
};

export default Project;

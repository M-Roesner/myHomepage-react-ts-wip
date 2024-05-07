import { useParams } from "react-router";

// Components
import PageLayout from "../../components/custom/layout/pageLayout/PageLayout";
import ProjectAsideNavigation from "./projectNavigation/ProjectNavigation";
import { CardParagraphStyle } from "../../components/custom/card/cardParagraph/styledCardParagraphStyle";
import ProjectDescription from "./projectDescription/ProjectDescription";
import ProjectList from "./projectList/ProjectList";
import ProjectImages from "./projectImages/ProjectImages";
import ErrorPage_InclProps from "../errorPage/ErrorPage_InclProps";

// Rosources and Helpers
import { getProjectContent } from "./helper";
import {
  mwProject_SkillsToListItems,
  mwProject_LinksToListItemType,
  mwProject_ImageToImageType,
  mwProject_AsideNavigation,
} from "./middleware.helper";

// Types and Enums
import { ProjectCategoryType } from "../myPortfolio/types/projectTypes";
import { ERouteType } from "../../routes/router";
import { EProjectTagId } from "./projectEnums";

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
  const images = content.images ? mwProject_ImageToImageType(content.images) : undefined;

  const asideNavigation = mwProject_AsideNavigation(content);

  return (
    <PageLayout headlineText={content.title}>
      {asideNavigation && <ProjectAsideNavigation ancorList={asideNavigation}></ProjectAsideNavigation>}
      <CardParagraphStyle>{content.introduction}</CardParagraphStyle>
      <ProjectDescription title="Warum:" tagId={EProjectTagId.WHY}>
        {content.description}
      </ProjectDescription>
      {skills && (
        <ProjectList
          title="Verwendete Fähigkeiten:"
          tagId={EProjectTagId.SKILLS}
          list={skills}
          numerusText={{ singular: "weitere Fähigkeit", plural: "weitere Fähigkeiten" }}
        />
      )}
      {projectLinks && (
        <ProjectList
          title="Links:"
          tagId={EProjectTagId.LINKS}
          list={projectLinks}
          numerusText={{ singular: "weiterer Link", plural: "weitere Links" }}
        />
      )}
      {images && <ProjectImages title={"Bilder:"} tagId={EProjectTagId.IMAGES} images={images} />}
    </PageLayout>
  );
};

export default Project;

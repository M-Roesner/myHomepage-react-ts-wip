import { useParams } from "react-router";

// Components
import PageLayout from "../../components/custom/layout/pageLayout/PageLayout";
import ProjectAsideNavigation from "./projectNavigation/ProjectNavigation";
import ProjectIntroduction from "./projectIntroduction/ProjectIntroduction";
import ProjectDescription from "./projectDescription/ProjectDescription";
import SimpleList from "./simpleList/SimpleList";
import ProjectList from "./projectList/ProjectList";
import ProjectImages from "./projectImages/ProjectImages";
import ErrorPage_InclProps from "../errorPage/ErrorPage_InclProps";

// Rosources and Helpers
import { getProjectContent } from "./helper";
import {
  mwProject_TechnologyToListItems,
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

  const technologies = content.technologies ? mwProject_TechnologyToListItems(content.technologies) : undefined;
  const projectLinks = content.links ? mwProject_LinksToListItemType(content.links) : undefined;
  const images = content.images ? mwProject_ImageToImageType(content.images) : undefined;

  const asideNavigation = mwProject_AsideNavigation(content);

  return (
    <PageLayout headlineText={content.title}>
      {asideNavigation && <ProjectAsideNavigation ancorList={asideNavigation} />}
      <ProjectIntroduction texts={content.introduction} />
      <ProjectDescription title="Warum:" tagId={EProjectTagId.WHY} list={content.why} />
      {images && <ProjectImages title={"Bilder:"} tagId={EProjectTagId.IMAGES} images={images} />}
      {content.skills && (
        <SimpleList title="Erlernte Fähigkeiten:" tagId={EProjectTagId.SKILLS} list={content.skills} />
      )}
      {technologies && (
        <ProjectList
          title="Verwendete Technologien:"
          tagId={EProjectTagId.TECHNOLOGIES}
          list={technologies}
          numerusText={{ singular: "weitere Technologie", plural: "weitere Technologien" }}
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
    </PageLayout>
  );
};

export default Project;

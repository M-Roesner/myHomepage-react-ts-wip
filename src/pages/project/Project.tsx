import { useParams } from "react-router";

// Components
import PageLayout from "../../components/custom/layout/pageLayout/PageLayout";
import SideNavigation from "../../components/custom/navigation/sideNavigation/SideNavigation";
import ProjectIntroduction from "./sections/projectIntroduction/ProjectIntroduction";
import ParagraphList from "./utils/paragraphList/ParagraphList";
import AdditionalInfo from "./sections/additionalInfo/AdditionalInfo";
import SimpleList from "./utils/simpleList/SimpleList";
import ProjectList from "./utils/projectList/ProjectList";
import ProjectImages from "./sections/projectImages/ProjectImages";
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

/**
 * Renders a single Project page.
 *
 * It displays the the title of the project, the description and some additional information.
 *
 * @returns {React.ReactNode}.
 */
const Project = (): React.ReactNode => {
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
      />
    );

  const technologies = content.technologies ? mwProject_TechnologyToListItems(content.technologies) : undefined;
  const projectLinks = content.links ? mwProject_LinksToListItemType(content.links) : undefined;
  const images = content.images ? mwProject_ImageToImageType(content.images) : undefined;

  const asideNavigation = mwProject_AsideNavigation(content);

  return (
    <PageLayout headlineText={content.title}>
      {asideNavigation && <SideNavigation ancorList={asideNavigation} />}
      <ProjectIntroduction texts={content.introduction} />
      <ParagraphList title="Warum:" tagId={EProjectTagId.WHY} list={content.why} />
      {content.additionalInfo && <AdditionalInfo list={content.additionalInfo} />}
      {images && <ProjectImages title={"Bilder:"} tagId={EProjectTagId.IMAGES} images={images} />}
      {content.knowledge && (
        <SimpleList title="Erworbere Kenntnisse:" tagId={EProjectTagId.KNOWLEDGE} list={content.knowledge} />
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

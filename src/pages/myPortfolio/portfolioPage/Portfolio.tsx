import { useParams } from "react-router";

// Components
import PageLayout from "../../../components/custom/layout/pageLayout/PageLayout";
import { CardParagraphStyle } from "../../../components/custom/card/cardParagraph/styledCardParagraphStyle";
import PortfolioDescription from "./portfolioDescription/PortfolioDescription";
import PortfolioList from "./portfolioSkills/PortfolioSkills";
import ErrorPage_InclProps from "../../errorPage/ErrorPage_InclProps";

// Rosources and Helpers
import { getPortfolioContent } from "./helper";
import { mwSkillsToListItems, mwLinksToListItemType, mwImageToListItemType } from "./middleware.helper";

// Types and Enums
import { ProjectCategoryType } from "../types/projectTypes";
import { ERouteType } from "../../../routes/router";

const Portfolio = () => {
  const { portfolioCategory, portfolioId } = useParams<{
    portfolioCategory: ProjectCategoryType;
    portfolioId: string;
  }>();
  if (portfolioCategory === undefined || portfolioId === undefined) return;

  const content = getPortfolioContent(portfolioCategory, portfolioId);

  if (!content)
    return (
      <ErrorPage_InclProps
        url={ERouteType.MY_PORTFOLIO}
        titleButton={"Zurück zu Portfolio Seite"}
        descriptionText={"Portfolio nicht gefunden!"}
      ></ErrorPage_InclProps>
    );

  const skills = content.skills ? mwSkillsToListItems(content.skills) : undefined;
  const projectLinks = content.links ? mwLinksToListItemType(content.links) : undefined;
  const images = content.images ? mwImageToListItemType(content.images) : undefined;

  return (
    <PageLayout headlineText={content.title}>
      <CardParagraphStyle>{content.introduction}</CardParagraphStyle>
      <PortfolioDescription title="Warum:">{content.description}</PortfolioDescription>
      {skills && <PortfolioList title="Verwendete Fähigkeiten:" skills={skills} />}
      {projectLinks && <PortfolioList title="Links:" skills={projectLinks} />}
      {/* TODO: Adjust the size of the images, maybe with a custom component! */}
      {images && <PortfolioList title={"Bilder:"} skills={images} />}
    </PageLayout>
  );
};

export default Portfolio;

import { useParams } from "react-router";

// Components
import PageLayout from "../../../components/custom/layout/pageLayout/PageLayout";
import { CardParagraphStyle } from "../../../components/custom/card/cardParagraph/styledCardParagraphStyle";
import PortfolioDescription from "./portfolioDescription/PortfolioDescription";
import PortfolioList from "./portfolioSkills/PortfolioSkills";
import ErrorPage_InclProps from "../../errorPage/ErrorPage_InclProps";

// Rosources and Helpers
import { getPortfolioContent } from "./helper";
import {
  mwPortfolio_SkillsToListItems,
  mwPortfolio_LinksToListItemType,
  mwPortfolio_ImageToListItemType,
} from "./middleware.helper";

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

  const skills = content.skills ? mwPortfolio_SkillsToListItems(content.skills) : undefined;
  const projectLinks = content.links ? mwPortfolio_LinksToListItemType(content.links) : undefined;
  const images = content.images ? mwPortfolio_ImageToListItemType(content.images) : undefined;

  return (
    <PageLayout headlineText={content.title}>
      <CardParagraphStyle>{content.introduction}</CardParagraphStyle>
      <PortfolioDescription title="Warum:">{content.description}</PortfolioDescription>
      {skills && (
        <PortfolioList
          title="Verwendete Fähigkeiten:"
          lists={skills}
          numerusText={{ singular: "weitere Fähigkeit", plural: "weitere Fähigkeiten" }}
        />
      )}
      {projectLinks && (
        <PortfolioList
          title="Links:"
          lists={projectLinks}
          numerusText={{ singular: "weiterer Link", plural: "weitere Links" }}
        />
      )}
      {/* TODO: Adjust the size of the images, maybe with a custom component! */}
      {images && (
        <PortfolioList
          title={"Bilder:"}
          lists={images}
          numerusText={{ singular: "weiteres Bild", plural: "weitere Bilder" }}
        />
      )}
    </PageLayout>
  );
};

export default Portfolio;

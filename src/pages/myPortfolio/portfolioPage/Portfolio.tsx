import { useParams } from "react-router";

// Components
import PageLayout from "../../../components/custom/layout/pageLayout/PageLayout";
import { CardParagraphStyle } from "../../../components/custom/card/cardParagraph/styledCardParagraphStyle";
import CardHeadline from "../../../components/custom/card/cardHeadline/CardHeadline";
import PortfolioDescription from "./portfolioDescription/PortfolioDescription";
import PortfolioSkills from "./portfolioSkills/PortfolioSkills";
import ErrorPage_InclProps from "../../errorPage/ErrorPage_InclProps";

// Rosources and Helpers
import { getPortfolioContent, middlewareProjectTypeToListItemType } from "./helper";
import { stringArrayToListItems } from "../../../components/custom/layout/listLayout/helper";

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

  const projectLinks = middlewareProjectTypeToListItemType(content);

  return (
    <PageLayout headlineText={content.title}>
      <CardParagraphStyle>{content.introduction}</CardParagraphStyle>
      <PortfolioDescription title="Warum:">{content.description}</PortfolioDescription>
      {content.usedSkills && (
        <PortfolioSkills title="Verwendete Fähigkeiten:" skills={stringArrayToListItems(content.usedSkills)} />
      )}
      {content.acquiredNewSkills && (
        <PortfolioSkills title="Neu erlernte Fähigkeiten:" skills={stringArrayToListItems(content.acquiredNewSkills)} />
      )}
      {projectLinks && <PortfolioSkills title="Links:" skills={projectLinks} />}
      {/* TODO: Add images! */}
      {content.images && (
        <>
          <CardHeadline level={2}>Bilder:</CardHeadline>
          <ul>
            {content.images.map((img, index) => (
              <li key={index}>
                <CardHeadline level={4}>{img.imgTitle}</CardHeadline>
                <img src={img.imgSrc} alt={img.imgAlt} />
              </li>
            ))}
          </ul>
        </>
      )}
    </PageLayout>
  );
};

export default Portfolio;

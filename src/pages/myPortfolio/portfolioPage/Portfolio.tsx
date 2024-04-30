import { useParams } from "react-router";

// Components
import { CardParagraphStyle } from "../../../components/custom/card/cardParagraph/styledCardParagraphStyle";
import CardHeadline from "../../../components/custom/card/cardHeadline/CardHeadline";
import PortfolioDescription from "./portfolioDescription/PortfolioDescription";
import PortfolioSkills from "./portfolioSkills/PortfolioSkills";

// Rosources and Helpers
import { getPortfolioContent } from "./helper";

// Types and Enums
import { ProjectCategory } from "../types/projectTypes";
import PageLayout from "../../../components/custom/layout/pageLayout/PageLayout";
import ErrorPage_InclProps from "../../errorPage/ErrorPage_InclProps";
import { ERouteType } from "../../../routes/router";

const Portfolio = () => {
  const { portfolioCategory, portfolioId } = useParams<{ portfolioCategory: ProjectCategory; portfolioId: string }>();
  if (portfolioCategory === undefined || portfolioId === undefined) return;

  const content = getPortfolioContent(portfolioCategory, portfolioId);

  console.log(`content log in Portfolio: `, content);
  if (!content)
    return (
      <ErrorPage_InclProps
        url={ERouteType.MY_PORTFOLIO}
        titleButton={"Zurück zu Portfolio Seite"}
        descriptionText={"Portfolio nicht gefunden!"}
      ></ErrorPage_InclProps>
    );

  return (
    <PageLayout headlineText={content.title}>
      <CardParagraphStyle>{content.introduction}</CardParagraphStyle>
      <PortfolioDescription title="Warum:">{content.description}</PortfolioDescription>
      <PortfolioSkills title="Verwendete Fähigkeiten:" skills={content.usedSkills} />
      <PortfolioSkills title="Neu erlernte Fähigkeiten:" skills={content.acquiredNewSkills} />
      {content.links && (
        <>
          <CardHeadline level={2}>Links:</CardHeadline>
          <ul>
            {content.links.map((link, index) => (
              <li key={index}>
                <a href={link.route}>{link.text}</a>
              </li>
            ))}
          </ul>
        </>
      )}
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

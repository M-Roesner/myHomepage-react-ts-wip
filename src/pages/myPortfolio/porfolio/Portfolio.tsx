import { useParams } from "react-router";

// Components
import { StyledPortfolio } from "./styledPortfolio";
import { CardVerticalLineStyle } from "../../../components/custom/card/cardVerticalLine/styledCardVerticalLineStyle";
import { CardParagraphStyle } from "../../../components/custom/card/cardParagraph/styledCardParagraphStyle";
import CardHeadline from "../../../components/custom/card/cardHeadline/CardHeadline";
import ErrorPage_InclProps from "../../errorPage/ErrorPage_InclProps";
import PortfolioDescription from "./portfolioDescription/PortfolioDescription";
import PortfolioSkills from "./portfolioSkills/PortfolioSkills";

// Rosources and Helpers
import { getPortfolioContent } from "./helper";

// Types and Enums
import { ProjectCategory } from "../types/projectTypes";
import { ERouteType } from "../../../routes/router";

const Portfolio = () => {
  const { portfolioCategory, portfolioId } = useParams<{ portfolioCategory: ProjectCategory; portfolioId: string }>();
  if (portfolioCategory === undefined || portfolioId === undefined) return;

  const content = getPortfolioContent(portfolioCategory, portfolioId);

  console.log(`content log in Portfolio: `, content);

  return (
    <StyledPortfolio>
      {content ? (
        <>
          <CardVerticalLineStyle>
            <CardHeadline level={1}>{content.title}</CardHeadline>
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
          </CardVerticalLineStyle>
        </>
      ) : (
        <ErrorPage_InclProps
          url={ERouteType.MY_PORTFOLIO}
          titleButton="Back to portfolio page."
          descriptionText="Portfolio not found!"
        />
      )}
    </StyledPortfolio>
  );
};

export default Portfolio;

import { useParams } from "react-router";

// Components
import { StyledPortfolio } from "./styledPortfolio";
import CardHeadline from "../../components/custom/card/cardHeadline/CardHeadline";
import { CardVerticalLineStyle } from "../../components/custom/card/cardVerticalLine/styledCardVerticalLineStyle";
import ErrorPage_InclProps from "../errorPage/ErrorPage_InclProps";

// Rosources and Helpers
import { getPortfolioContent } from "./helper";

// Types and Enums
import { ProjectCategory } from "../myPortfolio/types/projectTypes";
import { ERouteType } from "../../routes/router";

const Portfolio = () => {
  const { portfolioCategory, portfolioId } = useParams<{ portfolioCategory: ProjectCategory; portfolioId: string }>();
  if (portfolioCategory === undefined || portfolioId === undefined) return;

  const content = getPortfolioContent(portfolioCategory, portfolioId);

  console.log(`content log in Portfolio: `, content);

  return (
    <StyledPortfolio>
      {content ? (
        <>
          <CardHeadline level={1}>{content.title}</CardHeadline>
          <CardVerticalLineStyle>
            <p>{content.introduction}</p>
            <p>Warum:</p>
            {/* TODO: Der Inhalt muss nicht nur text sein, es können auch tags verwendet werden! */}
            <p>{content.description}</p>
            {content.usedSkills && (
              <>
                <p>Verwendete Fähigkeiten:</p>
                <ul>
                  {content.usedSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </>
            )}
            {content.acquiredNewSkills && (
              <>
                <p>Neu erlernte Fähigkeiten:</p>
                <ul>
                  {content.acquiredNewSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </>
            )}
            {content.links && (
              <>
                <p>Links:</p>
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
                <p>Bilder:</p>
                <ul>
                  {content.images.map((img, index) => (
                    <li key={index}>
                      <p>{img.imgTitle}</p>
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

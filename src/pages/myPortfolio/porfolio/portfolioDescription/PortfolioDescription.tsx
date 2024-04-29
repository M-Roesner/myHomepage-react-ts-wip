// Components
import { StyledPortfolioDescription } from "./styledPortfolioDescription";
import CardHeadline from "../../../../components/custom/card/cardHeadline/CardHeadline";
import { CardParagraphStyle } from "../../../../components/custom/card/cardParagraph/styledCardParagraphStyle";

type PortfolioDescriptionProps = { title: string; children: React.ReactNode };

const PortfolioDescription = ({ title, children }: PortfolioDescriptionProps) => {
  return (
    <StyledPortfolioDescription>
      <CardHeadline level={2}>{title}</CardHeadline>
      <CardParagraphStyle>{children}</CardParagraphStyle>
    </StyledPortfolioDescription>
  );
};

export default PortfolioDescription;

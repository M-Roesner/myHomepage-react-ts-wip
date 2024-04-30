// Components
import { CardParagraphStyle } from "../../../../components/custom/card/cardParagraph/styledCardParagraphStyle";
import SectionLayout from "../../../../components/custom/layout/sectionLayout/SectionLayout";

type PortfolioDescriptionProps = { title: string; children: React.ReactNode };

const PortfolioDescription = ({ title, children }: PortfolioDescriptionProps) => {
  return (
    <SectionLayout headlineText={title}>
      <CardParagraphStyle>{children}</CardParagraphStyle>
    </SectionLayout>
  );
};

export default PortfolioDescription;

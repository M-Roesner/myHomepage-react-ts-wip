// Components
import PageLayout from "../../components/custom/layout/pageLayout/PageLayout";
import { CardParagraph } from "../../components/custom/card/cardParagraph/styledCardParagraphStyle";
import InfoCardSection from "./sections/infoCardSection/InfoCardSection";

const HomePage = () => {
  return (
    <PageLayout useBackButton={false} headlineText="Willkommen auf meiner Seite!">
      <CardParagraph>Auf dieser Seite können Sie vieles über mich und meine Projekte erfahren.</CardParagraph>
      <InfoCardSection />
    </PageLayout>
  );
};

export default HomePage;

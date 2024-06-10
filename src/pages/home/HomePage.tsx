// Components
import PageLayout from "../../components/custom/layout/pageLayout/PageLayout";
import { CardParagraph } from "../../components/custom/card/cardParagraph/styledCardParagraphStyle";
import InfoCardSection from "./sections/infoCardSection/InfoCardSection";
import ProgressList from "./sections/progressListSection/ProgressListWrapper";

const HomePage = () => {
  return (
    <PageLayout useBackButton={false} headlineText="Willkommen auf meiner Seite!">
      <CardParagraph>
        Willkommen auf meiner Seite! Hier können Sie mehr über meine aktuellen Projekte erfahren und den Fortschritt
        verfolgen.
      </CardParagraph>

      <ProgressList />
      <InfoCardSection />
    </PageLayout>
  );
};

export default HomePage;

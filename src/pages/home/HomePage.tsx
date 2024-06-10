// Components
import PageLayout from "../../components/custom/layout/pageLayout/PageLayout";
import CardParagraph from "../../components/custom/card/cardParagraph/CardParagraph";
import InfoCardSection from "./sections/infoCardSection/InfoCardSection";
import ProgressList from "./sections/progressListSection/ProgressListWrapper";

const HomePage = () => {
  return (
    <PageLayout useBackButton={false} headlineText="Willkommen auf meiner Seite!">
      <CardParagraph
        paragraphs={[
          "Willkommen auf meiner Seite! Hier können Sie mehr über meine aktuellen Projekte erfahren und den Fortschritt verfolgen.",
        ]}
      />
      <ProgressList />
      <InfoCardSection />
    </PageLayout>
  );
};

export default HomePage;

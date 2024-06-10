// Components
import PageLayout from "../../components/custom/layout/pageLayout/PageLayout";
import { CardParagraph } from "../../components/custom/card/cardParagraph/styledCardParagraphStyle";
import InfoCardSection from "./sections/infoCardSection/InfoCardSection";
import ProgressList from "./sections/progressListSection/ProgressListWrapper";

const HomePage = () => {
  return (
    <PageLayout useBackButton={false} headlineText="Willkommen auf meiner Seite!">
      <CardParagraph>Auf dieser Seite können Sie vieles über mich und meine Projekte erfahren.</CardParagraph>
      <ProgressList />
      <InfoCardSection />
    </PageLayout>
  );
};

export default HomePage;

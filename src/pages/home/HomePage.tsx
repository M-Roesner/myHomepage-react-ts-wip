// Components
import PageLayout from "../../components/custom/layout/pageLayout/PageLayout";
import CardParagraph from "../../components/custom/card/cardParagraph/CardParagraph";
import InfoCardSection from "./sections/infoCardSection/InfoCardSection";
import ProgressSection from "./sections/progressSection/ProgressSection";

const HomePage = () => {
  const length = () => {
    const string =
      "Erfahre mehr über meinen beruflichen Werdegang. Als Fachinformatiker mit Fokus auf Anwendungsentwicklung bringe ich Kenntnisse in React.js und TypeScript mit.";
    return string.length;
  };
  console.log(length());

  return (
    <PageLayout headlineText="Willkommen auf meiner Seite!">
      <CardParagraph
        paragraphs={[
          "Möchtest du mehr über mich, meine Fähigkeiten und meine Projekte erfahren? Dann bist du hier genau richtig.",
          "Hier findest du auch den aktuellen Fortschritt der Seite und erfährst, was noch geplant ist.",
        ]}
      />
      <ProgressSection />
      <InfoCardSection />
    </PageLayout>
  );
};

export default HomePage;

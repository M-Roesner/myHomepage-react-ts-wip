// components
import SectionLayout from "../../../../components/custom/layout/sectionLayout/SectionLayout";
import { CardParagraphStyle } from "../../../../components/custom/card/cardParagraph/styledCardParagraphStyle";

const SectionMyFutureCareer = () => {
  return (
    <SectionLayout tagId="future" headlineText="Wie ich mich in der Zukunft entwickeln möchte.">
      <CardParagraphStyle>
        Mein Hauptfokus liegt mittelfristig auf der Weiterentwicklung im Bereich Frontend, den ich während meines
        Praktikums intensiv erleben durfte. Hier werde ich meine Anstrengungen verstärken, um mein Wissen und meine
        Fähigkeiten in der Frontend-Entwicklung weiter zu vertiefen.
      </CardParagraphStyle>
      <CardParagraphStyle>
        Langfristig strebe ich an, meine Expertise auch im Backend zu vertiefen, um schließlich im Fullstack-Bereich
        tätig zu werden. Dieser Weg ermöglicht mir, umfassende Kenntnisse in der gesamten Webentwicklung zu erlangen und
        vielseitige Projekte erfolgreich umzusetzen.
      </CardParagraphStyle>
    </SectionLayout>
  );
};

export default SectionMyFutureCareer;

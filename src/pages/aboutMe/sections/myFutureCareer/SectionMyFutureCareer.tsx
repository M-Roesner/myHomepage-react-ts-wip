import CardHeadline from "../../../../components/custom/card/cardHeadline/CardHeadline";
import CardParagraph from "../../../../components/custom/card/cardParagraph/CardParagraph";
import CardVerticalLine from "../../../../components/custom/card/cardVerticalLine/CardVerticalLine";
import { StyledSectionMyFutureCareer } from "./styledSectionMyFutureCareer";

const SectionMyFutureCareer = () => {
  return (
    <StyledSectionMyFutureCareer>
      <CardHeadline level={2}>Wie ich mich in der Zukunft entwickeln möchte.</CardHeadline>
      <CardVerticalLine>
        <CardParagraph>
          Mein Hauptfokus liegt mittelfristig auf der Weiterentwicklung im Bereich Frontend, den ich während meines
          Praktikums intensiv erleben durfte. Hier werde ich meine Anstrengungen verstärken, um mein Wissen und meine
          Fähigkeiten in der Frontend-Entwicklung weiter zu vertiefen.
        </CardParagraph>
        <CardParagraph>
          Langfristig strebe ich an, meine Expertise auch im Backend zu vertiefen, um schließlich im Fullstack-Bereich
          tätig zu werden. Dieser Weg ermöglicht mir, umfassende Kenntnisse in der gesamten Webentwicklung zu erlangen
          und vielseitige Projekte erfolgreich umzusetzen.
        </CardParagraph>
      </CardVerticalLine>
    </StyledSectionMyFutureCareer>
  );
};

export default SectionMyFutureCareer;

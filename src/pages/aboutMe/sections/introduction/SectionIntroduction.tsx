import CardHeadline from "../../../../components/custom/card/cardHeadline/CardHeadline";
import CardParagraph from "../../../../components/custom/card/cardParagraph/CardParagraph";
import CardVerticalLine from "../../../../components/custom/card/cardVerticalLine/CardVerticalLine";
import { StyledSectionIntroduction } from "./styledSectionIntroduction";

const SectionIntroduction = () => {
  return (
    <StyledSectionIntroduction>
      <CardHeadline level={3}>Wer bin ich?</CardHeadline>
      <CardVerticalLine>
        <CardParagraph>Hallo,</CardParagraph>
        <CardParagraph>mein Name ist Markus.</CardParagraph>
        <CardParagraph>
          Im Frühjahr 2024 habe ich meine Umschulung als Fachinformatiker mit Schwerpunkt Anwendungsentwicklung an der
          SRH in Heidelberg erfolgreich abgeschlossen. Während meiner Umschulung absolvierte ich ein Praktikum bei der
          Firma FutureNext GmbH in Mannheim, wo ich einen praxisnahen Einblick in die Arbeitsweise eines Programmierers
          erhielt. Dabei konnte ich Fähigkeiten in Technologien wie TypeScript und React erlernen.
        </CardParagraph>
        <CardParagraph>
          Davor war ich 18 Jahren in einer Buchbinderei angestellt und habe umfangreiche Erfahrungen in der Bedienung
          verschiedener Produktionsanlagen gesammelt. Dazu zählten unter anderem ein Klebebinder, ein Sammelhefter sowie
          diverse Kleinanlagen wie Falzmaschinen, Schneidemaschinen und Pallettieranlagen.
        </CardParagraph>
        <CardParagraph>
          Ich konnte mich zum stellvertretenden Schichtleiter hocharbeiten und hatte die Gelegenheit, verschiedene
          Projekte zu leiten oder aktiv mitzugestalten.
        </CardParagraph>
        <CardParagraph>
          Die Schließung der Firma habe ich als Chance genutzt, mich beruflich neu zu orientieren. Meine Überlegungen
          haben mich in die faszinierende Welt der IT geführt.
        </CardParagraph>
      </CardVerticalLine>
    </StyledSectionIntroduction>
  );
};

export default SectionIntroduction;
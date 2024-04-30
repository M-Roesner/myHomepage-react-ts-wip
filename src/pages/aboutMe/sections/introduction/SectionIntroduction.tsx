// components
import SectionLayout from "../../../../components/custom/layout/sectionLayout/SectionLayout";
import { CardParagraphStyle } from "../../../../components/custom/card/cardParagraph/styledCardParagraphStyle";

const SectionIntroduction = () => {
  return (
    <SectionLayout headlineText="Wer bin ich?">
      <CardParagraphStyle>Hallo,</CardParagraphStyle>
      <CardParagraphStyle>mein Name ist Markus.</CardParagraphStyle>
      <CardParagraphStyle>
        Im Frühjahr 2024 habe ich meine Umschulung als Fachinformatiker mit Schwerpunkt Anwendungsentwicklung an der SRH
        in Heidelberg erfolgreich abgeschlossen. Während meiner Umschulung absolvierte ich ein Praktikum bei der Firma
        FutureNext GmbH in Mannheim, wo ich einen praxisnahen Einblick in die Arbeitsweise eines Programmierers erhielt.
        Dabei konnte ich Fähigkeiten in Technologien wie TypeScript und React erlernen.
      </CardParagraphStyle>
      <CardParagraphStyle>
        Davor war ich 18 Jahren in einer Buchbinderei angestellt und habe umfangreiche Erfahrungen in der Bedienung
        verschiedener Produktionsanlagen gesammelt. Dazu zählten unter anderem ein Klebebinder, ein Sammelhefter sowie
        diverse Kleinanlagen wie Falzmaschinen, Schneidemaschinen und Pallettieranlagen.
      </CardParagraphStyle>
      <CardParagraphStyle>
        Ich konnte mich zum stellvertretenden Schichtleiter hocharbeiten und hatte die Gelegenheit, verschiedene
        Projekte zu leiten oder aktiv mitzugestalten.
      </CardParagraphStyle>
      <CardParagraphStyle>
        Die Schließung der Firma habe ich als Chance genutzt, mich beruflich neu zu orientieren. Meine Überlegungen
        haben mich in die faszinierende Welt der IT geführt.
      </CardParagraphStyle>
    </SectionLayout>
  );
};

export default SectionIntroduction;

// components
import SectionLayout from "../../../../components/custom/layout/sectionLayout/SectionLayout";
import CardParagraph from "../../../../components/custom/card/cardParagraph/CardParagraph";

const SectionIntroduction = () => {
  return (
    <SectionLayout tagId="whoAmI" headlineText="Wer bin ich?">
      <CardParagraph
        paragraphs={[
          "Hallo,",
          "mein Name ist Markus.",
          "Im Frühjahr 2024 habe ich meine Umschulung als Fachinformatiker mit Schwerpunkt Anwendungsentwicklung an der SRH in Heidelberg erfolgreich abgeschlossen. Während meiner Umschulung absolvierte ich ein Praktikum bei der Firma FutureNext GmbH in Mannheim, wo ich einen praxisnahen Einblick in die Arbeitsweise eines Programmierers erhielt. Dabei konnte ich Fähigkeiten in Technologien wie TypeScript und React erlernen.",
          "Davor war ich 18 Jahren in einer Buchbinderei angestellt und habe umfangreiche Erfahrungen in der Bedienung verschiedener Produktionsanlagen gesammelt. Dazu zählten unter anderem ein Klebebinder, ein Sammelhefter sowie diverse Kleinanlagen wie Falzmaschinen, Schneidemaschinen und Pallettieranlagen.",
          "Ich konnte mich zum stellvertretenden Schichtleiter hocharbeiten und hatte die Gelegenheit, verschiedene Projekte zu leiten oder aktiv mitzugestalten.",
          "Die Schließung der Firma habe ich als Chance genutzt, mich beruflich neu zu orientieren. Meine Überlegungen haben mich in die faszinierende Welt der IT geführt.",
        ]}
      />
    </SectionLayout>
  );
};

export default SectionIntroduction;

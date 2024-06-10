// components
import SectionLayout from "../../../../components/custom/layout/sectionLayout/SectionLayout";
// import Span from "../../../../components/custom/card/span/Span";
import CardParagraph from "../../../../components/custom/card/cardParagraph/CardParagraph";

const SectionWhyInIt = () => {
  /**
   * TODO: Rebuild the <Span title="Visual Basic for Applications">VBA</Span> functionality in the code.
   */

  return (
    <SectionLayout tagId="whyIt" headlineText="Warum ein Beruf in der Informatik?">
      <CardParagraph
        paragraphs={[
          "Während meines letzten Jobs habe ich anfangs für meine Kollegen kleine automatisierte Tabellen in Excel erstellt, um die Arbeitsabläufe zu optimieren und Zeit zu sparen. Diese habe ich auch später zum Teil mit VBA (Visual Basic for Applications) verbessert.",
          "Ebenso hatte ich für einen Sachbearbeiter ein komplexeres Pallettezettel-Programm mit Excel und VBA erstellt, welches eine Ein- und Ausgabe-Maske erhielt und die meisten Berechnungen von allein erledigte.",
          "Mich mit VBA auseinander zu setzen, war eine neue Erfahrung für mich. Das mir viel Spaß gemacht hat, sodass ich mich für den neuen Weg als Anwendungsentwickler entschied.",
        ]}
      />
    </SectionLayout>
  );
};

export default SectionWhyInIt;

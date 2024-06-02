// components
import SectionLayout from "../../../../components/custom/layout/sectionLayout/SectionLayout";
import { CardParagraph } from "../../../../components/custom/card/cardParagraph/styledCardParagraphStyle";
import Span from "../../../../components/custom/card/span/Span";

const SectionWhyInIt = () => {
  return (
    <SectionLayout tagId="whyIt" headlineText="Warum ein Beruf in der Informatik?">
      <CardParagraph>
        Während meines letzten Jobs habe ich anfangs für meine Kollegen kleine automatisierte Tabellen in Excel
        erstellt, um die Arbeitsabläufe zu optimieren und Zeit zu sparen. Diese habe ich auch später zum Teil mit
        <Span title="Visual Basic for Applications">VBA</Span>
        verbessert.
      </CardParagraph>
      <CardParagraph>
        Ebenso hatte ich für einen Sachbearbeiter ein komplexeres Pallettezettel-Programm mit Excel und VBA erstellt,
        welches eine Ein- und Ausgabe-Maske erhielt und die meisten Berechnungen von allein erledigte.
      </CardParagraph>
      <CardParagraph>
        Mich mit VBA auseinander zu setzen, war eine neue Erfahrung für mich. Das mir viel Spaß gemacht hat, sodass ich
        mich für den neuen Weg als Anwendungsentwickler entschied.
      </CardParagraph>
    </SectionLayout>
  );
};

export default SectionWhyInIt;

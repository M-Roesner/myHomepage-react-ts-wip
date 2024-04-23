// components
import CardHeadline from "../../../../components/custom/card/cardHeadline/CardHeadline";
import CardParagraph from "../../../../components/custom/card/cardParagraph/CardParagraph";
import { CardVerticalLineStyleForContent } from "../../../../components/custom/card/cardVerticalLine/styledCardVerticalLine";
import Span from "../../../../components/custom/card/span/Span";
import { StyledSectionWhyInIt } from "./styledSectionWhyInIt";

const SectionWhyInIt = () => {
  return (
    <StyledSectionWhyInIt>
      <CardHeadline level={3}>Warum ein Beruf in der Informatik?</CardHeadline>
      <CardVerticalLineStyleForContent>
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
          Mich mit VBA auseinander zu setzen, war eine neue Erfahrung für mich. Das mir viel Spaß gemacht hat, sodass
          ich mich für den neuen Weg als Anwendungsentwickler entschied.
        </CardParagraph>
      </CardVerticalLineStyleForContent>
    </StyledSectionWhyInIt>
  );
};

export default SectionWhyInIt;

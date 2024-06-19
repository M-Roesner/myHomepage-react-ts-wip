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
          "Während meines letzten Jobs habe ich anfangs kleine automatisierte Tabellen in Excel für meine Kollegen und mich erstellt, um die Arbeitsabläufe zu optimieren und Zeit zu sparen. Später habe ich diese Lösungen teilweise mit VBA (Visual Basic for Applications) weiter verbessert.",
          "Ein besonders herausforderndes Projekt war die Entwicklung eines komplexen Palettenzettel-Programms für einen Sachbearbeiter, das sowohl eine Ein- und Ausgabe-Maske enthielt als auch die meisten Berechnungen automatisch durchführte.",
          "Die Auseinandersetzung mit VBA war für mich eine neue Erfahrung, die mir großen Spaß gemacht hat. Diese Erfahrungen haben mich dazu motiviert, den Weg als Anwendungsentwickler einzuschlagen.",
        ]}
      />
    </SectionLayout>
  );
};

export default SectionWhyInIt;

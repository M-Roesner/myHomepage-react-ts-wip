import CardHeadline from "../../../../components/custom/card/cardHeadline/CardHeadline";
import { CardParagraph } from "../../../../components/custom/card/cardParagraph/styledCardParagraphStyle";
import SectionLayout from "../../../../components/custom/layout/sectionLayout/SectionLayout";
import ProgressBar from "../../../../components/custom/card/progressBar/ProgressBar";
import { StyledProgressList } from "./styledProgressListWrapper";

interface Feature {
  name: string;
  isComplete: boolean;
}
const features: Feature[] = [
  { name: "Implementierung von React Router", isComplete: true },
  { name: "Styled Components einbinden", isComplete: true },
  { name: "Hauptseiten erstellen (Home, About, Portfolio, Einzelprojekt)", isComplete: true },
  { name: "Bilder im Vollbildmodus anzeigen", isComplete: true },
  {
    name: "Wiederverwendbare Styles: Seitenlayout, Abschnitte, Paragraphen, Überschriften, Button",
    isComplete: true,
  },
  { name: "Navigation mit Sozialicons (Github, Mail, LinkedIn)", isComplete: true },
  { name: "Responsive Design", isComplete: true },
  { name: "Datenbankintegration hinzufügen", isComplete: false },
  { name: "Grafiken mit Animationen hinzufügen / verbessern", isComplete: false },
  { name: "Multilinguale Unterstützung für Englisch und Deutsch (i18next)", isComplete: false },
  { name: "Dunkel- / Hell-Modus implementieren", isComplete: false },
];

/**
 * A component that displays a progress list, showing completed and planned features.
 *
 * @returns The rendered progress list component.
 */
const ProgressList = () => {
  const completedFeatures = features.filter((feature) => feature.isComplete);
  const progress = Math.round((completedFeatures.length / features.length) * 100);
  return (
    <StyledProgressList>
      <SectionLayout headlineText={"Fortschritt"}>
        <CardParagraph>
          {
            "Diese Übersicht zeigt den Prozentsatz der fertiggestellten Funktionen sowie eine Liste der bereits fertiggestellten und der noch geplanten Funktionen."
          }
        </CardParagraph>
        <ProgressBar progressInPercent={progress}></ProgressBar>
        <CardHeadline level={4}>Abgeschlossene Funktionen:</CardHeadline>
        <ul>
          {completedFeatures.map((feature) => (
            <li key={feature.name}>{feature.name}</li>
          ))}
        </ul>
        <CardHeadline level={4}>Noch geplante Funktionen:</CardHeadline>
        <ul>{features.map((feature) => !feature.isComplete && <li key={feature.name}>{feature.name}</li>)}</ul>
      </SectionLayout>
    </StyledProgressList>
  );
};

export default ProgressList;

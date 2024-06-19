// Components
import SectionLayout from "../../../../components/custom/layout/sectionLayout/SectionLayout";
import CardParagraph from "../../../../components/custom/card/cardParagraph/CardParagraph";
import ProgressBar from "../../../../components/custom/card/progressBar/ProgressBar";
import ProgressListWrapper from "./progressListWrapper/ProgressListWrapper";

// Resources
import { progressData } from "../../../../resources/home/progressData";

/**
 * A section component displaying progress information, including a progress bar and progress lists.
 *
 * @returns The rendered progress section component.
 */
const ProgressSection = () => {
  const completedFeatures = progressData.filter((feature) => feature.status === "complete");
  const progressLength = Math.round((completedFeatures.length / progressData.length) * 100);

  return (
    <SectionLayout headlineText={"Entwicklungs-Roadmap"}>
      <CardParagraph
        paragraphs={[
          "Diese Übersicht zeigt den Prozentsatz der fertiggestellten Funktionen sowie eine Liste der bereits fertiggestellten, der in Arbeit befindlichen und der noch geplanten Funktionen.",
        ]}
      />
      <ProgressBar progressInPercent={progressLength}></ProgressBar>
      <ProgressListWrapper list={progressData}></ProgressListWrapper>
    </SectionLayout>
  );
};

export default ProgressSection;

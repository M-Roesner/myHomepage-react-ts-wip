// components
import SectionLayout from "../../../../components/custom/layout/sectionLayout/SectionLayout";
import CardParagraph from "../../../../components/custom/card/cardParagraph/CardParagraph";

const SectionMyFutureCareer = () => {
  return (
    <SectionLayout tagId="future" headlineText="Meine zukünftige Entwicklung.">
      <CardParagraph
        paragraphs={[
          "Mittelfristig konzentriere ich mich darauf, meine Fähigkeiten im Bereich Frontend weiter auszubauen, den ich während meines Praktikums intensiv erleben durfte. Mein Ziel ist es, mein Wissen und meine Fähigkeiten in der Frontend-Entwicklung kontinuierlich zu vertiefen.",
          "Langfristig plane ich, meine Expertise auch im Backend zu erweitern, um letztendlich als Fullstack-Entwickler tätig zu werden. Diese Entwicklung ermöglicht es mir, umfassende Kenntnisse in der gesamten Webentwicklung zu erlangen und vielseitige Projekte erfolgreich umzusetzen.",
        ]}
      />
    </SectionLayout>
  );
};

export default SectionMyFutureCareer;

// components
import SectionLayout from "../../../../components/custom/layout/sectionLayout/SectionLayout";
import { CardParagraph } from "../../../../components/custom/card/cardParagraph/styledCardParagraphStyle";
import { SectionSkillWrapperStyle } from "./sectionSkillWrapperStyle";
import SkillListWrapper from "./skillListWrapper/SkillListWrapper";
import { CardVerticalLineStyleAsSpan } from "../../../../components/custom/card/cardVerticalLine/styledCardVerticalLineStyle";
import SkillDescription from "./skillDescription/SkillDescription";

/**
 * Renders a list of skills and their description.
 */
const SectionSkillWrapper = () => {
  return (
    <SectionLayout tagId="skills" headlineText="Meine Fähigkeiten">
      <CardParagraph>Ein Überblick über meine Fühigkeiten und verwendet Tools.</CardParagraph>
      <SectionSkillWrapperStyle>
        <SkillListWrapper />
        <CardVerticalLineStyleAsSpan />
        <SkillDescription />
      </SectionSkillWrapperStyle>
    </SectionLayout>
  );
};

export default SectionSkillWrapper;

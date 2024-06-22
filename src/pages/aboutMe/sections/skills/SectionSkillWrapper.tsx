// components
import SectionLayout from "../../../../components/custom/layout/sectionLayout/SectionLayout";
import CardParagraph from "../../../../components/custom/card/cardParagraph/CardParagraph";
import { SectionSkillWrapperStyle } from "./sectionSkillWrapperStyle";
import SkillListWrapper from "./skillListWrapper/SkillListWrapper";
import { CardVerticalLineStyleAsSpan } from "../../../../components/custom/card/cardVerticalLine/styledCardVerticalLineStyle";
import SkillDescription from "./skillDescription/SkillDescription";
import useScreenSize from "../../../../utils/hooks/screenSize/useScreenSize";
import SkillListWrapperMobile from "./skillListWrapperMobile/SkillListWrapperMobile";

/**
 * Renders a list of skills and their description.
 */
const SectionSkillWrapper = () => {
  const screnSize = useScreenSize();
  const isMobile = screnSize.deviceType === "mobile" || screnSize.deviceType === "tablet";
  return (
    <SectionLayout tagId="skills" headlineText="Meine Fähigkeiten">
      <CardParagraph
        paragraphs={["Hier erhalten Sie einen Überblick über meine Fähigkeiten und die verwendeten Tools."]}
      />
      <SectionSkillWrapperStyle $fullSize={isMobile}>
        {isMobile && <SkillListWrapperMobile />}
        {!isMobile && <SkillListWrapper />}
        {!isMobile && <CardVerticalLineStyleAsSpan />}
        {!isMobile && <SkillDescription />}
      </SectionSkillWrapperStyle>
    </SectionLayout>
  );
};

export default SectionSkillWrapper;

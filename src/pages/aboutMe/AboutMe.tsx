import CardHeadline from "../../components/custom/card/cardHeadline/CardHeadline";
import CardVerticalLine from "../../components/custom/card/cardVerticalLine/CardVerticalLine";
import SectionIntroduction from "./sections/introduction/SectionIntroduction";
import SectionMyFutureCareer from "./sections/myFutureCareer/SectionMyFutureCareer";
import SectionSkillWrapper from "./sections/skills/SectionSkillWrapper";
import SectionWhyInIt from "./sections/whyInIt/SectionWhyInIt";
import StyledAboutMePage from "./styledAboutMePage";

const AboutMePage = () => {
  return (
    <StyledAboutMePage>
      <CardVerticalLine>
        <CardHeadline level={1}>Über mich</CardHeadline>
        <CardVerticalLine>
          <SectionSkillWrapper />
          <SectionIntroduction />
          <SectionWhyInIt />
          <SectionMyFutureCareer />
        </CardVerticalLine>
      </CardVerticalLine>
    </StyledAboutMePage>
  );
};

export default AboutMePage;
// components
import CardHeadline from "../../components/custom/card/cardHeadline/CardHeadline";
import { CardVerticalLineStyle } from "../../components/custom/card/cardVerticalLine/styledCardVerticalLineStyle";
import SectionIntroduction from "./sections/introduction/SectionIntroduction";
import SectionMyFutureCareer from "./sections/myFutureCareer/SectionMyFutureCareer";
import SectionSkillWrapper from "./sections/skills/SectionSkillWrapper";
import SectionWhyInIt from "./sections/whyInIt/SectionWhyInIt";
import StyledAboutMePage from "./styledAboutMePage";

const AboutMePage = () => {
  return (
    <StyledAboutMePage>
      <CardHeadline level={1}>Über mich</CardHeadline>
      <CardVerticalLineStyle>
        <SectionIntroduction />
        <SectionWhyInIt />
        <SectionSkillWrapper />
        <SectionMyFutureCareer />
      </CardVerticalLineStyle>
    </StyledAboutMePage>
  );
};

export default AboutMePage;

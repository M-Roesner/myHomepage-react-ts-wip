import CardHeadline from "../../components/custom/card/cardHeadline/CardHeadline";
import CardVerticalLine from "../../components/custom/card/cardVerticalLine/CardVerticalLine";
import SectionIntroduction from "./sections/introduction/SectionIntroduction";
import SectionMyFutureCareer from "./sections/myFutureCareer/SectionMyFutureCareer";
import SectionSkillWrapper from "./sections/skills/SectionSkillWrapper";
import SectionWhyInIt from "./sections/whyInIt/SectionWhyInIt";
import StyledHomePage from "./styledHomePage";

const HomePage = () => {
  return (
    <StyledHomePage>
      <CardVerticalLine>
        <CardHeadline level={1}>Über mich</CardHeadline>
        <CardVerticalLine>
          <SectionSkillWrapper />
          <SectionIntroduction />
          <SectionWhyInIt />
          <SectionMyFutureCareer />
        </CardVerticalLine>
      </CardVerticalLine>
    </StyledHomePage>
  );
};

export default HomePage;

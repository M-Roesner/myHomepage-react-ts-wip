// components
import PageLayout from "../../components/custom/layout/pageLayout/PageLayout";
import SectionIntroduction from "./sections/introduction/SectionIntroduction";
import SectionSkillWrapper from "./sections/skills/SectionSkillWrapper";
import SectionWhyInIt from "./sections/whyInIt/SectionWhyInIt";
import SectionMyFutureCareer from "./sections/myFutureCareer/SectionMyFutureCareer";

const AboutMePage = () => {
  return (
    <PageLayout headlineText="Über mich">
      <SectionIntroduction />
      <SectionWhyInIt />
      <SectionSkillWrapper />
      <SectionMyFutureCareer />
    </PageLayout>
  );
};

export default AboutMePage;

// components
import PageLayout from "../../components/custom/layout/pageLayout/PageLayout";
import SectionIntroduction from "./sections/introduction/SectionIntroduction";
import SectionSkillWrapper from "./sections/skills/SectionSkillWrapper";
import SectionWhyInIt from "./sections/whyInIt/SectionWhyInIt";
import SectionMyFutureCareer from "./sections/myFutureCareer/SectionMyFutureCareer";
import SideNavigation from "../../components/custom/navigation/sideNavigation/SideNavigation";

// Helpers
import { useAsideNavigation_about } from "./utils/useAsideNavigation_about";

const AboutMePage = () => {
  const asideNavigation = useAsideNavigation_about();
  return (
    <PageLayout headlineText="Über mich">
      {asideNavigation && <SideNavigation ancorList={asideNavigation} />}
      <SectionIntroduction />
      <SectionWhyInIt />
      <SectionSkillWrapper />
      <SectionMyFutureCareer />
    </PageLayout>
  );
};

export default AboutMePage;

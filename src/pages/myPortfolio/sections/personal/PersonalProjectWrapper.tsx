// Components
import SectionLayout_NoStyle from "../../../../components/custom/layout/sectionLayout/SectionLayout_NoStyle";
import PersonalProjectList from "./personalProject/PersonalProjectList";

const PersonalProjectsWrapper = () => {
  return (
    <SectionLayout_NoStyle headlineText="Private Projekte">
      <PersonalProjectList />
    </SectionLayout_NoStyle>
  );
};

export default PersonalProjectsWrapper;

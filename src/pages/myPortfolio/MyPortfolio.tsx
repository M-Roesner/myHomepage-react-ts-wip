// Components
import PageLayout from "../../components/custom/layout/pageLayout/PageLayout";
import PersonalProjectWrapper from "./sections/personal/PersonalProjectWrapper";

const MyPortfolio = () => {
  return (
    <PageLayout headlineText="MyPortfolio page">
      <PersonalProjectWrapper />
      {/* duplicate for testing */}
      <PersonalProjectWrapper />
    </PageLayout>
  );
};

export default MyPortfolio;

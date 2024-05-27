// Components
import PageLayout from "../../components/custom/layout/pageLayout/PageLayout";
import ProjectWrapper from "./projectsWrapper/ProjectsWrapper";

// Helpers
import { myRetrainingProjects } from "../../resources/portfolio/myRetrainingProjects";
import { myPersonalProjects } from "../../resources/portfolio/myPersonalProjects";
import { myInternshipProjects } from "../../resources/portfolio/myInternshipProjects";

/**
 * Renders the portfolio page displaying various portfolios.
 *
 * @returns {React.ReactNode} - The portfolio page layout containing different portfolios.
 */
const MyPortfolio = (): React.ReactNode => {
  const privateList = myPersonalProjects;
  const retrainingList = myRetrainingProjects;
  const internshipList = myInternshipProjects;

  return (
    <PageLayout headlineText="Meine Portfolios">
      <ProjectWrapper title="Private Projekte" list={privateList} />
      <ProjectWrapper title="Praktikums Projekte" list={internshipList} />
      <ProjectWrapper title="Umschulungs Projekte" list={retrainingList} />
    </PageLayout>
  );
};

export default MyPortfolio;

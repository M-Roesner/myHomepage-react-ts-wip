// Components
import PageLayout from "../../components/custom/layout/pageLayout/PageLayout";
import ProjectWrapper from "./projectsWrapper/ProjectsWrapper";

// Helpers
import { myRetrainingProjects } from "../../resources/portfolio/myRetrainingProjects";

/**
 * Renders the portfolio page displaying various portfolios.
 *
 * @returns {React.ReactNode} - The portfolio page layout containing different portfolios.
 */
const MyPortfolio = () => {
  const retrainingList = myRetrainingProjects;

  return (
    <PageLayout headlineText="Meine Portfolios">
      <ProjectWrapper title="Umschulungs Projekte" list={retrainingList} />
    </PageLayout>
  );
};

export default MyPortfolio;

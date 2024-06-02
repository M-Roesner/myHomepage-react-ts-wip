// Components
import SectionLayout_NoStyle from "../../../components/custom/layout/sectionLayout/SectionLayout_NoStyle";
import { StyledGrid } from "../../../components/custom/grid/styledGrid";
import CardProject from "../../../components/custom/card/cardProject/CardProject";

// Helpers
import { sortListByKeyType } from "../../../utils/sortListByKeyType";

// Types & Enums
import { ERouteType } from "../../../routes/router";
import { ProjectType } from "../types/projectTypes";

type ProjectsWrapperProps = { title: string; list: ProjectType[] };

/**
 * Renders a list of projects.
 *
 * Sorted by update date.
 *
 * @param {Object} props - The props object.
 * @param {string} props.title - The title of the project wrapper.
 * @param {Project[]} props.list - The list of projects to be displayed.
 * @returns {React.ReactNode} - A grid layout displaying the list of projects as cards within a section.
 */
const ProjectsWrapper = ({ title, list }: ProjectsWrapperProps): React.ReactNode => {
  const sortedList = sortListByKeyType(list, "updatedDate");

  return (
    <SectionLayout_NoStyle headlineText={title}>
      <StyledGrid>
        {sortedList.map((project, index) => (
          <CardProject
            key={index}
            url={`/${ERouteType.PROJECT}/${project.category}/${project.id}`}
            content={project}
          ></CardProject>
        ))}
      </StyledGrid>
    </SectionLayout_NoStyle>
  );
};

export default ProjectsWrapper;

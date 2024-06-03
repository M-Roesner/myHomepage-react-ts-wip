// Components
import SectionLayout_NoStyle from "../../../components/custom/layout/sectionLayout/SectionLayout_NoStyle";
import { StyledGrid } from "../../../components/custom/grid/styledGrid";

// Helpers
import { sortListByKeyType } from "../../../utils/sortListByKeyType";
import { middlewareProjectTypeToCardInfoBoxProps as middleware_ProjectType_To_CardInfoBoxProps } from "./middlewere.helper";

// Types & Enums
import { ProjectType } from "../types/projectTypes";
import CardInfoBox from "../../../components/custom/card/CardInfoBox/CardInfoBox";

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
        {sortedList.map((project, index) => {
          const convertetProject = middleware_ProjectType_To_CardInfoBoxProps(project);
          return (
            <CardInfoBox
              key={index}
              route={convertetProject.route}
              title={convertetProject.title}
              descriptions={convertetProject.descriptions}
              image={convertetProject.image}
              isBGImage={convertetProject.isBGImage}
            />
          );
        })}
      </StyledGrid>
    </SectionLayout_NoStyle>
  );
};

export default ProjectsWrapper;

// Components
import ListLayout from "../../../components/custom/layout/listLayout/ListLayout";
import { ListItemType, NumerusType } from "../../../components/custom/layout/listLayout/listLayoutTypes";
import SectionLayout_NoStyle from "../../../components/custom/layout/sectionLayout/SectionLayout_NoStyle";

type ProjectListProps = {
  title: string;
  tagId: string;
  list: ListItemType[];
  numerusText?: NumerusType;
};

/**
 * Currently returns a section with a list of skills or links from a project for a single project.
 *
 * @param {string} props.title - Title of the section
 * @param {string} props.tagId - props.tagId - Unique identifier for direct navigation via the URL to the corresponding "#tagId" section.
 * @param {ListItemType[]} props.list - An array of ListItemType objects.
 * @param {string} props.numerusText - The text to be displayed when there are more items present than currently shown in the list.
 * @returns
 */
const ProjectList = ({ title, tagId, list, numerusText }: ProjectListProps): JSX.Element => {
  if (!list) return <></>;
  return (
    <SectionLayout_NoStyle tagId={tagId} headlineText={title}>
      <ListLayout list={list} numerusText={numerusText}></ListLayout>
    </SectionLayout_NoStyle>
  );
};

export default ProjectList;

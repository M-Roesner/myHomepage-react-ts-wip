// Components
import ListLayout from "../../../../components/custom/layout/listLayout/ListLayout";
import SectionLayout_NoStyle from "../../../../components/custom/layout/sectionLayout/SectionLayout_NoStyle";

// Types & Enums
import { EProjectTagId } from "../../projectEnums";
import { NumerusType } from "../../../../components/custom/layout/customListLayout/NumerusTextButton/NumerusTextButton";
import { ListItemType } from "../../../../components/custom/layout/listLayout/listLayoutTypes";

type ProjectListProps = {
  title: string;
  tagId: EProjectTagId;
  list: ListItemType[];
  numerusText?: NumerusType;
};

/**
 * Currently returns a section with a list of skills or links from a project for a single project.
 *
 * @param {string} props.title - Title of the section
 * @param {EProjectTagId} props.tagId - props.tagId - Unique identifier for direct navigation via the URL to the corresponding "#tagId" section.
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

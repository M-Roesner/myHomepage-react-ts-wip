import SectionLayout from "../../../components/custom/layout/sectionLayout/SectionLayout";
import { EProjectTagId } from "../projectEnums";
import { StyledSimpleList } from "./styledSimpleList";

type SimpleListProps = {
  title: string;
  tagId: EProjectTagId;
  list: string[];
};

/**
 * Renders a simple list.
 *
 * @param {string} props.title - Title of the section
 * @param {EProjectTagId} props.tagId - props.tagId - Unique identifier for direct navigation via the URL to the corresponding "#tagId" section.
 * @param {string[]} props.list - An array of string.
 * @returns
 */
const SimpleList = ({ title, tagId, list }: SimpleListProps) => {
  return (
    <SectionLayout tagId={tagId} headlineText={title}>
      <StyledSimpleList>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </StyledSimpleList>
    </SectionLayout>
  );
};

export default SimpleList;

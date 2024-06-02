// Components
import SectionLayout from "../../../../components/custom/layout/sectionLayout/SectionLayout";
import { CardParagraph } from "../../../../components/custom/card/cardParagraph/styledCardParagraphStyle";

// Types & Enums
import { EProjectTagId } from "../../projectEnums";

type ParagraphListProps = {
  title: string;
  tagId: EProjectTagId | string;
  list: string[];
};

/**
 * Returns a section with a title and a list of paragraphs.
 *
 * @param {string} props.title - Title of the section
 * @param {EProjectTagId} props.tagId - Unique identifier for direct navigation via the URL to the corresponding "#tagId" section.
 * @param {React.ReactNode} props.children
 */
const ParagraphList = ({ title, tagId, list }: ParagraphListProps) => {
  return (
    <SectionLayout tagId={tagId} headlineText={title}>
      {list.map((item, index) => (
        <CardParagraph key={index}>{item}</CardParagraph>
      ))}
    </SectionLayout>
  );
};

export default ParagraphList;

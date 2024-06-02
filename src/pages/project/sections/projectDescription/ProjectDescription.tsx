// Components
import { CardParagraph } from "../../../../components/custom/card/cardParagraph/styledCardParagraphStyle";
import SectionLayout from "../../../../components/custom/layout/sectionLayout/SectionLayout";

// Types & Enums
import { EProjectTagId } from "../../projectEnums";

type PortfolioDescriptionProps = {
  title: string;
  tagId: EProjectTagId;
  list: string[];
};

/**
 * Returns a section with a description.
 *
 * @param {string} props.title - Title of the section
 * @param {EProjectTagId} props.tagId - Unique identifier for direct navigation via the URL to the corresponding "#tagId" section.
 * @param {React.ReactNode} props.children
 */
const ProjectDescription = ({ title, tagId, list }: PortfolioDescriptionProps) => {
  return (
    <SectionLayout tagId={tagId} headlineText={title}>
      {list.map((item, index) => (
        <CardParagraph key={index}>{item}</CardParagraph>
      ))}
    </SectionLayout>
  );
};

export default ProjectDescription;

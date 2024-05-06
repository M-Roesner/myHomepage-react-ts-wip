// Components
import { CardParagraphStyle } from "../../../components/custom/card/cardParagraph/styledCardParagraphStyle";
import SectionLayout from "../../../components/custom/layout/sectionLayout/SectionLayout";

type PortfolioDescriptionProps = {
  title: string;
  tagId: string;
  children: React.ReactNode;
};

/**
 * Returns a section with a description.
 *
 * @param {string} props.title - Title of the section
 * @param {string} props.tagId - Unique identifier for direct navigation via the URL to the corresponding "#tagId" section.
 * @param {React.ReactNode} props.children
 */
const ProjectDescription = ({ title, tagId, children }: PortfolioDescriptionProps) => {
  return (
    <SectionLayout tagId={tagId} headlineText={title}>
      <CardParagraphStyle>{children}</CardParagraphStyle>
    </SectionLayout>
  );
};

export default ProjectDescription;

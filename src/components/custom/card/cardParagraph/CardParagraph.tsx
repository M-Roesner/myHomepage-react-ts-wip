import { StyledCardParagraph } from "./styledCardParagraph";

type CardParagraphProps = {
  paragraphs: string[];
};

/**
 * A component for rendering one or more paragraphs of text in a styled card format.
 *
 * @param {string[]} paragraphs An array of strings representing the paragraphs of text to be rendered.
 * @returns The rendered card paragraph component.
 */
const CardParagraph = ({ paragraphs }: CardParagraphProps) => {
  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <StyledCardParagraph key={index}>{paragraph}</StyledCardParagraph>
      ))}
    </>
  );
};

export default CardParagraph;

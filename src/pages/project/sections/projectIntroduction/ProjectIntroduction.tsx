import { CardParagraph } from "../../../../components/custom/card/cardParagraph/styledCardParagraphStyle";

type ProjectIntroductionProps = {
  texts: string[];
};

const ProjectIntroduction = ({ texts }: ProjectIntroductionProps) => {
  return (
    <div>
      {texts.map((text, index) => (
        <CardParagraph key={index}>{text}</CardParagraph>
      ))}
    </div>
  );
};

export default ProjectIntroduction;

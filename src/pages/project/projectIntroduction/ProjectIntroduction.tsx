import { CardParagraphStyle } from "../../../components/custom/card/cardParagraph/styledCardParagraphStyle";

type ProjectIntroductionProps = {
  texts: string[];
};

const ProjectIntroduction = ({ texts }: ProjectIntroductionProps) => {
  return (
    <div>
      {texts.map((text, index) => (
        <CardParagraphStyle key={index}>{text}</CardParagraphStyle>
      ))}
    </div>
  );
};

export default ProjectIntroduction;

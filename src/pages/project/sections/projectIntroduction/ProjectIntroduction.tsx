import CardParagraph from "../../../../components/custom/card/cardParagraph/CardParagraph";

type ProjectIntroductionProps = {
  texts: string[];
};

const ProjectIntroduction = ({ texts }: ProjectIntroductionProps) => {
  return (
    <div>
      <CardParagraph paragraphs={texts} />
    </div>
  );
};

export default ProjectIntroduction;

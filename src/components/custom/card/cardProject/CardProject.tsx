import { ProjectType } from "../../../../pages/myPortfolio/types/projectTypes";
import CardHeadline from "../cardHeadline/CardHeadline";
import { CardParagraphStyle } from "../cardParagraph/styledCardParagraphStyle";
import { StyledCardImage } from "./styledCardImage";
import { StyledCardProject } from "./styledCardProject";

type CardProjectProps = {
  content: ProjectType;
};

const CardProject = ({ content }: CardProjectProps) => {
  const previewImageSrc = content.imgSrc?.find((img) => img.isPreviewImage);
  return (
    <StyledCardProject>
      {previewImageSrc && <StyledCardImage src={previewImageSrc.imgSrc} alt={previewImageSrc.imgAlt} />}
      <CardHeadline level={4}>{content.title}</CardHeadline>
      <CardParagraphStyle>{content.cardIntroduction}</CardParagraphStyle>
    </StyledCardProject>
  );
};

export default CardProject;

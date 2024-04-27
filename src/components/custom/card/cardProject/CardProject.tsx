import { ProjectType } from "../../../../pages/myPortfolio/types/projectTypes";
import CardHeadline from "../cardHeadline/CardHeadline";
import { CardParagraphStyle } from "../cardParagraph/styledCardParagraphStyle";
import { StyledCardImage } from "./styledCardImage";
import { StyledCardProject } from "./styledCardProject";

type CardProjectProps = {
  url: string;
  content: ProjectType;
};

const CardProject = ({ url, content }: CardProjectProps) => {
  const previewImage = content.imgSrc?.find((img) => img.isPreviewImage);
  return (
    <StyledCardProject to={url}>
      {previewImage && (
        <StyledCardImage
          src={previewImage.imgSrc}
          alt={previewImage.imgAlt ? previewImage.imgAlt : previewImage.imgTitle}
        />
      )}
      <CardHeadline level={4}>{content.title}</CardHeadline>
      <CardParagraphStyle>{content.cardIntroduction}</CardParagraphStyle>
    </StyledCardProject>
  );
};

export default CardProject;

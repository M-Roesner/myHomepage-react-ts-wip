import { ProjectType } from "../../../../pages/myPortfolio/types/projectTypes";
import CardHeadline from "../cardHeadline/CardHeadline";
import { CardParagraphStyle } from "../cardParagraph/styledCardParagraphStyle";
import { StyledCardImage } from "../cardImage/styledCardImage";
import { StyledCardProject } from "./styledCardProject";

type CardProjectProps = {
  url: string;
  content: ProjectType;
};

const CardProject = ({ url, content }: CardProjectProps) => {
  const previewImage = content.images?.find((img) => img.isMainPreview);
  return (
    <StyledCardProject to={url}>
      {previewImage && (
        <StyledCardImage
          src={previewImage.imgSrcs.mobile}
          alt={previewImage.imgAlt ? previewImage.imgAlt : previewImage.imgTitle}
        />
      )}
      <CardHeadline level={4}>{content.title}</CardHeadline>
      {content.cardIntroduction.map((paragraph, index) => (
        <CardParagraphStyle key={index}>{paragraph}</CardParagraphStyle>
      ))}
    </StyledCardProject>
  );
};

export default CardProject;

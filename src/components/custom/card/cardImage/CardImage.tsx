import { StyledImage, styledImageContainer as StyledImageContainer } from "./styledCardImage";

type CardImageProps = {
  src: string;
  alt?: string;
};
const CardImage = ({ src, alt }: CardImageProps) => {
  return (
    <StyledImageContainer>
      <StyledImage src={src} alt={alt} />
    </StyledImageContainer>
  );
};

export default CardImage;

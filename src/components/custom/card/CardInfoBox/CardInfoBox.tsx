import CardHeadline from "../cardHeadline/CardHeadline";
import { StyledCardImage } from "../cardImage/styledCardImage";
import { CardParagraph } from "../cardParagraph/styledCardParagraphStyle";
import { ERouteType } from "../../../../routes/router";
import { StyledInfoCard_NavLink } from "./styledCardInfoBox";

export type CardInfoBoxImageType = {
  imgSrc: string;
  imgAlt?: string;
};

type CardInfoBoxProps = {
  route: ERouteType;
  title: string;
  descriptions: string[];
  image?: CardInfoBoxImageType;
  isBGImage?: boolean;
};

/**
 * Renders an info card component with optional background image.
 *
 * @param {Object} props - The props object.
 * @param {ERouteType} props.route - The route URL navigates to a specific route.
 * @param {string} props.title - The title of the card.
 * @param {string[]} props.descriptions - An array of descriptions for the card.
 * @param {CardInfoBoxImageType} [props.image] - An optional object containing information about the card's image.
 * @param {string} props.image.imgSrc - The source URL of the card's image.
 * @param {string} [props.image.imgAlt] - Optional alternate text for the card's image.
 * @param {boolean} [props.isBGImage] - Boolean flag indicating whether the image should be used as a background image.
 *
 * @returns {React.ReactNode} - A styled info card component.
 */
const CardInfoBox = ({ route, title, descriptions, image, isBGImage }: CardInfoBoxProps): React.ReactNode => {
  return (
    <StyledInfoCard_NavLink $bgImage={isBGImage ? image?.imgSrc : undefined} $display="block" to={`/${route}`}>
      {!isBGImage && image && <StyledCardImage src={image.imgSrc} alt={image.imgAlt} />}
      <CardHeadline level={4}>{title}</CardHeadline>
      {descriptions.map((description, index) => (
        <CardParagraph key={index}>{description}</CardParagraph>
      ))}
    </StyledInfoCard_NavLink>
  );
};

export default CardInfoBox;

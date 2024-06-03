import CardHeadline from "../../../../../components/custom/card/cardHeadline/CardHeadline";
import { StyledCardImage } from "../../../../../components/custom/card/cardImage/styledCardImage";
import { CardParagraph } from "../../../../../components/custom/card/cardParagraph/styledCardParagraphStyle";
import { ERouteType } from "../../../../../routes/router";
import { StyledInfoCard_NavLink } from "./styledInfoCard";

export type InfoCardImageType = {
  imgSrc: string;
  imgAlt?: string;
};

type InfoCardProps = {
  url: ERouteType;
  title: string;
  descriptions: string[];
  image?: InfoCardImageType;
  isBGImage?: boolean;
};

/**
 * Renders an info card component with optional background image.
 *
 * @param {Object} props - The props object.
 * @param {ERouteType} props.url - The route URL the card navigates to.
 * @param {string} props.title - The title of the card.
 * @param {string[]} props.descriptions - An array of descriptions for the card.
 * @param {InfoCardImageType} [props.image] - An optional object containing information about the card's image.
 * @param {string} props.image.imgSrc - The source URL of the card's image.
 * @param {string} [props.image.imgAlt] - Optional alternate text for the card's image.
 * @param {boolean} [props.isBGImage] - Boolean flag indicating whether the image should be used as a background image.
 *
 * @returns {React.ReactNode} - A styled info card component.
 */

const InfoCard = ({ url, title, descriptions, image, isBGImage }: InfoCardProps): React.ReactNode => {
  return (
    <StyledInfoCard_NavLink $bgImage={isBGImage ? image?.imgSrc : undefined} $display="block" to={`/${url}`}>
      {!isBGImage && image && <StyledCardImage src={image.imgSrc} alt={image.imgAlt} />}
      <CardHeadline level={4}>{title}</CardHeadline>
      {descriptions.map((description, index) => (
        <CardParagraph key={index}>{description}</CardParagraph>
      ))}
    </StyledInfoCard_NavLink>
  );
};

export default InfoCard;

import CardHeadline from "../../../../../components/custom/card/cardHeadline/CardHeadline";
import { CardParagraph } from "../../../../../components/custom/card/cardParagraph/styledCardParagraphStyle";
import { ERouteType } from "../../../../../routes/router";
import { StyledInfoCard_NavLink } from "./styledInfoCard";

type InfoCardProps = {
  url: ERouteType;
  title: string;
  descriptions: string[];
  bgImage?: string;
};
const InfoCard = ({ url, title, descriptions }: InfoCardProps) => {
  // TODO: BgImage: set a background image to the card.
  return (
    <StyledInfoCard_NavLink $display="block" to={`/${url}`}>
      <CardHeadline level={4}>{title}</CardHeadline>
      {descriptions.map((description, index) => (
        <CardParagraph key={index}>{description}</CardParagraph>
      ))}
    </StyledInfoCard_NavLink>
  );
};

export default InfoCard;

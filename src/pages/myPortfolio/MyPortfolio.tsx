import CardHeadline from "../../components/custom/card/cardHeadline/CardHeadline";
import { CardVerticalLineStyle } from "../../components/custom/card/cardVerticalLine/styledCardVerticalLineStyle";
import PersonalProjectWrapper from "./sections/personal/PersonalProjectWrapper";
import { StyledMyPortfolio } from "./styledMyPortfolio";

const MyPortfolio = () => {
  return (
    <StyledMyPortfolio>
      <CardVerticalLineStyle>
        <CardHeadline level={1}>MyPortfolio page</CardHeadline>
        <PersonalProjectWrapper />
      </CardVerticalLineStyle>
    </StyledMyPortfolio>
  );
};

export default MyPortfolio;

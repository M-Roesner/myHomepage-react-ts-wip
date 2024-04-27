import CardHeadline from "../../components/custom/card/cardHeadline/CardHeadline";
import PersonalProjectWrapper from "./sections/personal/PersonalProjectWrapper";
import { StyledMyPortfolio } from "./styledMyPortfolio";

const MyPortfolio = () => {
  return (
    <StyledMyPortfolio>
      <CardHeadline level={1}>MyPortfolio page</CardHeadline>
      <PersonalProjectWrapper />
    </StyledMyPortfolio>
  );
};

export default MyPortfolio;

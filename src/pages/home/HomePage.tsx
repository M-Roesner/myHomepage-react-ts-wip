import CardHeadline from "../../components/custom/card/cardHeadline/CardHeadline";
import CardVerticalLine from "../../components/custom/card/cardVerticalLine/CardVerticalLine";
import StyledHomePage from "./styledHomePage";

const HomePage = () => {
  return (
    <StyledHomePage>
      <CardVerticalLine>
        <CardHeadline level={1}>Home Page</CardHeadline>
      </CardVerticalLine>
    </StyledHomePage>
  );
};

export default HomePage;

import CardHeadline from "../../../../components/custom/card/cardHeadline/CardHeadline";
import { CardVerticalLineStyle } from "../../../../components/custom/card/cardVerticalLine/styledCardVerticalLineStyle";
import PersonalProjectList from "./personalProject/PersonalProjectList";
import { StyledPersonalProjectWrapper } from "./styledPersonalProjectWrapper";

const PersonalProjectsWrapper = () => {
  return (
    <StyledPersonalProjectWrapper>
      <CardVerticalLineStyle>
        <CardHeadline level={2}>Private Projekte</CardHeadline>
        <CardVerticalLineStyle>
          <PersonalProjectList></PersonalProjectList>
        </CardVerticalLineStyle>
      </CardVerticalLineStyle>
    </StyledPersonalProjectWrapper>
  );
};

export default PersonalProjectsWrapper;

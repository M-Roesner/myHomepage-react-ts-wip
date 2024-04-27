// Components
import { StyledPersonalProjectWrapper } from "./styledPersonalProjectWrapper";
import CardHeadline from "../../../../components/custom/card/cardHeadline/CardHeadline";
import PersonalProjectList from "./personalProject/PersonalProjectList";

const PersonalProjectsWrapper = () => {
  return (
    <StyledPersonalProjectWrapper>
      <CardHeadline level={2}>Private Projekte</CardHeadline>
      <PersonalProjectList />
    </StyledPersonalProjectWrapper>
  );
};

export default PersonalProjectsWrapper;

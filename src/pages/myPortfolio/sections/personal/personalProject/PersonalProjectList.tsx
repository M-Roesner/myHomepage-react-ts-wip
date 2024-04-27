import CardProject from "../../../../../components/custom/card/cardProject/CardProject";
import { mySamplePrivateProjects } from "../../../../../resources/samples/portfolio/mySamplePrivateProjects";
import { ERouteType } from "../../../../../routes/router";
import { DefaultProjectGridStyle } from "../../defaultProjectGridStyle";

const PersonalProjectList = () => {
  const privateProjectList = mySamplePrivateProjects;
  return (
    <DefaultProjectGridStyle>
      <CardProject url={`/${ERouteType.MY_PORTFOLIO}/1`} content={privateProjectList[0]}></CardProject>
      <CardProject url={`/${ERouteType.MY_PORTFOLIO}/2`} content={privateProjectList[1]}></CardProject>
      <CardProject url={`/${ERouteType.MY_PORTFOLIO}/3`} content={privateProjectList[1]}></CardProject>
      <CardProject url={`/${ERouteType.MY_PORTFOLIO}/4`} content={privateProjectList[0]}></CardProject>
      <CardProject url={`/${ERouteType.MY_PORTFOLIO}/5`} content={privateProjectList[1]}></CardProject>
    </DefaultProjectGridStyle>
  );
};

export default PersonalProjectList;

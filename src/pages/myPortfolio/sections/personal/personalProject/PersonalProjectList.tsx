import CardProject from "../../../../../components/custom/card/cardProject/CardProject";
import { mySamplePrivateProjects } from "../../../../../resources/samples/portfolio/mySamplePrivateProjects";
import { ERouteType } from "../../../../../routes/router";
import { DefaultProjectGridStyle } from "../../defaultProjectGridStyle";

const PersonalProjectList = () => {
  const privateList = mySamplePrivateProjects;

  return (
    <DefaultProjectGridStyle>
      <CardProject
        url={`/${ERouteType.MY_PORTFOLIO}/${privateList[0].category}/blub`}
        content={privateList[0]}
      ></CardProject>
      <CardProject
        url={`/${ERouteType.MY_PORTFOLIO}/${privateList[1].category}/${privateList[1].id}`}
        content={privateList[1]}
      ></CardProject>
      <CardProject
        url={`/${ERouteType.MY_PORTFOLIO}/${privateList[1].category}/${privateList[1].id}`}
        content={privateList[1]}
      ></CardProject>
      <CardProject
        url={`/${ERouteType.MY_PORTFOLIO}/${privateList[0].category}/${privateList[0].id}`}
        content={privateList[0]}
      ></CardProject>
      <CardProject
        url={`/${ERouteType.MY_PORTFOLIO}/${privateList[1].category}/${privateList[1].id}`}
        content={privateList[1]}
      ></CardProject>
    </DefaultProjectGridStyle>
  );
};

export default PersonalProjectList;

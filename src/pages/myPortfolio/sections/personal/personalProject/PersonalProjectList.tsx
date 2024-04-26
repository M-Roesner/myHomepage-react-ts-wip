import CardProject from "../../../../../components/custom/card/cardProject/CardProject";
import { mySamplePrivateProjects } from "../../../../../resources/samples/portfolio/mySamplePrivateProjects";

const PersonalProjectList = () => {
  const privateProjectList = mySamplePrivateProjects;
  return (
    <>
      {/* TODO: display flex */}
      <CardProject content={privateProjectList[0]}></CardProject>
      <CardProject content={privateProjectList[1]}></CardProject>
    </>
  );
};

export default PersonalProjectList;

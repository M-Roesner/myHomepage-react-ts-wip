// Components
import SectionLayout_NoStyle from "../../../../components/custom/layout/sectionLayout/SectionLayout_NoStyle";
import { StyledFlexbox } from "../../../../components/custom/grid/styledFlexbox";
import CardInfoBox from "../../../../components/custom/card/CardInfoBox/CardInfoBox";

// Resources
import aboutMeImage from "/src/assets/home/aboutMe/aboutMe-PVA-Code.png";
import projectImage from "/src/assets/home/project/finalGame-600pxWide.png";

// Types
import { ERouteType } from "../../../../routes/router";

const InfoCardSection = () => {
  return (
    <SectionLayout_NoStyle headlineText={"Über mich und meine Arbeit"}>
      <StyledFlexbox>
        <CardInfoBox
          route={ERouteType.ABOUT_ME}
          title={"Über mich"}
          descriptions={[
            "Erfahren Sie mehr über mich, meine berufliche Laufbahn und meine Fähigkeiten in der Softwareentwicklung.",
          ]}
          image={{ imgSrc: aboutMeImage }}
          isBGImage
        />
        <CardInfoBox
          route={ERouteType.MY_PORTFOLIO}
          title={"Mein Portfolio"}
          descriptions={[
            "Entdecken Sie die Projekte, an denen ich gearbeitet habe, und erfahren Sie mehr über meine Vorgehensweise.",
          ]}
          image={{ imgSrc: projectImage }}
          isBGImage
        />
      </StyledFlexbox>
    </SectionLayout_NoStyle>
  );
};

export default InfoCardSection;

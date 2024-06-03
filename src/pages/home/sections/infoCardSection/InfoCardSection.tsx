// Components
import SectionLayout_NoStyle from "../../../../components/custom/layout/sectionLayout/SectionLayout_NoStyle";
import { StyledFlexbox } from "../../../../components/custom/grid/styledFlexbox";
import InfoCard from "./infoCard/InfoCard";

// Resources
import aboutMeImage from "/src/assets/home/aboutMe/aboutMe-PVA-Code.png";
import projectImage from "/src/assets/home/project/finalGame-600pxWide.png";

// Types
import { ERouteType } from "../../../../routes/router";

const InfoCardSection = () => {
  return (
    <SectionLayout_NoStyle headlineText={"Über mich und meine Arbeit"}>
      <StyledFlexbox>
        <InfoCard
          url={ERouteType.ABOUT_ME}
          title={"Über mich"}
          descriptions={[
            "Wollen Sie mehr über mich erfahren, wer ich bin, was meine Fähigkeiten sind und wie Sie mit mir in Kontakt treten können. Dann klicken Sie diese Box an!",
          ]}
          image={{ imgSrc: aboutMeImage }}
          isBGImage
        />
        <InfoCard
          url={ERouteType.MY_PORTFOLIO}
          title={"Mein Portfolio"}
          descriptions={[
            "Hier können Sie sehen, welche Projekte ich bereits umgesetzt habe und auch wie ich vorgegangen bin.",
          ]}
          image={{ imgSrc: projectImage }}
          isBGImage
        />
      </StyledFlexbox>
    </SectionLayout_NoStyle>
  );
};

export default InfoCardSection;

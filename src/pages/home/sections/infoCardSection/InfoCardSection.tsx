import { StyledFlexbox } from "../../../../components/custom/grid/styledFlexbox";
import SectionLayout_NoStyle from "../../../../components/custom/layout/sectionLayout/SectionLayout_NoStyle";
import { ERouteType } from "../../../../routes/router";
import InfoCard from "./infoCard/InfoCard";

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
        />
        <InfoCard
          url={ERouteType.MY_PORTFOLIO}
          title={"Mein Portfolio"}
          descriptions={[
            "Hier können Sie sehen, welche Projekte ich bereits umgesetzt habe und auch wie ich vorgegangen bin.",
          ]}
        />
      </StyledFlexbox>
    </SectionLayout_NoStyle>
  );
};

export default InfoCardSection;

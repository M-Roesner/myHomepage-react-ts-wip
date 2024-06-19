import { styled } from "styled-components";
import { Link } from "react-router-dom";

// Components
import PageLayout from "../../components/custom/layout/pageLayout/PageLayout";
import SectionLayout from "../../components/custom/layout/sectionLayout/SectionLayout";
import CardParagraph from "../../components/custom/card/cardParagraph/CardParagraph";

/**
 * Displays a Link button without any styles, only the color &:hover will be displayed.
 */
const StyledLinkButton_OnlyText = styled(Link)`
  /* text-decoration: none; */
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  padding: 0;
  margin-block: auto;
  height: min-content;

  color: ${(props) => props.theme.colors.button.backgroundColor};
  &:hover {
    color: ${(props) => props.theme.colors.button.backgroundColor_Hover};
  }
`;

const ImprintPage = () => {
  // TODO: Adjust imprint page
  return (
    <PageLayout headlineText="Impressum">
      <SectionLayout headlineText="Verantwortlich für den Inhalt:">
        <CardParagraph paragraphs={["Markus Rösner", "Hochstadterstr. 6", "76877 Offenbach an der Queich"]} />
      </SectionLayout>

      <SectionLayout headlineText="Kontakt:">
        <CardParagraph paragraphs={["Telefon: +49 (0) 179 6755398", "E-Mail: contact@markus-roesner.dev"]} />
      </SectionLayout>

      <SectionLayout headlineText={"Verwendete Icons und Lizenzen:"}>
        Icons von{" "}
        <StyledLinkButton_OnlyText to="https://fontawesome.com/" target="_blank">
          Font Awesome
        </StyledLinkButton_OnlyText>
        ,
        <br />
        lizenziert unter der{" "}
        <StyledLinkButton_OnlyText to="https://creativecommons.org/licenses/by/4.0/" target="_blank">
          Creative Commons Attribution 4.0 International License
        </StyledLinkButton_OnlyText>
        <br />
        <br />
        Icons von{" "}
        <StyledLinkButton_OnlyText to="https://simpleicons.org/" target="_blank">
          Simple Icons
        </StyledLinkButton_OnlyText>
        ,
        <br />
        lizenziert unter der{" "}
        <StyledLinkButton_OnlyText to="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank">
          Creative Commons Zero v1.0 Universal License
        </StyledLinkButton_OnlyText>
        <br />
        <br />
        Icons von{" "}
        <StyledLinkButton_OnlyText to="https://vorillaz.github.io/devicons/" target="_blank">
          Devicons
        </StyledLinkButton_OnlyText>
        ,
        <br />
        lizenziert unter der{" "}
        <StyledLinkButton_OnlyText to="https://opensource.org/license/MIT" target="_blank">
          MIT License
        </StyledLinkButton_OnlyText>
      </SectionLayout>
      <SectionLayout headlineText="Datenschutzerklärung:">
        <CardParagraph
          paragraphs={[
            "Ich speichere und verarbeite keine personenbezogenen Daten auf dieser Website. Es werden keine Cookies zur Benutzeranalyse oder Werbung verwendet.",
          ]}
        />
      </SectionLayout>
      <SectionLayout headlineText="Urheberrecht:">
        <CardParagraph
          paragraphs={[
            "Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet.",
            "Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
            "Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.",
          ]}
        ></CardParagraph>
      </SectionLayout>
    </PageLayout>
  );
};

export default ImprintPage;

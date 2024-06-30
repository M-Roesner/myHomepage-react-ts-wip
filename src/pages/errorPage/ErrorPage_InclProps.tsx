import { useRouteError } from "react-router-dom";

// Components
import { StyledErrorPage_InclProps } from "./styledErrorPage_InclProps";
import CardHeadline from "../../components/custom/card/cardHeadline/CardHeadline";
import CardParagraph from "../../components/custom/card/cardParagraph/CardParagraph";
import { StyledLinkButton } from "../../components/custom/button/linkButton/styledLinkButton";

// Enums
import { ERouteType } from "../../routes/router";

/**
 * My own typification for dealing with the error which I know.
 *
 * TODO: Types for react router and adding error handling
 * npm i --save @types/react-router
 * npm i --save @types/react-router-dom
 */
type RouterErrorProps = {
  statusText?: string;
  message?: string;
  status?: number | string;
  data?: string;
  internal?: boolean;
  error?: {
    message?: string;
    stack?: string;
  };
};

type ErrorPageProps = {
  url?: ERouteType;
  titleButton?: string;
  descriptionText?: string;
};

const ErrorPage_InclProps = ({ url, titleButton, descriptionText }: ErrorPageProps) => {
  const error = useRouteError() as RouterErrorProps;

  return (
    <StyledErrorPage_InclProps>
      <CardHeadline level={1} children={"Es ist ein Fehler aufgetreten"} />
      {descriptionText && <CardParagraph paragraphs={[descriptionText]} />}
      {error?.status && <CardParagraph paragraphs={[`Status: '${error.status}'`]} />}
      {error?.statusText && <CardParagraph paragraphs={[`Status Text: '${error.statusText}'`]} />}
      {/* {error?.data && <CardParagraph paragraphs={[`data: '${error.data}'`]} />} */}
      {error?.error?.message && <CardParagraph paragraphs={[`Message: '${error.error.message}'`]} />}
      <div style={{ marginBlock: "20px" }}>
        <StyledLinkButton to={url ? `/${url}` : "/"}>{url ? titleButton : "Zur Hauptseite"}</StyledLinkButton>
      </div>
    </StyledErrorPage_InclProps>
  );
};

export default ErrorPage_InclProps;

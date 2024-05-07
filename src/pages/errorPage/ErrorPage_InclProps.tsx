// Components
import { StyledLinkButton } from "../../components/custom/button/linkButton/styledLinkButton";

// Enums
import { ERouteType } from "../../routes/router";

type ErrorPageProps = {
  url: ERouteType;
  titleButton: string;
  descriptionText: string;
};

const ErrorPage_InclProps = ({ url, titleButton, descriptionText }: ErrorPageProps) => {
  return (
    <p
      style={{
        backgroundColor: "orange",
        color: "black",
        height: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {descriptionText}
      <br />
      <br />
      <StyledLinkButton to={`/${url}`}>{titleButton}</StyledLinkButton>
    </p>
  );
};

export default ErrorPage_InclProps;

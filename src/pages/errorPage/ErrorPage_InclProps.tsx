import { Link } from "react-router-dom";

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
      <Link style={{ color: "red" }} to={`/${url}`}>
        {titleButton}
      </Link>
    </p>
  );
};

export default ErrorPage_InclProps;

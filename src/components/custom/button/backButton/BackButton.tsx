import { useNavigate } from "react-router-dom";

// Components
import { StyledBackButton } from "./styledBackButton";
import { StyledNormalButton } from "../normalButton/styledNormalButton";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <StyledBackButton>
      <StyledNormalButton style={{ height: "max-content", transform: "scaleX(-1)" }} onClick={() => navigate(-1)}>
        &#10149;
      </StyledNormalButton>
    </StyledBackButton>
  );
};

export default BackButton;

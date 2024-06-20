import { useNavigate } from "react-router-dom";

// Components
import { StyledNormalButton } from "../normalButton/styledNormalButton";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <StyledNormalButton style={{ height: "max-content", transform: "scaleX(-1)" }} onClick={() => navigate(-1)}>
      &#10149;
    </StyledNormalButton>
  );
};

export default BackButton;

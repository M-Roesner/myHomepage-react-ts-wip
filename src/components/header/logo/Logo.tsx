import { Link } from "react-router-dom";

// Styled-Component
import StyledLogo from "./styledLogo";

// Ressources
import logo from "/logo_f3f3f3_70x64.png";

const Logo = () => {
  return (
    <Link to={"/"}>
      <StyledLogo>
        <img src={logo} alt="Logo" />
        <p>markus-roesner.dev</p>
      </StyledLogo>
    </Link>
  );
};

export default Logo;

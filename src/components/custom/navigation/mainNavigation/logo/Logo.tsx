// Components
import NavbarButton from "../utils/navbarButton/NavbarButton";

// Styled-Component
import { StyledLogo, StyledLogoImg, StyledParagraph } from "./styledLogo";

// Ressources
import logo from "/logo_f3f3f3_70x64.png";

/**
 * Functional component for routing to "/", which contains the logo and the URL.
 */
const Logo = () => {
  return (
    <NavbarButton to={"/"}>
      <StyledLogo>
        <StyledLogoImg src={logo} alt="Logo" />
        <StyledParagraph>markus-roesner.dev</StyledParagraph>
      </StyledLogo>
    </NavbarButton>
  );
};

export default Logo;

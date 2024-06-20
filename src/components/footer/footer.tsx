// Components
import { StyledButtonWrapper, StyledFooter } from "./styledFooter";
import NavbarButton from "../header/utils/navbarButton/NavbarButton";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledButtonWrapper>
        <NavbarButton to={"/imprint"} animationRevers>
          Impressum
        </NavbarButton>
      </StyledButtonWrapper>
    </StyledFooter>
  );
};

export default Footer;

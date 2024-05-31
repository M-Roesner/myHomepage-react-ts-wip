// Components
import { StyledFooter } from "./styledFooter";
import NavbarButton from "../header/utils/navbarButton/NavbarButton";

const Footer = () => {
  return (
    <StyledFooter>
      <NavbarButton to={"/imprint"} animationRevers>
        Impressum
      </NavbarButton>
    </StyledFooter>
  );
};

export default Footer;

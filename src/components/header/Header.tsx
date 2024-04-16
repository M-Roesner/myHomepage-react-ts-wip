// Components
import NavWrapper from "./navigation/NavWrapper";
import Logo from "./logo/Logo";

// Styled-Component
import StyledHeader from "./styledHeader";

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <NavWrapper />
    </StyledHeader>
  );
};

export default Header;

// Styled-Component
import StyledHeader from "./styledHeader";

// Components
import NavWrapper from "./navigation/NavWrapper";
import Logo from "./logo/Logo";

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <NavWrapper />
    </StyledHeader>
  );
};

export default Header;

// Components
import NavWrapper from "./navigation/NavWrapper";
import Logo from "./logo/Logo";

// Styled-Component
import StyledHeader, { StyledNavIconWrapper } from "./styledHeader";
import IconWrapper from "./icons/IconWrapper";

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <StyledNavIconWrapper>
        <NavWrapper />
        <IconWrapper />
      </StyledNavIconWrapper>
    </StyledHeader>
  );
};

export default Header;

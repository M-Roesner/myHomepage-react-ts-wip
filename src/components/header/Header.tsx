// Components
import Logo from "./logo/Logo";
import NavigationWrapper from "./navigation/NavigationWrapper";
import { StyledHeader } from "./styledHeader";

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <NavigationWrapper />
    </StyledHeader>
  );
};

export default Header;

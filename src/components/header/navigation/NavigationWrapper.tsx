import SozialNavWrapper from "./sozialNaviagation/SozialNavWrapper";
import PageNavWrapper from "./pageNavigation/PageNavWrapper";
import { StyledNavIconWrapper } from "./styledNavigationWrapper";

const NavigationWrapper = () => {
  return (
    <StyledNavIconWrapper>
      <PageNavWrapper />
      <SozialNavWrapper />
    </StyledNavIconWrapper>
  );
};

export default NavigationWrapper;

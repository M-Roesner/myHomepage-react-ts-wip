import { StyledBurgerMenu, StyledBurgerMenuItem } from "./styledBurgerMenu";

type BurgerMenuProps = {
  isOpen: boolean;
  onClick: () => void;
};
const BurgerMenu = ({ isOpen, onClick }: BurgerMenuProps) => {
  return (
    // TODO: Replace burger icon to svg and use gsap for the transformation.
    <StyledBurgerMenu onClick={onClick}>
      <StyledBurgerMenuItem $isOpen={isOpen} />
      <StyledBurgerMenuItem $isOpen={isOpen} />
      <StyledBurgerMenuItem $isOpen={isOpen} />
    </StyledBurgerMenu>
  );
};

export default BurgerMenu;

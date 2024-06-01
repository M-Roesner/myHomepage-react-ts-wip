import { BurgerMenuSvg, StyledBurgerMenuSvgItem } from "./styledBurgerMenu";

type BurgerMenuProps = {
  isOpen: boolean;
  onClick: () => void;
};
const BurgerMenu = ({ isOpen, onClick }: BurgerMenuProps) => {
  return (
    <BurgerMenuSvg onClick={onClick} className="hamburger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <StyledBurgerMenuSvgItem
        $isOpen={isOpen}
        className="line-one"
        x1={25}
        y1={42}
        x2={75}
        y2={42}
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <StyledBurgerMenuSvgItem
        $isOpen={isOpen}
        className="line-one"
        x1={25}
        y1={50}
        x2={75}
        y2={50}
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <StyledBurgerMenuSvgItem
        $isOpen={isOpen}
        className="line-one"
        x1={25}
        y1={58}
        x2={75}
        y2={58}
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
    </BurgerMenuSvg>
  );
};

export default BurgerMenu;

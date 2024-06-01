import { useEffect, useRef } from "react";
import gsap from "gsap";

// Components
import { BurgerMenuSvg, StyledBurgerMenuSvgItem } from "./styledBurgerMenu";

type BurgerMenuProps = {
  isOpen: boolean;
  onClick: () => void;
};

/**
 * A functional component that renders a burger menu icon with GSAP animation.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {boolean} props.isOpen - The state of the burger menu (open or closed).
 * @param {Function} props.onClick - The function to toggle the burger menu state.
 */
const BurgerMenu = ({ isOpen, onClick }: BurgerMenuProps) => {
  const tl = useRef<gsap.core.Timeline>();
  const lineOne = useRef<SVGLineElement>(null);
  const lineTwo = useRef<SVGLineElement>(null);
  const lineThree = useRef<SVGLineElement>(null);

  const duration = 0.2; // Duration of the animation
  const transformOrigin = "50% 50%"; // Origin point for transformations
  const ease = "power2.inOut"; // Easing function for the animation

  useEffect(() => {
    // Initialize GSAP timeline for burger menu animation
    tl.current = gsap
      .timeline({ reversed: true, paused: true })
      .to(lineTwo.current, { duration, opacity: 0, transformOrigin, ease }) // Fade out the middle line
      .to(lineOne.current, { duration, transformOrigin, ease, y: 8 }, "slide") // Slide the top line down
      .to(lineThree.current, { duration, transformOrigin, ease, y: -8 }, "slide") // Slide the bottom line up
      .to(lineOne.current, { duration, rotate: 45, ease }, "cross") // Rotate the top line to form a cross
      .to(lineThree.current, { duration, rotate: -45, ease }, "cross"); // Rotate the bottom line to form a cross
  }, []);

  useEffect(() => {
    // Play or reverse the animation based on the isOpen state
    isOpen ? tl.current?.play() : tl.current?.reverse();
  }, [isOpen]);

  return (
    <BurgerMenuSvg onClick={onClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <StyledBurgerMenuSvgItem ref={lineOne} x1={25} y1={42} x2={75} y2={42} />
      <StyledBurgerMenuSvgItem ref={lineTwo} x1={25} y1={50} x2={75} y2={50} />
      <StyledBurgerMenuSvgItem ref={lineThree} x1={25} y1={58} x2={75} y2={58} />
    </BurgerMenuSvg>
  );
};

export default BurgerMenu;

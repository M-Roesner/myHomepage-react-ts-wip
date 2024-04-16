import { Link } from "react-router-dom";

// Styled-Component
import StyledButton from "./styledButton";

type ButtonProps = {
  path: string;
  text: string;
};

const Button = ({ path, text }: ButtonProps) => {
  return (
    <StyledButton>
      <Link to={path}>{text}</Link>
    </StyledButton>
  );
};

export default Button;

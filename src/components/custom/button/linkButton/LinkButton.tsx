import { StyledLinkButton } from "./styledLinkButton";

type LinkButtonProps = {
  to: string;
  children: React.ReactNode;
};
const LinkButton = ({ to, children }: LinkButtonProps) => {
  return <StyledLinkButton to={to}>{children}</StyledLinkButton>;
};

export default LinkButton;

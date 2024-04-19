// Component
import IconLink from "../../../custom/button/iconLink/IconLink";
import { StyledSozialNavWrapper } from "./styledSozialNavWrapper";

// fortawesome
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn, faSquareXing } from "@fortawesome/free-brands-svg-icons";

/**
 * Functional component for rendering a collection of icons with a link.
 *
 * Icons come from https://fontawesome.com/
 */
const SozialNavWrapper = () => {
  return (
    <StyledSozialNavWrapper>
      <IconLink url="mailto:contact@markus-roesner.dev" icon={faEnvelope}></IconLink>
      <IconLink url="https://github.com/M-Roesner" icon={faGithub}></IconLink>
      <IconLink url="https://www.linkedin.com/in/markus-r%C3%B6sner-507354216/" icon={faLinkedinIn}></IconLink>
      <IconLink url="https://www.xing.com/profile/Markus_Roesner14" icon={faSquareXing}></IconLink>
    </StyledSozialNavWrapper>
  );
};

export default SozialNavWrapper;

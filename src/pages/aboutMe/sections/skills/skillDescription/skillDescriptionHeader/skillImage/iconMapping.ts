import { FaReact, FaJava, FaDatabase } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReactrouter,
  SiStyledcomponents,
  SiGithub,
  SiPhp,
  SiMysql,
  SiMicrosoftword,
  SiMicrosoftexcel,
  SiFigma,
  SiRedux,
  SiAzuredevops,
  SiExpress,
} from "react-icons/si";
import { DiSqllite } from "react-icons/di";

/**
 * A mapping of icon names to their corresponding React components.
 * This allows dynamic import and rendering of icons based on a string key.
 *
 * Source: https://react-icons.github.io/react-icons/
 */
const iconMapping: { [key: string]: React.ElementType } = {
  FaReact,
  FaJava,
  FaDatabase,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReactrouter,
  SiStyledcomponents,
  SiGithub,
  SiPhp,
  SiMysql,
  SiMicrosoftword,
  SiMicrosoftexcel,
  SiFigma,
  SiAzuredevops,
  SiRedux,
  SiExpress,
  DiSqllite,
  // Add more icons here as needed
};

export default iconMapping;

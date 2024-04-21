import styled from "styled-components";

// Styled-Component
import { slyledLinkButtonBasic } from "../styledLinkButtonBasic";

const StyledIconButton = styled(slyledLinkButtonBasic)`
  border-radius: 50%;
  padding: 10px;
  border: solid 2px ${(props) => props.theme.palette.common.borderColor};
`;

export default StyledIconButton;

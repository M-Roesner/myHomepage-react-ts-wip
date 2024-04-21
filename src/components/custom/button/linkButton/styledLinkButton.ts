import styled from "styled-components";
import { slyledLinkButtonBasic } from "../styledLinkButtonBasic";

export const StyledLinkButton = styled(slyledLinkButtonBasic)`
  padding: 10px;
  border: 1px solid ${(props) => props.theme.palette.common.borderColor};
`;

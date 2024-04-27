import styled from "styled-components";
import { linkButtonWrapper_FlexCenter } from "../styledLinkButtonBasic";

export const StyledLinkButton = styled(linkButtonWrapper_FlexCenter)`
  padding: 10px;
  width: 100%;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.palette.common.borderColor};
`;

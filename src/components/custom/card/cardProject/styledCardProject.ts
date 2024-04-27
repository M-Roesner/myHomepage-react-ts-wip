import styled from "styled-components";
import { linkButtonWrapper_Default } from "../../button/styledLinkButtonBasic";

export const StyledCardProject = styled(linkButtonWrapper_Default)`
  padding: 10px;
  border: solid 1px ${(props) => props.theme.palette.common.borderColor};
`;

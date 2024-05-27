import styled from "styled-components";
import { navLinkButtonWrapper_Default } from "../../button/navLinkButton/styledNavLinkButton";

export const StyledCardProject = styled(navLinkButtonWrapper_Default)`
  padding: 10px;
  text-align: center;
  border: solid 1px ${(props) => props.theme.colors.common.borderColor};

  :first-child {
    margin-top: 0;
  }
`;

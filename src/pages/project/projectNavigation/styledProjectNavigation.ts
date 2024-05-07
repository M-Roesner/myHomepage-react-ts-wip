import styled from "styled-components";
import { listItemWrapper_Default } from "../../../components/custom/layout/listLayout/styledListLayout";

export const StyledProjectNavigation = styled.aside`
  float: right;
  width: max-content;
  margin-left: 10px;
  margin-bottom: 10px;
  padding: 10px;

  border: 1px solid ${(props) => props.theme.colors.common.borderColor};
  background-color: ${(props) => props.theme.colors.common.backgroundColorAccent};
`;

export const StyledProjectNavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 5px;

  padding: 5px;
  /* padding-left: 20px; */
`;

// Using 'listItemWrapper_Default' if I use a button inside the li element.
export const StyledProjectNavigationListItem = styled(listItemWrapper_Default)`
  padding-block: 10px;
`;

import styled from "styled-components";
import { listItemWrapper_Default } from "../../../components/custom/layout/listLayout/styledListLayout";

export const StyledProjectNavigation = styled.aside`
  float: right;
  width: max-content;
  margin-left: 10px;
  margin-bottom: 10px;
  padding: 10px;
`;

export const StyledProjectNavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 5px;

  padding: 5px;
`;

export const StyledProjectNavigationListItem = styled(listItemWrapper_Default)``;

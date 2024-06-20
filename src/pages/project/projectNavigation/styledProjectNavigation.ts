import styled from "styled-components";

export const StyledProjectNavigation = styled.aside`
  float: right;
  width: max-content;
  margin-left: 10px;
  margin-bottom: 10px;

  border: 1px solid ${(props) => props.theme.colors.common.secondary.border};
  background-color: ${(props) => props.theme.colors.common.secondary.default};
  border-radius: 10px 0 0 10px;
  text-align: center;
`;

export const StyledProjectNavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 5px;
  margin: 5px;
  margin-right: 0;
`;

export const StyledProjectNavigationListItem = styled.li`
  text-decoration: none;
  list-style: none;
`;

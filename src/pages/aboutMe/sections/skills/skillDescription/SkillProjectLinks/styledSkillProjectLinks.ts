import styled from "styled-components";

export const StyledSkillProjectList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  gap: 5px;
`;

export const StyledSkillProjectItem = styled.li`
  list-style: none;
  width: calc(50% - 3px);
`;

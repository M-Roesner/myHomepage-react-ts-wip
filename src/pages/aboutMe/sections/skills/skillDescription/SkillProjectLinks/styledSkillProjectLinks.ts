import styled from "styled-components";

export const StyledSkillProjectList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  gap: 5px;
  margin-top: 10px;
`;

export const StyledSkillProjectItem = styled.li`
  text-decoration: none;
  list-style: none;
  width: calc(50% - 3px);
`;

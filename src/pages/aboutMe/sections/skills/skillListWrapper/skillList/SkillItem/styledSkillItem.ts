import styled from "styled-components";

export const StyledSectionSkillList = styled.ul`
  padding: 5px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  gap: 5px;
  border: 1px solid ${(props) => props.theme.palette.common.borderColor};
`;

export const StyledSectionSkillItem = styled.li`
  text-decoration: none;
  list-style: none;

  // padding-block is used because the StyledNormalButton has a padding of 10px
  padding-block: 10px;
`;

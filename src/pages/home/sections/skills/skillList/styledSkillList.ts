import styled from "styled-components";

export const StyledSectionSkillList = styled.ul`
  width: 50%;
  padding: 5px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 5px;
  border: 1px solid ${(props) => props.theme.palette.common.borderColor};
`;

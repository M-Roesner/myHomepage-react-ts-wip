import styled from "styled-components";
import { defaultSectionStyle } from "../../defaultSectionStyle";

export const StyledSectionSkillList = styled(defaultSectionStyle)`
  width: 50%;
  padding: 5px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 5px;
  border: 1px solid ${(props) => props.theme.palette.common.borderColor};
`;

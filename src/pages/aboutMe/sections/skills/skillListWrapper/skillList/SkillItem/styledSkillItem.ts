import styled from "styled-components";
import {
  unorderedListWrapper_Default,
  listItemWrapper_Default,
} from "../../../../../../../components/custom/card/list/styledList";

export const StyledSectionSkillList = styled(unorderedListWrapper_Default)`
  justify-content: flex-start;
  align-content: flex-start;
`;

export const StyledSectionSkillItem = styled(listItemWrapper_Default)`
  // padding-block is used because the StyledNormalButton has a padding of 10px
  padding-block: 10px;
`;

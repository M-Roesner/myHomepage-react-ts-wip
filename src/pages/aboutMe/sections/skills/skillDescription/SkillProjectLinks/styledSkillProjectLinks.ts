import styled from "styled-components";
import {
  unorderedListWrapper_Default,
  listItemWrapper_Default,
} from "../../../../../../components/custom/card/list/styledList";

export const StyledSkillProjectList = styled(unorderedListWrapper_Default)`
  justify-content: space-between;
`;

export const StyledSkillProjectItem = styled(listItemWrapper_Default)`
  width: calc(50% - 3px);
`;

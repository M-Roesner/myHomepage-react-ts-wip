import styled from "styled-components";

export const StyledSkillImage = styled.div`
  display: flex;

  span {
    font-size: 2em; /* Icon size */
    margin-right: 0.5em;
    color: ${(props) => props.theme.colors.common.textColorMain}; /* Icon color */
  }
`;

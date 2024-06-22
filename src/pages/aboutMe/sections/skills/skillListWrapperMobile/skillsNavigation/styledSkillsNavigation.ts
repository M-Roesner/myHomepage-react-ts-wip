import styled from "styled-components";

export const StyledSkillsNavigation = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    flex-direction: row;
  }
`;

export const StyledSkillWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.common.secondary.transparent};
  border: 1px solid ${(props) => props.theme.colors.common.secondary.default};
  border-radius: 5px;
`;

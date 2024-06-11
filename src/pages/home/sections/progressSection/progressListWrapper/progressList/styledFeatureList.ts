import styled from "styled-components";

export const StyledProgressList = styled.ol`
  display: flex;
  gap: ${(props) => props.theme.sizes.common.gap};
  flex-direction: column;
`;

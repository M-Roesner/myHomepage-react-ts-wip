import styled from "styled-components";

export const StyledFlexbox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.sizes.common.gap};

  & > * {
    flex: 1 1 clamp(350px, 50%, 400px);
  }
`;

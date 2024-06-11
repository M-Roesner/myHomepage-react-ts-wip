import styled from "styled-components";

export const StyledProgressListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${(props) => props.theme.sizes.common.gap};

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

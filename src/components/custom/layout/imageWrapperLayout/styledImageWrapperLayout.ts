import styled from "styled-components";

export const StyledImageWrapperLayout = styled.div`
  display: grid;

  gap: ${(props) => props.theme.sizes.common.gap};

  @media (min-width: 1201px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 1200px) and (min-width: 701px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

import styled from "styled-components";

export const StyledImageWrapperLayout = styled.div`
  display: grid;

  gap: ${(props) => props.theme.sizes.common.gap};

  @media (min-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 1199px) and (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 699px) {
    grid-template-columns: 1fr;
  }
`;

import styled from "styled-components";

export const StyledImageWrapperLayout = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;

  gap: ${(props) => props.theme.sizes.common.gap};

  @media (min-width: 1201px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1200px) and (min-width: 801px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

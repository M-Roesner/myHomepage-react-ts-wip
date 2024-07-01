import styled from "styled-components";

export const StyledImageWrapperLayout = styled.div.attrs<{
  $maxColumns?: number;
}>(() => ({}))`
  display: grid;
  justify-content: center;
  justify-items: center;

  gap: ${(props) => props.theme.sizes.common.gap};

  @media (min-width: 801px) {
    --column-length: ${(props) => (props.$maxColumns && props.$maxColumns >= 3 ? 3 : 2)};
    grid-template-columns: repeat(var(--column-length), 1fr);
  }
  @media (max-width: 800px) and (min-width: 501px) {
    --column-length: ${(props) => (props.$maxColumns && props.$maxColumns >= 2 ? 2 : 1)};
    grid-template-columns: repeat(var(--column-length), 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

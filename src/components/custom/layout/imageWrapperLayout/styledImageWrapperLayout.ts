import styled from "styled-components";

export const StyledImageWrapperLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${(props) => props.theme.sizes.common.gap};
`;

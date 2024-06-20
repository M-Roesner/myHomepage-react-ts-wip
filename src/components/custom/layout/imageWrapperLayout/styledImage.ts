import styled from "styled-components";

export const StyledImage = styled.img`
  width: clamp(200px, 100%, 500px);
  height: 100%;
  object-fit: cover;
  border: 1px solid ${(props) => props.theme.colors.common.secondary.border};
  padding: ${(props) => props.theme.sizes.common.paddingResponsive};
  cursor: pointer;
`;

import styled from "styled-components";

export const StyledIndex = styled.div`
  background-color: ${(props) => props.theme.colors.common.primary};
  color: ${(props) => props.theme.colors.common.text.primary};
  font-weight: 400;
  font-style: normal;
  font-size: ${(props) => props.theme.sizes.common.fontSizeMax};

  font-size: clamp(1rem, 2vw, ${(props) => props.theme.sizes.common.fontSizeMax});

  letter-spacing: ${(props) => props.theme.sizes.common.letterSpacing};
`;

import styled from "styled-components";

export const StyledApp = styled.main`
  padding-inline: 1vw;
  line-height: ${(props) => props.theme.sizes.common.lineHeight};
  padding-bottom: calc(
    ${(props) => props.theme.sizes.footer.height} + ${(props) => props.theme.sizes.footer.marginTop}
  );
`;

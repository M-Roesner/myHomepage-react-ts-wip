import styled from "styled-components";

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.common.backgroundColor};
  color: ${(props) => props.theme.colors.common.textColorMain};
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: 400;
  font-style: normal;
  font-size: ${(props) => props.theme.sizes.common.fontSize};
  letter-spacing: 0.05rem;
`;

export default StyledMain;

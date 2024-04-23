import styled from "styled-components";

export const CardVerticalLineStyle = styled.div`
  border-left: solid 1px ${(props) => props.theme.palette.common.borderColor};
  margin-left: 1vw;
`;

export const CardVerticalLineStyleForContent = styled(CardVerticalLineStyle)`
  padding-left: 1vw;
`;

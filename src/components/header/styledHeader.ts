import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.palette.header.backgroundColor};

  padding-left: 5px;
  padding-right: 5px;

  height: ${(props) => props.theme.navBar.height};
  margin-bottom: 2rem;
  @media (min-width: 768px) {
  }
`;

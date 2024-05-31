import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.colors.navBar.backgroundColorNavigation};

  padding-left: 5px;
  padding-right: 5px;

  height: ${(props) => props.theme.sizes.navBar.height};
  margin-bottom: ${(props) => props.theme.sizes.navBar.marginBottom};

  /* '>' is used to select the first direct child of the StyledHeader. */
  & > :first-child {
    border-right: solid 5px ${(props) => props.theme.colors.common.backgroundColor};
  }
  @media (max-width: 700px) {
    height: ${(props) => props.theme.sizes.navBar.height_mobile};
  }
`;

import styled from "styled-components";

interface StyledNavUnorderedListProps {
  $isOpen: boolean;
}

export const StyledPageNavWrapper = styled.nav`
  position: relative;
`;

export const StyledNavUnorderedList = styled.ul<StyledNavUnorderedListProps>`
  height: 100%;
  margin-left: 5px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  gap: 5px;

  @media (max-width: 700px) {
    position: absolute;
    top: ${(props) => props.theme.sizes.navBar.height_mobile};
    right: 0;

    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    /* flex-direction: column; */

    z-index: 10;
  }
`;

export const StyledNavListItem = styled.li`
  background-color: ${(props) => props.theme.colors.navBar.backgroundColorNavigation};
`;

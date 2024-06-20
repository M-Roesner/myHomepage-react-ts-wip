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
  background-color: ${(props) => props.theme.colors.common.primary};
  transition: height 20s ease;

  @media (max-width: 700px) {
    --extra-size: ${(props) => props.theme.sizes.common.paddingResponsive};
    position: absolute;
    top: ${(props) => props.theme.sizes.navBar.height_mobile};
    right: 0;

    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    flex-direction: column;
    text-align: center;

    z-index: 10;
    border: 1px solid ${(props) => props.theme.colors.common.secondary.border};
    border-top: 0;
    height: max-content;
    min-width: 300px;
  }
`;

export const StyledNavListItem = styled.li`
  background-color: ${(props) => props.theme.colors.common.secondary.default};
  @media (max-width: 700px) {
    width: inherit;

    display: flex;
    justify-content: center;
    border-radius: 0;
  }
  border-radius: 0 0 10px 10px;
`;

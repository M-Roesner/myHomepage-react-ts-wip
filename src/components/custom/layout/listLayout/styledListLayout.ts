import { styled } from "styled-components";

/**
 * Default style for a list item.
 *
 * Contains:
 * - display: flex
 * - flex-direction: row
 * - flex-wrap: wrap
 * - gap: 5px
 * - padding: 5px
 *
 * **This styled component should not be directly used and requires an alias when imported.**
 */
export const unorderedListWrapper_Default = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;

  padding: 5px;
`;

/**
 * Default style for a list item.
 *
 * Contains:
 * - text-decoration: none
 * - list-style: none
 *
 * **This styled component should not be directly used and requires an alias when imported.**
 */
export const listItemWrapper_Default = styled.li`
  text-decoration: none;
  list-style: none;
`;

export const StyledListLayout = styled(unorderedListWrapper_Default)`
  justify-content: flex-start;
  align-content: flex-start;
`;

export const StyledListLayoutItem = styled(listItemWrapper_Default)`
  padding: 10px;
  gap: ${(props) => props.theme.sizes.common.gap};

  /* 
   Calculate the height of the list item to ensure consistency:
   - 30px for the image icon
   - 2 * 10px for padding
   - 2 * 1px for border
*/
  height: calc(30px + 2 * 10px + 2 * 1px);

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.common.backgroundColorAccent};
  color: ${(props) => props.theme.colors.common.textColorMain};
  border: 1px solid ${(props) => props.theme.colors.common.borderColor};
`;
export const StyledListLayoutItemForButton = styled(listItemWrapper_Default)``;

export const ListLayoutItemImage = styled.img`
  height: 30px;
`;
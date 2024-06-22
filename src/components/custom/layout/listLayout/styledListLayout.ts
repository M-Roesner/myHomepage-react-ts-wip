import { RuleSet, css, styled } from "styled-components";

const iconHeight = css`
  --iconHeight: 25px;
`;

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
  width: 100%;

  @media (max-width: 400px) {
    flex-direction: column;
  }
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
  @media (max-width: 400px) {
    width: 100%;
  }
`;

/**
 * A styled-component wrapper for unordered lists, allowing for additional custom styles to be applied.
 *
 * This component extends the default unordered list wrapper and adds additional styles
 * through the `$extraStyle` prop. This allows for further customization of the list layout.
 *
 * @param {Object} props - The component props.
 * @param {RuleSet<object>} [props.$extraStyle] - Optional additional styles to be applied to the list.
 *
 * @returns {JSX.Element} The styled list layout component.
 */
export const StyledListLayout = styled(unorderedListWrapper_Default)<{ $extraStyle?: RuleSet<object> }>`
  ${(props) => props.$extraStyle};
  justify-content: flex-start;
  align-content: flex-start;
`;

export const StyledListLayoutItem = styled(listItemWrapper_Default)`
  ${iconHeight};
  padding: ${(props) => props.theme.sizes.common.paddingResponsive};
  gap: ${(props) => props.theme.sizes.common.gap};

  /* 
   Calculate the height of the list item to ensure consistency:
   - var(--iconHeight) for the image icon
   - 2 * 10px for padding
   - 2 * 1px for border
*/
  /* height: calc(var(--iconHeight) + 2 * ${(props) => props.theme.sizes.common.paddingResponsive} + 2 * 1px); */

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.common.secondary.default};
  color: ${(props) => props.theme.colors.common.text.primary};
  border: 1px solid ${(props) => props.theme.colors.common.secondary.border};
`;
export const StyledListLayoutItemForButton = styled(listItemWrapper_Default)``;

export const ListLayoutItemImage = styled.img`
  ${iconHeight};
  height: var(--iconHeight);
`;

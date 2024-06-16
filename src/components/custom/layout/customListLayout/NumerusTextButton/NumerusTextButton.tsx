import { StyledNormalButton_OnlyText } from "../../../button/normalButton/styledNormalButton";

/**
 * Defines the grammatical number for nouns, providing singular and plural forms.
 *
 * For example: { singular: "weiterer Link", plural: "weitere Links" }
 */
export type NumerusType = {
  singular: string;
  plural: string;
};

/**
 * Displays a button with individual text if several elements should be displayed.
 *
 * default:
 * - singular= "weiteres"
 * - plural= "weitere"
 *
 * @param {Object} props - The component props.
 * @param {number} props.remainingItems - The number of remaining items not displayed.
 * @param {Function} props.onClick - The function to call when the button is clicked.
 * @param {NumerusType} [props.numerusText] - (opsional) The text to be displayed when there are more items present than currently shown in the list.
 * @returns {JSX.Element} - Returns the JSX for the button.
 */
const NumerusTextButton = ({
  remainingItems,
  onClick,
  numerusText,
}: {
  remainingItems: number;
  onClick: () => void;
  numerusText?: NumerusType;
}): JSX.Element => {
  const individualText = numerusText
    ? `${remainingItems > 1 ? numerusText.plural : numerusText.singular}`
    : `${remainingItems > 1 ? "weitere" : "weiteres"}`;
  const buttonText = `+${remainingItems} ${individualText}`;
  return <StyledNormalButton_OnlyText onClick={onClick}>{buttonText}</StyledNormalButton_OnlyText>;
};

export default NumerusTextButton;

import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

// Types
import { OffsetButton_PrositionType } from "../roundedButtonType";

const circleDefaults = css`
  --circle-size: 10px;
  --double-circle-size: calc(var(--circle-size) * 2);
  --margin-button: calc(var(--circle-size) / 5);

  --button-border-width: 2px;
  --offset-border-width: calc(var(--circle-size) / 2);

  --main-color: ${(props) => props.theme.colors.common.secondary.default};
  --secondary-color: ${(props) => props.theme.colors.common.secondary.transparent};
  --hover-color: ${(props) => props.theme.colors.common.action.active};
`;

export const StyledRoundedOffsetButton = styled(NavLink)<{ $offsetPosition?: OffsetButton_PrositionType }>`
  ${circleDefaults}

  display: block;
  text-decoration: none;
  position: relative;

  padding: ${(props) => props.theme.sizes.common.paddingResponsive};

  border: var(--button-border-width) solid transparent;
  color: ${(props) => props.theme.colors.common.text.primary};

  background-color: var(--secondary-color);
  &:hover {
    background-color: var(--hover-color);
  }
  &.active {
    background-color: var(--main-color);
    :first-child,
    :last-child {
      display: inline;
    }
  }
  &.active:hover {
    background-color: var(--hover-color);
  }

  /* Adjust border radius and hide specific borders based on $position prop */
  border-radius: var(--circle-size);
  ${(props) => {
    switch (props.$offsetPosition) {
      case "left":
        return css`
          border-left: none;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          &:first-child,
          &:last-child {
            margin-block: var(--circle-size);
          }
          margin-block: var(--margin-button);
        `;
      case "right":
        return css`
          border-right: none;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          &:first-child,
          &:last-child {
            margin-block: var(--circle-size);
          }
          margin-block: var(--margin-button);
        `;
      case "top":
        return css`
          border-top: none;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          &:first-child,
          &:last-child {
            margin-inline: var(--circle-size);
          }
          margin-inline: var(--margin-button);
        `;
      case "bottom":
        return css`
          border-bottom: none;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          &:first-child,
          &:last-child {
            margin-inline: var(--circle-size);
          }
          margin-inline: var(--margin-button);
        `;
    }
  }}
`;

export const CornerCircle = styled.div<{
  $isAlignedStart?: boolean;
  $offsetPosition: OffsetButton_PrositionType;
}>`
  ${circleDefaults}
  --circle-X-offset: calc((var(--circle-size) * -1) - var(--button-border-width));
  --circle-Y-offset: calc((var(--button-border-width) + var(--circle-size)) * -1);

  position: absolute;
  width: var(--circle-size);
  height: var(--circle-size);
  overflow: hidden;

  /* For testing, to display the different circles and squares, you can also remove overflow: hidden. */
  /* ${(props) =>
    props.$isAlignedStart
      ? css`
          background-color: orange;
        `
      : css`
          background-color: green;
        `} */

  /* Position the corner circle based on $position prop */
  ${(props) => {
    switch (props.$offsetPosition) {
      case "left":
        return css`
          ${props.$isAlignedStart
            ? css`
                top: var(--circle-Y-offset);
              `
            : css`
                bottom: var(--circle-Y-offset);
              `}
          left: 0;
        `;
      case "right":
        return css`
          ${props.$isAlignedStart
            ? css`
                top: var(--circle-Y-offset);
              `
            : css`
                bottom: var(--circle-Y-offset);
              `}
          right: 0;
        `;
      case "top":
        return css`
          ${props.$isAlignedStart
            ? css`
                left: var(--circle-X-offset);
              `
            : css`
                right: var(--circle-X-offset);
              `}
          top: 0;
        `;
      case "bottom":
        return css`
          ${props.$isAlignedStart
            ? css`
                left: var(--circle-X-offset);
              `
            : css`
                right: var(--circle-X-offset);
              `}
          bottom: 0;
        `;
    }
  }}

  .active &::after {
    ${circleDefaults}
    --after-inner-circle-offset: calc((var(--circle-size) * -1) - var(--offset-border-width));
    --offset-border-width-inverted: calc(var(--offset-border-width) * -1);

    position: absolute;
    content: "";
    width: var(--double-circle-size);
    height: var(--double-circle-size);
    border-radius: 50%;
    border: var(--offset-border-width) solid var(--main-color);

    /* Position the inner circle border based on $position prop */
    ${(props) => {
      switch (props.$offsetPosition) {
        case "left":
          return css`
            ${props.$isAlignedStart
              ? css`
                  top: var(--after-inner-circle-offset);
                `
              : css`
                  top: var(--offset-border-width-inverted);
                `}
            left: var(--offset-border-width-inverted);
          `;
        case "right":
          return css`
            ${props.$isAlignedStart
              ? css`
                  top: var(--after-inner-circle-offset);
                `
              : css`
                  top: var(--offset-border-width-inverted);
                `}
            right: var(--offset-border-width-inverted);
          `;
        case "top":
          return css`
            ${props.$isAlignedStart
              ? css`
                  left: var(--after-inner-circle-offset);
                `
              : css`
                  right: var(--after-inner-circle-offset);
                `}
            bottom: var(--after-inner-circle-offset);
          `;
        case "bottom":
          return css`
            ${props.$isAlignedStart
              ? css`
                  left: var(--after-inner-circle-offset);
                `
              : css`
                  right: var(--after-inner-circle-offset);
                `}
            top: var(--after-inner-circle-offset);
          `;
      }
    }}
  }
`;

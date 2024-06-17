import { styled } from "styled-components";

export const StarContainer = styled.div`
  display: flex;
  padding-inline: 0.5em;
`;

interface IStar {
  $filled: boolean;
}
export const Star = styled.span<IStar>`
  color: ${(props) => (props.$filled ? "gold" : "#ccc")};
  font-size: 1.5em;
  margin: 0 2px;
`;

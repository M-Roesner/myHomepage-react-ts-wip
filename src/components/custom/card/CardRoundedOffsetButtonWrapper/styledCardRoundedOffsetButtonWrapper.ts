import styled, { RuleSet } from "styled-components";

// Type
import { OffsetButtonWrapper_DirectionType } from "./roundedButtonType";

export const StyledCardRoundedOffsetButtonWrapper = styled.div<{
  $direction: OffsetButtonWrapper_DirectionType;
  $extraStyleRuleSet?: RuleSet<{
    $direction: OffsetButtonWrapper_DirectionType;
  }>;
}>`
  ${(props) => props.$extraStyleRuleSet}
  display: flex;
  flex-direction: ${(props) => (props.$direction === "column" ? "column" : "row")};
`;

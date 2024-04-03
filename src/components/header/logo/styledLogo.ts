import styled from "styled-components";

// Resources
import { COLORS } from "../constants";

const StyledLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: ${COLORS.BACKGROUND_HEADER};
  padding-left: 5px;
  padding-right: 5px;

  & img {
    height: 64px;
  }

  & p {
    color: ${COLORS.TEXT};
  }

  @media (min-width: 768px) {
  }
`;

export default StyledLogo;

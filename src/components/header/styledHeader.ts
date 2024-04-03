import styled from "styled-components";

// Resources
import { SIZES } from "./constants";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  height: ${SIZES.NAVBAR_HEIGHT};

  @media (min-width: 768px) {
  }
`;

export default StyledHeader;

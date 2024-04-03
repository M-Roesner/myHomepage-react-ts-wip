import styled from "styled-components";

// Resources
import { COLORS, FONTS } from "./constants";

const StyledContent = styled.div`
  height: 100vh;
  background-color: ${COLORS.BACKGROUND_DARK};
  color: ${COLORS.TEXT};
  font-family: ${FONTS.PRIMARY};
  font-weight: 400;
  font-style: normal;
  font-size: 1.2rem;
  letter-spacing: 0.05rem;
`;

export default StyledContent;

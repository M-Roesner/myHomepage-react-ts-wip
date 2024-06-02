import styled from "styled-components";

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(350px, 1fr));
  /* grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); */

  gap: ${(props) => props.theme.sizes.common.gap};

  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  @media (max-width: 1200px) {
    /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 1000px) {
    /* grid-template-columns: repeat(2, minmax(350px, 1fr)); */
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(350px, 1fr));
  }

  // Variate mit display flex
  /* display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.sizes.common.gap};

  & > * {
    flex: 1 0 calc(300px);
    margin: 5px;
  } */
`;

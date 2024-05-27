import styled from "styled-components";

export const StyledProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${(props) => props.theme.sizes.common.gap};

  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  /* @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  } */

  // Variate mit display flex
  /* display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.sizes.common.gap};

  & > * {
    flex: 1 0 calc(300px);
    margin: 5px;
  } */
`;

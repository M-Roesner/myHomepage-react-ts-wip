import styled from "styled-components";

export const StyledImageWrapper = styled.div`
  position: relative;
  // display: inline-block; /* Sicherstellen, dass der Wrapper nur so groß wie der Inhalt ist */
  border: 1px solid ${(props) => props.theme.colors.common.action.border};
  background-color: ${(props) => props.theme.colors.common.secondary.transparent};
  padding: ${(props) => props.theme.sizes.common.paddingResponsive};
  border-radius: 5px;
  cursor: pointer;
`;

export const StyledImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: 100%;
  object-fit: cover;
  box-shadow: 3px 3px 10px ${(props) => props.theme.colors.common.action.activeBorder};
  border-radius: 5px;
`;

export const StyledHandClick = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.colors.common.secondary.transparentStrong};
  display: none;
  top: 15px;
  right: 15px;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 50%;

  @media (max-width: 800px) {
    display: flex;
  }
`;

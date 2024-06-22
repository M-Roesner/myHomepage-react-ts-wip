import styled from "styled-components";

export const StyledImageWrapper = styled.div`
  position: relative;
  display: inline-block; /* Sicherstellen, dass der Wrapper nur so groß wie der Inhalt ist */
`;

export const StyledImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: 100%;
  object-fit: cover;
  border: 1px solid ${(props) => props.theme.colors.common.secondary.border};
  padding: ${(props) => props.theme.sizes.common.paddingResponsive};
  cursor: pointer;
  border-radius: 5px;
`;

export const StyledHandClick = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.colors.common.secondary.transparentStrong};
  display: none;
  top: 10px;
  right: 10px;
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

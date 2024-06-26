import styled from "styled-components";

export const StyledLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-left: 5px;
  padding-right: 5px;
`;

export const StyledLogoImg = styled.img`
  height: 64px;
  @media (max-width: 700px) {
    height: 48px;
  }
`;

export const StyledParagraph = styled.p`
  width: max-content;
  color: ${(props) => props.theme.colors.common.text.primary};

  @media (max-width: 900px) {
    display: none;
  }
`;

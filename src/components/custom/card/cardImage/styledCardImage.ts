import styled from "styled-components";

export const styledImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 Ratio (9 / 16 = 0.5625) */
  box-shadow: 3px 3px 10px ${(props) => props.theme.colors.common.action.activeBorder};
`;

export const StyledImage = styled.img`
  position: absolute;
  border-radius: 5px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

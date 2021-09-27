import styled from "styled-components";

export const Background = styled.div`
  position: absolute;
  z-index: -1;
  height: 244px;
  border-radius: 0 0 20px 20px;
  width: 100%;
  background: ${({ theme }) => theme.topBg};
  left: 0;
  top: 0;
`;

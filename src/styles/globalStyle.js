import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --sans-serif: "Inter", sans-serif;
    --limeGreen: hsl(163, 72%, 41%);
    --brightRed: hsl(356, 69%, 56%);
    --facebook: hsl(208, 92%, 53%);
    --twitter: hsl(203, 89%, 53%);
    --youtube: hsl(348, 97%, 39%);
    --instagram: linear-gradient(36deg, rgba(253,196,104,1) 0%, rgba(223,73,150,1) 98%);
  }
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html, body {
    height: 100vh;
    width: 100%;
    overflow-x: hidden;
    font-size: 14px;
    font-family: var(--sans-serif);
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textMinor}
  }
`;

export default GlobalStyle;

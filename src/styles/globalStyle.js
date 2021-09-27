import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --sans-serif: "Inter", sans-serif;
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
`;

export default GlobalStyle;

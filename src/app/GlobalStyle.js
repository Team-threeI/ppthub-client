import { createGlobalStyle } from "styled-components";
import THEME_COLORS from "../config/constants/themeColors";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #fff;
    user-select: none;
  }

  body {
    background: #1E1E1E;
  }

  li {
    list-style: none;
  }
`;

export default GlobalStyle;

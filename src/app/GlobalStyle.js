import { createGlobalStyle } from "styled-components";
import THEME_COLORS from "../config/constants/themeColors";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${THEME_COLORS.FONT_COLOR};
    user-select: none;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${THEME_COLORS.BACKGROUND_COLOR};
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;

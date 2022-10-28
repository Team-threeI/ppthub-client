import React from "react";
import styled from "styled-components";
import THEME_COLORS from "../config/constants/themeColors";

function Header({ scroll }) {
  return (
    <HeaderContainer>
      <HeaderTitle scroll={scroll}>PPTHub</HeaderTitle>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 22vh;
  box-shadow: rgba(0, 0, 0, 0.4) 1px 0.25px 10px 0.5px;
  background: ${THEME_COLORS.SECTION_BACKGROUND};
  z-index: 1;
`;

const HeaderTitle = styled.h1`
  position: relative;
  width: 70%;
  margin-top: -0.5rem;
  font-weight: 800;
  font-size: 3.1rem;
  color: ${THEME_COLORS.MAIN_COLOR};
  text-align: center;
  text-transform: uppercase;

  &:before {
    content: "";
    display: block;
    position: absolute;
    bottom: calc(-1rem - ((5px - 1px) / 2));
    left: ${({ scroll }) => `calc(${scroll}% - 1rem)`};
    width: 2rem;
    height: 5px;
    background-color: #000000;
  }

  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 1px;
    left: 0;
    bottom: -1rem;
    background-color: #000000;
  }
`;

export default Header;

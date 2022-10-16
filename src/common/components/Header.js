import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>PPTHub</HeaderTitle>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
`;

const HeaderTitle = styled.span`
  color: #d13b40;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 5rem;
`;

export default Header;

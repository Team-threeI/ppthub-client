import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;

  .title {
    color: #d13b40;
    font-family: "Lucida Sans";
    font-size: 5rem;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <span className="title">PPTHub</span>
    </HeaderContainer>
  );
}

export default Header;

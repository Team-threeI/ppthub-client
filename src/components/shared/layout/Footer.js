import React from "react";
import styled from "styled-components";

function Footer({ buttonType }) {
  return (
    <FooterContainer>
      {buttonType === "preview" ? (
        <>
          <FooterButton>취소</FooterButton>
          <FooterButton>다운로드</FooterButton>
        </>
      ) : (
        <div>footer</div>
      )}
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  height: 10%;
  width: 100%;
  text-align: center;
  background-color: gray;
`;

const FooterButton = styled.button`
  margin: 1vmin 1vmin;
  border: none;
  border-radius: 1vmin;
  width: 10vw;
  height: 5vh;
  color: #ffffff;
  background-color: blue;
  font-weight: bold;
  cursor: pointer;
`;

export default Footer;

import React from "react";
import styled from "styled-components";
import PAGE_TYPES from "../../config/constants/pageTypes";

function Footer({ buttonType }) {
  return (
    <FooterContainer>
      {buttonType === PAGE_TYPES.PREVIEW ? (
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
  width: 100%;
  height: 10%;
  text-align: center;
  background-color: gray;
`;

const FooterButton = styled.button`
  width: 10vw;
  height: 5vh;
  margin: 1vmin 1vmin;
  border: none;
  border-radius: 1vmin;
  background-color: #4e6af5;
  color: #ffffff;
  font-weight: 700;
`;

export default Footer;

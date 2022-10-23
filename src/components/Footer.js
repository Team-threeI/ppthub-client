import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

import SEQUENCES from "../../config/constants/sequences";
import {
  changeSequence,
  changePreviousSequence,
} from "../../features/sequenceReducer";

function Footer() {
  const dispatch = useDispatch();
  const sequence = useSelector((state) => state.sequence);
  const handlePreviousClick = () => {
    dispatch(changePreviousSequence());
  };

  switch (sequence) {
    case SEQUENCES.ADDED_ORIGINAL_FILE:
      return (
        <FooterContainer>
          <FooterButton onClick={handlePreviousClick}>되돌리기</FooterButton>
        </FooterContainer>
      );
    case SEQUENCES.ADDED_COMPARABLE_FILE:
      return (
        <FooterContainer>
          <FooterButton onClick={handlePreviousClick}>되돌리기</FooterButton>
          <FooterButton
            onClick={() => dispatch(changeSequence(SEQUENCES.COMPARISION))}
          >
            비교하기
          </FooterButton>
        </FooterContainer>
      );
    case SEQUENCES.COMPARISION:
      return (
        <FooterContainer>
          <FooterButton>병합하기</FooterButton>
        </FooterContainer>
      );
    case SEQUENCES.PREVIEW:
      return (
        <FooterContainer>
          <FooterButton>되돌리기</FooterButton>
          <FooterButton>다운로드</FooterButton>
        </FooterContainer>
      );
    default:
      return <FooterContainer />;
  }
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

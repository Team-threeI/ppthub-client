import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import PAGE_SEQUENCES from "../../config/constants/pageSequences";
import VIEW_TYPES from "../../config/constants/viewTypes";
import { changeSequence } from "../../features/pageSequenceSlice";
import { deleteData } from "../../features/pptDataSlice";

function Footer() {
  const dispatch = useDispatch();
  const pageSequence = useSelector((state) => state.pageSequence);

  const handleOriginalFileUndo = () => {
    dispatch(deleteData(VIEW_TYPES.ORIGINAL_FILE));
    dispatch(changeSequence(PAGE_SEQUENCES.FILE_NOT_ADDED));
  };
  const handleComparableFileUndo = () => {
    dispatch(deleteData(VIEW_TYPES.COMPARABLE_FILE));
    dispatch(changeSequence(PAGE_SEQUENCES.ORIGINAL_FILE_ADDED));
  };
  const handleCompareUndo = () => {
    dispatch(changeSequence(PAGE_SEQUENCES.COMPARABLE_FILE_ADDED));
  };
  const handleCompare = () => {
    dispatch(changeSequence(PAGE_SEQUENCES.COMPARE_FILES));
  };

  switch (pageSequence) {
    case PAGE_SEQUENCES.ORIGINAL_FILE_ADDED:
      return (
        <FooterContainer>
          <FooterButton onClick={handleOriginalFileUndo}>되돌리기</FooterButton>
        </FooterContainer>
      );
    case PAGE_SEQUENCES.COMPARABLE_FILE_ADDED:
      return (
        <FooterContainer>
          <FooterButton onClick={handleComparableFileUndo}>
            되돌리기
          </FooterButton>
          <FooterButton onClick={handleCompare}>비교하기</FooterButton>
        </FooterContainer>
      );
    case PAGE_SEQUENCES.COMPARE_FILES:
      return (
        <FooterContainer>
          <FooterButton onClick={handleCompareUndo}>되돌리기</FooterButton>
          <FooterButton>병합하기</FooterButton>
        </FooterContainer>
      );
    case PAGE_SEQUENCES.PREVIEW:
      return (
        <FooterContainer>
          <FooterButton>되돌리기</FooterButton>
          <FooterButton>다운로드</FooterButton>
        </FooterContainer>
      );
    default:
      return <FooterContainer>adsf</FooterContainer>;
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

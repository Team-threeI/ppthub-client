import React, { useRef } from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import SEQUENCES from "../config/constants/sequences";
import PPT_DATA_TYPES from "../config/constants/pptDataTypes";
import FileAttachment from "./FileAttachment";
import SlideList from "./SlideList";
import ComparedSlideList from "./ComparedSlideList";

function Main() {
  const sequence = useSelector((state) => state.sequence);
  const originalScrolledList = useRef(null);
  const comparableScrolledList = useRef(null);

  switch (sequence) {
    case SEQUENCES.ADDED_ORIGINAL_FILE:
      return (
        <MainContainer>
          <SlideList fileType={PPT_DATA_TYPES.ORIGINAL_PPT_DATA} />
          <FileAttachment fileType={PPT_DATA_TYPES.COMPARABLE_PPT_DATA} />
        </MainContainer>
      );
    case SEQUENCES.ADDED_COMPARABLE_FILE:
      return (
        <MainContainer>
          <SlideList
            fileType={PPT_DATA_TYPES.ORIGINAL_PPT_DATA}
            scrolledListRef={originalScrolledList}
            oppositeListRef={comparableScrolledList}
          />
          <SlideList
            fileType={PPT_DATA_TYPES.COMPARABLE_PPT_DATA}
            scrolledListRef={comparableScrolledList}
            oppositeListRef={originalScrolledList}
          />
        </MainContainer>
      );
    case SEQUENCES.COMPARISION:
      return (
        <MainContainer>
          <ComparedSlideList />
        </MainContainer>
      );
    case SEQUENCES.INITIAL_SEQUENCE:
    default:
      return (
        <MainContainer>
          <FileAttachment fileType={PPT_DATA_TYPES.ORIGINAL_PPT_DATA} />
        </MainContainer>
      );
  }
}

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default Main;

import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import SideBar from "./SideBar/SideBar";
import SlideViewer from "./SlideViewer/SlideViewer";
import PAGE_SEQUENCES from "../config/constants/pageSequences";
import VIEW_TYPES from "../config/constants/viewTypes";
import { changeSequence } from "../features/pageSequenceSlice";

function Main() {
  const dispatch = useDispatch();
  const pageSequence = useSelector((state) => state.pageSequence);

  switch (pageSequence) {
    case PAGE_SEQUENCES.ORIGINAL_FILE_ADDED:
      return (
        <MainContainer>
          <SlideViewer viewType={VIEW_TYPES.ORIGINAL_FILE} />
          <SlideViewer
            viewType={VIEW_TYPES.COMPARABLE_FILE}
            onViewerChanged={() =>
              dispatch(changeSequence(PAGE_SEQUENCES.COMPARABLE_FILE_ADDED))
            }
          />
        </MainContainer>
      );
    case PAGE_SEQUENCES.COMPARABLE_FILE_ADDED:
      return (
        <MainContainer>
          <SlideViewer viewType={VIEW_TYPES.ORIGINAL_FILE} />
          <SlideViewer viewType={VIEW_TYPES.COMPARABLE_FILE} />
        </MainContainer>
      );
    case PAGE_SEQUENCES.COMPARE_FILES:
      return (
        <MainContainer>
          <SlideViewer viewType={VIEW_TYPES.ORIGINAL_FILE} />
          <SlideViewer viewType={VIEW_TYPES.COMPARABLE_FILE} />
          <SideBar />
        </MainContainer>
      );
    case PAGE_SEQUENCES.FILE_NOT_ADDED:
    default:
      return (
        <MainContainer>
          <SlideViewer
            viewType={VIEW_TYPES.ORIGINAL_FILE}
            onViewerChanged={() =>
              dispatch(changeSequence(PAGE_SEQUENCES.ORIGINAL_FILE_ADDED))
            }
          />
        </MainContainer>
      );
  }
}

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export default Main;

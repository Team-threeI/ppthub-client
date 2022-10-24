import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import SEQUENCES from "../config/constants/sequences";
import PPT_DATA_TYPES from "../config/constants/pptDataTypes";
import DIFFING_TYPES from "../config/constants/diffTypes";
import MainSection from "./MainSection";
import RightSelectionBar from "./RightSelectionBar";

function Main() {
  const sequence = useSelector((state) => state.sequence);

  switch (sequence) {
    case SEQUENCES.ADDED_ORIGINAL_FILE:
    case SEQUENCES.ADDED_COMPARABLE_FILE:
      return (
        <MainContainer>
          <MainSection fileType={PPT_DATA_TYPES.ORIGINAL_PPT_DATA} />
          <MainSection fileType={PPT_DATA_TYPES.COMPARABLE_PPT_DATA} />
        </MainContainer>
      );
    case SEQUENCES.COMPARISION:
      return (
        <MainContainer>
          <MainSection fileType={PPT_DATA_TYPES.ORIGINAL_PPT_DATA} />
          <MainSection fileType={PPT_DATA_TYPES.COMPARABLE_PPT_DATA} />
          <RightSelectionBar diffType={DIFFING_TYPES.DIFF_DATA} />
        </MainContainer>
      );
    case SEQUENCES.INITIAL_SEQUENCE:
    default:
      return (
        <MainContainer>
          <MainSection fileType={PPT_DATA_TYPES.ORIGINAL_PPT_DATA} />
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

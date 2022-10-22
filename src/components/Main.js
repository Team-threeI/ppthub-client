import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import axios from "axios";

import SEQUENCES from "../config/constants/sequences";
import VIEW_TYPES from "../config/constants/viewTypes";
import MainSection from "./MainSection/MainSection";
import SideBar from "./SideBar/SideBar";
import DIFFING_TYPES from "../config/constants/diffingTypes";
import { originalDiffData } from "../features/diffDataReducer";

function Main() {
  const dispatch = useDispatch();
  const sequence = useSelector((state) => state.sequence);
  const originalPptId = useSelector(
    ({ pptData }) => pptData[VIEW_TYPES.ORIGINAL_FILE].dataId,
  );
  const comparablePptId = useSelector(
    ({ pptData }) => pptData[VIEW_TYPES.COMPARABLE_FILE].dataId,
  );

  const getDiffingResult = async () => {
    const diffingResult = await axios.post("/api/ppts/compare", {
      originalPptId,
      comparablePptId,
    });

    dispatch(
      originalDiffData({
        type: DIFFING_TYPES.DIFF_DATA,
        data: diffingResult.data,
      }),
    );
  };

  switch (sequence) {
    case SEQUENCES.ADDED_ORIGINAL_FILE:
      return (
        <MainContainer>
          <MainSection viewType={VIEW_TYPES.ORIGINAL_FILE} />
          <MainSection viewType={VIEW_TYPES.COMPARABLE_FILE} />
        </MainContainer>
      );
    case SEQUENCES.ADDED_COMPARABLE_FILE:
      return (
        <MainContainer>
          <MainSection viewType={VIEW_TYPES.ORIGINAL_FILE} />
          <MainSection viewType={VIEW_TYPES.COMPARABLE_FILE} />
        </MainContainer>
      );
    case SEQUENCES.COMPARISION:
      getDiffingResult();
      return (
        <MainContainer>
          <MainSection viewType={VIEW_TYPES.ORIGINAL_FILE} />
          <MainSection viewType={VIEW_TYPES.COMPARABLE_FILE} />
          <SideBar diffType={DIFFING_TYPES.DIFF_DATA} />
        </MainContainer>
      );
    case SEQUENCES.INITIAL_SEQUENCE:
    default:
      return (
        <MainContainer>
          <MainSection viewType={VIEW_TYPES.ORIGINAL_FILE} />
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

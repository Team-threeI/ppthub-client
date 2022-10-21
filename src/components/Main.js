import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";

import SEQUENCES from "../config/constants/sequences";
import VIEW_TYPES from "../config/constants/viewTypes";
import MainSection from "./MainSection/MainSection";
import SideBar from "./SideBar/SideBar";
import {
  changeNextSequence,
  changeSequence,
} from "../features/sequenceReducer";

function Main() {
  const dispatch = useDispatch();
  const sequence = useSelector((state) => state.sequence);

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
      return (
        <MainContainer>
          <MainSection viewType={VIEW_TYPES.ORIGINAL_FILE} />
          <MainSection viewType={VIEW_TYPES.COMPARABLE_FILE} />
          <SideBar />
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

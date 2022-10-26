import React from "react";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import styled from "styled-components";

import DIFF_TYPES from "../config/constants/diffTypes";
import RightSelectionBarSlideSection from "./RightSelectionBarSlideSection";

function RightSelectionBar() {
  const diffDataSelector = (state) => state.diffData;
  const slideOrderListSelector = (state) => state.slideOrderList;
  const selectionBarSlideListSelector = createSelector(
    diffDataSelector,
    slideOrderListSelector,
    (diffData, slideOrderList) =>
      slideOrderList.reduce(
        (selectionLists, slideId, index) => {
          const slideDiffData = diffData[slideId];
          const selectionListSlideData = {
            slideId,
            slideName: `Slide ${index + 1}`,
            ...slideDiffData,
          };

          switch (slideDiffData.diff) {
            case DIFF_TYPES.ADDED:
              return {
                ...selectionLists,
                addedList: selectionLists.addedList.concat(
                  selectionListSlideData,
                ),
              };
            case DIFF_TYPES.DELETED:
              return {
                ...selectionLists,
                deletedList: selectionLists.deletedList.concat(
                  selectionListSlideData,
                ),
              };
            case DIFF_TYPES.MODIFIED:
              return {
                addedList: selectionLists.addedList.concat(
                  selectionListSlideData,
                ),
                deletedList: selectionLists.deletedList.concat(
                  selectionListSlideData,
                ),
              };
            default:
              return selectionLists;
          }
        },
        {
          addedList: [],
          deletedList: [],
        },
      ),
  );

  const { addedList, deletedList } = useSelector(selectionBarSlideListSelector);

  return (
    <SelectionBarContainer>
      <SelectionBarHeader>ADD</SelectionBarHeader>
      <SelectionBarList>
        {addedList.map((addedSlide) => (
          <RightSelectionBarSlideSection
            key={`${addedSlide.diff}/${addedSlide.slideId}`}
            slideData={addedSlide}
            diffType={DIFF_TYPES.ADDED}
          />
        ))}
      </SelectionBarList>
      <SelectionBarHeader>Undo</SelectionBarHeader>
      <SelectionBarList>
        {deletedList.map((deletedSlide) => (
          <RightSelectionBarSlideSection
            key={`${deletedSlide.diff}/${deletedSlide.slideId}`}
            slideData={deletedSlide}
            diffType={DIFF_TYPES.DELETED}
          />
        ))}
      </SelectionBarList>
    </SelectionBarContainer>
  );
}

const SelectionBarContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 20vw;
  height: 100%;
  padding: 3rem 0;
  background-color: #000;
`;

const SelectionBarHeader = styled.header`
  padding-bottom: 1vh;
  color: red;
  font-family: "Lucida Sans", sans-serif;
`;

const SelectionBarList = styled.ul`
  overflow: scroll;
`;

export default RightSelectionBar;

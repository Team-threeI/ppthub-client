import React from "react";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import styled, { keyframes } from "styled-components";

import DIFF_TYPES from "../config/constants/diffTypes";
import THEME_COLORS from "../config/constants/themeColors";
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
      <SelectionBarSection>
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
      </SelectionBarSection>
      <SelectionBarSection>
        <SelectionBarHeader>DELETE</SelectionBarHeader>
        <SelectionBarList>
          {deletedList.map((deletedSlide) => (
            <RightSelectionBarSlideSection
              key={`${deletedSlide.diff}/${deletedSlide.slideId}`}
              slideData={deletedSlide}
              diffType={DIFF_TYPES.DELETED}
            />
          ))}
        </SelectionBarList>
      </SelectionBarSection>
    </SelectionBarContainer>
  );
}

const slide = keyframes`
  from {
    width: 0;
  }
  to {
    width: 25%;
  }
`;

const SelectionBarContainer = styled.section`
  padding: 8rem 0;
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100%;
  background-color: ${THEME_COLORS.MAIN_BACKGROUND};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  animation: ${slide} 1s ease-out;
  z-index: 2;
  overflow: hidden;
`;

const SelectionBarSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 0 1rem 1rem;
`;

const SelectionBarHeader = styled.header`
  width: 100%;
  height: 2rem;
  font-size: 1.7rem;
  font-weight: 900;
`;

const SelectionBarList = styled.ul`
  margin-top: 0.7rem;
  overflow: scroll;
  overflow-x: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default RightSelectionBar;

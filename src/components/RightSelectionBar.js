import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import DIFF_TYPES from "../config/constants/diffTypes";
import RightSelectionBarSlideSection from "./RightSelectionBarSlideSection";

function RightSelectionBar() {
  const { addedList, deletedList } = useSelector((state) =>
    Object.entries(state.diffData).reduce(
      (selectionLists, slide) => {
        const [slideId, slideDiffData] = slide;

        switch (slideDiffData.diff) {
          case DIFF_TYPES.ADDED:
            return {
              ...selectionLists,
              addedList: selectionLists.addedList.concat({
                slideId,
                ...slideDiffData,
              }),
            };
          case DIFF_TYPES.DELETED:
            return {
              ...selectionLists,
              deletedList: selectionLists.addedList.concat({
                slideId,
                ...slideDiffData,
              }),
            };
          case DIFF_TYPES.MODIFIED:
            return {
              addedList: selectionLists.addedList.concat({
                slideId,
                ...slideDiffData,
              }),
              deletedList: selectionLists.deletedList.concat({
                slideId,
                ...slideDiffData,
              }),
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

  return (
    <SelectionBarContainer>
      <SelectionBarSection>
        <SelectionBarHeader>ADD</SelectionBarHeader>
        <SelectionBarList>
          {addedList.map((addedSlide) => (
            <RightSelectionBarSlideSection
              key={`${addedSlide.diff}/${addedSlide.slideId}`}
              slideData={addedSlide}
              diffType={DIFF_TYPES.TYPE_ADDED}
            />
          ))}
        </SelectionBarList>
      </SelectionBarSection>
      <SelectionBarSection>
        <SelectionBarHeader>Undo</SelectionBarHeader>
        <SelectionBarList>
          {deletedList.map((deletedSlide) => (
            <RightSelectionBarSlideSection
              key={`${deletedSlide.diff}/${deletedSlide.slideId}`}
              slideData={deletedSlide}
              diffType={DIFF_TYPES.TYPE_DELETED}
            />
          ))}
        </SelectionBarList>
      </SelectionBarSection>
    </SelectionBarContainer>
  );
}

const SelectionBarContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 100%;
`;

const SelectionBarSection = styled.section`
  width: 100%;
  height: 100%;
  padding-left: 1vw;
  overflow: auto;
`;

const SelectionBarHeader = styled.header`
  padding-bottom: 1vh;
  color: red;
  font-family: "Lucida Sans", sans-serif;
`;

const SelectionBarList = styled.ul``;

export default RightSelectionBar;

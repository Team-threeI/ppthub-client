import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

import DIFF_TYPES from "../config/constants/diffTypes";
import THEME_COLORS from "../config/constants/themeColors";
import {
  toggleSlideChecked,
  toggleSlideHovered,
} from "../features/diffDataReducer";
import RightSelectionBarItemSection from "./RightSelectionBarItemSection";

const getHighlightByDiffState = (isHovered, isChecked) => {
  if (isHovered) {
    return THEME_COLORS.HIGHLIGHT_HOVERED;
  }

  return isChecked
    ? THEME_COLORS.HIGHLIGHT_ADDED
    : THEME_COLORS.HIGHLIGHT_DELETED;
};

function RightSelectionBarSlideSection({ slideData, diffType }) {
  const dispatch = useDispatch();
  const { slideId, isChecked, isHovered } = slideData;
  const slideDiffData = useSelector(({ diffData }) => diffData[slideId]);
  const isChangedSlide =
    slideData.diff === DIFF_TYPES.ADDED ||
    slideData.diff === DIFF_TYPES.DELETED;
  const slideItems = Object.entries(slideData.items ?? {}).filter(
    (item) => item[1].diff === DIFF_TYPES.MODIFIED || item[1].diff === diffType,
  );

  return (
    <SlideSectionContainer>
      {isChangedSlide ? (
        <SlideLabel
          highlight={getHighlightByDiffState(isHovered, isChecked)}
          onMouseEnter={() => dispatch(toggleSlideHovered(slideId))}
          onMouseLeave={() => dispatch(toggleSlideHovered(slideId))}
        >
          <SlideHeader>{slideId}</SlideHeader>
          <Checkbox
            type="checkbox"
            checked={slideDiffData.isChecked}
            onChange={() => dispatch(toggleSlideChecked(slideId))}
          />
        </SlideLabel>
      ) : (
        <>
          <SlideHeader>{slideId}</SlideHeader>
          <ModifiedSlideItems>
            {slideItems.map((item) => (
              <RightSelectionBarItemSection
                key={item[0]}
                itemData={{ itemId: item[0], ...item[1] }}
                slideId={slideId}
                diffType={diffType}
              />
            ))}
          </ModifiedSlideItems>
        </>
      )}
    </SlideSectionContainer>
  );
}

const SlideSectionContainer = styled.li``;
const SlideLabel = styled.label`
  display: block;
  width: 100%;
  height: 100%;
  background-color: ${({ highlight }) => highlight};
`;
const SlideHeader = styled.h1``;
const Checkbox = styled.input`
  display: none;
`;
const ModifiedSlideItems = styled.ul`
  margin-left: 1rem;
`;

export default RightSelectionBarSlideSection;

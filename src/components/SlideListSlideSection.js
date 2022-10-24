import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled, { css } from "styled-components";

import DIFF_TYPES from "../config/constants/diffTypes";
import THEME_COLORS from "../config/constants/themeColors";
import {
  toggleSlideChecked,
  toggleSlideHovered,
} from "../features/diffDataReducer";
import SlideListItemSection from "./SlideListItemSection";

const getHighlightByDiffState = (isHovered, isChecked) => {
  if (isHovered) {
    return THEME_COLORS.HIGHLIGHT_HOVERED;
  }

  return isChecked
    ? THEME_COLORS.HIGHLIGHT_ADDED
    : THEME_COLORS.HIGHLIGHT_DELETED;
};

function SlideListSlideSection({ slideData, fileType }) {
  const dispatch = useDispatch();
  const { slideId, slideWidth, slideHeight } = slideData;
  const { diff, isChecked, isHovered } = useSelector(
    ({ diffData }) => diffData[slideId] ?? {},
  );
  const isChangedSlide =
    diff === DIFF_TYPES.ADDED || diff === DIFF_TYPES.DELETED;
  const changedSlideProps = {
    isChangedSlide,
    highlight: getHighlightByDiffState(isHovered, isChecked),
    onClick: () => dispatch(toggleSlideChecked(slideId)),
    onMouseEnter: () => dispatch(toggleSlideHovered(slideId)),
    onMouseLeave: () => dispatch(toggleSlideHovered(slideId)),
  };

  return (
    <SlideContainer
      slideAspectRatio={`${slideWidth} / ${slideHeight}`}
      {...(isChangedSlide && changedSlideProps)}
    >
      {slideData.items.map((item) => (
        <SlideListItemSection
          key={item.itemId}
          itemData={{ ...item, slideWidth, slideHeight }}
          slideId={slideId}
          fileType={fileType}
        />
      ))}
    </SlideContainer>
  );
}

const SlideContainer = styled.section`
  position: relative;
  width: 100%;
  margin-bottom: 0.5rem;
  border: 1px solid black;
  background-color: #fff;
  aspect-ratio: ${({ slideAspectRatio }) => slideAspectRatio};
  flex: none;

  &:last-child {
    margin-bottom: 0;
  }

  ${({ isChangedSlide, highlight }) =>
    isChangedSlide &&
    css`
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: ${highlight};
      }
    `}
`;

export default SlideListSlideSection;

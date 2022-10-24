import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

import DIFF_TYPES from "../config/constants/diffTypes";
import THEME_COLORS from "../config/constants/themeColors";
import {
  toggleItemChecked,
  toggleItemHovered,
} from "../features/diffDataReducer";

const getItemCheckByDiffState = (diffType, isChecked, isModified) => {
  if (diffType === DIFF_TYPES.DELETED && isModified) {
    return !isChecked;
  }

  return isChecked;
};

const getItemHighlightByDiffState = (
  diffType,
  isHovered,
  isChecked,
  isModified,
) => {
  if (isHovered) {
    return THEME_COLORS.HIGHLIGHT_HOVERED;
  }

  if (diffType === DIFF_TYPES.DELETED && isModified) {
    return isChecked
      ? THEME_COLORS.HIGHLIGHT_DELETED
      : THEME_COLORS.HIGHLIGHT_ADDED;
  }

  return isChecked
    ? THEME_COLORS.HIGHLIGHT_ADDED
    : THEME_COLORS.HIGHLIGHT_DELETED;
};

function RightSelectionBarItemSection({ itemData, slideId, diffType }) {
  const dispatch = useDispatch();
  const itemDiffData = useSelector(
    ({ diffData }) => diffData[slideId].items[itemData.itemId],
  );
  const { isChecked, isHovered } = itemDiffData;
  const isModified = itemDiffData.diff === DIFF_TYPES.MODIFIED;

  return (
    <ItemSectionContainer>
      <ItemLabel
        highlight={getItemHighlightByDiffState(diffType, isHovered, isChecked)}
        onMouseEnter={() =>
          dispatch(toggleItemHovered({ itemId: itemData.itemId, slideId }))
        }
        onMouseLeave={() =>
          dispatch(toggleItemHovered({ itemId: itemData.itemId, slideId }))
        }
      >
        <ItemHeader>{itemData.itemId}</ItemHeader>
        <Checkbox
          checked={getItemCheckByDiffState(diffType, isChecked, isModified)}
          type="checkbox"
          onChange={() =>
            dispatch(toggleItemChecked({ itemId: itemData.itemId, slideId }))
          }
        />
      </ItemLabel>
    </ItemSectionContainer>
  );
}

const ItemSectionContainer = styled.li``;
const ItemLabel = styled.label`
  &:active {
    color: red;
    background-color: red;
  }
`;
const ItemHeader = styled.h3``;
const Checkbox = styled.input``;

export default RightSelectionBarItemSection;

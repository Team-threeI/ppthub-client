import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

import DIFF_TYPES from "../config/constants/diffTypes";
import THEME_COLORS from "../config/constants/themeColors";
import {
  toggleItemChecked,
  toggleItemHovered,
} from "../features/diffDataReducer";

const itemCheckByDiffState = (diffType, isChecked, isModified) => {
  if (diffType === DIFF_TYPES.DELETED && isModified) {
    return !isChecked;
  }

  return isChecked;
};

const itemHighlightByDiffState = (
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
      : THEME_COLORS.HIGHLIGHT_DELETED;
  }

  return isChecked
    ? THEME_COLORS.HIGHLIGHT_ADDED
    : THEME_COLORS.HIGHLIGHT_DELETED;
};

function SelectionBarItemSection({ itemData, slideId, diffType }) {
  const dispatch = useDispatch();
  const itemDiffData = useSelector(
    ({ diffData }) => diffData[slideId].items[itemData.itemId],
  );
  const { isChecked, isHovered } = itemDiffData;
  const isModified = itemDiffData.diff === DIFF_TYPES.MODIFIED;
  console.log([slideId, itemData.itemId, isModified]);
  return (
    <li>
      <ItemLabel
        highlight={itemHighlightByDiffState(diffType, isHovered, isChecked)}
        onMouseEnter={() =>
          dispatch(toggleItemHovered({ itemId: itemData.itemId, slideId }))
        }
        onMouseLeave={() =>
          dispatch(toggleItemHovered({ itemId: itemData.itemId, slideId }))
        }
      >
        <ItemHeader>{itemData.itemId}</ItemHeader>
        <Checkbox
          checked={itemCheckByDiffState(diffType, isChecked, isModified)}
          type="checkbox"
          onChange={() =>
            dispatch(toggleItemChecked({ itemId: itemData.itemId, slideId }))
          }
        />
      </ItemLabel>
    </li>
  );
}

const ItemLabel = styled.label`
  &:active {
    color: red;
    background-color: red;
  }
`;
const ItemHeader = styled.h3``;
const Checkbox = styled.input``;

export default SelectionBarItemSection;

import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

import DIFF_TYPES from "../config/constants/diffTypes";
import THEME_COLORS from "../config/constants/themeColors";
import {
  toggleItemChecked,
  toggleItemHovered,
} from "../features/diffDataReducer";

const getItemHighlightByDiffState = (isHovered, isChecked) => {
  if (isHovered) {
    return THEME_COLORS.HIGHLIGHT_HOVERED;
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
  const isItemChecked =
    diffType === DIFF_TYPES.ADDED && isModified ? !isChecked : isChecked;

  return (
    <ItemSectionContainer>
      <ItemLabel
        highlight={getItemHighlightByDiffState(isHovered, isItemChecked)}
        onMouseEnter={() =>
          dispatch(toggleItemHovered({ itemId: itemData.itemId, slideId }))
        }
        onMouseLeave={() =>
          dispatch(toggleItemHovered({ itemId: itemData.itemId, slideId }))
        }
      >
        <a href={`#${slideId}-PPT_DATA_TYPES/ORIGINAL_PPT_DATA`}>
          <ItemHeader>{itemData.itemId}</ItemHeader>
          <Checkbox
            checked={isItemChecked}
            type="checkbox"
            onChange={() =>
              dispatch(toggleItemChecked({ itemId: itemData.itemId, slideId }))
            }
          />
        </a>
      </ItemLabel>
    </ItemSectionContainer>
  );
}

const ItemSectionContainer = styled.li``;
const ItemLabel = styled.label`
  display: block;
  background: ${({ highlight }) => highlight};
`;
const ItemHeader = styled.h3``;
const Checkbox = styled.input`
  display: none;
`;

export default RightSelectionBarItemSection;

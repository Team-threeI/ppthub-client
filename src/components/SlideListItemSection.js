import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled, { css } from "styled-components";

import DIFF_TYPES from "../config/constants/diffTypes";
import PPT_DATA_TYPES from "../config/constants/pptDataTypes";
import THEME_COLORS from "../config/constants/themeColors";
import {
  toggleItemChecked,
  toggleItemHovered,
} from "../features/diffDataReducer";

const getItemHighlightByDiffState = (
  fileType,
  isHovered,
  isChecked,
  isModified,
) => {
  if (isHovered) {
    return THEME_COLORS.HIGHLIGHT_HOVERED;
  }

  if (fileType === PPT_DATA_TYPES.COMPARABLE_PPT_DATA && isModified) {
    return isChecked
      ? THEME_COLORS.HIGHLIGHT_ADDED
      : THEME_COLORS.HIGHLIGHT_DELETED;
  }

  return isChecked
    ? THEME_COLORS.HIGHLIGHT_DELETED
    : THEME_COLORS.HIGHLIGHT_ADDED;
};

function Item({ itemData, slideId, fileType }) {
  const dispatch = useDispatch();
  const { diff, isChecked, isHovered } = useSelector(
    ({ diffData }) => diffData[slideId]?.items?.[itemData.itemId] ?? {},
  );
  const isModifiedItem = diff === DIFF_TYPES.MODIFIED;
  const isChangedItem =
    diff === DIFF_TYPES.ADDED || diff === DIFF_TYPES.DELETED;
  const highlightItemProps = {
    isHighlightItem: isChangedItem || isModifiedItem,
    highlight: getItemHighlightByDiffState(
      fileType,
      isHovered,
      isChecked,
      isModifiedItem,
    ),
    onClick: () =>
      dispatch(toggleItemChecked({ slideId, itemId: itemData.itemId })),
    onMouseEnter: () =>
      dispatch(toggleItemHovered({ slideId, itemId: itemData.itemId })),
    onMouseLeave: () =>
      dispatch(toggleItemHovered({ slideId, itemId: itemData.itemId })),
  };
  const boxPosition = {
    top: `${(itemData.y / itemData.slideHeight) * 100}%`,
    left: `${(itemData.x / itemData.slideWidth) * 100}%`,
    width: `${(itemData.width / itemData.slideWidth) * 100}%`,
    height: `${(itemData.height / itemData.slideHeight) * 100}%`,
    order: itemData.order,
  };

  switch (itemData.type) {
    case "text":
      return (
        <TextItem
          position={boxPosition}
          attribute={itemData.content}
          {...((isChangedItem || isModifiedItem) && highlightItemProps)}
        >
          {itemData.content.value}
        </TextItem>
      );
    case "image":
      return (
        <PositionBoxItem
          position={boxPosition}
          {...((isChangedItem || isModifiedItem) && highlightItemProps)}
        >
          <ImageItem src={itemData.content.src} alt="presentation data" />
        </PositionBoxItem>
      );
    default:
      return null;
  }
}

const PositionBoxItem = styled.div`
  position: absolute;
  top: ${({ position }) => position.top};
  left: ${({ position }) => position.left};
  width: ${({ position }) => position.width};
  height: ${({ position }) => position.height};
  z-index: ${({ position }) => position.order};

  ${({ isHighlightItem, highlight }) =>
    isHighlightItem &&
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

const TextItem = styled(PositionBoxItem)`
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: ${({ attribute }) => attribute.backgroundColor};
  color: ${({ attribute }) => attribute.fontColor};
  font-size: ${({ attribute }) => `${attribute.size}px`};
  text-decoration: ${({ attribute }) =>
    attribute.isUnderlined ? "underline" : "none"};
  font-weight: ${({ attribute }) => (attribute.isBold ? 700 : 500)};
  font-style: ${({ attribute }) => (attribute.isItalic ? "italic" : "normal")};
`;

const ImageItem = styled.img`
  width: 100%;
  height: 100%;
`;

export default Item;

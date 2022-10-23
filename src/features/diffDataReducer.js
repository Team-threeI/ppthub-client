import { createAction, createReducer } from "@reduxjs/toolkit";
import DIFF_TYPES from "../config/constants/diffingTypes";

export const initializeDiffData = createAction("initializeDiffData");
export const checkSlide = createAction("checkSlide");
export const checkItem = createAction("checkItem");

const initialState = {};

const diffDataReducer = createReducer(initialState, {
  [initializeDiffData]: (state, action) => {
    return action.payload;
  },
  [checkSlide]: (state, action) => {
    const slideId = action.payload;
    const slideDiff = state[slideId].diff;

    if (slideDiff !== DIFF_TYPES.ADDED && slideDiff !== DIFF_TYPES.DELETED) {
      return state;
    }

    return {
      ...state,
      [slideId]: {
        ...state[slideId],
        isChecked: !state[slideId].isChecked,
      },
    };
  },
  [checkItem]: (state, action) => {
    const { slideId, itemId } = action.payload;
    const itemDiff = state?.[slideId]?.items?.itemId?.diff ?? {};

    if (
      itemDiff !== DIFF_TYPES.MODIFIED &&
      itemDiff !== DIFF_TYPES.ADDED &&
      itemDiff !== DIFF_TYPES.DELETED
    ) {
      return state;
    }

    return {
      ...state,
      [slideId]: {
        ...state[slideId],
        items: {
          [itemId]: {
            ...state[slideId].items.itemId,
            isChecked: !state[slideId].items.itemId.isChecked,
          },
        },
      },
    };
  },
});

export default diffDataReducer;

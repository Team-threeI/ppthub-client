import { createAction, createReducer } from "@reduxjs/toolkit";
import DIFFING_TYPES from "../config/constants/diffingTypes";

export const originalDiffData = createAction("originalDiffData");

const initialState = {
  [DIFFING_TYPES.DIFF_DATA]: {},
};

const diffDataReducer = createReducer(initialState, {
  [originalDiffData]: (state, action) => {
    const { type, data } = action.payload;

    return Object.assign(state, {
      [type]: { data },
    });
  },
});

export default diffDataReducer;

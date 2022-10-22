import { createAction, createReducer } from "@reduxjs/toolkit";
import VIEW_TYPES from "../config/constants/viewTypes";
import { changePreviousSequence } from "./sequenceReducer";

export const registerData = createAction("registerData");
export const deleteData = createAction("deleteData");

const initialState = {
  [VIEW_TYPES.ORIGINAL_FILE]: {},
  [VIEW_TYPES.COMPARABLE_FILE]: {},
  [VIEW_TYPES.MERGED_FILE]: {},
};

const pptDataReducer = createReducer(initialState, {
  [registerData]: (state, action) => {
    const { type, data, dataId } = action.payload;

    return Object.assign(state, {
      [type]: { data, dataId },
    });
  },
  [deleteData]: (state, action) => {
    return Object.assign(state, {
      [action.payload]: {},
    });
  },
  [changePreviousSequence]: (state, action) => {
    if (Object.keys(state[VIEW_TYPES.MERGED_FILE]).length) {
      return state;
    }
    if (Object.keys(state[VIEW_TYPES.COMPARABLE_FILE]).length) {
      return Object.assign(state, {
        [VIEW_TYPES.COMPARABLE_FILE]: {},
        [VIEW_TYPES.MERGED_FILE]: {},
      });
    }
    if (Object.keys(state[VIEW_TYPES.ORIGINAL_FILE]).length) {
      return Object.assign(state, initialState);
    }

    return state;
  },
});

export default pptDataReducer;

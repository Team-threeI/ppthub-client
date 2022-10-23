import { createAction, createReducer } from "@reduxjs/toolkit";
import PPT_DATA_TYPES from "../config/constants/pptDataTypes";
import { changePreviousSequence } from "./sequenceReducer";

export const registerData = createAction("registerData");
export const deleteData = createAction("deleteData");

const initialState = {
  [PPT_DATA_TYPES.ORIGINAL_FILE]: {},
  [PPT_DATA_TYPES.COMPARABLE_FILE]: {},
  [PPT_DATA_TYPES.MERGED_FILE]: {},
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
    if (Object.keys(state[PPT_DATA_TYPES.MERGED_FILE]).length) {
      return state;
    }
    if (Object.keys(state[PPT_DATA_TYPES.COMPARABLE_FILE]).length) {
      return Object.assign(state, {
        [PPT_DATA_TYPES.COMPARABLE_FILE]: {},
        [PPT_DATA_TYPES.MERGED_FILE]: {},
      });
    }
    if (Object.keys(state[PPT_DATA_TYPES.ORIGINAL_FILE]).length) {
      return Object.assign(state, initialState);
    }

    return state;
  },
});

export default pptDataReducer;

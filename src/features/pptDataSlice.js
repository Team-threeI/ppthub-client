import { createSlice } from "@reduxjs/toolkit";
import VIEW_TYPES from "../config/constants/viewTypes";

const initialState = {
  [VIEW_TYPES.ORIGINAL_FILE]: {},
  [VIEW_TYPES.COMPARABLE_FILE]: {},
  [VIEW_TYPES.MERGED_FILE]: {},
};

const pptData = createSlice({
  name: "pptData",
  initialState,
  reducers: {
    registerData: (state, action) => {
      const { type, data } = action.payload;

      return Object.assign(state, {
        [type]: data,
      });
    },
    deleteData: (state, action) => {
      return Object.assign(state, {
        [action.payload]: {},
      });
    },
  },
});

export const { registerData, deleteData } = pptData.actions;
export default pptData.reducer;

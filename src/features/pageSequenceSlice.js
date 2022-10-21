import { createSlice } from "@reduxjs/toolkit";
import PAGE_SEQUENCES from "../config/constants/pageSequences";

const pageSequenceSlice = createSlice({
  name: "pageSequence",
  initialState: PAGE_SEQUENCES.FILE_NOT_ADDED,
  reducers: {
    changeSequence: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeSequence } = pageSequenceSlice.actions;
export default pageSequenceSlice.reducer;

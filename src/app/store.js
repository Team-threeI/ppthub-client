import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import pageSequenceReducer from "../features/pageSequenceSlice";
import pptDataReducer from "../features/pptDataSlice";

const reducer = {
  pageSequence: pageSequenceReducer,
  pptData: pptDataReducer,
};

const store = configureStore({
  reducer,
  middleware: [logger],
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import sequenceReducer from "../features/sequenceReducer";
import pptDataReducer from "../features/pptDataReducer";
import diffDataReducer from "../features/diffDataReducer";

const reducer = {
  sequence: sequenceReducer,
  pptData: pptDataReducer,
  diffData: diffDataReducer,
};

const store = configureStore({
  reducer,
  middleware: [logger],
});

export default store;

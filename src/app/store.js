import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import sequenceReducer from "../features/sequenceReducer";
import pptDataReducer from "../features/pptDataReducer";

const reducer = {
  sequence: sequenceReducer,
  pptData: pptDataReducer,
};

const store = configureStore({
  reducer,
  middleware: [logger],
});

export default store;

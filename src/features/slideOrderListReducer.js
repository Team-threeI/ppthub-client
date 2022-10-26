import { createReducer } from "@reduxjs/toolkit";
import PPT_DATA_TYPES from "../config/constants/pptDataTypes";
import { registerData } from "./pptDataReducer";

const slideOrderListReducer = createReducer([], {
  [registerData]: (state, action) => {
    const { type, data } = action.payload;
    const slideIds = data.slides.map((slide) => slide.slideId);
    const slideIdsSet = new Set(slideIds);

    switch (type) {
      case PPT_DATA_TYPES.ORIGINAL_PPT_DATA:
        return Array.from(slideIds);
      case PPT_DATA_TYPES.COMPARABLE_PPT_DATA:
        return state.reduce((acc, cur, index, array) => {
          if (!slideIdsSet.has(cur)) {
            return index === array.length - 1
              ? acc.concat([cur, ...slideIds])
              : acc.concat(cur);
          }

          const slideIdsIndex = slideIds.indexOf(cur);

          return index === array.length - 1
            ? acc.concat(slideIds)
            : acc.concat(slideIds.splice(0, slideIdsIndex + 1));
        }, []);
      default:
        return state;
    }
  },
});

export default slideOrderListReducer;

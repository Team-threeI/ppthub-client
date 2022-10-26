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
        return state.reduce((orederedList, cur, index, array) => {
          if (!slideIdsSet.has(slideId)) {
            return index === array.length - 1
              ? orederedList.concat([slideId, ...slideIds])
              : orederedList.concat(slideId);
          }

          const slideIdsIndex = slideIds.indexOf(slideId);

          return index === array.length - 1
            ? orederedList.concat(slideIds)
            : orederedList.concat(slideIds.splice(0, slideIdsIndex + 1));
        }, []);
      default:
        return state;
    }
  },
});

export default slideOrderListReducer;

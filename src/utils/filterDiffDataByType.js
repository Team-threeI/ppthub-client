import DIFFING_TYPES from "../config/constants/diffingTypes";

const filterDiffDataByType = (diffingData, type) => {
  const cloneData = JSON.parse(JSON.stringify(diffingData));

  const firstFilter = Object.fromEntries(
    Object.entries(cloneData).filter(
      ([slideId]) =>
        cloneData[slideId].diff === type ||
        cloneData[slideId].diff === DIFFING_TYPES.MODIFICATION,
    ),
  );

  const finishedFilterDiffingData = Object.entries(firstFilter).map(
    (slideData) => {
      const cloneSlideData = slideData;
      if (cloneSlideData[1].diff === "modified") {
        cloneSlideData[1].items = Object.fromEntries(
          Object.entries(cloneSlideData[1].items).filter(
            ([slideItemId]) =>
              cloneSlideData[1].items[slideItemId].diff ===
                DIFFING_TYPES.MODIFICATION ||
              cloneSlideData[1].items[slideItemId].diff === type,
          ),
        );
      }
      return { [cloneSlideData[0]]: cloneSlideData[1] };
    },
  );

  return finishedFilterDiffingData;
};

export default filterDiffDataByType;

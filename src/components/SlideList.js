import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import PPT_DATA_TYPES from "../config/constants/pptDataTypes";
import DIFF_TYPES from "../config/constants/diffingTypes";
import SlideListSlideSection from "./SlideListSlideSection";

function SlideList({ fileType }) {
  const { slides, slideWidth, slideHeight } = useSelector(
    ({ pptData }) => pptData[fileType].data,
  );
  const slideDiffData = useSelector((state) => state.diffData ?? {});
  const diffByFileTypes = {
    [PPT_DATA_TYPES.ORIGINAL_PPT_DATA]: DIFF_TYPES.DELETED,
    [PPT_DATA_TYPES.COMPARABLE_PPT_DATA]: DIFF_TYPES.ADDED,
  };

  return (
    <SlideListContainer>
      {slides.map((slideData) => {
        const { slideId } = slideData;
        const slideAttribute = { ...slideData, slideWidth, slideHeight };
        const isChangedSlide =
          slideDiffData[slideId]?.diff === diffByFileTypes[fileType];

        return isChangedSlide ? (
          <SlideListSlideSection
            key={slideId}
            slideData={slideAttribute}
            fileType={fileType}
            isChangedSlide={isChangedSlide}
          />
        ) : (
          <SlideListSlideSection
            key={slideId}
            slideData={slideAttribute}
            fileType={fileType}
          />
        );
      })}
    </SlideListContainer>
  );
}

const SlideListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export default SlideList;

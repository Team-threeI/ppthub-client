import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import PPT_DATA_TYPES from "../config/constants/pptDataTypes";
import SlideListSlideSection from "./SlideListSlideSection";

function ComparedSlideList() {
  const pptDataIdMap = useSelector(({ pptData }) => {
    const {
      [PPT_DATA_TYPES.ORIGINAL_PPT_DATA]: originalPpt,
      [PPT_DATA_TYPES.COMPARABLE_PPT_DATA]: comparablePpt,
    } = pptData;

    return {
      [PPT_DATA_TYPES.ORIGINAL_PPT_DATA]: new Map(
        originalPpt.data.slides.map(({ slideId, ...slideData }) => [
          slideId,
          {
            ...slideData,
            slideId,
            slideWidth: originalPpt.data.slideWidth,
            slideHeight: originalPpt.data.slideHeight,
          },
        ]),
      ),
      [PPT_DATA_TYPES.COMPARABLE_PPT_DATA]: new Map(
        comparablePpt.data.slides.map(({ slideId, ...slideData }) => [
          slideId,
          {
            ...slideData,
            slideId,
            slideWidth: comparablePpt.data.slideWidth,
            slideHeight: comparablePpt.data.slideHeight,
          },
        ]),
      ),
    };
  });
  const sortedSlideIdList = useSelector((state) => state.slideOrderList);

  return (
    <ComparedSlideListContainer>
      {[
        PPT_DATA_TYPES.ORIGINAL_PPT_DATA,
        PPT_DATA_TYPES.COMPARABLE_PPT_DATA,
      ].map((fileType) => (
        <ComparedSlideSectionList key={fileType}>
          {sortedSlideIdList.map((slideId) =>
            pptDataIdMap[fileType].has(slideId) ? (
              <>
                <div id={`${slideId}-${fileType}`}></div>
                <SlideListSlideSection
                  key={slideId}
                  slideData={pptDataIdMap[fileType].get(slideId)}
                  fileType={fileType}
                />
              </>
            ) : (
              <>
                <div id={`${slideId}-${fileType}`}></div>
                <EmptySlideSection key={slideId} />
              </>
            ),
          )}
        </ComparedSlideSectionList>
      ))}
    </ComparedSlideListContainer>
  );
}

const ComparedSlideListContainer = styled.div`
  display: flex;
  margin: 0.5rem;
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

const ComparedSlideSectionList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const EmptySlideSection = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  margin-bottom: 0.5rem;
  flex: none;
`;

export default ComparedSlideList;

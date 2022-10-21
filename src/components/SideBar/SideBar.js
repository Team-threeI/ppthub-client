import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import SideBarSlideList from "./SideBarSlideList";
import DIFFING_TYPES from "../../config/constants/diffingTypes";
import filterDiffDataByType from "../../utils/filterDiffDataByType";

function SideBar({ diffType }) {
  const originialSlideData = useSelector(
    ({ diffData }) => diffData[diffType].data,
  );

  if (!originialSlideData) return true;

  const addedSlideData = filterDiffDataByType(
    originialSlideData,
    DIFFING_TYPES.ADDITION,
  );
  const deletedSlideData = filterDiffDataByType(
    originialSlideData,
    DIFFING_TYPES.TYPE_DELETED,
  );

  return (
    <SideBarContainer>
      <SideBarSection>
        <SideBarHeader>ADD</SideBarHeader>
        {addedSlideData.map((slideData) => (
          <SideBarSlideList
            slideData={slideData}
            key={slideData}
            type={DIFFING_TYPES.TYPE_ADDED}
          />
        ))}
      </SideBarSection>
      <SideBarSection>
        <SideBarHeader>Undo</SideBarHeader>
        {deletedSlideData.map((slideData) => (
          <SideBarSlideList
            slideData={slideData}
            key={slideData}
            type={DIFFING_TYPES.TYPE_DELETED}
          />
        ))}
      </SideBarSection>
    </SideBarContainer>
  );
}

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  height: 100%;
`;

const SideBarSection = styled.section`
  width: 100%;
  height: 100%;
  padding-left: 1vw;
  overflow: auto;
`;

const SideBarHeader = styled.header`
  padding-bottom: 1vh;
  color: red;
  font-family: "Lucida Sans", sans-serif;
`;

export default SideBar;

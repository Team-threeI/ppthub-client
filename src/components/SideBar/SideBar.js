import React from "react";
import styled from "styled-components";
import SideBarSlideList from "./SideBarSlideList";

import DIFFING_TYPES from "../../config/constants/diffingTypes";
import filterDiffDataByType from "../../utils/filterDiffDataByType";

function SideBar() {
  const addedSlideData = filterDiffDataByType(diffData, DIFFING_TYPES.ADDITION);
  const deletedSlideData = filterDiffDataByType(diffData, DIFFING_TYPES.DELE);

  return (
    <SideBarContainer>
      <SideBarSection>
        <SideBarHeader>ADD</SideBarHeader>
        {addedSlideData.map((slideData) => (
          <SideBarSlideList
            slideData={slideData}
            key={slideData}
            type={DIFFING_TYPES.ADDITION}
          />
        ))}
      </SideBarSection>
      <SideBarSection>
        <SideBarHeader>Undo</SideBarHeader>
        {deletedSlideData.map((slideData) => (
          <SideBarSlideList
            slideData={slideData}
            key={slideData}
            type={DIFFING_TYPES.DELE}
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

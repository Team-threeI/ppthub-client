import React from "react";
import styled from "styled-components";
import SideBarSlideList from "./SideBarSlideList";

function SideBar() {
  const diffSlideIdList = Object.keys(mockDiffData);
  const addedData = diffSlideIdList.filter(
    (slideId) =>
      mockDiffData[slideId].diff === "added" ||
      mockDiffData[slideId].diff === "modified",
  );
  const deletedData = diffSlideIdList.filter(
    (slideId) =>
      mockDiffData[slideId].diff === "deleted" ||
      mockDiffData[slideId].diff === "modified",
  );
  const typeAdded = "added";
  const typeDeleted = "deleted";

  return (
    <SideBarContainer>
      <SideBarSection>
        <SideBarHeader>ADD</SideBarHeader>
        {addedData.map((slideId) => (
          <SideBarSlideList
            slideData={mockDiffData[slideId]}
            title={slideId}
            key={slideId}
            type={typeAdded}
          />
        ))}
      </SideBarSection>
      <SideBarSection>
        <SideBarHeader>Undo</SideBarHeader>
        {deletedData.map((slideId) => (
          <SideBarSlideList
            slideData={mockDiffData[slideId]}
            title={slideId}
            key={slideId}
            type={typeDeleted}
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

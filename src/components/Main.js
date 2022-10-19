import React, { useState } from "react";
import styled from "styled-components";

import SideBar from "./SideBar/SideBar";
import SlideViewer from "./SlideViewer/SlideViewer";
import FileAttachment from "./SlideViewer/FileAttachment";

function Main() {
  const [originPpt, setOriginPpt] = useState();
  const [comparePpt, setComparePpt] = useState();

  return (
    <MainContainer>
      {originPpt ? (
        <SlideViewer pptData={originPpt} />
      ) : (
        <FileAttachment onPptAdded={setOriginPpt} />
      )}
      {comparePpt ? (
        <SlideViewer pptData={comparePpt} />
      ) : (
        <FileAttachment onPptAdded={setComparePpt} />
      )}
      <SideBar />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export default Main;

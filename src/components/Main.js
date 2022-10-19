import React, { useState } from "react";
import styled from "styled-components";

import SideBar from "./SideBar/SideBar";
import SlideViewer from "./SlideViewer/SlideViewer";
import FileAttachment from "./SlideViewer/FileAttachment";

function Main() {
  const [leftPpt, setLeftPpt] = useState([]);
  const [rightPpt, setRightPpt] = useState([]);

  return (
    <MainContainer>
      {leftPpt.length ? (
        <SlideViewer pptData={leftPpt} />
      ) : (
        <FileAttachment onPptData={setLeftPpt} />
      )}
      {rightPpt.length ? (
        <SlideViewer pptData={rightPpt} />
      ) : (
        <FileAttachment onPptData={setRightPpt} />
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

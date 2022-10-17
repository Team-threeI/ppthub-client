import React from "react";
import styled from "styled-components";

import SideBar from "./SideBar/SideBar";
import SlideViewer from "./SlideViewer/SlideViewer";

function Main() {
  return (
    <MainContainer>
      <SlideViewer />
      <SlideViewer />
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

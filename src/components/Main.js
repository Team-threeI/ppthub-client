import React from "react";
import styled from "styled-components";
import SlideViewer from "./shared/SlideViewer/SlideViewer";

function Main() {
  return (
    <MainContainer>
      <SlideViewer />
      <SlideViewer />
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

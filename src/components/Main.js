import React from "react";
import styled from "styled-components";
import SlideView from "./shared/SlideView/SlideView";

function Main() {
  return (
    <MainContainer>
      <SlideView />
      <SlideView />
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

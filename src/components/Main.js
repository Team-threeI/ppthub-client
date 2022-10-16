import React from "react";
import styled from "styled-components";
import SlideList from "./shared/SlideView/SlideView";

function Main() {
  return (
    <MainContainer>
      <SlideList />
      <SlideList />
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

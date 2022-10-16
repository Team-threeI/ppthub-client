import React from "react";
import styled from "styled-components";
import Slide from "./Slide";

function SlideList() {
  return (
    <SlideListContainer>
      <Slide />
      <Slide />
      <Slide />
      <Slide />
      <Slide />
    </SlideListContainer>
  );
}

const SlideListContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export default SlideList;

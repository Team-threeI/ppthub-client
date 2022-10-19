import React from "react";
import styled from "styled-components";
import Slide from "./Slide";

function SlideList({ pptData }) {
  return (
    <SlideListContainer>
      {pptData.map((slideData) => (
        <Slide key={slideData.slideId} slideData={slideData} />
      ))}
    </SlideListContainer>
  );
}

const SlideListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export default SlideList;

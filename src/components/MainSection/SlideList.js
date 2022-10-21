import React from "react";
import styled from "styled-components";
import Slide from "./Slide";

function SlideList({ pptData }) {
  const { slideWidth, slideHeight, slides } = pptData;

  return (
    <SlideListContainer>
      {slides.map((slideData) => (
        <Slide
          key={slideData.slideId}
          slideData={slideData}
          slideWidth={slideWidth}
          slideHeight={slideHeight}
        />
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

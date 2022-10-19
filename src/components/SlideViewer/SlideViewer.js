import React from "react";
import styled from "styled-components";

import SlideList from "./SlideList";

function SlideViewer({ pptData }) {
  return (
    <SlideViewerContainer>
      <SlideList pptData={pptData} />
    </SlideViewerContainer>
  );
}

const SlideViewerContainer = styled.section`
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

export default SlideViewer;

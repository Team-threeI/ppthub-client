import React from "react";
import styled from "styled-components";

import SlideList from "./SlideList";
import FileAttachment from "./FileAttachment";

function SlideViewer() {
  return (
    <SlideViewerContainer>
      <FileAttachment />
    </SlideViewerContainer>
  );
}

const SlideViewerContainer = styled.section`
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

export default SlideViewer;

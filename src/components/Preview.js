import React from "react";
import styled from "styled-components";
import SlideViewer from "./shared/SlideViewer/SlideViewer";

function Preview() {
  return (
    <PreviewContainer>
      <SlideViewer />
    </PreviewContainer>
  );
}

const PreviewContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0 10vw;
  overflow: auto;
`;

export default Preview;

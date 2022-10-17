import React, { useEffect } from "react";
import styled from "styled-components";
import SlideViewer from "./shared/SlideViewer/SlideViewer";

function Preview({ onButtonType }) {
  useEffect(() => {
    onButtonType("preview");
  }, [onButtonType]);

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
  padding: 0 10vh;
  overflow: auto;
`;

export default Preview;

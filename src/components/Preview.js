import React from "react";

import styled from "styled-components";

import PPT_DATA_TYPES from "../config/constants/pptDataTypes";
import SlideList from "./SlideList";

function Preview() {
  return (
    <PreviewContainer>
      <SlideList viewType={PPT_DATA_TYPES.MERGED_PPT_DATA} />
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

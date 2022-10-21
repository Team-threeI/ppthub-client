import React from "react";

import styled from "styled-components";

import MainSection from "./MainSection/MainSection";
import VIEW_TYPES from "../config/constants/viewTypes";

function Preview() {
  return (
    <PreviewContainer>
      <MainSection viewType={VIEW_TYPES.MERGED_FILE} />
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

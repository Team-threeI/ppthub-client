import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import FileAttachment from "./FileAttachment";
import SlideList from "./SlideList";

function MainSection({ viewType }) {
  const viewData = useSelector(({ pptData }) => pptData[viewType]);

  if (!Object.keys(viewData).length) {
    return <FileAttachment fileType={viewType} />;
  }

  return (
    <MainSectionContainer>
      <SlideList pptData={viewData.data} />
    </MainSectionContainer>
  );
}

const MainSectionContainer = styled.section`
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

export default MainSection;

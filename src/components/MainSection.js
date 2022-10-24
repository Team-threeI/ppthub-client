import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import FileAttachment from "./FileAttachment";
import SlideList from "./SlideList";

function MainSection({ fileType }) {
  const isEmpty = useSelector(
    ({ pptData }) => !Object.keys(pptData[fileType] ?? {}).length,
  );

  if (isEmpty) {
    return <FileAttachment fileType={fileType} />;
  }

  return (
    <MainSectionContainer>
      <SlideList fileType={fileType} />
    </MainSectionContainer>
  );
}

const MainSectionContainer = styled.section`
  width: 100%;
  height: 100%;
  padding: 0.5rem;
`;

export default MainSection;

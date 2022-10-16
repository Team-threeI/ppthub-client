import React from "react";
import styled from "styled-components";
import SlideList from "./SlideList";

function SlideView() {
  return (
    <SlideViewContainer>
      <SlideList />
    </SlideViewContainer>
  );
}

const SlideViewContainer = styled.section`
  width: 100%;
  padding: 1rem;
  overflow: auto;
`;

export default SlideView;

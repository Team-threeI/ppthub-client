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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  overflow: auto;
`;

export default SlideView;

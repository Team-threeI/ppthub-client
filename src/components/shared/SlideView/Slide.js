import React from "react";
import styled from "styled-components";

function Slide() {
  return <SlideContainer>Slide</SlideContainer>;
}

const SlideContainer = styled.section`
  width: 100%;
  margin-bottom: 0.5rem;
  border: 1px solid black;
  background-color: red;
  aspect-ratio: 1280 / 720;
  flex: none;
`;

export default Slide;

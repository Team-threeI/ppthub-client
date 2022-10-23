import React from "react";
import styled from "styled-components";

function Slide() {
  return (
    <SlideContainer>
      {items.map((item) => (
        <Item key={item.id} itemData={item}>
          {item.content.value}
        </Item>
      ))}
    </SlideContainer>
  );
}

const SlideContainer = styled.section`
  position: relative;
  width: 100%;
  margin-bottom: 0.5rem;
  border: 1px solid black;
  background-color: #fff;
  aspect-ratio: 1280 / 720;
  flex: none;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default Slide;

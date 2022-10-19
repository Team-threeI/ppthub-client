import React from "react";
import styled from "styled-components";

function Slide({ slideData, slideWidth, slideHeight }) {
  const textItems = slideData.items.filter((item) => item.type === "text");
  const imageItems = slideData.items.filter((item) => item.type === "image");

  return (
    <SlideContainer>
      {textItems.map((item) => (
        <TextItem
          key={item.id}
          attribute={item}
          slideWidth={slideWidth}
          slideHeight={slideHeight}
        >
          {item.content.value}
        </TextItem>
      ))}
      {imageItems.map((item) => (
        <ImageItem
          key={item.id}
          src={item.content.src}
          attribute={item}
          slideWidth={slideWidth}
          slideHeight={slideHeight}
        />
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

const TextItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${({ attribute, slideHeight }) =>
    `${(attribute.y / slideHeight) * 100}%`};
  left: ${({ attribute, slideWidth }) =>
    `${(attribute.x / slideWidth) * 100}%`};
  width: ${({ attribute, slideWidth }) =>
    `${(attribute.width / slideWidth) * 100}%`};
  height: ${({ attribute, slideHeight }) =>
    `${(attribute.height / slideHeight) * 100}%`};
  background-color: ${({ attribute }) =>
    `${attribute.content.backgroundColor}`};
  color: ${({ attribute }) => attribute.content.fontColor};
  font-size: ${({ attribute }) => `${attribute.content.size}px`};
  font-family: ${({ attribute }) => attribute.content.font};
  text-decoration: ${({ attribute }) =>
    attribute.content.isUnderlined ? "underline" : "none"};
  font-weight: ${({ attribute }) => (attribute.content.isBold ? 700 : 500)};
  font-style: ${({ attribute }) =>
    attribute.content.isItalic ? "italic" : "normal"};
  z-index: ${({ attribute }) => attribute.order};
`;

const ImageItem = styled.img`
  position: absolute;
  top: ${({ attribute, slideHeight }) =>
    `${(attribute.y / slideHeight) * 100}%`};
  left: ${({ attribute, slideWidth }) =>
    `${(attribute.x / slideWidth) * 100}%`};
  width: ${({ attribute, slideWidth }) =>
    `${(attribute.width / slideWidth) * 100}%`};
  height: ${({ attribute, slideHeight }) =>
    `${(attribute.height / slideHeight) * 100}%`};
  z-index: ${({ attribute }) => attribute.order};
`;

export default Slide;

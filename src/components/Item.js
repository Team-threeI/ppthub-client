import React from "react";
import styled from "styled-components";

function Item({ itemData }) {
  switch (itemData.type) {
    case "text":
      return (
        <TextItem key={item.id} attribute={item}>
          {item.content.value}
        </TextItem>
      );
    case "image":
      return (
        <ImageItem key={item.id} src={item.content.src} attribute={item} />
      );
    default:
      return null;
  }
}

const TextItem = styled.div`
  display: flex;
  justify-content: left;
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

export default Item;

import React from "react";
import styled from "styled-components";

function Slide({ slideData }) {
  const slideItems = slideData.items;
  const textItems = slideItems.filter((item) => item.type === "text");
  const imgItems = slideItems.filter((item) => item.type === "image");

  return (
    <SlideContainer>
      {textItems.map((item) => {
        return (
          <TextWrapper key={item.id} props={item}>
            {item.content.value}
          </TextWrapper>
        );
      })}
      {imgItems.map((item) => {
        return (
          <ImageWrapper key={item.id} props={item} src={item.content.src} />
        );
      })}
    </SlideContainer>
  );
}

const SlideContainer = styled.section`
  position: relative;
  width: 100%;
  margin-bottom: 0.5rem;
  border: 1px solid black;
  background-color: white;
  aspect-ratio: 1280 / 720;
  flex: none;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${({ props }) => `${(props.y / 720) * 100}%`};
  left: ${({ props }) => `${(props.x / 1280) * 100}%`};
  width: ${({ props }) => `${(props.width / 1280) * 100}%`};
  height: ${({ props }) => `${(props.height / 720) * 100}%`};
  background-color: ${({ props }) => `${props.content.backgroundColor}`};
  color: ${({ props }) => props.content.fontColor};
  font-size: ${({ props }) => `${props.content.size}px`};
  font-family: ${({ props }) => props.content.font};
  text-decoration: ${({ props }) =>
    props.content.isUnderlined ? "underline" : "none"};
  font-weight: ${({ props }) => (props.content.isBold ? 700 : 500)};
  font-style: ${({ props }) => (props.content.isItalic ? "italic" : "normal")};
  z-index: ${({ props }) => props.order};
`;

const ImageWrapper = styled.img`
  position: absolute;
  bottom: ${({ props }) => `${(props.y / 720) * 100}%`};
  left: ${({ props }) => `${(props.x / 1280) * 100}%`};
  width: ${({ props }) => `${(props.width / 1280) * 100}%`};
  height: ${({ props }) => `${(props.height / 720) * 100}%`};
  z-index: ${({ props }) => props.order};
`;

export default Slide;

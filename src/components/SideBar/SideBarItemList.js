import React from "react";
import styled from "styled-components";

function SideBarItemList({ slideData }) {
  const slideContents = Object.keys(Object.values(slideData)[0].items);

  return (
    <SideBarItemListContainer>
      {slideContents.map((content) => (
        <SlideBarItemList>
          <SideBarItemListLabel key={content}>
            {content}
            <CheckInput type="checkbox" />
          </SideBarItemListLabel>
        </SlideBarItemList>
      ))}
    </SideBarItemListContainer>
  );
}

const SideBarItemListContainer = styled.li`
  padding-top: 0.31vh;
  list-style: none;
`;

const SlideBarItemList = styled.li``;

const SideBarItemListLabel = styled.label`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding-right: 3vw;
  padding-bottom: 0.3vh;
  cursor: pointer;
`;

const CheckInput = styled.input``;

export default SideBarItemList;

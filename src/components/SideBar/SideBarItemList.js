import React from "react";
import styled from "styled-components";

function SideBarItemList({ modifiedData, type }) {
  const modifiedIdList = Object.keys(modifiedData.items);
  let finialTitles = [];

  if (type === "added") {
    finialTitles = modifiedIdList.filter(
      (title) =>
        modifiedData.items[title].diff === "added" ||
        modifiedData.items[title].diff === "modified",
    );
  } else {
    finialTitles = modifiedIdList.filter(
      (title) =>
        modifiedData.items[title].diff === "deleted" ||
        modifiedData.items[title].diff === "modified",
    );
  }

  return (
    <SideBarItemListContainer>
      {finialTitles.map((title) => (
        <SideBarItemListLabel key={title}>
          {title}
          <CheckInput type="checkbox" />
        </SideBarItemListLabel>
      ))}
    </SideBarItemListContainer>
  );
}

const SideBarItemListContainer = styled.ul`
  padding-top: 0.31vh;
  list-style: none;
`;

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

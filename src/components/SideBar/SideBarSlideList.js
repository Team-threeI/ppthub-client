import React from "react";
import styled from "styled-components";
import SideBarItemList from "./SideBarItemList";

function SideBarSlideList({ slideData, title, type }) {
  return (
    <SideBarSlideListContainer>
      {slideData.diff === type ? (
        <SideBarListHeader>
          <SideBarSlideListLabel>
            {title}
            <CheckInput type="checkbox" />
          </SideBarSlideListLabel>
        </SideBarListHeader>
      ) : (
        <>
          <SideBarListHeader>{title}</SideBarListHeader>
          <SideBarItem>
            <SideBarItemList modifiedData={slideData} type={type} />
          </SideBarItem>
        </>
      )}
    </SideBarSlideListContainer>
  );
}

const SideBarSlideListContainer = styled.div``;

const SideBarListHeader = styled.header`
  font-size: 0.9rem;
  font-weight: 700;
`;

const SideBarItem = styled.ul``;

const SideBarSlideListLabel = styled.label`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding-right: 3vw;
  cursor: pointer;
`;

const CheckInput = styled.input``;

export default SideBarSlideList;
